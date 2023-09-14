import {
  LaravelLogo,
  MysqlLogo,
  NextLogo,
  StrapiLogo,
  TailwindLogo,
  DjangoLogo,
} from "../logos/logo";
import SingleProject from "./SingleProject";

export const projects = [
  {
    id: 1,
    title: "Thread clone",
    shortDescription: "A social media app thread clone.",
    link: "https://thread.nayzaw.com",
    techs: [
      <TailwindLogo key={1} />,
      <MysqlLogo key={2} />,
      <DjangoLogo key={3} />,
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Sunnyside agency fem challenge",
    shortDescription: "Fem challenge to refresh my css skills.",
    link: "https://sunnyside-agency-ahnge.vercel.app/",
    techs: [<NextLogo key={1} />, <TailwindLogo key={2} />],
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
