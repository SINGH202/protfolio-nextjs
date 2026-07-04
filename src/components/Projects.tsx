import { ReactNode, useMemo, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { config } from "../../data";
import { ProjectCategory, ProjectProps } from "../../type";

const CATEGORY_ORDER: ProjectCategory[] = ["Web", "Mobile", "AI", "Web3"];
type Filter = "All" | ProjectCategory;

export const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");

  const filters = useMemo<Filter[]>(() => {
    const present = CATEGORY_ORDER.filter((cat) =>
      config.projects.some((p) => p.category === cat)
    );
    return ["All", ...present];
  }, []);

  const visibleProjects = useMemo(
    () =>
      filter === "All"
        ? config.projects
        : config.projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section-container">
      <SectionHeader title="Featured Projects" subtitle="03" />

      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
              filter === f
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-surface-raised border border-surface-border text-gray-400 hover:text-white hover:border-accent/40"
            }`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <Reveal
            key={`${filter}-${project.name}`}
            delay={index * 70}
            className="h-full">
            <ProjectCard {...project} />
          </Reveal>
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
  type,
  isNew,
}: ProjectProps) => {
  const hasLinks = Boolean(gitLink || redirectLink);

  return (
    <article
      className={`glass-card p-6 md:p-8 flex flex-col h-full transition-all duration-300 group bg-gradient-to-br ${accent} border-transparent hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-semibold text-white group-hover:text-accent-glow transition-colors">
              {name}
            </h3>
            {isNew && (
              <span className="font-mono text-[10px] uppercase tracking-wide text-accent-glow bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
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

      <div className="flex gap-4 pt-4 border-t border-surface-border/70 mt-auto">
        {hasLinks ? (
          <>
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
          </>
        ) : (
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <LockOutlinedIcon className="!text-base" />
            {type === "professional" ? "Private · NDA" : "Source private"}
          </span>
        )}
      </div>
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
    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-glow transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
    {children}
    <span>{label}</span>
  </a>
);
