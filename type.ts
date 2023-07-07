import { ReactElement } from "react";

export type EducationCardProps = {
  title: string;
  link: string;
  address: string;
  courseName: string;
  percentage?: number;
  courseWorks: string[];
};

export type SkillsProps = {
  title: string;
  skills: SkillProps[];
};

export type SkillProps = {
  label: string;
  icon: string;
};

export type LinkIconProps = {
  link: string;
  icon: ReactElement;
  tooltip: string;
};
