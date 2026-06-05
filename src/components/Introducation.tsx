import { ReactNode } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link as SmoothNavigator } from "react-scroll";
import { ReactTyped } from "react-typed";
import { config } from "../../data";
import { UnOptimizedImage } from "./UnoptimizedImage";
import { useWindowSize } from "../../WindowSize";

export const Intro = () => {
  const windowWidth = useWindowSize().width;
  const scrollOffset = windowWidth < 1100 ? -72 : -80;

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center hero-glow overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#30363d_1px,transparent_1px),linear-gradient(to_bottom,#30363d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

      <div className="section-container relative z-10 w-full pt-24 md:pt-28">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-surface-border bg-surface-raised/50 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </div>

            <div>
              <p className="text-gray-400 text-lg mb-2">Hi, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                {config.name}
              </h1>
            </div>

            <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              <ReactTyped
                strings={config.typingStrings}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="gradient-text font-semibold"
              />
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed font-mono">
              {config.tagline}
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <LocationOnIcon className="text-accent !text-base" />
                {config.location}
              </span>
              <span className="hidden sm:inline text-surface-border">|</span>
              <span className="flex items-center gap-1.5">
                <EmailIcon className="text-accent !text-base" />
                {config.email}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <SmoothNavigator
                to="experience"
                spy={false}
                smooth
                offset={scrollOffset}
                duration={300}
                className="btn-primary cursor-pointer">
                View Experience
              </SmoothNavigator>
              <SmoothNavigator
                to="contact"
                spy={false}
                smooth
                offset={scrollOffset}
                duration={300}
                className="btn-secondary cursor-pointer">
                Get in Touch
              </SmoothNavigator>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <SocialLink href={config.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href={config.github} label="GitHub">
                <GitHubIcon />
              </SocialLink>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-6 animate-float">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/30 to-cyan-500/20 blur-2xl" />
              <UnOptimizedImage
                src="/assets/img/passport-new.jpg"
                alt="Anurag Singh"
                width={280}
                height={280}
                className="relative w-64 h-64 xl:w-72 xl:h-72 rounded-2xl object-cover border-2 border-surface-border shadow-2xl"
              />
            </div>
            <div className="glass-card px-6 py-4 text-center">
              <p className="text-3xl font-bold gradient-text">{config.yearsOfExperience}</p>
              <p className="text-sm text-gray-400 mt-1">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDownwardIcon className="!text-sm" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-11 h-11 rounded-xl border border-surface-border bg-surface-raised text-gray-400 hover:text-accent-glow hover:border-accent/50 transition-all duration-200">
    {children}
  </a>
);
