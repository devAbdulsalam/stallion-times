import SubPageContent from "@/components/sub-page-content";

const CivilSocietyUNWomenPage = ({
  params,
}: {
  params: { categoryId: string };
}) => {
  return <SubPageContent categoryId={params.categoryId} />;
};

export default CivilSocietyUNWomenPage;
