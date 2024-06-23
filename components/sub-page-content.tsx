"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Button } from "./ui/button";
import PageSkeleton from "./skeleton/page-skeleton";

interface SubPageContentProps {
  categoryId: string;
}

const SubPageContent = ({ categoryId }: SubPageContentProps) => {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      const postUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_postBySubCategoryId.php?sub_category_id=${categoryId}`;

      try {
        setLoading(true);
        const response = await axios.get(postUrl);

        console.log(response.data);

        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [categoryId]);

  const handleClick = () => {
    setLimit((prev) => prev + 10);
  };

  return (
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
                        {post.date}
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

          <div className="flex justify-center items-center my-10">
            <Button variant={"outline"} onClick={handleClick}>
              Load more
            </Button>
          </div>
        </main>
      ) : (
        <div className="px-5 py-6 xl:px-24 lg:px-8 flex justify-center items-center h-screen">
          <h1 className="text-2xl">No Post Available</h1>
        </div>
      )}
    </>
  );
};

export default SubPageContent;
