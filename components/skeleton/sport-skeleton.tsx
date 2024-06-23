const SportSkeleton = () => {
  const sportsSkeletonItems = Array(5).fill(0);
  return (
    <div className="basis-1/4 flex-col">
      <div className="animate-pulse h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1 gap-x-1 gap-y-1 my-3">
        {sportsSkeletonItems.map((_, index) => (
          <div
            className="col-span-1 row-span-4 p-1 rounded-xl animate-pulse"
            key={index}
          >
            <div className="container overflow-hidden relative z-0 w-auto mb-3 aspect-auto rounded-xl h-[17rem] bg-gray-300 dark:bg-gray-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportSkeleton;
