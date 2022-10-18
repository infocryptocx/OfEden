<<<<<<< HEAD
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
=======
import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { ethers } from "ethers";
import Image from "next/image";
import MainLayout from "../components/MainLayout"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export default function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [donationAmount, setDonationAmount] = useState();
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: donationAmount,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Thank you for support NFDEVS S1 Drop, ${CONFIG.NFT_NAME} NFT is yours!`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const onChangeHandler = (event) => {
    const weiAmount = ethers.utils.parseEther(event.target.value);
    setDonationAmount(weiAmount.toString(10));
    console.log(weiAmount.toString(10));
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 2) {
      newMintAmount = 2;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

>>>>>>> 58aea00de7685e621201395e4324399ff465d26b
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-white text-5xl uppercase my-2 font-bold">
          Unauthorized
        </p>
        <p className="text-white text-xl font-semibold">
          Not A Hoodlumz Holder
        </p>
      </div>
    </MainLayout>
  );
};

export default unauthorized;
