import { ReactElement } from "react";

export type EducationCardProps = {
  title: string;
  link: string;
  address: string;
  courseName: string;
  period: string;
  percentage?: number;
  courseWorks: string[];
};

export type SkillCategoryProps = {
  title: string;
  skills: string[];
};

export type LinkIconProps = {
  link: string;
  icon: ReactElement;
  tooltip: string;
};

export type ProjectCategory = "Web" | "Mobile" | "AI" | "Web3";

export type ProjectProps = {
  name: string;
  subTitle: string;
  year: string;
  features: string[];
  tools: string[];
  gitLink?: string;
  redirectLink?: string;
  accent: string;
  category: ProjectCategory;
  type: "personal" | "professional";
  isNew?: boolean;
};

export type ExperienceProps = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export type AwardProps = {
  title: string;
  issuer: string;
  period: string;
  link?: string;
};

export type NavItemConfig = {
  openInBlank: boolean;
  title: string;
  link: string;
};
