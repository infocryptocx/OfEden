import react from "react";
import MainLayout from "../components/MainLayout";

const Mint = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <section className="lg:py-12 lg:flex lg:justify-center">
          <div className="bg-white dark:bg-zinc-900 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
              <img
                className="h-64 bg-cover lg:rounded-lg lg:h-full"
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                alt="nftprofile"
              />
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                CryptoWorld Collection
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-red-900 rounded-md hover:bg-red-700"
                >
                  Mint Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-12 lg:flex lg:justify-center">
          <div className="bg-white dark:bg-zinc-900 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                CryptoWorld Collection #2
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-red-900 rounded-md hover:bg-red-700"
                >
                  Mint Now
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                className="h-64 bg-cover lg:rounded-lg lg:h-full"
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                alt="nftprofile"
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Mint;
