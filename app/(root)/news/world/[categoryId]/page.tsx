import SubPageContent from "@/components/sub-page-content";

const NewsWorldPage = ({ params }: { params: { categoryId: string } }) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default NewsWorldPage;
