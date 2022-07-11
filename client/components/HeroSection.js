import React, { useContext } from "react";

const HeroSection = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex items-center justify-center w-full min-h-screen py-10 bg-black">
        <div className="w-full flex flex-col px-8 items-center justify-center">
          <p className="text-7xl text-center font-semibold text-white">
            WELCOME TO CRYPTO WORLD
          </p>

          <p className="mt-2 text-sm text-center px-8 text-gray-500 dark:text-gray-400 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <a
              href="https://opensea.io"
              className="block px-4 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-red-900 rounded-md lg:inline hover:bg-zinc-900"
            >
              Buy Our NFT For Access
            </a>

            <a
              href="https://discord.com/invite/7u54vrB3RE"
              className="block ml-3 px-4 py-3 font-semibold text-center text-white transition-colors duration-200 transform border-2 border-red-900 rounded-md lg:inline hover:bg-zinc-900"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          className="w-full bg-center bg-cover h-[40rem]"
          src="/Discord.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
