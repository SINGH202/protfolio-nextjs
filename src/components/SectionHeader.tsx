export type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="w-full teal text-white py-5 md:py-[30px] px-5 md:px-[40px] text-3xl sm:text-5xl font-extralight uppercase">
      {title}
    </div>
  );
};
