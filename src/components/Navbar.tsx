import { ReactElement, useState } from "react";
import { config } from "../../data";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as SmoothNavigator } from "react-scroll";
import Link from "next/link";
import { useWindowSize } from "../../WindowSize";
import { UnOptimizedImage } from "./UnoptimizedImage";

export const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 h-full w-48 hidden lg:flex flex-col shadow-xl bg-white">
        <NavItems
          onNavItemsClicked={() => {
            return;
          }}
        />
      </nav>
      <SmallScreenNavbar />
    </div>
  );
};

export type NavItemsProps = {
  onNavItemsClicked: () => void;
};

export const NavItems = ({ onNavItemsClicked }: NavItemsProps) => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <ul className="">
      <li className="logo">
        <a id="logo-container" href="#intro" className="">
          <UnOptimizedImage
            src="/assets/img/passport-new.jpg"
            className="profile-pic"
            alt="avatar"
            width="120"
            height="22"
          />
        </a>
      </li>
      {config.navItems.map((item, index) => (
        <NavItem
          key={`nav-item-${index}`}
          icon={<item.icon fontSize="large" />}
          link={item?.link}
          openInBlank={item?.openInBlank}
          title={item?.title}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onItemClicked={async () => onNavItemsClicked()}
        />
      ))}
    </ul>
  );
};

export const SmallScreenNavbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="flex items-center fixed z-20 top-0 left-0 w-full lg:hidden shadow-xl bg-white py-3 px-4">
        <MenuIcon
          className="text-[#009688] cursor-pointer"
          fontSize="large"
          onClick={() => {
            setIsSideMenuOpen(true);
          }}
        />
        <div className="flex flex-col items-center w-fit absolute top-0 mx-auto left-0 right-0">
          <span className="teal-text text-[22px]">Anurag Singh</span>
          <span className="black-text text-sm">Full-Stack web developer</span>
        </div>
      </nav>
      {isSideMenuOpen && (
        <div
          className="z-50 fixed left-0 right-0 top-0 bottom-1 w-[100vw] h-[100vh] grid place-items-center bg-black bg-opacity-50 inset-0 overflow-x-scroll no-scrollbar"
          onClick={() => {
            setIsSideMenuOpen(false);
          }}>
          <nav className="fixed z-20 top-0 left-0 h-full w-48 flex flex-col shadow-xl bg-white">
            <NavItems
              onNavItemsClicked={() => {
                setIsSideMenuOpen(false);
              }}
            />
          </nav>
        </div>
      )}
    </div>
  );
};

export type NavItemProps = {
  icon: ReactElement;
  link: string;
  title: string;
  openInBlank: boolean;
  setActiveTab: (activeTab: string) => void;
  activeTab: string;
  onItemClicked: () => {};
};

export const NavItem = ({
  icon,
  link,
  title,
  openInBlank,
  activeTab,
  setActiveTab,
  onItemClicked,
}: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const windowWidth = useWindowSize().width;
  return (
    <li
      className="flex teal-text font-light hover:font-normal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {(isHovered || (activeTab && activeTab === title)) && (
        <div className="h-100% w-1 teal"></div>
      )}
      {openInBlank ? (
        <Link
          href={link || ""}
          target={"_blank"}
          className="flex items-end gap-2 w-full text-base hover:bg-[#f2f2f2] p-2">
          {icon}

          <p className="text-black pb-0.5">{title}</p>
        </Link>
      ) : (
        <SmoothNavigator
          activeClass="active"
          to={link}
          spy={false}
          smooth={true}
          onClick={() => {
            setActiveTab(title);
            onItemClicked();
          }}
          offset={windowWidth < 1100 ? -46 : 0}
          duration={200}
          className="flex items-end gap-2 w-full text-base hover:bg-[#f2f2f2] p-2 cursor-pointer">
          {icon}
          <p className="text-black pb-0.5">{title}</p>
        </SmoothNavigator>
      )}
    </li>
  );
};
