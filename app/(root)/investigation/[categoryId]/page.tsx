import PageContent from "@/components/page-content";

const InvestigationPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default InvestigationPage;
