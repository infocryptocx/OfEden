import React from "react";
import MainLayout from "../components/MainLayout";

const Faq = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <div className="">
          <section className="text-gray-700">
            <div className="flex flex-col my-10">
              <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-zinc-300">
                Frequently Asked Question
              </h1>

              <div className="mt-2 flex justify-center">
                <span className="inline-block w-1 h-1 mr-1 rounded-full bg-sky-500"></span>
                <span className="inline-block w-3 h-1 mr-1 rounded-full bg-sky-500"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-sky-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-sky-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-sky-500"></span>
              </div>
            </div>

            <div className="text-center mb-20">
              <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-300">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-sky-600 text-zinc-300 rounded-md py-2 px-4">
                    How Long is this site live?
                  </summary>

                  <span className="text-zinc-300">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-sky-600 text-zinc-300 rounded-md py-2 px-4">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span className="text-zinc-300">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-sky-600 text-zinc-300 rounded-md py-2 px-4">
                    How can I migrate to another site?
                  </summary>

                  <span className="text-zinc-300">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-sky-600 text-zinc-300 rounded-md py-2 px-4">
                    Can I change the domain you give me?
                  </summary>

                  <span className="text-zinc-300">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-sky-600 text-zinc-300 rounded-md py-2 px-4">
                    How many sites I can create at once?
                  </summary>

                  <span className="text-zinc-300">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-sky-600 text-zinc-300 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>

                  <span className="text-zinc-300">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
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

export default Faq;
