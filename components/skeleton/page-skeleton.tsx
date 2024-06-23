import { Skeleton } from "@/components/skeleton/skeleton";

const PageSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 px-5 py-6 xl:px-24 lg:px-8 lg:w-3/4 w-full">
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="flex justify-center sm:justify-start gap-3 my-5 items-center" key={i}>
          <div className="">
            <Skeleton className="h-[14rem] lg:h-[10rem] w-[18rem]" />
          </div>
          <div className="flex-col gap-3 w-1/2 hidden sm:flex">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageSkeleton;
