import { config } from "../../data";
export const AboutPoints = () => {
  return (
    <div className="flex flex-col gap-1">
      <AboutPoint title={"Languages"} content={config?.languages} />
      <AboutPoint title={"Databases"} content={config?.databases} />
      <AboutPoint title={"Libraries"} content={config?.libraries} />
      <AboutPoint title={"FrameWorks"} content={config?.frameWorks} />
      <AboutPoint
        title={"Tools & Technologies"}
        content={config?.toolsAndTechnologies}
      />
      <AboutPoint
        title={"Communication/Project Management Tools"}
        content={config?.communication}
      />
    </div>
  );
};

export type AboutPointProps = {
  title: string;
  content: string[];
};

export const AboutPoint = ({ title, content }: AboutPointProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <span className="font-medium w-fit">{title}:</span>
      {content.map((point, index) => (
        <span key={`about-point-${index}`} className="font-light">
          {point}
          {index < content.length - 1 && ","}
        </span>
      ))}
    </div>
  );
};
