// import React, { useState, useEffect } from "react";
// import UserCard from "../components/UserCard";
// import axios from "axios";
// import MainLayout from "../components/MainLayout";

// const Members = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_URL}/getUsers`
//       );
//       const data = response.data;
//       setUsers(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <MainLayout>
//       <div className="min-h-screen">
//         <div className="flex flex-col my-10">
//           <h1 className="text-3xl text-center font-semibold capitalize lg:text-4xl text-zinc-300">
//             All Members
//           </h1>

//           <div className="mt-2 flex justify-center">
//             <span className="inline-block w-1 h-1 mr-1 rounded-full bg-red-900"></span>
//             <span className="inline-block w-3 h-1 mr-1 rounded-full bg-red-900"></span>
//             <span className="inline-block w-40 h-1 rounded-full bg-red-900"></span>
//             <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-900"></span>
//             <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-900"></span>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="pt-4 mx-2 grid grid-cols-3 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//             {users.map((user, index) => (
//               <UserCard
//                 key={index}
//                 id={user.walletAddress}
//                 avatar={user.avatar}
//                 name={user.name}
//                 bio={user.bio}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Members;

import React from "react";
import MainLayout from "../components/MainLayout";

const unauthorized = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-white text-5xl uppercase my-2 font-bold">
          Unauthorized
        </p>
      </div>
    </MainLayout>
  );
};

export default unauthorized;
