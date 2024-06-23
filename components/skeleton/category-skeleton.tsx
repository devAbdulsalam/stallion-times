const CategorySkeleton = () => {
  const sectionSkeletonItems = Array(5).fill(0);
  return (
    <div>
      <div className="animate-pulse h-6 w-32 bg-gray-300 rounded mb-4"></div>
      <div className="md:grid grid-cols-2 grid-rows-4 gap-x-1 lg:gap-y-2 gap-y-1 my-5">
        {sectionSkeletonItems.map((_, index) => (
          <>
            {index === 1 ? (
              <div
                className="col-span-1 row-span-4 p-1 rounded-xl animate-pulse"
                key={index}
              >
                <div className="container overflow-hidden relative z-0 w-auto mb-3 rounded-xl h-[26rem] bg-gray-300 dark:bg-gray-700"></div>
              </div>
            ) : (
              <div
                className="col-span-1 row-span-1 mt-1 md:mt-0 flex justify-start gap-2 p-1 rounded-xl animate-pulse"
                key={index}
              >
                <div className="relative z-0 aspect-square rounded-xl h-[4rem] w-[4rem] md:h-[5.4rem] md:w-[5.4rem] bg-gray-300 dark:bg-gray-700" />
                <div className="w-full">
                  <div className="h-4 w-40 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                  <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                  <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                  <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2" />
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
