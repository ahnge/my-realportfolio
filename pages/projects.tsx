import AllProjects from "../components/projects/AllProjects";
import ProjectHeader from "../components/projects/ProjectHeader";

const Projects = () => {
  return (
    <div className="w-full min-h-[85vh] pb-10 bg-egreen sm:pb-0">
      <main className="mx-auto text-white p-7 lg:p-10 max-w-7xl lg:pt-14">
        <ProjectHeader />
        <AllProjects />
      </main>
    </div>
  );
};

export default Projects;
