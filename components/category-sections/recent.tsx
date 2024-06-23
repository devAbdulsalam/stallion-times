import axios from "axios";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { formatDistanceToNow } from "date-fns";

import SectionTitle from "@/components/section-title";
import SportSkeleton from "@/components/skeleton/sport-skeleton";

const Recent = async () => {
  const relatedPostsResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_recent_post.php`
  );

  const relatedPosts: Post[] = relatedPostsResponse.data;

  return (
    <Suspense fallback={<SportSkeleton />}>
      <div className="basis-1/4 flex-col">
        <SectionTitle title={"Recent"} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1 gap-x-1 gap-y-1 my-3">
          {relatedPosts && relatedPosts.length > 0 ? (
            relatedPosts.map((item, index) => (
              <div className="col-span-1 row-span-4 p-1 rounded-xl" key={index}>
                <Link
                  href={`/post/${item.title}`}
                  className="basis-full hover:opacity-70"
                >
                  <div className="container overflow-hidden relative z-0 w-auto mb-3 aspect-auto rounded-xl dark:bg-gray-400 bg-gray-200 h-[17rem] svelte-1uu6864">
                    <div className="absolute z-10 top-0 left-0 w-full h-full rounded-xl bg-gradient-gradual" />
                    <div className="absolute bottom-0 left-1 p-1 z-10 w-full">
                      <div className="flex my-3 gap-3">
                        <h5 className="text-sm font-semibold text-gray-100 dark:text-slate-50 capitalize">
                          {item.category}
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
            ))
          ) : (
            <div className="col-span-2 row-span-4 flex items-center justify-center p-5">
              <p className="text-lg text-gray-500">
                No posts available at the moment. Please check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Recent;
