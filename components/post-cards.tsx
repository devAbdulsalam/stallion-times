"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import parse from "html-react-parser";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { DeletePostDialog } from "@/components/modals/delete-post-dialog";
import { useToast } from "./ui/use-toast";
import Link from "next/link";

interface PostCardsProps {
  post: Post;
}

const PostCards = ({ post }: PostCardsProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const onDelete = async () => {
    const token = localStorage.getItem("token");

    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/delete_post.php?id=${post.id}`;
    try {
      setLoading(true);
      const resposnse = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(resposnse.data);

      router.refresh();
      toast({ title: "Category deleted.", variant: "destructive" });
    } catch (error) {
      toast({ title: "Something went wrong.", variant: "destructive" });
      console.log(error);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <DeletePostDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        loading={loading}
        onConfirm={onDelete}
      />
      <Card className="relative w-full max-w-sm h-[32rem] sm:h-[28rem] flex flex-col">
        <Image
          alt="Product Image"
          className="aspect-[3/2] object-cover rounded-t-lg"
          src={post.picture ? post?.picture : `/${post.picture}`}
          width={500}
          height={500}
        />
        <CardHeader>
          <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
          <CardDescription className="line-clamp-3 overflow-hidden">
            {parse(post.description.slice(0, 500))}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex justify-between items-center w-full">
            <Link href={`/dashboard/admin/post/${post.title}`}>Edit</Link>
            <Button
              variant={"ghost"}
              className="text-red-500"
              onClick={() => setIsOpen(true)}
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCards;
