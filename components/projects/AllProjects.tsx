import {
  HtmlLogo,
  JsLogo,
  LaravelLogo,
  MysqlLogo,
  NextLogo,
  ReactLogo,
  StrapiLogo,
  TailwindLogo,
  WordpressLogo,
} from "../logos/logo";
import SingleProject from "./SingleProject";

export const projects = [
  {
    id: 1,
    title: "Careerhub",
    shortDescription: "A job portal web application for cs50x final project",
    link: "https://careerhub.fun",
    techs: [
      <LaravelLogo key={1} />,
      <TailwindLogo key={2} />,
      <MysqlLogo key={3} />,
    ],
  },
  {
    id: 2,
    title: "Eurommr",
    shortDescription: "A simple landing page",
    link: "https://eurommr.com",
    techs: [
      <NextLogo key={1} />,
      <TailwindLogo key={2} />,
      <StrapiLogo key={3} />,
    ],
  },
  {
    id: 3,
    title: "Sunnyside agency fem challenge",
    shortDescription: "Fem challenge to refresh my css skills.",
    link: "https://sunnyside-agency-ahnge.vercel.app/",
    techs: [<NextLogo key={1} />, <TailwindLogo key={2} />],
  },
  {
    id: 4,
    title: "Hotel Lin Set",
    shortDescription: "A simple landing page using wordpress",
    link: "https://hotellinsetpyinoolwin.com",
    techs: [<WordpressLogo key={1} />],
  },
  {
    id: 5,
    title: "Splitter",
    shortDescription: "Very simple tip calculator app",
    link: "https://ahnge.github.io/tip-calculator-app-main/",
    techs: [<JsLogo key={1} />, <HtmlLogo key={2} />],
  },
  {
    id: 6,
    title: "Space Tourism SPA",
    shortDescription: "Fem challenge to practice react",
    link: "https://space-tourism1.netlify.app/",
    techs: [<ReactLogo key={1} />, <TailwindLogo key={2} />],
  },
];

const AllProjects = () => {
  return (
    <section className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:gap-12 xl:gap-16 sm:px-10">
      {projects.map((p) => {
        return <SingleProject project={p} key={p.id} />;
      })}
    </section>
  );
};

export default AllProjects;
