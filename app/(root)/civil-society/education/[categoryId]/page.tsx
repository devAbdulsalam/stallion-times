import SubPageContent from "@/components/sub-page-content";

const CivilSocietyEducationPage = ({
  params,
}: {
  params: { categoryId: string };
}) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default CivilSocietyEducationPage;
