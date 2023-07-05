import { title } from "process";
import { SkillsProps } from "../../type";
import { SectionHeader } from "./SectionHeader";
import { UnOptimizedImage } from "./UnoptimizedImage";
import { config } from "../../data";

export const Skills = () => {
  return (
    <div id="skills" className="min-h-screen w-full">
      <SectionHeader title="Skills" />
      <div className="flex flex-wrap justify-center lg:justify-start gap-5 py-5 md:py-[30px] px-5 md:px-[40px] mb-14">
        <SkillSection {...config?.languagesAndDatabases} />
      </div>
    </div>
  );
};

export const SkillSection = ({ title, skills }: SkillsProps) => {
  return (
    <div className="flex flex-col font-extralight gap-3 px-5 py-6 w-full card-shadow">
      <p className="text-3xl text-[#795548]">{title}</p>
      <div className="w-full border-b"></div>
      <div className="flex flex-wrap gap-2 items-center">
        {skills.map((skill, index) => (
          <div
            className="flex flex-col gap-2 items-center justify-center w-24 pt-2"
            key={`${title}-skills-${index}`}>
            <UnOptimizedImage
              src={skill?.icon}
              alt="logo"
              width="60"
              height="60"
              className={`aspect-[1/1]`}
            />
            <p className="text-xl font-light">{skill?.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
