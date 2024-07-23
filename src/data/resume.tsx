import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "NayZaw Min Naing",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "React and Nodejs develoepr. I love building things.",
  summary:
    "I'm a Software Developer with a love for technology and a curiosity about the world. Currently, I'm exploring my passions and interests, both within and beyond my work. I'm always learning, growing, and seeking to understand how I can make the most of my time and skills.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nayzawminnaing@gmail.com",
    tel: "+959 7563 18225",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ahnge",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nayzaw-minnaing/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "REI",
      href: "",
      badges: [],
      location: "Remote",
      title: "Junior Frontend Developer",
      logoUrl: "",
      start: "Jan 2024",
      end: "Present",
      description:
        "As a Junior Frontend Developer, I work closely with the tech team to create web applications. My responsibilities include developing user interfaces, implementing new features, and optimizing performance. I have contributed to projects using languages such as JavaScript, TypeScript, and React, ensuring a seamless user experience.",
    },
    {
      company: "Punyarrama",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Jan 2024",
      end: "March 2024",
      description:
        "Collaborated with a team of developers to create an in-house web portal for managing users, events, and rooms, demonstrating strong collaboration and teamwork skills. Developed features for both backend and frontend components, contributing to the seamless functionality and user experience of the web portal. Participated in the entire SDLC circle.",
    },
  ],
  education: [
    {
      school: "Strategy First University",
      href: "https://strategyfirst.edu.mm/",
      degree: "Diploma in Business management & Entrepreneurship",
      logoUrl: "/sfu-logo.jpg",
      start: "2023 Dec",
      end: "2024 Oct",
    },
    {
      school: "Harvard University",
      href: "https://certificates.cs50.io/d8878a4d-eba1-4c6b-9d30-d02aae197450.pdf?size=letter",
      degree: "CS50x - Introduction to computer science",
      logoUrl: "/harvard-logo.jpeg",
      start: "2022",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "JICA Hackathon",
      dates: "December 9th - 17th, 2023",
      location: "Yangon, Myanmar",
      description:
        "Developed a web application to solve fictional beverage production & distribution company's problems. Addressed inconsistencies in orders and product details between internal departments",
      image: "./jica-logo.jpeg",
      mlh: "",
      links: [],
    },
  ],
} as const;
