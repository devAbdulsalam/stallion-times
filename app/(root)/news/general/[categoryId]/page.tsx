import SubPageContent from "@/components/sub-page-content";

const NewsGeneralPage = ({ params }: { params: { categoryId: string } }) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default NewsGeneralPage;
