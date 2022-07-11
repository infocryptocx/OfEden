import React, { useContext, useEffect } from "react";
import Image from "next/head";
import { CryptoWorldContext } from "../context/context";

const Navbar = () => {
  const { roomName, currentAccount, connectWallet, currentUser } =
    useContext(CryptoWorldContext);
  return (
    <nav className=" shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-zinc-300 font-semibold">{roomName}</p>
            <div className="w-2 h-2 border-1 border-zinc-300 bg-red-900 rounded-full ml-1" />
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center md:flex">
          {/* <div className="flex flex-col md:flex-row md:mx-1">
            {currentAccount ? (
              <div className="mr-5 bg-zinc-900 text-zinc-200 p-1 text-sm rounded-3xl border-2 border-bg-black flex items-center">
                <img src="./eth.png" width={13} alt="ethLogo" />
                <span className="mx-1 text-zinc-700">{"|"}</span>
                {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
              </div>
            ) : (
              <button
                className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
                onClick={() => connectWallet()}
              >
                Connect Wallet
              </button>
            )}
          </div> */}

          {/* <div className="flex justify-center md:block">
            <button
              type="button"
              className="flex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                {!currentUser ? (
                  <img
                    src={
                      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    }
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                ) : (
                  <img
                    src={currentUser.avatar}
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                )}
              </div>

              {!currentUser ? (
                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden"></h3>
              ) : (
                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                  {currentUser.name}
                </h3>
              )}
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
