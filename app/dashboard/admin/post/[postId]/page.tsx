import PostDetails from "./_components/post-details";

const ProductsPage = ({ params }: { params: { postId: string } }) => {
  return (
    <div>
      <PostDetails postId={params.postId} />
    </div>
  );
};

export default ProductsPage;
