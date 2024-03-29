import React, { useContext } from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex items-center justify-center w-full min-h-screen py-10 bg-black">
        <div className="w-full flex flex-col px-8 items-center justify-center">
          <p className="text-7xl text-center uppercase font-semibold text-white">
            Welcome to Project Eden
          </p>

          <p className="mt-2 text-sm text-center px-8 text-gray-500 dark:text-gray-400 lg:text-base">
            A Web3 Vault Housing the Intellectual Property of CryptoWorld.Tips
            Accessible Only to Holders.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <Link href="https://opensea.io/collection/cryptohoodlumz888?search[sortAscending]=false&search[sortBy]=CREATED_DATE">
              <a
                target="_blank"
                className="block px-4 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-red-900 rounded-md lg:inline hover:bg-zinc-900"
              >
                Collect Our NFT For Access
              </a>
            </Link>

            <Link href="https://discord.com/invite/DBDKr3Kafz" k>
              <a
                target="_blank"
                className="block ml-3 px-4 py-3 font-semibold text-center text-white transition-colors duration-200 transform border-2 border-red-900 rounded-md lg:inline hover:bg-zinc-900"
              >
                Join Our Discord
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
