import SubPageContent from "@/components/sub-page-content";

const CivilSocietyWaterPage = ({
  params,
}: {
  params: { categoryId: string };
}) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default CivilSocietyWaterPage;
