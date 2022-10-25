import { client } from "../lib/client";
import groq from "groq";
import Posts from "../components/Posts";
import MainLayout from "../components/MainLayout";
import MiddleSection from "../components/MiddleSection";
import BottomSection from "../components/BottomSection";
import HeroSection from "../components/HeroSection";
import RecentAudios from "../components/RecentAudio";
import RecentVideos from "../components/RecentVideos";
import { useRouter } from "next/router";
import Link from "next/link";
import { CryptoWorldContext } from "../context/context";
import { useContext } from "react";

export const getStaticProps = async () => {
  const query = groq` {"posts": *[_type == 'post'] | order(publishedAt desc)[0..3] {title,mainImage,publishedAt, slug, body,
    'categories': categories[]->title,
    'authorName': author->name,
    'authorSlug': author->slug,
    'authorImage': author->image,
  }}`;

  const queryTwo = groq`{"audios": *[_type == 'audio'] | order(publishedAt desc)[0..3]{title,audio,description,publishedAt,
    'categories': categories[]->title,
    'authorName': author->name,
    'authorSlug': author->slug,
    'authorImage': author->image,
   
  }}`;

  const queryThree = groq`{"videos": *[_type == 'video'] | order(publishedAt desc)[0..3]{_id,title,description,publishedAt,
    'categories': categories[]->title,
    'authorName': author->name,
    'authorSlug': author->slug,
    'authorImage': author->image,
    videoWithDetatils
   
  }}`;

  const data = await client.fetch(query);
  const data2 = await client.fetch(queryTwo);
  const data3 = await client.fetch(queryThree);

  return {
    props: {
      posts: data.posts,
      audios: data2.audios,
      videos: data3.videos,
    },
  };
};

const Home = ({ posts, audios, videos }) => {
  const { nftHolder } = useContext(CryptoWorldContext);

  if (!nftHolder)
    return (
      <MainLayout>
        <div className="min-h-screen">
          <HeroSection />
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="min-h-screen">
        <HeroSection />
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 mx-5 my-10 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
            <Link href="/allaudios">
              <a>
                <img
                  className="w-full h-full"
                  src="/cw1.JPG"
                  alt="audioChain"
                />
              </a>
            </Link>

            {/* <Link href="/allvideos">
              <a>
                <img
                  className="w-full h-full"
                  src="/cw2.JPG"
                  alt="videoChain"
                />
              </a>
            </Link> */}
            <Link href="/allposts">
              <a>
                <img className="w-full h-full" src="/cw3.JPG" alt="DoxChain" />
              </a>
            </Link>
          </div>
        </div>
        <div className="my-8">
          <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-white">
            Latest Posts
          </h1>
        </div>

        <Posts posts={posts} />
        <hr className="h-px mx-5 my-6 border-none dark:bg-black" />
        <div className="my-10">
          <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-white">
            Latest Audios
          </h1>
        </div>
        <RecentAudios audios={audios} />
        <hr className="h-px mx-5 my-6 border-none dark:bg-black" />
        {/* <div className="my-10">
          <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-white">
            Latest Videos
          </h1>
        </div>
        <RecentVideos videos={videos} /> */}
        {/* <MiddleSection /> */}
        <BottomSection />
      </div>
    </MainLayout>
  );
};

export default Home;
