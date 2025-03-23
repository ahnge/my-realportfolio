import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import careerhubThumbnail from "@/assets/careerhub.png";
import hotelLsThumbnail from "@/assets/hotel-ls.png";
import threadThumbnail from "@/assets/thread.png";
import zayThumbnail from "@/assets/zicon.svg";

export const DATA = {
  name: "NayZaw Min Naing",
  initials: "NZ",
  url: "https://nayzaw.vercel.app",
  location: "Taunggyi, Myanmar",
  locationLink: "",
  description: "Aspiring Software Engineer. I love building things.",
  summary:
    "I'm a Software Developer with a love for technology and a curiosity about the world. Currently, I'm exploring my passions and interests, both within and beyond my work. I'm always learning, growing, and seeking to understand how I can make the most of my time and skills.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "Postgres",
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
      href: "https://drive.google.com/file/d/1VDnI6XdDE8XdXhhrkr9SWt4DV32gMhmp/view?usp=sharing",
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
      title: "Ahaung Tann",
      href: "",
      dates: "Mar 2025",
      active: true,
      description:
        "A platform for buying and selling used items with a credit-based payment system and seller-managed shipping. Currently in development & unavailable. Coming soon in April 2025.",
      technologies: ["Expressjs", "React", "Typescript", "Postgresql"],
      // links: [
      //   {
      //     type: "Website",
      //     href: "http://ec2-43-208-78-162.ap-southeast-7.compute.amazonaws.com/",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      links: [],
      image: zayThumbnail,
      video: "",
    },
    {
      title: "Hotel Lin Set",
      href: "",
      dates: "Mar 2024",
      active: true,
      description:
        "This project is a landing page project that I freelanced for a client. Unfortunately, my client stops operating this business. You can still check it out, I haven't taken this down yet.",
      technologies: ["Nextjs", "TailwindCSS", "Typescript", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://hotellinsetpyinoolwin.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: hotelLsThumbnail,
      video: "",
    },
    {
      title: "Thread clone",
      href: "",
      dates: "Jul 2023 - Sep 2023",
      active: false,
      description:
        "Thread Clone is a social media thread clone project, allowing users to create and participate in threaded discussions. I had to take this site down as aws free tire is expired.",
      technologies: ["Python", "Django", "HTMX", "Mysql", "Javascript"],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=Q8CkmbLg2Rw",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ahnge/thread-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: threadThumbnail,
      video: "",
    },
    {
      title: "Careerhub",
      href: "",
      dates: "Mar 2023 - April 2023",
      active: false,
      description:
        "Careerhub is a job portal web application developed for the CS50 course final project. The application allows employers to create job postings and job seekers to apply to those postings. I also had to take this down too. You can still build from source.",
      technologies: ["Php", "Laravel", "Mysql", "TailwindCSS", "Javascript"],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=TrrCWuIUeb8",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ahnge/careerhub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: careerhubThumbnail,
      video: "",
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
      links: [
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "https://github.com/ahnge/flavor-wave",
        },
      ],
    },
  ],
} as const;
