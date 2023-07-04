import { ReactElement, useEffect, useState } from "react";
import { config } from "../../data";
import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-48 hidden md:flex flex-col shadow-xl">
      <NavItems />
    </nav>
  );
};

export const NavItems = () => {
  return (
    <ul className="">
      {config.navItems.map((item, index) => (
        <NavItem
          key={`nav-item-${index}`}
          icon={<item.icon fontSize="large" />}
          link={item?.link}
          openInBlank={item?.openInBlank}
          title={item?.title}
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
};

export const NavItem = ({ icon, link, title, openInBlank }: NavItemsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const router = useRouter();
  useEffect(() => {
    setActiveTab(router.asPath.split("#")[1]);
  }, [router, router.asPath]);

  return (
    <li
      className="flex text-[#008073]"
      // onClick={() =>
      //   router.push(`/${link}`, {
      //     target: "_blank",
      //   })
      // }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {(isHovered || (activeTab && activeTab === title.toLowerCase())) && (
        <div className="h-100% w-1 bg-[#008073]"></div>
      )}
      <Link
        href={link || ""}
        target={openInBlank ? "_blank" : "_self"}
        className="flex items-end gap-2 w-full text-base hover:bg-[#f2f2f2] p-2">
        {icon}
        <p className="text-black pb-0.5">{title}</p>
      </Link>
    </li>
  );
};
