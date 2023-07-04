import { config } from "../../data";
import { AboutPoints } from "./AboutPoints";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <div id="about" className="text-lg sm:text-xl md:text-2xl min-h-screen ">
      <SectionHeader title="About" />
      <div className="flex flex-col gap-5 py-5 md:py-[30px] px-5 md:px-[40px] mb-14">
        <p className="aboutText">{config?.aboutContent}</p>
        <AboutPoints />
        <p className="aboutText">{config?.aboutClosingText}</p>
      </div>
    </div>
  );
};
