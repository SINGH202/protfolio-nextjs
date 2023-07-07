import { useRouter } from "next/router";
import { config } from "../../data";
import { SectionHeader } from "./SectionHeader";
import { ReactElement } from "react";

export const Contact = () => {
  return (
    <div id="contact" className="h-screen w-full">
      <SectionHeader title="Contact" />
      <div className="flex flex-col justify-center lg:justify-start gap-10 p-5 md:p-[40px] my-8">
        {config?.contactInfo.map((contact, index) => (
          <ContactOption
            key={`contact-info-${index}`}
            link={contact?.link}
            content={contact?.content}
            icon={
              <contact.icon className="bg-[#607d8b] text-[#ffffff] rounded-full w-12 h-12 p-2" />
            }
            tooltip={contact?.tooltip}
          />
        ))}
      </div>
    </div>
  );
};

export type ContactOptionProps = {
  link: string;
  content: string;
  icon: ReactElement;
  tooltip: string;
};

export const ContactOption = ({
  content,
  link,
  tooltip,
  icon,
}: ContactOptionProps) => {
  const router = useRouter();
  return (
    <div className="md:w-2/3 relative">
      {link ? (
        <a href={link} className="">
          <div className="flex items-center gap-10">
            <div className="group">
              {icon}
              <p className="hidden group-hover:flex absolute bottom-14 z-20 left-0 right-0 bg-black text-white rounded-sm opacity-80 p-2 w-fit max-w-xs ">
                {tooltip}
              </p>
            </div>
            <p className="hoverline text-[#607d8b] text-xl">{content}</p>
          </div>
        </a>
      ) : (
        <a className="">
          <div className="flex items-center gap-10">
            <div className="group">
              {icon}
              <p className="hidden group-hover:flex absolute bottom-14 bg-black text-white rounded-sm opacity-80 p-2 ">
                {tooltip}
              </p>
            </div>
            <p className="hoverline text-[#607d8b] text-xl"> {content}</p>
          </div>
        </a>
      )}
    </div>
  );
};
