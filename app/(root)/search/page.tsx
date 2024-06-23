"use client";

import PageSkeleton from "@/components/skeleton/page-skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { ChangeEvent, Suspense, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { formatDistanceToNow } from "date-fns";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const postUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_recent_post.php`;

      try {
        setLoading(true);
        const response = await axios.get(postUrl);

        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const fetchPosts = useMemo(
    () =>
      debounce(async (query: string) => {
        if (query.trim() === "") {
          setPosts(null);
          return;
        }

        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/search.php?title=${query}`;
        try {
          setLoading(true);
          const response = await axios.get(url);
          console.log(response.data.data);
          setPosts(response.data.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, 500),
    []
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    fetchPosts(e.target.value);
  };

  useEffect(() => {
    return () => {
      fetchPosts.cancel();
    };
  }, [fetchPosts]);

  console.log(posts);

  return (
    <>
      <div className="pt-6 flex items-center justify-start w-full max-w-2xl px-5 xl:px-24 lg:px-8">
        <div className="relative w-full my-3">
          <Input
            className="w-full h-10 pl-4 pr-12 text-sm rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent lg:py-6"
            placeholder="Search..."
            type="search"
            onChange={handleSearchChange}
          />
          <Button
            className="absolute inset-y-0 top-[50%] right-0 translate-y-[-50%] flex items-center justify-center w-10 text-gray-500 rounded-r-md hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            size="icon"
            variant="ghost"
          >
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <>
        {loading ? (
          <PageSkeleton />
        ) : posts && posts.length > 0 ? (
          <main className="px-5 py-6 xl:px-24 lg:px-8">
            <div className="lg:w-3/4 w-full">
              {posts &&
                posts.map((post) => (
                  <Link
                    href={`/post/${post.title}`}
                    className="p-1 flex gap-2 my-px"
                    key={post.id}
                  >
                    <div className="relative z-0 aspect-square overflow-hidden mb-1 h-auto sm:w-96 w-40 rounded-xl sm:h-40 bg-gray-400 lg:h-52">
                      <Image
                        src={post.picture}
                        className="w-full h-full bg-center object-cover"
                        alt="post-image"
                        width={500}
                        height={500}
                      />
                    </div>

                    <div className="w-full">
                      <div className="my-3 gap-3 sm:flex posts-center hidden">
                        <h5 className="text-sm font-semibold text-primary dark:text-slate-50 capitalizes">
                          stalliontimes
                        </h5>
                        <h5 className="text-xs text-gray-600 dark:text-gray-100 border-l pl-3">
                          {post?.date
                            ? formatDistanceToNow(
                                new Date(parseInt(post.date, 10) * 1000),
                                { addSuffix: true }
                              )
                            : null}
                        </h5>
                      </div>
                      <div className="flex justify-between basis-full">
                        <div>
                          <h4 className="font-semibold capitalize lg:text-2xl md:text-xl text-sm line-clamp-3">
                            {post.title}
                          </h4>
                          <p className="sm:line-clamp-3 sm:text-base text-xs lg:line-clamp-4 line-clamp-3">
                            {parse(post.description)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </main>
        ) : (
          <div className="px-5 py-6 xl:px-24 lg:px-8">No result found</div>
        )}
      </>
    </>
  );
};

export default SearchPage;
