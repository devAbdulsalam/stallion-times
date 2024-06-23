import PageContent from "@/components/page-content";

const PoliticsPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default PoliticsPage;
