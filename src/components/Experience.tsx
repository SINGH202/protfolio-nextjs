import { config } from "../../data";
import { ExperienceProps } from "../../type";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export const Experience = () => {
  return (
    <section id="experience" className="section-container bg-surface-raised/30">
      <SectionHeader title="Experience" subtitle="02" />
      <div className="flex flex-col gap-8">
        {config.experience.map((job, index) => (
          <Reveal key={`${job.company}-${index}`} delay={index * 80}>
            <ExperienceCard {...job} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({
  company,
  role,
  period,
  highlights,
  tags,
}: ExperienceProps) => {
  return (
    <article className="glass-card p-6 md:p-8 hover:border-accent/20 transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-accent-glow transition-colors">
            {role}
          </h3>
          <p className="text-accent font-medium mt-1">{company}</p>
        </div>
        <span className="font-mono text-sm text-gray-500 bg-surface-raised px-3 py-1.5 rounded-lg border border-surface-border w-fit shrink-0">
          {period}
        </span>
      </div>

      <ul className="flex flex-col gap-2.5 mb-6">
        {highlights.map((point, index) => (
          <li
            key={`${company}-point-${index}`}
            className="flex gap-3 text-gray-400 text-sm sm:text-base leading-relaxed">
            <span className="text-accent mt-1.5 shrink-0">▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={`${company}-${tag}`}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface text-gray-400 border border-surface-border">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
