export type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="w-full bg-[#008073] text-white px-[40px] py-[30px] text-5xl font-extralight">
      {title}
    </div>
  );
};
