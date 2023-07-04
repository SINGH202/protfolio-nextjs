export type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="w-full bg-[#008073] text-white py-5 md:py-[30px] px-5 md:px-[40px] text-5xl font-extralight">
      {title}
    </div>
  );
};
