// import React, { useState } from "react";
// import { client } from "../lib/client";
// import groq from "groq";
// import MainLayout from "../components/MainLayout";
// import imageUrlBuilder from "@sanity/image-url";
// import MuxPlayer from "@mux/mux-player-react";
// import moment from "moment";

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

// export const getStaticProps = async () => {
//   const query = groq`{"videos": *[_type == 'video']{title,audio,description,publishedAt,
//       'categories': categories[]->title,
//       'authorName': author->name,
//       'authorSlug': author->slug,
//       'authorImage': author->image,
//     }}`;

//   const data = await client.fetch(query);

//   return {
//     props: {
//       videos: data.videos,
//     },
//   };
// };

// const AllVideos = ({ videos }) => {
//   const [title, setTitle] = useState("");

//   // the search result
//   const [foundTitle, setFoundTitle] = useState(videos);

//   const filter = (e) => {
//     const keyword = e.target.value;

//     if (keyword !== "") {
//       const results = videos.filter((video) => {
//         return video.title.toLowerCase().startsWith(keyword.toLowerCase());
//         // Use the toLowerCase() method to make it case-insensitive
//       });
//       setFoundTitle(results);
//     } else {
//       setFoundTitle(audios);
//       // If the text field is empty, show all users
//     }

//     setTitle(keyword);
//   };

//   return (
//     <MainLayout>
//       <div className="min-h-screen">
//         <div className="relative my-5 mx-10">
//           <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <svg
//               className="w-5 h-5 text-zinc-400"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//             </svg>
//           </span>

//           <input
//             className="w-1/2 py-2 pl-10 pr-4 text-zinc-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
//             placeholder="Search"
//             type="search"
//             value={title}
//             onChange={filter}
//           />
//         </div>
//         <div className="grid grid-cols-1 gap-4 my-10">
//           {foundTitle && foundTitle.length > 0 ? (
//             foundTitle.map((video, index) => (
//               // {audios && audios.map((audio) => (
//               <div
//                 className="bg-black w-1/2 mx-auto px-5 py-4 rounded-lg"
//                 key={index}
//               >
//                 <h2 className="text-white text-xl font-bold">{video.title}</h2>
//                 <h2 className="text-red-600 font-bold my-2">
//                   {video.categories[0]}
//                 </h2>

//                 <MuxPlayer
//                   streamType="on-demand"
//                   playbackId="{PLAYBACK_ID}"
//                   // metadata={{
//                   //   video_id: "video-id-54321",
//                   //   video_title: "Test video title",
//                   //   viewer_user_id: "user-id-007",
//                   // }}
//                 />
//                 <div className="mt-4">
//                   <div className="flex items-center">
//                     <div className="flex items-center">
//                       <img
//                         className="object-cover w-8 h-8 rounded-full"
//                         src={urlFor(video.authorImage).url()}
//                         alt="Article"
//                       />
//                       <p className="mx-2 font-semibold text-zinc-300">
//                         {video.authorName}
//                       </p>
//                       <p className="mx-1 text-white dark:text-zinc-300">
//                         {moment(video.publishedAt).format("L")}
//                       </p>
//                     </div>
//                   </div>
//                   <h2 className="text-white text-sm font-semibold my-3">
//                     {video.description}
//                   </h2>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="flex justify-center">
//               <h1 className="text-3xl text-white font-bold">
//                 No results found
//               </h1>
//             </div>
//           )}
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default AllVideos;

import React from "react";
import MainLayout from "../components/MainLayout";

const AllVideos = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-white text-5xl uppercase my-2 font-bold">
          Coming Soon
        </p>
      </div>
    </MainLayout>
  );
};

export default AllVideos;
