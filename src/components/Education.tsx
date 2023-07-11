import { config } from "../../data";
import { EducationCardProps } from "../../type";
import { SectionHeader } from "./SectionHeader";

export const Education = () => {
  return (
    <div id="education" className="min-h-screen w-full">
      <SectionHeader title="Education" />
      <div className="flex flex-wrap justify-center lg:justify-start gap-5 py-5 md:py-[30px] px-5 md:px-[40px] mb-14">
        {config?.educationInfo.map((info, index) => (
          <EducationCard key={`education-info-${index}`} {...info} />
        ))}
      </div>
    </div>
  );
};

export const EducationCard = ({
  title,
  link,
  address,
  courseName,
  percentage,
  courseWorks,
}: EducationCardProps) => {
  return (
    <div className="flex flex-col gap-1 w-full min-w-[250px] xs:max-w-[400px] min-h-80 card-shadow px-5 py-6">
      <p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-2xl font-light hover:font-normal hoverline teal-text uppercase">
          {title}
        </a>
      </p>
      <p>{address}</p>
      <p>
        <b>Course: </b>
        {courseName}
      </p>
      <b>Relevant Coursework:</b>
      <ul>
        {courseWorks.map((courseWork, index) => (
          <li key={`course-work-${index}`} className="list-disc	mx-5">
            {courseWork}
          </li>
        ))}
      </ul>
    </div>
  );
};
