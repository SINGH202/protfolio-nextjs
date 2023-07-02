import { config } from "../../data";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <div id="about" className="min-h-screen ">
      <SectionHeader title="About" />
      <p className="aboutText">{config?.aboutContent}</p>
    </div>
  );
};
