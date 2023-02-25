import styles from "./SingleProject.module.css";

const SingleProject = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className="text-lg font-bold capitalize">{project.title}</h3>
        <p className={styles.cardSubtitle}> {project.shortDescription} </p>
      </div>
    </div>
  );
};

export default SingleProject;
