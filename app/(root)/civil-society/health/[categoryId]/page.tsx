import SubPageContent from "@/components/sub-page-content";

const CivilSocietyHealthPage = ({
  params,
}: {
  params: { categoryId: string };
}) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default CivilSocietyHealthPage;
