import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { ethers } from "ethers";
import Image from "next/image";

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

  return (
    <MainLayout>
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 xs:grid-cols-1">
          <div className="flex items-center justify-center">
            {/* <Image
              src="/nfdevss1pass.png"
              alt="nfdevslogo"
              width={400}
              height={400}
              // className="rounded-full"
              objectFit="cover"
            /> */}
          </div>

          <div className="w-full max-w-2xl mb-4 px-6 py-4 mx-auto bg-pine rounded-md shadow-md flex flex-col justify-center items-center">
            <h2 className="text-3xl text-almond font-semibold text-center text-gray-800 dark:text-white">
              NFDEVS REPOSITORY UNLOCK SEASON ONE DROP
            </h2>
            <p className="mt-3 text-center text-gray-600 dark:text-gray-400 text-lightGreen">
              This NFT Pass allows you to claim one source code with a zoom
              session to help with implementation.
            </p>
            <a href={CONFIG.SCAN_LINK}>
              <p className="mt-3 text-center text-lightGreen dark:text-gray-400">
                Contract Address: {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </p>
            </a>

            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <p className="text-lightGreen text-md">The sale has ended.</p>
                <p className="text-lightGreen text-md">
                  You can still find {CONFIG.NFT_NAME} on
                </p>

                <a href={CONFIG.MARKETPLACE_LINK}>{CONFIG.MARKETPLACE}</a>
              </>
            ) : (
              <>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <div className="flex flex-col justify-center">
                    <p className=" mt-4 text-center text-almond font-semibold">
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </p>

                    <button
                      className="my-4 bg-lightGreen font-bold px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </button>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <p>{blockchain.errorMsg}</p>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <div className="mt-6">
                      <div className="items-center -mx-2 justify-center flex flex-col">
                        <div className="w-1/2 mx-2 flex items-center flex-row">
                          <label className="block text-almond mx-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                            Amount:
                          </label>

                          <input
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            type="number"
                            onChange={onChangeHandler}
                            placeholder="Amount in ETH"
                          />
                        </div>
                        <div className="mt-2 flex flex-col justify-center">
                          <p className="text-md text-almond mb-4">
                            Excluding gas fees.
                          </p>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <p className="text-md text-white mb-4">{feedback}</p>
                        </div>
                        <div className="flex flex-row">
                          <button
                            className="mx-2 text-lightGreen"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="currentColor"
                              className="bi bi-dash-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                            </svg>
                          </button>
                          <p className="mx-2 text-3xl text-almond">
                            {mintAmount}
                          </p>
                          <button
                            className="mx-2 text-lightGreen"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="currentColor"
                              className="bi bi-plus-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-center mt-6">
                        <button
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                          className="px-4 py-2 bg-lightGreen text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                          {claimingNft ? "BUSY" : "BUY"}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
