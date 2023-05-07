import Link from "next/link";

type Props = {
  project: {
    title: string;
    link: string;
    shortDescription: string;
    techs: JSX.Element[];
  };
};

const SingleProject = ({ project }: Props) => {
  return (
    <Link href={project.link} target="_blank">
      <div className="border-white border-4 py-3 px-6 hover:scale-110 transition">
        <h3 className="text-lg font-bold capitalize">{project.title}</h3>
        <p className="text-sm font-light mt-2">{project.shortDescription} </p>
        <div className="flex space-x-4 items-center mt-2">
          {project.techs.map((tech, id) => {
            return (
              <div key={id} className="w-7 text-white">
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default SingleProject;
