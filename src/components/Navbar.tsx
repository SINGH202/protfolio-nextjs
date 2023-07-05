import { ReactElement, useEffect, useState } from "react";
import { config } from "../../data";
import { useRouter } from "next/router";
import { Link as SmoothNavigator } from "react-scroll";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 hidden md:flex flex-col shadow-xl bg-white">
      <NavItems />
    </nav>
  );
};

export const NavItems = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <ul className="">
      {config.navItems.map((item, index) => (
        <NavItem
          key={`nav-item-${index}`}
          icon={<item.icon fontSize="large" />}
          link={item?.link}
          openInBlank={item?.openInBlank}
          title={item?.title}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </ul>
  );
};

export type NavItemsProps = {
  icon: ReactElement;
  link: string;
  title: string;
  openInBlank: boolean;
  setActiveTab: (activeTab: string) => void;
  activeTab: string;
};

export const NavItem = ({
  icon,
  link,
  title,
  openInBlank,
  activeTab,
  setActiveTab,
}: NavItemsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex teal-text font-light hover:font-normal"
      onClick={() => {
        console.log(title);
        setActiveTab(title);
      }}
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
            console.log(title);
            setActiveTab(title);
          }}
          offset={0}
          duration={200}
          className="flex items-end gap-2 w-full text-base hover:bg-[#f2f2f2] p-2 cursor-pointer">
          {icon}
          <p className="text-black pb-0.5">{title}</p>
        </SmoothNavigator>
      )}
    </li>
  );
};
