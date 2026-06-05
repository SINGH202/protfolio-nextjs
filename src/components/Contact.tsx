import { config } from "../../data";
import { SectionHeader } from "./SectionHeader";
import { ReactElement } from "react";
import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className="section-container bg-surface-raised/30">
      <SectionHeader title="Get In Touch" subtitle="06" />
      <div className="max-w-2xl">
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
          I&apos;m open to discussing full-stack engineering roles, freelance projects,
          or collaborations on web and mobile products. Feel free to reach out — I&apos;ll
          get back to you as soon as I can.
        </p>

        <div className="flex flex-col gap-4 mb-10">
          {config.contactInfo.map((contact, index) => (
            <ContactOption
              key={`contact-info-${index}`}
              link={contact.link}
              content={contact.content}
              icon={<contact.icon className="!text-xl" />}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${config.email}`} className="btn-primary">
            Send Email
          </a>
          <Link href={config.resumeLink} target="_blank" className="btn-secondary">
            Download Resume
          </Link>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} {config.name}. Built with Next.js & TailwindCSS.</p>
        <div className="flex gap-6">
          <a href={config.github} target="_blank" rel="noreferrer" className="hover:text-accent-glow transition-colors">
            GitHub
          </a>
          <a href={config.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-glow transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
};

type ContactOptionProps = {
  link: string;
  content: string;
  icon: ReactElement;
};

const ContactOption = ({ content, link, icon }: ContactOptionProps) => {
  const inner = (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-surface-border bg-surface-card hover:border-accent/30 hover:bg-surface-raised transition-all group">
      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
        {icon}
      </div>
      <span className="text-gray-300 group-hover:text-white transition-colors">{content}</span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target={link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
};
