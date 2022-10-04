import React from "react";
import MainLayout from "../components/MainLayout";

const Cryptohoodlumz = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="">
          <section className="text-gray-700">
            <div className="flex flex-col my-10">
              <h1 className="text-3xl text-center font-semibold capitalize lg:text-4xl text-zinc-300">
                CRYPTO HOODLUMZ (Frequently Asked Question)
              </h1>

              <div className="mt-2 flex justify-center">
                <span className="inline-block w-1 h-1 mr-1 rounded-full bg-red-900"></span>
                <span className="inline-block w-3 h-1 mr-1 rounded-full bg-red-900"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-red-900"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-900"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-900"></span>
              </div>
            </div>

            <div className="text-center mb-20">
              <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-300">
                RULES OF PARTICIPATION
              </p>
              <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-300">
                Accepted Forms of Payment:
              </p>
              <p className="text-md leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-300">
                <span className="text-red-900 text-2xl font-bold">+</span> All
                Major Credit Cards
              </p>
              <p className="text-md leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-300">
                <span className="text-red-900 text-2xl font-bold">+</span> Apple
                Pay
              </p>
              <p className="text-md leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-300">
                <span className="text-red-900 text-2xl font-bold">+</span>{" "}
                PayPal
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-bold  bg-red-900 text-zinc-300 rounded-md py-2 px-4">
                    1. YOU MUST PROVIDE YOUR POLYGON ADDRESS.
                  </summary>

                  <span className="text-zinc-300">
                    During Checkout: Each OG Member that opts to participate in
                    this Event is{" "}
                    <span className="font-bold text-white">REQUIRED</span> to
                    input their{" "}
                    <span className="font-bold underline text-white">
                      POLYGON
                    </span>
                    Wallet Address​. CryptoWorld is{" "}
                    <span className="font-bold text-white">
                      not responsible
                    </span>{" "}
                    for any incorrect Addresses Entered. If you fail to provide
                    your Polygon Address during checkout, it will be{" "}
                    <span className="font-bold text-white">
                      your responsibility
                    </span>{" "}
                    to do so{" "}
                    <span className="font-bold text-white">
                      within 10 business days.
                    </span>
                  </span>
                  <span className="mt-2 text-zinc-300">
                    Please see How to Install MetaMask & How to Add Polygon
                    Tutorials provided.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-bold bg-red-900 text-zinc-300 rounded-md py-2 px-4">
                    3. THERE ARE NO EXCEPTIONS TO THESE RULES.
                  </summary>

                  <span className="text-zinc-300">
                    By participating in this Event, you agree to all above
                    stated Rules.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-bold  bg-red-900 text-zinc-300 rounded-md py-2 px-4">
                    2. AIR-DROPS WILL OCCUR BETWEEN 04/12-04/17.
                  </summary>

                  <span className="text-zinc-300">
                    Following the commencement of the 4/11 Members Mint, each
                    NFT will be manually Air-Dropped into the Wallet Address
                    provided during checkout. Please make sure the address
                    provided is correct.
                    <span className="font-bold text-white">
                      Once an NFT is sent, it cannot be retrieved from incorrect
                      Addresses.
                    </span>{" "}
                    In the case of missing Wallet Addresses; expect your drop to
                    occur within 7 days of you receiving a receipt confirmation.
                  </span>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cryptohoodlumz;
