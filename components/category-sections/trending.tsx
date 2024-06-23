"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import parse from "html-react-parser";
import Image from "next/image";

import TrendingSkeleton from "@/components/skeleton/trending-skeleton";
import getBg from "../ui/dropdown-menu";

const Trending = () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/index_post.php`;

  const [data, setData] = useState<Post[]>();
  const [loading, setLoading] = useState(false);
  // getBg(0.0002)

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const responseData = response.data;

        const allPosts: any = Object.values(responseData).flatMap(
          (posts) => posts
        );

        setData(allPosts);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const interval = setInterval(() => {
        setData((prevData) => {
          // @ts-ignore
          const newData = [...prevData];
          newData.unshift(newData.pop()!);
          return newData;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [data]);

  console.log(data);

  return (
    <>
      {loading ? (
        <TrendingSkeleton />
      ) : data && data.length > 0 ? (
        <div className="grid md:gap-2 gap-1 md:my-8 my-4 grid-cols-4 lg:grid-rows-2 grid-rows-3 transform transition-colors duration-500">
          {data.slice(0, 5).map((item, index) => (
            <Link
              href={`/post/${item.title}`}
              className={`${
                index === 0
                  ? "lg:col-span-2 h-[25rem] lg:h-[35rem] col-span-4 row-span-2"
                  : "lg:col-span-1 col-span-2 h-[12rem] lg:h-[17rem] row-span-1"
              } rounded-xl dark:bg-gray-600 bg-gray-500 relative block w-full transform transition-colors duration-200 ease-in-out`}
              key={item.id}
            >
              <div className="z-0 relative hover:opacity-70 overflow-hidden transition-all w-full h-full dark:bg-gray-600 bg-gray-200 rounded-xl">
                <Image
                  src={item.picture}
                  className="w-full h-full relative object-cover hover:scale-125 transition-all bg-center rounded-xl"
                  alt="post-image"
                  fill
                />
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-slate-900 opacity-80 rounded-b-xl" />
              </div>

              <div className="absolute h-auto w-full z-2 bottom-0 left-0 p-3">
                <h3 className="inline-block px-4 py-2 rounded-md uppercase text-[0.5rem] bg-primary text-white">
                  {item.category_name}
                </h3>
                <h4 className="text-white md:font-extrabold mt-2 capitalize font-bold md:text-normal sm:text-sm text-xs line-clamp-3">
                  {item.title}
                </h4>

                {index === 0 && (
                  <p className="text-xs text-white sm:line-clamp-2 hidden">
                    {parse(item.description)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <TrendingSkeleton />
      )}
    </>
  );
};

export default Trending;
