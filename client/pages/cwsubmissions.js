import React from "react";
import MainLayout from "../components/MainLayout";

const Cwsubmissions = () => {
  return (
    <MainLayout>
      <section className="w-full max-w-2xl px-6 py-4 my-10 mx-auto bg-white rounded-md shadow-md dark:bg-black">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          WHATCHYA KNOW? <br />
          SUBMIT BELOW!
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
          Submit Your Piece Below for Consideration!{" "}
        </p>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
          ​ If Chosen for Our Newsletter, You Will Receive an Email from
          CryptoWorld.tips Informing You Of Your Selection, as well as the
          Expected Date of Publication! ​
        </p>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
          ​ With So Many Members In This Community, YOUR WORDS, & CONTENT Will
          Reach THOUSANDS So Make Sure to Put Your Best Thoughts Forward! ​
        </p>
        <p className="mt-3 text-center font-bold text-gray-600 dark:text-gray-400">
          ​ Good Luck!{" "}
        </p>

        <hr className="my-2 w-64 text-center mx-auto" />

        <div className="mt-6 ">
          <div className="items-center md:flex">
            <div className="w-full mx-2 my-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                First Name:
              </label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
              />
            </div>

            <div className="w-full mx-2 mt-4 my-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Last Name:
              </label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
              />
            </div>
          </div>
          <div className="w-full mx-2 my-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Email:
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
            />
          </div>
          <div className="w-full mx-2 my-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              URL:
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
            />
          </div>
          <div className="w-full mx-2 my-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              URL:
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
            />
          </div>
          <div className="w-full mx-2 my-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              URL:
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
            />
          </div>

          <div className="w-full mx-2 my-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Submission Box:
            </label>

            <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-red-900 rounded-md hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cwsubmissions;
