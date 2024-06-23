const TrendingSkeleton = () => {
  const postSkeletonItems = Array(5).fill(0);
  return (
    <div className="grid md:gap-2 gap-1 md:my-8 my-4 grid-cols-4 lg:grid-rows-2 grid-rows-3">
      {postSkeletonItems.map((_, index) => (
        <div
          key={index}
          className={`animate-pulse ${
            index === 0
              ? "lg:col-span-2 h-[25rem] lg:h-[35rem] col-span-4 row-span-2"
              : "lg:col-span-1 col-span-2 h-[12rem] lg:h-[17rem] row-span-1"
          } rounded-xl animate-pulse relative block w-full`}
        >
          <div className="z-0 relative overflow-hidden w-full h-full animate-pulse rounded-xl">
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700" />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-3">
            {/* <div className="h-5 w-24 bg-primary rounded-md mb-2" /> */}
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2" />
            {index === 0 && (
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingSkeleton;
