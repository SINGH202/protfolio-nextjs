import { config } from "../../data";
import { EducationCardProps } from "../../type";
import { SectionHeader } from "./SectionHeader";
import { Awards } from "./Awards";

export const Education = () => {
  return (
    <section id="education" className="section-container">
      <SectionHeader title="Education & Awards" subtitle="05" />
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {config.educationInfo.map((info, index) => (
          <EducationCard key={`education-info-${index}`} {...info} />
        ))}
      </div>
      <Awards />
    </section>
  );
};

const EducationCard = ({
  title,
  link,
  address,
  courseName,
  period,
  percentage,
  courseWorks,
}: EducationCardProps) => {
  return (
    <article className="glass-card p-6 md:p-8 hover:border-accent/20 transition-colors h-full">
      <div className="flex items-start justify-between gap-3 mb-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-white hover:text-accent-glow transition-colors">
          {title}
        </a>
        <span className="font-mono text-xs text-gray-500 bg-surface-raised px-2.5 py-1 rounded-md border border-surface-border shrink-0">
          {period}
        </span>
      </div>

      <p className="text-gray-500 text-sm mb-1">{address}</p>
      <p className="text-accent font-medium mb-4">{courseName}</p>
      {percentage && (
        <p className="text-sm text-gray-400 mb-4">
          Score: <span className="text-white font-medium">{percentage}%</span>
        </p>
      )}

      <p className="text-sm text-gray-500 mb-2">Coursework</p>
      <ul className="flex flex-col gap-1.5">
        {courseWorks.map((courseWork, index) => (
          <li
            key={`course-work-${index}`}
            className="flex gap-2 text-sm text-gray-400">
            <span className="text-accent">▹</span>
            {courseWork}
          </li>
        ))}
      </ul>
    </article>
  );
};
