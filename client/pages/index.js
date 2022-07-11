import { client } from "../lib/client";
import groq from "groq";
import Posts from "../components/Posts";
import MainLayout from "../components/MainLayout";
import MiddleSection from "../components/MiddleSection";
import BottomSection from "../components/BottomSection";
import HeroSection from "../components/HeroSection";
import RecentAudios from "../components/RecentAudio";

export const getStaticProps = async () => {
  const query = groq` {"posts": *[_type == 'post'] | order(publishedAt desc)[0..3] {title,mainImage,publishedAt, slug, body,
    'categories': categories[]->title,
    'authorName': author->name,
    'authorSlug': author->slug,
    'authorImage': author->image,
  }}`;

  const queryTwo = groq`{"audios": *[_type == 'audio']{title,audio,description,publishedAt,
    'categories': categories[]->title,
    'authorName': author->name,
    'authorSlug': author->slug,
    'authorImage': author->image,
   
  }}`;

  const data = await client.fetch(query);
  const data2 = await client.fetch(queryTwo);

  return {
    props: {
      posts: data.posts,
      audios: data2.audios,
    },
  };
};

const index = ({ posts, audios }) => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <HeroSection />
        <div className="my-8">
          <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-white">
            Latest Chains
          </h1>
        </div>

        <Posts posts={posts} />
        <hr className="h-px mx-5 my-6 border-none dark:bg-black" />
        <div className="my-10">
          <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-white">
            Latest Convos
          </h1>
        </div>
        <RecentAudios audios={audios} />
        <MiddleSection />
        <BottomSection />
      </div>
    </MainLayout>
  );
};

export default index;
