import PageContent from "@/components/page-content";

const CivilSocietyPage = ({ params }: { params: { categoryId: string } }) => {
  return <PageContent categoryId={params.categoryId} />;
};

export default CivilSocietyPage;
