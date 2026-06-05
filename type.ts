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

export type ProjectProps = {
  name: string;
  subTitle: string;
  year: string;
  features: string[];
  tools: string[];
  gitLink?: string;
  redirectLink?: string;
  accent: string;
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
};

export type NavItemConfig = {
  openInBlank: boolean;
  title: string;
  link: string;
};
