import { GithubLogo } from "../logos/logo";

const ProjectHeader = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Projects</h1>
      <a
        href="https://github.com/ahnge/"
        className="w-10 transition cursor-pointer lg:w-16 hover:text-action-pur dark:text-white dark:hover:text-action-pur"
      >
        <GithubLogo />
      </a>
    </div>
  );
};

export default ProjectHeader;
