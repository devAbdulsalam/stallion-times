import SubPageContent from "@/components/sub-page-content";

const CivilSocietyClimateChangePage = ({
  params,
}: {
  params: { categoryId: string };
}) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default CivilSocietyClimateChangePage;
