import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SectionHeader } from "./SectionHeader";
import { UnOptimizedImage } from "./UnoptimizedImage";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { LinkIconProps, ProjectProps } from "../../type";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { config } from "../../data";

export const Projects = () => {
  return (
    <div id="projects" className="min-h-screen w-full">
      <SectionHeader title="Projects" />
      <div className="flex flex-wrap justify-center lg:justify-start gap-5 py-5 md:py-[30px] px-5 md:px-[40px] mb-14">
        {config?.projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export const ProjectCard = ({
  name,
  subTitle,
  image,
  features,
  tools,
  gitLink,
  redirectLink,
}: ProjectProps) => {
  const [isExpandedView, setIsExpandedView] = useState(false);
  return (
    <div className="flex flex-col w-full min-w-[270px] xs:max-w-[400px] h-96 shadow-lg card-shadow relative rounded-md overflow-hidden">
      {isExpandedView ? (
        <div className="h-full">
          <CloseIcon
            onClick={() => {
              setIsExpandedView(false);
            }}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <ul className="h-3/4 text-lg overflow-y-scroll p-5">
            <li className="list-disc	mx-5">
              <b>Tools:</b>{" "}
              {tools.map((tool, index) => (
                <span key={`${name}-tools-${index}`}>
                  {tool}
                  {tools.length - 1 > index ? ", " : "."}
                </span>
              ))}
            </li>
            {features.map((feature, index) => (
              <li key={`${name}-feature-${index}`} className="list-disc	mx-5">
                {feature}
              </li>
            ))}
          </ul>

          <div className="border-b"></div>
          <div className="flex items-center gap-8 p-5 h-1/4">
            <LinkIcon
              link={redirectLink}
              icon={
                <OpenInNewIcon className="shadow-lg bg-[#607d8b] text-[#ffffff] rounded-full w-14 h-14 p-2" />
              }
              tooltip={"View in new-tab"}
            />
            <LinkIcon
              link={gitLink}
              icon={
                <GitHubIcon className="shadow-lg bg-[#607d8b] text-[#ffffff] rounded-full w-14 h-14 p-2" />
              }
              tooltip={"View on github"}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="h-60">
            <UnOptimizedImage
              src={image}
              alt="logo"
              width="0"
              height="0"
              className={`w-full h-full`}
            />
          </div>
          <div className="flex flex-col gap-2 p-4 h-36">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-light hover:font-normal teal-text">
                {name}
              </span>
              <MoreVertIcon
                className="teal-text text-2xl cursor-pointer"
                onClick={() => {
                  setIsExpandedView(true);
                }}
              />
            </div>
            <span className="text-lg">{subTitle}</span>
          </div>
        </>
      )}
    </div>
  );
};

export const LinkIcon = ({ link, icon, tooltip }: LinkIconProps) => {
  return (
    <a href={link} target="_blank" className="relative" rel="noreferrer">
      <div className="flex items-center gap-10">
        <div className="group">
          {icon}
          <span className="hidden group-hover:flex absolute bottom-14 z-20 left-0 right-0 bg-black text-white rounded-sm opacity-80 p-2 ">
            {tooltip}
          </span>
        </div>
      </div>
    </a>
  );
};
