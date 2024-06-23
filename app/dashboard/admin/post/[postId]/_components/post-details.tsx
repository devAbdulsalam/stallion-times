"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { PostForm } from "./post-form";

interface PostDetailsProps {
  postId: any;
}

const PostDetails = ({ postId }: PostDetailsProps) => {
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const postUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_post.php?post_id=${postId}`;
      console.log(postUrl);

      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(postUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);

        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  return <PostForm initialData={post} />;
};

export default PostDetails;
