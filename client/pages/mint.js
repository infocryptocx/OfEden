// import Head from "next/head";
// import React, { useState, useEffect, useContext } from "react";
// import MainLayout from "../components/MainLayout";
// import MintingWidget from "../components/MintingWidget";

// const mint = () => {
//   const [mintAmount, setMintAmount] = useState(1);
//   const [maxMintAmount] = useState(9);
//   const [totalEth, setTotalEth] = useState(0.0);
//   const [status, setStatus] = useState(false);

//   useEffect(() => {
//     setStatus(isConnected);
//   }, [isConnected]);

//   const decrementMintAmount = () => {
//     let newMintAmount = mintAmount - 1;
//     if (newMintAmount < 1) {
//       newMintAmount = 1;
//     }
//     setMintAmount(newMintAmount);
//   };

//   const incrementMintAmount = () => {
//     let newMintAmount = mintAmount + 1;
//     if (newMintAmount > maxMintAmount) {
//       newMintAmount = maxMintAmount;
//     }
//     setMintAmount(newMintAmount);
//   };

//   return (
//     <MainLayout>
//       <div className=" flex items-center bg-gray-100">
//         <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

//         <div className="p-8 sm:p-16 lg:p-24">
//           <h2 className="text-2xl font-Roboto sm:text-3xl">
//             Of Eden Mint Page
//           </h2>

//           <p className="mt-4 font-Raleway text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             Malesuada fames ac turpis egestas. Nulla facilisi etiam dignissim
//             diam quis enim lobortis. Ultricies integer quis auctor elit sed
//             vulputate mi sit amet. Velit euismod in pellentesque massa placerat
//             duis ultricies.
//           </p>

//           {status ? (
//             <MintingWidget
//               incrementMintAmount={incrementMintAmount}
//               mintAmount={mintAmount}
//               decrementMintAmount={decrementMintAmount}
//               totalEth={totalEth}
//               setTotalEth={setTotalEth}
//             />
//           ) : (
//             <div className="flex my-5">
//               <span className="font-Roboto text-2xl text-center text-zinc-900">
//                 Please connect your wallet!
//               </span>
//             </div>
//           )}
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default mint;

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
