import { Metadata } from "next";
import axios from "axios";

import PostDetails from "./_components/post-details";

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}): Promise<Metadata> {
  const postUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/get_post.php?post_id=${params.postId}`;

  try {
    const response = await axios.get(postUrl);
    const post: Post | null = response.data;

    if (!post) {
      throw new Error("Post not found");
    }

    const postDescription = post.description;

    const removeHtmlTags = (html: string) => {
      return html.replace(/<\/?[^>]+(>|$)/g, "");
    };

    const cleanDescription = removeHtmlTags(postDescription);

    return {
      title: post.title,
      description: cleanDescription,
      openGraph: {
        images: [
          {
            url: post.picture,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
      openGraph: {
        images: [
          {
            url: "default-image-url",
          },
        ],
      },
    };
  }
}

const PostPage = ({ params }: { params: { postId: string } }) => {
  return <PostDetails postId={params.postId} />;
};

export default PostPage;
