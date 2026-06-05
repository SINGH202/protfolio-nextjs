import { useEffect, useState } from "react";
import { config } from "../../data";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as SmoothNavigator } from "react-scroll";
import Link from "next/link";
import { useWindowSize } from "../../WindowSize";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const windowWidth = useWindowSize().width;
  const scrollOffset = windowWidth < 1100 ? -72 : -80;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-surface-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <SmoothNavigator
          to="intro"
          spy={false}
          smooth
          offset={scrollOffset}
          duration={300}
          className="font-bold text-lg text-white hover:text-accent-glow transition-colors cursor-pointer">
          AS<span className="text-accent">.</span>
        </SmoothNavigator>

        <div className="hidden md:flex items-center gap-8">
          {config.navItems.map((item) =>
            item.openInBlank ? (
              <Link
                key={item.title}
                href={item.link}
                target="_blank"
                className="nav-link">
                {item.title}
              </Link>
            ) : (
              <SmoothNavigator
                key={item.title}
                to={item.link}
                spy
                smooth
                offset={scrollOffset}
                duration={300}
                onSetActive={() => setActiveSection(item.link)}
                className={`nav-link cursor-pointer ${
                  activeSection === item.link ? "nav-link-active" : ""
                }`}>
                {item.title}
              </SmoothNavigator>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link href={config.resumeLink} target="_blank" className="btn-primary text-sm py-2.5 px-5">
            Download CV
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-surface/98 backdrop-blur-lg z-40">
          <div className="flex flex-col gap-1 p-6">
            {config.navItems.map((item) =>
              item.openInBlank ? (
                <Link
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  className="text-lg py-3 px-4 rounded-xl hover:bg-surface-raised text-gray-300"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              ) : (
                <SmoothNavigator
                  key={item.title}
                  to={item.link}
                  spy={false}
                  smooth
                  offset={scrollOffset}
                  duration={300}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg py-3 px-4 rounded-xl hover:bg-surface-raised text-gray-300 cursor-pointer">
                  {item.title}
                </SmoothNavigator>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};
