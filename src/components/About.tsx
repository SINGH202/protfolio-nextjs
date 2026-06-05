import { config } from "../../data";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section id="about" className="section-container">
      <SectionHeader title="About Me" subtitle="01" />
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16">
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          {config.aboutContent}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {config.aboutHighlights.map((item) => (
            <div key={item.label} className="glass-card p-5 hover:border-accent/30 transition-colors">
              <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
