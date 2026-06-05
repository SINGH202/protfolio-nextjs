import { config } from "../../data";
import { SectionHeader } from "./SectionHeader";

export const Skills = () => {
  return (
    <section id="skills" className="section-container bg-surface-raised/30">
      <SectionHeader title="Technical Skills" subtitle="04" />
      <div className="grid sm:grid-cols-2 gap-6">
        {config.skillCategories.map((category) => (
          <div key={category.title} className="glass-card p-6 hover:border-accent/20 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
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
        ))}
      </div>
    </section>
  );
};
