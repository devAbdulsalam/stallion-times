import PageContent from "@/components/page-content";

const EntertainmentPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default EntertainmentPage;
