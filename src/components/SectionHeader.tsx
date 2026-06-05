export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-sm text-accent uppercase tracking-widest mb-2">
        {subtitle ?? "Section"}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
};
