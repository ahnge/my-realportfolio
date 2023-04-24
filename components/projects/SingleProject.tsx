import Link from "next/link";
import styles from "./SingleProject.module.css";

type Props = {
  project: {
    title: string;
    github: string;
    shortDescription: string;
  };
};

const SingleProject = ({ project }: Props) => {
  return (
    <Link href={project.github} target="_blank">
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className="text-lg font-bold capitalize">{project.title}</h3>
          <p className={styles.cardSubtitle}> {project.shortDescription} </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProject;
