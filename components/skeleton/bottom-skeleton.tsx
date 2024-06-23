const BottomSkeleton = () => {
  const BottomSkeletonItems = Array(4).fill(0);
  return (
    <div className="gird grid-cols-4">
      <div className="animate-pulse h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-1 gap-y-1 my-3">
        {BottomSkeletonItems.map((_, index) => (
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

export default BottomSkeleton;
