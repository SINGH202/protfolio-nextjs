import { SectionHeader } from "./SectionHeader";

export const Contact = () => {
  return (
    <div id="contact" className="h-screen w-full bg-orange-600">
      <SectionHeader title="Contact" />
      {/* <ContactOption link={""} content={"+918874940467"} toolTip={""} /> */}
    </div>
  );
};

export type ContactOptionProps = {
  link: string;
  content: string;
  toolTip: string;
};

export const ContactOption = ({ content }: ContactOptionProps) => {
    
  return (
    <p>
      <a aria-label="" data-aria-posinset={"top"} href="">
        {content}
      </a>
      <span className="tooltip">This is a tooltip</span>
    </p>
  );
};
