import { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { config } from "../../data";
import { ProjectProps } from "../../type";

export const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <SectionHeader title="Featured Projects" subtitle="03" />
      <div className="grid md:grid-cols-2 gap-6">
        {config.projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  name,
  subTitle,
  year,
  features,
  tools,
  gitLink,
  redirectLink,
  accent,
}: ProjectProps) => {
  return (
    <article
      className={`glass-card p-6 md:p-8 flex flex-col h-full hover:border-accent/30 transition-all duration-300 group bg-gradient-to-br ${accent}`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-accent-glow transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{subTitle}</p>
        </div>
        <span className="font-mono text-xs text-gray-500 bg-surface-raised px-2.5 py-1 rounded-md border border-surface-border shrink-0">
          {year}
        </span>
      </div>

      <ul className="flex flex-col gap-2 mb-6 flex-1">
        {features.map((feature, index) => (
          <li
            key={`${name}-feature-${index}`}
            className="flex gap-2 text-sm text-gray-400 leading-relaxed">
            <span className="text-accent shrink-0">—</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5">
        {tools.map((tool) => (
          <span key={`${name}-${tool}`} className="skill-pill text-xs py-1">
            {tool}
          </span>
        ))}
      </div>

      {(gitLink || redirectLink) && (
        <div className="flex gap-4 pt-4 border-t border-surface-border">
          {redirectLink && (
            <ProjectLink href={redirectLink} label="Live demo">
              <OpenInNewIcon className="!text-lg" />
            </ProjectLink>
          )}
          {gitLink && (
            <ProjectLink href={gitLink} label="Source code">
              <GitHubIcon className="!text-lg" />
            </ProjectLink>
          )}
        </div>
      )}
    </article>
  );
};

const ProjectLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-glow transition-colors">
    {children}
    <span>{label}</span>
  </a>
);
