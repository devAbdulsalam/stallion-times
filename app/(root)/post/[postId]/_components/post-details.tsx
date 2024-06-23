import axios from "axios";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import parse from "html-react-parser";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

import SocialShareModal from "@/components/modals/social-share-modal";
import PostSlide from "./post-slide";
import CommentsForm from "@/components/forms/comment-form";
import Comments from "./comments";

interface PostDetailsProps {
  postId: any;
}

const PostDetails = async ({ postId }: PostDetailsProps) => {
  try {
    const postResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_post.php?post_id=${postId}`
    );

    if (!postResponse.data) {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            We couldn&apos;t find the post you were looking for. It may have
            been removed or the URL may be incorrect.
          </p>
        </div>
      );
    }

    const post: Post = postResponse.data;

    const relatedPostsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_recent_post.php`
    );
    const relatedPosts: Post[] = relatedPostsResponse.data;

    const commentsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/getCommentsById.php?post_id=${post.post_id}`
    );
    const comments = commentsResponse.data;

    const parseDescription = post.description ? parse(post.description) : "";

    return (
      <main className="min-h-screen px-5 py-6 mx-auto xl:px-24 lg:px-8">
        <div className="w-full grid grid-cols-12 gap-5 transition-transform duration-500">
          <div className="flex col-span-12 lg:col-span-8 flex-col md:gap-5 gap-4">
            <div className="flex font-medium text-sm text-gray-500 dark:text-gray-100">
              <span className="pr-4 capitalize border-r-2 border-gray-600 dark:border-gray-100">
                {post.category}
              </span>
              <span className="pl-4">
                {post.date
                  ? formatDistanceToNow(
                      new Date(parseInt(post.date, 10) * 1000),
                      { addSuffix: true }
                    )
                  : null}
              </span>
            </div>

            <div className="xl:text-5xl lg:text-4xl capitalize text-3xl lg:max-w-full xl:max-w-6xl max-w-xl lg:font-semibold font-medium text-gray-600 dark:text-white">
              <h1>{post.title}</h1>
            </div>

            <div className="flex sm:max-w-full md:max-w-6xl max-w-xl justify-between font-medium text-gray-600 dark:text-gray-100 items-center">
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="" alt="avatar" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <span className="text-sm capitalize">stalliontimes</span>
              </div>

              <div className="border-[1px] w-auto rounded-full shadow-sm transition">
                <div className="flex flex-row items-center justify-between">
                  <div className="pl-2 pr-4 text-gray-600 dark:text-gray-100 flex flex-row items-center">
                    <button className="flex flex-row items-center hover:cursor-pointer">
                      <FaRegHeart className="text-xl text-rose-600" />
                    </button>
                    <div className="pl-1 text-sm font-medium">0</div>
                  </div>
                  <Link
                    href="#comments"
                    className="text-sm pl-4 pr-2 text-gray-600 dark:text-gray-100 flex flex-row items-center gap-3 border-x-[1px]"
                  >
                    <span className="font-medium">0</span>
                    <RiMessage2Fill className="text-xl hover:cursor-pointer" />
                  </Link>
                  <SocialShareModal
                    link={`${process.env.NEXT_PUBLIC_BASE_URL}/post/${post.title}`}
                  />
                </div>
              </div>
            </div>

            <div className="lg:max-w-6xl aspect-w-191 aspect-h-100 cursor-pointer rounded-xl bg-gray-400 border border-primary">
              <Image
                src={post.picture}
                className="w-full h-full bg-center bg-cover"
                alt="post-image"
                width={1000}
                height={1000}
              />
            </div>

            <div className="text-gray-700 dark:text-gray-50 sm:max-w-full md:max-w-6xl max-w-xl">
              {parseDescription}
            </div>
          </div>

          {/* Related Post */}
          <aside className="w-full col-span-4 hidden lg:block">
            <div className="bg-white dark:bg-dark_background p-3 shadow-md border-y-2 border-primary">
              <div className="relative w-full mb-5">
                <Input
                  className="w-full h-10 pl-4 pr-12 text-sm rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent lg:py-6"
                  placeholder="Search..."
                  type="search"
                />
                <Button
                  className="absolute inset-y-0 top-[50%] right-0 translate-y-[-50%] flex items-center justify-center w-10 text-gray-500 rounded-r-md hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
                  size="icon"
                  variant="ghost"
                >
                  <SearchIcon className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-x-3 my-5 md:max-w-2xl">
                {relatedPosts?.map((post, index) => (
                  <Link
                    href={`/post/${post.title}`}
                    key={index}
                    className="flex-row w-full flex justify-between gap-2 py-2 px-3"
                  >
                    <div>
                      <div className="flex justify-between basis-full">
                        <div>
                          <h4 className="font-normal xl:font-semibold lg:font-medium text-sm lg:text-md xl:text-lg line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="xl:line-clamp-2 max-w-2xl hidden text-xs">
                            {parse(post.description.toString())}
                          </div>
                        </div>
                      </div>
                      <div className="my-1 gap-1 flex items-center">
                        <h4 className="text-xs text-gray-600 dark:text-gray-100">
                          {post.date
                            ? formatDistanceToNow(
                                new Date(parseInt(post.date, 10) * 1000),
                                { addSuffix: true }
                              )
                            : null}
                        </h4>
                        <h5 className="text-xs font-semibold border-l pl-1 text-primary dark:text-slate-50 capitalizes">
                          stalliontimes
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile Related post */}
        <div className="my-8">
          <div className="w-full xl:hidden block">
            <div className="flex flex-col w-full justify-center items-center">
              <h2 className="font-semibold text-xl mb-1">Recent News</h2>
              <hr className="bg-gray-700 w-full h-[2px] mb-4 dark:bg-gray-400" />
              <div className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {relatedPosts?.map((post, index) => (
                  <Link
                    href={`/post/${post.title}`}
                    key={index}
                    className="flex-col flex justify-between gap-1 p-1 md:mt-0 mt-1 svelte-u7bql3"
                  >
                    <div className="relative z-0 w-full overflow-hidden mb-1 aspect-auto rounded-xl bg-gray-400 h-[10rem] svelte-u7bql3">
                      <Image
                        src={post.picture}
                        alt="post-image"
                        className="w-full h-full relative object-cover bg-center bg-cover rounded-xl"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <div className="flex justify-start items-start">
                        <div>
                          <h4 className="font-semibold text-base line-clamp-2 svelte-u7bql3">
                            {post.title}
                          </h4>
                          <div className="line-clamp-2 text-xs">
                            {parse(post.description)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CommentsForm postId={post.post_id} />
        <Comments comments={comments} />

        {/* Sliding post */}
        <PostSlide relatedPosts={relatedPosts} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="h-full justify-center items-center flex">
        An error occurred while fetching the post.
      </div>
    );
  }
};

export default PostDetails;
