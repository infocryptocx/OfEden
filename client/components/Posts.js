import React, { useEffect } from "react";
import Link from "next/link";
import { client } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Posts({ posts }) {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <div className="grid grid-cols-4 gap-4 my-10 lg:grid-cols-2 xs:grid-cols-1">
        {posts &&
          posts.map((post, index) => (
            <div
              className="w-10/12 mx-2 overflow-hidden rounded-lg shadow-md bg-black xs:mx-auto"
              key={index}
            >
              <img
                className="object-cover w-full h-64"
                src={urlFor(post.mainImage).url()}
                alt="Article"
              />

              <div className="p-6">
                <div>
                  <h2 className="text-red-600 font-bold my-2">
                    {post.categories[0]}
                  </h2>
                  <Link href={`/post/${post.slug.current}`}>
                    <a className="block mt-2 text-2xl font-semibold transition-colors duration-200 transform text-white hover:text-gray-600 hover:underline">
                      {post.title}
                    </a>
                  </Link>

                  {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {post.body.slice(0, 20)}
                </p> */}
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img
                        className="object-cover w-8 h-8 rounded-full"
                        src={urlFor(post.authorImage).url()}
                        alt="Article"
                      />
                      <p className="mx-2 font-semibold  text-gray-200">
                        {post.authorName}
                      </p>
                    </div>
                    <span className="text-md text-gray-300">
                      {moment(post.publishedAt).format("L")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mb-5">
        <Link href="/allposts">
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
            More Posts
          </button>
        </Link>
      </div>
    </div>
  );
}
