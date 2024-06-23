import PageContent from "@/components/page-content";

const NewsPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default NewsPage;
