import SingleProject from "./SingleProject";

export const projects = [
  {
    id: 1,
    title: "Careerhub",
    shortDescription: "A job portal web application",
    github: "https://github.com/ahnge/careerhub",
  },
  {
    id: 2,
    title: "Eurommr",
    shortDescription: "a simple landing page",
    github: "https://github.com/ahnge/eurommr_next",
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
