import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SectionHeader } from "./SectionHeader";
import { UnOptimizedImage } from "./UnoptimizedImage";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { LinkIconProps } from "../../type";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
  const [isExpandedView, setIsExpandedView] = useState(false);
  return (
    <div className="flex flex-col w-full min-w-[280px] xs:max-w-[400px] h-96 shadow-lg card-shadow relative rounded-md overflow-hidden">
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
              <b>Tools:</b> HTML, CSS, JS, REACT, REDUX, JSON, CSS-LIBRARIES.
            </li>
            <li className="list-disc	mx-5">Register/login to the web app.</li>
            <li className="list-disc	mx-5">
              Browse through various posts of friends on the platform.
            </li>
            <li className="list-disc	mx-5">
              Add & remove friends on the platform.
            </li>
            <li className="list-disc mx-5">Chat with friends</li>
          </ul>

          <div className="border-b"></div>
          <div className="flex items-center gap-8 p-5 h-1/4">
            <LinkIcon
              link={""}
              icon={
                <OpenInNewIcon className="shadow-lg bg-[#607d8b] text-[#ffffff] rounded-full w-14 h-14 p-2" />
              }
              tooltip={""}
            />
            <LinkIcon
              link={""}
              icon={
                <GitHubIcon className="shadow-lg bg-[#607d8b] text-[#ffffff] rounded-full w-14 h-14 p-2" />
              }
              tooltip={""}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="h-60">
            <UnOptimizedImage
              src="/assets/img/facebok-1.png"
              alt="logo"
              width="0"
              height="0"
              className={`w-full h-full`}
            />
          </div>
          <div className="flex flex-col gap-2 p-4 h-36">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-light hover:font-normal teal-text">
                Clone of Facebook
              </span>
              <MoreVertIcon
                className="teal-text text-2xl cursor-pointer"
                onClick={() => {
                  setIsExpandedView(true);
                }}
              />
            </div>
            <span className="text-lg">
              A social media website based on HTML, CSS, JS, REACT.
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export const LinkIcon = ({ link, icon, tooltip }: LinkIconProps) => {
  return (
    <a href={link} className="relative">
      <div className="flex items-center gap-10">
        <div className="group">
          {icon}
          <p className="hidden group-hover:flex absolute bottom-14 z-20 left-0 right-0 bg-black text-white rounded-sm opacity-80 p-2 w-fit max-w-xs ">
            {tooltip}
          </p>
        </div>
      </div>
    </a>
  );
};
