"use client";

import Link from "next/link";
import parse from "html-react-parser";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

interface PostSlideProps {
  relatedPosts: Post[];
}

const PostSlide = ({ relatedPosts }: PostSlideProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = document.querySelector(".scroll") as HTMLDivElement | null;

      if (scroll && window.scrollY >= 1600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible && "translate-x-[3%]"
      } scroll fixed right-0 bottom-12 z-50 w-72 duration-300 translate-x-[100%]`}
    >
      <div className="w-72 border p-4 text-black bg-white dark:bg-dark_background shadow-md dark:shadow-gray-700">
        <h1 className="font-bold text-xl lg:text-2xl px-2">Recent Post</h1>
        {relatedPosts?.slice(0, 2).map((post, index) => (
          <Link
            href={`/post/${post.title}`}
            key={index}
            className="flex-row w-full flex justify-between gap-2 py-2 px-3"
          >
            <div className="">
              <div className="flex justify-between basis-full">
                <div>
                  <h5 className="font-normal xl:font-semibold lg:font-medium text-sm lg:text-md xl:text-lg line-clamp-2">
                    {post.title}
                  </h5>{" "}
                  <div className="xl:line-clamp-2 max-w-2xl hidden text-xs">
                    {parse(post.description)}
                  </div>
                </div>
              </div>{" "}
              <div className="my-1 gap-1 flex items-center">
                <h5 className="text-xs text-gray-600 dark:text-gray-100">
                  {post?.date
                    ? formatDistanceToNow(
                        new Date(parseInt(post.date, 10) * 1000),
                        { addSuffix: true }
                      )
                    : null}
                </h5>{" "}
                <h5 className="text-xs font-semibold border-l pl-1 text-primary dark:text-slate-50 capitalizes">
                  stalliontimes
                </h5>
              </div>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostSlide;
