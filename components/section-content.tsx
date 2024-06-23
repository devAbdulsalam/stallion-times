import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { formatDistanceToNow } from "date-fns";

import SectionTitle from "@/components/section-title";
import CategorySkeleton from "./skeleton/category-skeleton";
interface SectionContentProps {
  title: string;
  posts: Post[];
}

const SectionContent = ({ title, posts }: SectionContentProps) => {
  return (
    <>
      {posts && posts.length ? (
        <>
          <SectionTitle title={title} />
          <div className="md:grid grid-cols-2 grid-rows-4 gap-x-1 lg:gap-y-2 gap-y-1 my-5">
            {posts &&
              posts.length > 0 &&
              posts.map((item, index) => (
                <>
                  {index === 1 ? (
                    <div
                      className="col-span-1 row-span-4 p-1 rounded-xl"
                      key={index}
                    >
                      <Link
                        href={`/post/${item.title}`}
                        className="basis-full hover:opacity-70"
                      >
                        <div className="container overflow-hidden relative z-0 w-auto mb-3 aspect-auto rounded-xl dark:bg-gray-400 bg-gray-200 h-[26rem] svelte-1uu6864">
                          <div className="absolute z-10 top-0 left-0 w-full h-full rounded-xl bg-gradient-gradual" />
                          <div className="absolute bottom-0 left-1 p-1 z-10 w-full">
                            <div className="flex my-3 gap-3">
                              <h5 className="text-sm font-semibold text-gray-100 dark:text-slate-50 capitalize">
                                {item.category_name}
                              </h5>
                              <h5 className="text-xs text-gray-50 dark:text-gray-100 border-l pl-3">
                                {item?.date
                                  ? formatDistanceToNow(
                                      new Date(parseInt(item.date, 10) * 1000),
                                      { addSuffix: true }
                                    )
                                  : null}
                              </h5>
                            </div>

                            <div className="basis-full">
                              <div className="flex justify-between basis-full">
                                <h4 className="font-semibold text-white capitalize line-clamp-2 text-sm md:text-md">
                                  {item.title}
                                </h4>
                              </div>
                            </div>

                            <div className="text-xs text-white line-clamp-2">
                              {parse(item.description)}
                            </div>
                          </div>

                          <Image
                            src={item.picture}
                            className="w-full h-full relative -z-0 object-cover bg-center bg-cover rounded-xl svelte-1uu6864"
                            alt="post-image"
                            fill
                          />
                          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-slate-900 opacity-80 rounded-b-xl" />
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="col-span-1 row-span-1 mt-1 md:mt-0 flex justify-start gap-2 p-1 rounded-xl"
                      key={index}
                    >
                      <Link
                        className="hover:opacity-70"
                        href={`/post/${item.title}`}
                      >
                        <div className="relative z-0 aspect-square rounded-xl dark:bg-gray-400 bg-gray-200 h-[4rem] w-[4rem] md:h-[5.4rem] md:w-[5.4rem]">
                          <Image
                            src={item.picture}
                            className="w-full h-full object-cover bg-center bg-cover rounded-xl"
                            alt="post-image"
                            fill
                          />
                        </div>
                      </Link>

                      <Link href={`/post/${item.title}`}>
                        <h3 className="font-bold capitalize text-base line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="text-xs line-clamp-2">
                          {parse(item.description)}
                        </div>
                      </Link>
                    </div>
                  )}
                </>
              ))}
          </div>
        </>
      ) : (
        <CategorySkeleton />
      )}
    </>
  );
};

export default SectionContent;
