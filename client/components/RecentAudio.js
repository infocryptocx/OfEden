import React, { useState, useEffect } from "react";
import { client } from "../lib/client";
import groq from "groq";
import MainLayout from "../components/MainLayout";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ReactAudioPlayer from "react-audio-player";
import imageUrlBuilder from "@sanity/image-url";
import { getFileAsset } from "@sanity/asset-utils";
import Link from "next/link";
import moment from "moment";
import axios from "axios";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export const getStaticProps = async () => {
  const query = groq`{"audios": *[_type == 'audio']{title,audio,description,publishedAt,
      'categories': categories[]->title,
      'authorName': author->name,
      'authorSlug': author->slug,
      'authorImage': author->image,
    }}`;

  const data = await client.fetch(query);

  return {
    props: {
      audios: data.audios,
    },
  };
};

export default function RecentAudios({ audios }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-4 my-10 mx-4 lg:grid-cols-2 xs:grid-cols-1">
        {audios &&
          audios.map((audio, index) => (
            <div
              className="bg-black w-full mx-auto px-5 py-4 rounded-lg"
              key={index}
            >
              <h2 className="text-white text-xl font-bold">{audio.title}</h2>
              <h2 className="text-red-600 font-bold my-2">
                {audio.categories[0]}
              </h2>

              <ReactAudioPlayer
                src={getFileAsset(audio.audio, client.config()).url}
                controlsList="nodownload"
              />
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src={urlFor(audio.authorImage).url()}
                      alt="Article"
                    />
                    <p className="mx-2 font-semibold text-zinc-300">
                      {audio.authorName}
                    </p>
                    <p className="mx-1 text-white dark:text-zinc-300">
                      {moment(audio.publishedAt).format("L")}
                    </p>
                  </div>
                </div>
                <h2 className="text-white text-sm font-semibold my-3">
                  {audio.description}
                </h2>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mb-5">
        <Link href="/allaudios">
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
            More Audios
          </button>
        </Link>
      </div>
    </div>
  );
}
