import PageContent from "@/components/page-content";

const PeaceSecurityPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default PeaceSecurityPage;
