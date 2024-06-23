import SubPageContent from "@/components/sub-page-content";

const CivilSocietyAgriculturePage = ({
  params,
}: {
  params: { categoryId: string };
}) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default CivilSocietyAgriculturePage;
