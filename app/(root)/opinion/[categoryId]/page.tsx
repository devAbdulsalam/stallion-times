import PageContent from "@/components/page-content";

const OpinionPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default OpinionPage;
