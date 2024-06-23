import SubPageContent from "@/components/sub-page-content";

const NewsAfricaPage = ({ params }: { params: { categoryId: string } }) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default NewsAfricaPage;
