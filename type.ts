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
