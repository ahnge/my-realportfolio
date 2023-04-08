import Link from "next/link";
import { GithubLogo } from "../logos/logo";

const ProjectHeader = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Projects</h1>
      <Link
        href="https://github.com/ahnge/"
        target="_blank"
        className="w-10 transition cursor-pointer lg:w-16 hover:text-action-pur dark:text-white dark:hover:text-action-pur"
      >
        <GithubLogo />
      </Link>
    </div>
  );
};

export default ProjectHeader;
