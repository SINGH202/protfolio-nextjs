import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
export const config = {
  navItems: [
    { openInBlank: false, title: "About", link: "#about", icon: PersonIcon },
    {
      openInBlank: false,
      title: "Projects",
      link: "#projects",
      icon: LibraryBooksIcon,
    },
    {
      openInBlank: false,
      title: "Skills",
      link: "#skills",
      icon: AssessmentIcon,
    },
    {
      openInBlank: false,
      title: "Education",
      link: "#education",
      icon: SchoolIcon,
    },
    { openInBlank: false, title: "Contact", link: "#contact", icon: EmailIcon },
    {
      openInBlank: true,
      title: "Resume",
      link: "/assets/resume/Anurag_Singh_Resume.pdf",
      icon: FolderOpenIcon,
    },
  ],
  aboutContent: `Highly skilled full stack software developer experienced in Next.js, React.js, Tailwind CSS, TypeScript, MongoDB, Express, and JavaScript. Strong background in web development, delivering scalable and user-friendly applications. Collaborative team player, adept at meeting client requirements. Expertise in responsive front-end interfaces using React.js and Next.js, efficient styling with Tailwind CSS, and optimizing performance with TypeScript. Backend proficiency includes MongoDB, Express, and designing scalable APIs. Committed to clean code and best practices. Actively seeking a full stack web developer position to contribute skills and drive project success. Contact me for details or to schedule an interview.`,
  languages: ["TypeScript", "HTML/CSS", "Dart"],
  databases: ["NoSQL", "MongoDB"],
  libraries: ["React Js", "Tailwind CSS"],
  frameWorks: ["MERN-stack", "Next.js", "Flutter"],
  toolsAndTechnologies: ["Git", "GitLab", "Gitea", "npm", "Postman", "Netlify"],
  communication: ["Slack", "Zulip", "Jira"],
  aboutClosingText: `Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.`,
};
