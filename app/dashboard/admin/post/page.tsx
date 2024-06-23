"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import PostCards from "@/components/post-cards";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const PostPage = () => {
  const router = useRouter();
  const [allPost, setAllPost] = useState<Post[]>();

  useEffect(() => {
    const GetAllPost = () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_blogs.php`;
      const token = localStorage.getItem("token");
      try {
        axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((data) => {
            setAllPost(data.data);
          });
      } catch (error) {
        console.log({ GetAllPostError: error });
      }
    };

    GetAllPost();
  }, []);

  return (
    <div className="p-5 lg:p-10 space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <p className="hover:text-slate-950 hover:cursor-pointer">Post</p>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center">
        <h3 className="text-xl">Recent Post</h3>
        <Button
          variant={"default"}
          className="flex items-center gap-3"
          onClick={() => router.push("/dashboard/admin/post/new")}
        >
          Create Post <Plus className="h-6 w-6" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {allPost?.map((post) => (
          <PostCards post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
