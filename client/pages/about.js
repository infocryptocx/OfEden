import React from "react";
import MainLayout from "../components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-black p-6 rounded-lg border-2 border-red-900">
            <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
              7/2022
            </h1>
            <p className="mt-2 text-3xl text-center text-gray-500 dark:text-gray-400">
              Code Release
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg border-2 border-red-900">
            <h1 className="text-xl text-center font-semibold text-gray-800 dark:text-white">
              8/2022
            </h1>
            <p className="mt-2 text-3xl  text-center text-gray-500 dark:text-gray-400">
              Beta Access
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg border-2 border-red-900">
            <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
              9/2022
            </h1>
            <p className="mt-2 text-3xl  text-center text-gray-500 dark:text-gray-400">
              Holder Access
            </p>
          </div>
        </div>
        <div className="px-6 py-8">
          <h1 className="text-3xl text-center mb-3 font-semibold text-red-300 capitalize lg:text-4xl">
            About
          </h1>

          <ul className="list-disc marker:text-red-800 text-lg">
            <li className="text-white">
              Imagine a world where no knowledge is lost. Where, instead of
              taking all of your hopes, dreams, and experiences with you to the
              grave, you can instead deposit them for future generations to
              benefit from, from the moment of upload till long after you have
              transitioned.
            </li>
            <li className="text-white">
              Project Eden, aka OfEden.888 will solve this issue permanently by
              leveraging the use of Web3 Solutions and Blockchain Technology.{" "}
            </li>
          </ul>
        </div>
        <div className="px-6 py-8">
          <h1 className="text-3xl text-center mb-3 font-semibold text-red-300 capitalize lg:text-4xl ">
            What is Eden?
          </h1>
          <ul className="list-disc marker:text-red-800 text-lg">
            <li className="text-white">
              Eden is a Token Gated Web3 Vault that, at this time, can only be
              accessed by holders of CryptoHoodlumz NFTs of which only 888
              exist.
            </li>
          </ul>
        </div>

        <div className="px-6 py-8">
          <h1 className="text-3xl text-center mb-3 font-semibold text-red-300 capitalize lg:text-4xl">
            Whats in Eden?
          </h1>
          <p className="mt-4 text-2xl mb-2 text-gray-500 xl:mt-6 dark:text-gray-300">
            All IP created by, or donated to, CryptoWorld.Tips including, but
            not limited to:
          </p>
          <ul className="list-disc marker:text-red-800 text-lg">
            <li className="text-white">
              500+ hrs of Clean Media related to: Cryptocurrencies, Blockchain
              Solutions, Mental Health and Wellness, Stocks, General Financial
              Literacy, Digital Marketing Solutions, E-Commerce, Tech
              Consultancy, Software Development, Spirituality, Real Estate
              Tokenization, Community Development and Tokenization, etc..
            </li>
            <li className="text-white">
              Educational Curriculums (beginning with Blockchain101 and
              eventually spanning all aspects as mentioned above in point 1.
            </li>
            <li className="text-white">
              Curated Educational Video and Audio Content
            </li>
            <li className="text-white">Curated Educational Documentation</li>
            <li className="text-white">
              Curated FAQ mined from real-time User Submissions
            </li>
            <li className="text-white">
              Multi-Industry Evergreen Media Content
            </li>
            <li className="text-white">More info is added weekly</li>
          </ul>
        </div>
        <div className="px-6 py-8">
          <h1 className="text-3xl text-center mb-3 font-semibold text-red-300 capitalize lg:text-4xl ">
            How can I Access Eden?
          </h1>
          <ul className="list-disc marker:text-red-800 text-lg">
            <li className="text-white">
              Only CryptoHoodlumz NFT holders are able to access OfEden.888 at
              this time.
            </li>
            <li className="text-white">
              If Available, Listings Can be Found Here:{" "}
              <a href="https://cryptohoodlumz.io">Cryptohoodlumz.io</a>
            </li>
            <li className="text-white">Or scanning here: </li>
          </ul>
          <img className="w-64 h-64" src="/CHZ888.png" alt="videoChain" />
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
