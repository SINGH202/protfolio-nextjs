import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  AwardProps,
  EducationCardProps,
  ExperienceProps,
  NavItemConfig,
  ProjectProps,
  SkillCategoryProps,
} from "./type";

export const config = {
  name: "Anurag Singh",
  title: "Full-Stack Engineer",
  tagline:
    "Next.js · TypeScript · Flutter · Node.js · AWS",
  location: "Uttar Pradesh, India",
  email: "apk.anurag.singh@gmail.com",
  phone: "+91-8874940467",
  linkedin: "https://www.linkedin.com/in/anurag-singh-9b1723204/",
  github: "https://github.com/singh202/",
  resumeLink: "/assets/resume/Anurag-Singh-Resume.pdf",
  yearsOfExperience: "4+",
  typingStrings: [
    "Full-Stack Engineer",
    "Next.js Specialist",
    "TypeScript Developer",
    "Flutter Mobile Developer",
  ],

  navItems: [
    { openInBlank: false, title: "About", link: "about" },
    { openInBlank: false, title: "Experience", link: "experience" },
    { openInBlank: false, title: "Projects", link: "projects" },
    { openInBlank: false, title: "Skills", link: "skills" },
    { openInBlank: false, title: "Education", link: "education" },
    { openInBlank: false, title: "Contact", link: "contact" },
    { openInBlank: true, title: "Resume", link: "/assets/resume/Anurag-Singh-Resume.pdf" },
  ] as NavItemConfig[],

  aboutContent: `Full-Stack Engineer with 4+ years of experience building production-grade web and mobile applications using Next.js, React, TypeScript, Flutter, Node.js, PostgreSQL, Redis, and AWS. Experienced in delivering SaaS, EdTech, FinTech, Web3, and community-driven platforms with expertise in serverless architectures, payment integrations, authentication systems, BLE-enabled mobile applications, and real-time communication systems.`,

  aboutHighlights: [
    { label: "Years Experience", value: "4+" },
    { label: "Domains", value: "SaaS · EdTech · FinTech · Web3" },
    { label: "Platforms", value: "Web · Mobile · Serverless" },
    { label: "Award", value: "MVP @ F22 Labs" },
  ],

  experience: [
    {
      company: "DoersCircle",
      role: "Full-Stack Developer",
      period: "Aug 2025 – Present",
      tags: ["TypeScript", "Hono", "AWS Lambda", "PostgreSQL", "Redis", "Stripe"],
      highlights: [
        "Architected and maintained a full-stack TypeScript platform using Hono 4.x, AWS Lambda, PostgreSQL, Redis, and Serverless Framework.",
        "Developed and launched platform modules including Events, Masterclasses, Guides, Layoffs, Terms & Conditions, and About Us through a custom CMS workflow.",
        "Implemented Role-Based Access Control (RBAC) across admin and user applications, securing premium membership tiers and gated resources.",
        "Designed secure JWT authentication, Stripe subscription billing workflows, and backend content-gating mechanisms.",
        "Built transactional email systems using Mailgun and Mailchimp-Mandrill and integrated Prismic CMS for content management.",
        "Implemented analytics reporting and export tooling using Mixpanel for operational insights.",
      ],
    },
    {
      company: "F22 Labs",
      role: "Frontend Developer",
      period: "Oct 2023 – Aug 2025",
      tags: ["Next.js", "TypeScript", "Flutter", "TailwindCSS", "Razorpay", "BLE"],
      highlights: [
        "Developed villa booking and reservation platforms using Next.js, TypeScript, TailwindCSS, Google Maps, and Razorpay payment integration.",
        "Built BLE-enabled mobile applications with secure device communication, Firebase notifications, and location-based services using Flutter.",
        "Improved user experience and application performance, increasing average session duration by 15%.",
        "Managed Android and iOS application deployments using Android Studio, Xcode, and App Store Connect.",
        "Delivered production-ready features across web and mobile platforms while working closely with product, design, and backend teams.",
        "Received Most Valuable Player (MVP) Award for consistent high-impact project delivery.",
      ],
    },
    {
      company: "Web3 Citadel",
      role: "Software Developer",
      period: "May 2022 – Sep 2023",
      tags: ["React", "Next.js", "TailwindCSS", "Web3", "Flutter", "ARCore"],
      highlights: [
        "Delivered performant and responsive web applications using React, Next.js, and TailwindCSS, improving load times and user engagement by 30%.",
        "Integrated MetaMask wallet authentication, Stripe payments, Ethereum payments, and OAuth login systems into a carbon credit marketplace.",
        "Built Flutter camera modules with ARCore-powered augmented reality features to enhance user interaction.",
        "Worked in Agile teams with strong emphasis on performance, maintainability, and responsive design.",
      ],
    },
  ] as ExperienceProps[],

  projects: [
    {
      name: "Doerscircle Platform",
      subTitle: "SaaS community platform with gated premium content and subscription billing.",
      year: "2025",
      accent: "from-emerald-500/20 to-teal-500/10",
      tools: ["TypeScript", "Next.js", "AWS Lambda", "Redis", "Stripe", "Prismic CMS"],
      features: [
        "Designed automated data synchronization workflows between admin and user-facing systems.",
        "Engineered gated-access architecture for premium resources using JWT-scoped authorization.",
        "Built subscription-based access control for events, masterclasses, guides, and legal content.",
      ],
      redirectLink: "",
      gitLink: "",
    },
    {
      name: "Villa Booking Platform",
      subTitle: "Responsive villa booking platform with dynamic search and payment integration.",
      year: "2024",
      accent: "from-sky-500/20 to-blue-500/10",
      tools: ["Next.js", "TailwindCSS", "Razorpay", "Mixpanel", "Google Maps"],
      features: [
        "Built dynamic search and booking management with real-time availability.",
        "Integrated Razorpay payments and behavioral analytics with Mixpanel.",
        "Optimized UX flows for reservation and checkout experiences.",
      ],
      redirectLink: "",
      gitLink: "",
    },
    {
      name: "Financial EdTech Platform",
      subTitle: "Course purchasing platform with peer networking and discussion forums.",
      year: "2024",
      accent: "from-violet-500/20 to-purple-500/10",
      tools: ["Next.js", "Razorpay", "TypeScript", "TailwindCSS"],
      features: [
        "Developed course purchasing flows with integrated payment workflows.",
        "Built peer networking and discussion forum features for learner engagement.",
        "Delivered responsive, production-ready UI across the learning platform.",
      ],
      redirectLink: "",
      gitLink: "",
    },
    {
      name: "Carbon Credit Marketplace",
      subTitle: "Blockchain-based marketplace with Web3 payments and OAuth authentication.",
      year: "2023",
      accent: "from-amber-500/20 to-orange-500/10",
      tools: ["Next.js", "MetaMask", "Stripe", "Ethereum", "OAuth", "TailwindCSS"],
      features: [
        "Implemented MetaMask wallet integration and Ethereum payment flows.",
        "Built Stripe and OAuth authentication for hybrid Web2/Web3 access.",
        "Developed advanced filtering and marketplace discovery features.",
      ],
      redirectLink: "",
      gitLink: "",
    },
  ] as ProjectProps[],

  skillCategories: [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "TailwindCSS", "Redux", "Vite"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Hono"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Knex", "MongoDB", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "Serverless Framework", "Docker", "Firebase", "CI/CD", "Vercel", "Netlify"],
    },
    {
      title: "Payments & Integrations",
      skills: ["Stripe", "Razorpay", "Mailgun", "Mailchimp", "Prismic CMS", "Mixpanel"],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "BLE (GATT)", "Firebase Notifications", "Android Studio", "Xcode", "TestFlight"],
    },
    {
      title: "Tooling",
      skills: ["Zod", "Ajv", "Swagger", "Postman", "Git", "GitLab", "Jira"],
    },
    {
      title: "Other",
      skills: ["ARCore", "Web3", "MetaMask", "PDFKit", "xlsx"],
    },
  ] as SkillCategoryProps[],

  educationInfo: [
    {
      title: "Masai School",
      address: "Bengaluru, Karnataka",
      courseName: "Full-Stack Web Development Program",
      link: "https://www.masaischool.com/",
      period: "Aug 2021 – Apr 2022",
      courseWorks: [
        "Full-Stack Web Development",
        "Data Structures & Algorithms",
        "Cloud Deployment",
      ],
    },
    {
      title: "Govt. Polytechnic Ghaziabad",
      address: "Ghaziabad, India",
      courseName: "Diploma in Information Technology",
      link: "https://www.gpghaziabad.ac.in/",
      period: "Jun 2018 – Aug 2021",
      percentage: 72,
      courseWorks: [
        "Operating Systems",
        "Hardware Management",
        "Software Development",
      ],
    },
  ] as EducationCardProps[],

  awards: [
    {
      title: "Most Valuable Player (MVP)",
      issuer: "F22 Labs",
      period: "Apr 2024",
    },
    {
      title: "Full-Stack Web Development with Cloud",
      issuer: "Masai School",
      period: "Apr 2022",
    },
  ] as AwardProps[],

  contactInfo: [
    {
      link: "tel:+918874940467",
      tooltip: "Call Anurag",
      content: "+91-8874940467",
      icon: LocalPhoneIcon,
    },
    {
      link: "mailto:apk.anurag.singh@gmail.com",
      tooltip: "Email Anurag",
      content: "apk.anurag.singh@gmail.com",
      icon: EmailIcon,
    },
    {
      link: "https://github.com/singh202",
      tooltip: "View on GitHub",
      content: "github.com/singh202",
      icon: GitHubIcon,
    },
    {
      link: "https://www.linkedin.com/in/anurag-singh-9b1723204/",
      tooltip: "View on LinkedIn",
      content: "linkedin.com/in/anurag-singh",
      icon: LinkedInIcon,
    },
    {
      link: "",
      tooltip: "Location",
      content: "Uttar Pradesh, India",
      icon: LocationOnIcon,
    },
  ],
};
