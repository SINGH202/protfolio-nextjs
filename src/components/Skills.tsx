import { ComponentType } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DnsIcon from "@mui/icons-material/Dns";
import CloudIcon from "@mui/icons-material/Cloud";
import PaymentsIcon from "@mui/icons-material/Payments";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import BuildIcon from "@mui/icons-material/Build";
import ExtensionIcon from "@mui/icons-material/Extension";
import { config } from "../../data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const CATEGORY_ICONS: Record<string, ComponentType<SvgIconProps>> = {
  Frontend: CodeIcon,
  Backend: DnsIcon,
  Databases: StorageIcon,
  "Cloud & DevOps": CloudIcon,
  "Payments & Integrations": PaymentsIcon,
  "AI & Developer Productivity": SmartToyIcon,
  Mobile: PhoneIphoneIcon,
  Tooling: BuildIcon,
  Other: ExtensionIcon,
};

export const Skills = () => {
  return (
    <section id="skills" className="section-container bg-surface-raised/30">
      <SectionHeader title="Technical Skills" subtitle="04" />
      <div className="grid sm:grid-cols-2 gap-6">
        {config.skillCategories.map((category, index) => {
          const Icon = CATEGORY_ICONS[category.title] ?? ExtensionIcon;
          return (
            <Reveal key={category.title} delay={index * 60} className="h-full">
              <div className="glass-card p-6 h-full hover:border-accent/20 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon className="text-accent !text-lg" />
                  </span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={`${category.title}-${skill}`} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
