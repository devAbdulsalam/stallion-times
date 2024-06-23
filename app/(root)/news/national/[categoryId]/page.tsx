import SubPageContent from "@/components/sub-page-content";

const NewsNationalPage = ({ params }: { params: { categoryId: string } }) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default NewsNationalPage;
