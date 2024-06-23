import React from "react";

const PostSkeletonDetails = () => {
  return (
    <main className="min-h-screen px-5 py-6 mx-auto xl:px-24 lg:px-8">
      <div className="w-full grid grid-cols-12 gap-5 transition-transform duration-500">
        <div className="flex col-span-12 lg:col-span-8 flex-col md:gap-5 gap-4">
          <div className="flex font-medium text-sm text-gray-500 dark:text-gray-100">
            <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse ml-4"></div>
          </div>

          <div className="xl:text-5xl lg:text-4xl capitalize text-3xl lg:max-w-full xl:max-w-6xl max-w-xl lg:font-semibold font-medium text-gray-600 dark:text-white">
            <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          </div>

          <div className="flex sm:max-w-full md:max-w-6xl max-w-xl justify-between font-medium text-gray-600 dark:text-gray-100 items-center">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse ml-2"></div>
            </div>

            <div className="border-[1px] w-auto py-2 rounded-full shadow-sm hover:shadow-md transition">
              <div className="flex flex-row items-center justify-between">
                <div className="pl-2 pr-4 text-gray-600 dark:text-gray-100 flex flex-row items-center">
                  <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                  <div className="w-8 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse ml-2"></div>
                </div>
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 animate-pulse ml-4"></div>
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 animate-pulse ml-4"></div>
              </div>
            </div>
          </div>

          <div className="lg:max-w-6xl xl:h-[30rem] lg:h-[28rem] h-[20rem] cursor-pointer rounded-xl bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

          <div className="text-gray-700 dark:text-gray-50 sm:max-w-full md:max-w-6xl max-w-xl">
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 animate-pulse mb-2"></div>
          </div>
        </div>

        <aside className="w-full col-span-4 hidden lg:block">
          <div className="bg-white dark:bg-dark_background p-3 shadow-md border-y-2 border-primary">
            <div className="relative w-full mb-5">
              <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </div>

            <div className="flex flex-col gap-x-3 my-5 md:max-w-2xl">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex-row w-full flex justify-between gap-2 py-2 px-3"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                  <div className="flex-1">
                    <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                    <div className="w-1/2 h-3 bg-gray-300 dark:bg-gray-700 animate-pulse mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="my-8">
        <div className="w-full xl:hidden block">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            <hr className="bg-gray-700 w-full h-[2px] mb-4 dark:bg-gray-400 mt-4" />
            <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex-col flex justify-between gap-1 p-1 md:mt-0 mt-1 svelte-u7bql3"
                >
                  <div className="relative z-0 w-full overflow-hidden mb-1 aspect-auto rounded-xl bg-gray-300 dark:bg-gray-700 h-[10rem] animate-pulse svelte-u7bql3"></div>
                  <div className="">
                    <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
                    <div className="w-1/2 h-3 bg-gray-300 dark:bg-gray-700 animate-pulse mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostSkeletonDetails;
