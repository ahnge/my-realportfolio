import {
  LaravelLogo,
  MysqlLogo,
  NextLogo,
  StrapiLogo,
  TailwindLogo,
  WordpressLogo,
} from "../logos/logo";
import SingleProject from "./SingleProject";

export const projects = [
  {
    id: 1,
    title: "Careerhub",
    shortDescription: "A job portal web application",
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
    title: "Hotel Lin Set",
    shortDescription: "A simple landing page using wordpress",
    link: "https://hotellinsetpyinoolwin.com",
    techs: [<WordpressLogo key={1} />],
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
