import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, InstaIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aldo Perez",
  initials: "AP",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/san+jose",
  about:
    "Software Engineer focused on back end technologies. Building with Python and Rust. ",
  summary:
    "I am a Software Engineer with a focus on back end technologies. I currently attend San Jose State University, studying Software Engineering."+
    "I have a full time role at Marvell Semiconductors with a focus on Automation and Data Collection using Python. "+
    "In my Freetime I am learning Rust since I am deeply intrigued by the uniqueness of the language and the advantages it offers.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://aldo.vip",
  contact: {
    email: "aldo651371@gmail.com",
    tel: "+14089178343",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://x.com/BartoszJarocki",
        icon: InstaIcon,
      },
    ],
  },
  education: [
    {
      school: "San Jose State University",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2021",
      end: "2025 est.",
    },
  ],
  work: [
    {
      company: "Marvell",
      link: "https://www.marvell.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Marvell_Logo.svg/1200px-Marvell_Logo.svg.png",
      start: "2021",
      end: "2024",
      description:
        "",
    },
    {
      company: "Ops On Demand",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "",
    },
  ],
  skills: [
    "Python",
    "Java",
    "Rust",
    "JS",
    "Ansible",
    "Jenkins"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
