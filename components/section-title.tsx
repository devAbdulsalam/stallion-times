interface SectionTitleProps {
  title: String;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="bg-primary py-2 px-4 w-[200px] text-white rounded-md text-center">
        {title}
      </div>
      <div className="bg-primary w-full border-b-4" />
    </div>
  );
};

export default SectionTitle;
