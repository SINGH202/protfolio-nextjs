import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as SmoothNavigator } from "react-scroll";
import Typed from "react-typed";
import { useWindowSize } from "../../WindowSize";

export const Intro = () => {
  const windowWidth = useWindowSize().width;
  return (
    <div
      id="intro"
      className="flex flex-col gap-5 font-light bg-[#64998D] text-white relative text-lg sm:text-xl md:text-2xl min-h-screen px-5 sm:px-16 lg:px-36 py-16">
      <span className="text-2xl sm:text-5xl flex flex-wrap gap-2 items-center">
        Hi, I&apos;m{" "}
        <p className="bg-[#008073] w-fit px-1 sm:p-2">Anurag Singh</p>
      </span>

      <div className="flex flex-col text-xl sm:text-2xl">
        <TypingComponent />
        <span>
          Self-driven, quick starter, passionate programmer with a curious mind
          who enjoys solving a complex and challenging real-world problems.
        </span>
      </div>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/anurag-singh-9b1723204/"
          target="_blank"
          rel="noreferrer">
          <button className="icon-btn linkedin">
            <LinkedInIcon className="text-3xl" />
          </button>
        </a>
        <a href="https://github.com/singh202/" target="_blank" rel="noreferrer">
          <button className="icon-btn github">
            <GitHubIcon className="text-3xl" />
          </button>
        </a>
      </div>
      <div className="flex gap-4 text-base">
        <SmoothNavigator
          activeClass="active"
          to={"about"}
          spy={false}
          smooth={true}
          offset={windowWidth < 1100 ? -46 : 0}
          duration={200}
          className="border cursor-pointer px-4 sm:px-10 py-3 rounded-md bg-white text-[#008073] hover:bg-transparent hover:text-white">
          Read More
        </SmoothNavigator>
        <SmoothNavigator
          activeClass="active"
          to={"contact"}
          spy={false}
          smooth={true}
          offset={windowWidth < 1100 ? -46 : 0}
          duration={200}
          className="border cursor-pointer px-4 sm:px-10 py-3 rounded-md hover:bg-white hover:text-[#008073]">
          Contact Me
        </SmoothNavigator>
      </div>
    </div>
  );
};

export const TypingComponent = () => {
  return (
    <div>
      A{" "}
      <Typed
        className="text-[#263e3a]"
        strings={["Full-stack web developer", "Fast Learner", "Problem solver"]}
        loop
        typeSpeed={80}
        backSpeed={40}
      />
    </div>
  );
};
