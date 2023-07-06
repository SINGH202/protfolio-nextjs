import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { EducationCardProps, SkillProps, SkillsProps } from "./type";
export const config = {
  navItems: [
    { openInBlank: false, title: "About", link: "about", icon: PersonIcon },
    {
      openInBlank: false,
      title: "Projects",
      link: "projects",
      icon: LibraryBooksIcon,
    },
    {
      openInBlank: false,
      title: "Skills",
      link: "skills",
      icon: AssessmentIcon,
    },
    {
      openInBlank: false,
      title: "Education",
      link: "education",
      icon: SchoolIcon,
    },
    { openInBlank: false, title: "Contact", link: "contact", icon: EmailIcon },
    {
      openInBlank: true,
      title: "Resume",
      link: "/assets/resume/Anurag_Singh_Resume.pdf",
      icon: FolderOpenIcon,
    },
  ],
  aboutContent: `Highly skilled full stack software developer experienced in Next.js, React.js, Tailwind CSS, TypeScript, MongoDB, Express, and JavaScript. Strong background in web development, delivering scalable and user-friendly applications. Collaborative team player, adept at meeting client requirements. Expertise in responsive front-end interfaces using React.js and Next.js, efficient styling with Tailwind CSS, and optimizing performance with TypeScript. Backend proficiency includes MongoDB, Express, and designing scalable APIs. Committed to clean code and best practices. Actively seeking a full stack web developer position to contribute skills and drive project success. Contact me for details or to schedule an interview.`,
  aboutLibraries: ["React Js", "Tailwind CSS"],
  aboutFrameWorks: ["MERN-stack", "Next.js", "Flutter"],
  aboutToolsAndTechnologies: [
    "Git",
    "GitLab",
    "Gitea",
    "npm",
    "Postman",
    "Netlify",
  ],
  aboutCommunication: ["Slack", "Zulip", "Jira"],
  aboutClosingText: `Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.`,
  educationInfo: [
    {
      title: "Masai school",
      address: "Koramangala, Bengaluru, Karnataka",
      courseName: "Full-stack web development",
      link: "https://www.masaischool.com/",
      courseWorks: [
        "Front-End Web development",
        "Soft-Skills",
        "Data Structure and Algorithm",
      ],
    },
    {
      title: "GOVERNMENT POLYTECHNIC GHAZIABAD",
      address: "Ghaziabad, India",
      courseName: "Diploma in Information Technology",
      link: "https://www.gpghaziabad.ac.in/",
      percentage: 72,
      courseWorks: [
        "Operating Systems",
        "Hardware Management",
        "Software development",
      ],
    },
  ] as EducationCardProps[],
  languagesAndDatabases: {
    title: "Languages and Databases",
    skills: [
      { icon: "/assets/img/ts-logo-128.svg", label: "TypeScript" },
      { icon: "/assets/img/javascript.png", label: "JavaScript" },
      { icon: "/assets/img/html5.png", label: "HTML" },
      { icon: "/assets/img/css3.png", label: "CSS" },
      { icon: "/assets/img/dart-logo.png", label: "Dart" },
      { icon: "/assets/img/mongodb-logo.svg", label: "MongoDB" },
      { icon: "/assets/img/node-logo.svg", label: "NodeJS" },
    ],
  } as SkillsProps,
  libraries: {
    title: "Libraries",
    skills: [
      { icon: "/assets/img/react-logo.svg", label: "React Js" },
      { icon: "/assets/img/redux-logo.svg", label: "Redux" },
      { icon: "/assets/img/tailwindcss-icon.svg", label: "Tailwind CSS" },
    ],
  } as SkillsProps,
  frameWorks: {
    title: "Frameworks",
    skills: [
      { icon: "/assets/img/mern-stack-logo.png", label: "MERN" },
      { icon: "/assets/img/next-js-logo.svg", label: "Next Js" },
      { icon: "/assets/img/flutter-logo.svg", label: "Flutter" },
    ],
  } as SkillsProps,
  toolsAndTechnologies: {
    title: "Tools & Technologies",
    skills: [
      { icon: "/assets/img/git-logo.svg", label: "Git" },
      { icon: "/assets/img/gitlab-logo.svg", label: "Gitlab" },
      { icon: "/assets/img/gitea-logo.svg", label: "Gitea" },
      { icon: "/assets/img/npm-logo.svg", label: "npm" },
      { icon: "/assets/img/swagger-logo.svg", label: "Swagger" },
      { icon: "/assets/img/postman-logo.svg", label: "Postman" },
      { icon: "/assets/img/netlify-logo.svg", label: "Netlify" },
    ],
  } as SkillsProps,
  communication: {
    title: "Communication",
    skills: [
      { icon: "/assets/img/slack-icon.svg", label: "Slack" },
      { icon: "/assets/img/zulip-logo.svg", label: "Zulip" },
      { icon: "/assets/img/jira-icon.svg", label: "Jira" },
    ],
  } as SkillsProps,
  languages: ["TypeScript", "HTML/CSS", "Dart"],
  databases: ["NoSQL", "MongoDB"],
};
