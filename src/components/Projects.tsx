import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  return (
    <div id="projects" className="min-h-screen w-full">
      <SectionHeader title="Projects" />
      <div className="flex flex-wrap justify-center lg:justify-start gap-5 py-5 md:py-[30px] px-5 md:px-[40px] mb-14">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export const ProjectCard = () => {
  return (
    <div className="flex flex-col w-full min-w-[280px] xs:max-w-[400px] h-96 shadow-lg card-shadow px-5 py-6"></div>
  );
};
