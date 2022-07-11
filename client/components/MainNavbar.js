import React, { useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { CryptoWorldContext } from "../context/context";
import Image from "next/image";

const MainNavbar = () => {
  const { currentUser, currentAccount, connectWallet } =
    useContext(CryptoWorldContext);

  return (
    <nav className="shadow bg-black">
      <div className="container px-6 py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/cryptoWorldLogo.png"
                className="rounded-full"
                height={38}
                width={38}
                alt=""
              />
              <Link href="/">
                <a className="text-md ml-2 font-bold transition-colors duration-200 transform text-white lg:text-3xl hover:text-gray-300 dark:hover:text-gray-300">
                  CRYPTOWORLD.TIPS
                </a>
              </Link>
            </div>

            {currentAccount ? (
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
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
            ) : (
              <div></div>
            )}
          </div>

          <div className="items-center md:flex">
            {currentAccount ? (
              <div className="flex flex-col md:flex-row">
                <Link href="/">
                  <a className="text-sm leading-5 text-gray-300 transition-colors duration-200 transform  hover:text-red-600 dark:hover:text-red-400 hover:underline md:mx-4 md:my-0">
                    Home
                  </a>
                </Link>
                <Link href="/cryptohoodlumz">
                  <a className="text-sm leading-5 text-gray-300 transition-colors duration-200 transform  hover:text-red-600 dark:hover:text-red-400 hover:underline md:mx-4 md:my-0">
                    CryptoHoodlumz
                  </a>
                </Link>
                <Link href="/community">
                  <a className="text-sm leading-5 text-gray-300 transition-colors duration-200 transform  hover:text-red-600 dark:hover:text-red-400 hover:underline md:mx-4 md:my-0">
                    Community
                  </a>
                </Link>
                <Link href="/members">
                  <a className="text-sm leading-5 text-gray-300 transition-colors duration-200 transform  hover:text-red-600 dark:hover:text-red-400 hover:underline md:mx-4 md:my-0">
                    Members
                  </a>
                </Link>
                {/* <Link href="/cwsubmissions">
                  <a className="text-sm leading-5 text-gray-300 transition-colors duration-200 transform  hover:text-red-600 dark:hover:text-red-400 hover:underline md:mx-4 md:my-0">
                    CW Submissions
                  </a>
                </Link> */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                      {!currentUser ? (
                        <img
                          src={
                            "//style.anu.edu.au/_anu/4/images/placeholders/person.png"
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
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/profile">
                              <a
                                className={`${
                                  active
                                    ? "bg-red-900 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Profile
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>

                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-red-900 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <div></div>
            )}

            <div className="flex flex-col md:flex-row md:mx-1">
              {currentAccount ? (
                // <div className="mr-5 bg-zinc-900 text-zinc-200 p-1 text-sm rounded-3xl border-2 border-bg-black flex items-center">
                //   <img src="./eth.png" width={13} alt="ethLogo" />
                //   <span className="mx-1 text-zinc-700">{"|"}</span>
                //   {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                // </div>
                <></>
              ) : (
                <button
                  className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-red-900 rounded-md hover:bg-zinc-600 md:mx-2 md:w-auto"
                  onClick={() => connectWallet()}
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
