import PageContent from "@/components/page-content";

const SportsPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default SportsPage;
