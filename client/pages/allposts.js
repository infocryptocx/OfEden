import React, { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import MainLayout from "../components/MainLayout";
import groq from "groq";
import moment from "moment";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export const getStaticProps = async () => {
  const query = groq` {"posts": *[_type == 'post'] | order(publishedAt desc) {title,mainImage, publishedAt, slug, body,
      'categories': categories[]->title,
      'authorName': author->name,
      'authorSlug': author->slug,
      'authorImage': author->image,
    }}`;

  const data = await client.fetch(query);

  return {
    props: {
      posts: data.posts,
    },
  };
};

export default function AllPosts({ posts }) {
  const [title, setTitle] = useState("");

  // the search result
  const [foundTitle, setFoundTitle] = useState(posts);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = posts.filter((post) => {
        return post.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundTitle(results);
    } else {
      setFoundTitle(posts);
      // If the text field is empty, show all users
    }

    setTitle(keyword);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="relative my-5 mx-10">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            className="w-1/2 py-2 pl-10 pr-4 text-zinc-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
            placeholder="Search"
            type="search"
            value={title}
            onChange={filter}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 my-10">
          {foundTitle && foundTitle.length > 0 ? (
            foundTitle.map((post, index) => (
              <div
                className="w-1/2 mx-auto overflow-hidden rounded-lg shadow-md bg-black"
                key={index}
              >
                <img
                  className="object-cover w-full h-64"
                  src={urlFor(post.mainImage).url()}
                  alt="Article"
                />

                <div className="p-6">
                  <div>
                    <span className="text-xs font-medium text-red-600 uppercase dark:text-red-400">
                      {post.categories[0]}
                    </span>
                    <Link href={`post/${post.slug.current}`}>
                      <a className="block mt-2 text-2xl font-semibold transition-colors duration-200 transform text-white hover:text-gray-600 hover:underline">
                        {post.title}
                      </a>
                    </Link>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          className="object-cover w-8 h-8 rounded-full"
                          src={urlFor(post.authorImage).url()}
                          alt="Article"
                        />
                        <p className="mx-2 font-semibold text-white">
                          {post.authorName}
                        </p>
                        <p className="mx-1 text-white dark:text-gray-300">
                          {moment(post.publishedAt).format("L")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center">
              <h1 className="text-3xl text-white font-bold">
                No results found
              </h1>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
