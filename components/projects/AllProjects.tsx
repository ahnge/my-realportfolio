import SingleProject from "./SingleProject";

export const projects = [
  {
    id: 1,
    title: "Careerhub",
    shortDescription: "A job portal web application",
    link: "https://github.com/ahnge/careerhub",
  },
  {
    id: 2,
    title: "Eurommr",
    shortDescription: "A simple landing page",
    link: "https://github.com/ahnge/eurommr_next",
  },
  {
    id: 3,
    title: "Hotel Lin Set",
    shortDescription: "A simple landing page using wordpress",
    link: "https://hotellinsetpyinoolwin.com",
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
