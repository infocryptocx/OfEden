import React from "react";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import MainLayout from "../../components/MainLayout";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost({ post }) {
  const router = useRouter();

  console.log(post);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!post) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }
  return (
    <MainLayout>
      <div className="p-10">
        <div className="max-w-screen-2xl mx-auto ">
          <div className="px-4 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-100 py-4">
              {post.title}
            </h1>

            <div className="flex space-x-5 my-2 text-sm text-zinc-200">
              <span className="text-red-500">{post.author}</span>
              <span>{new Date(post.publishedAt).toDateString()}</span>
            </div>
            <Image
              width={800}
              height={500}
              src={urlFor(post.mainImage).url()}
              alt="postimage"
            />
            <div className="prose max-w-2xl my-2 text-white">
              <BlockContent blocks={post.body} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const query = groq`*[_type == 'post' && slug.current == '${slug}'][0]{
    ...,
    'author': author->name
    }`;

  const data = await client.fetch(query);
  console.log(data);

  return {
    revalidate: 60 * 60 * 24,
    props: {
      post: data,
    },
  };
}
