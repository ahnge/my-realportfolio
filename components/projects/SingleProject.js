import Image from "next/image";

const SingleProject = ({ imgsrc, title, description, liveLink, github }) => {
  return (
    <div className="w-full p-5 bg-tertairy-bg rounded-md">
      <div className="w-full">
        <Image src={imgsrc} />
      </div>
      <h3 className="text-action-pur uppercase font-semibold text-base">
        {title}
      </h3>
      <p>{description}</p>
      <div className="flex">
        <a href={liveLink}>View Live</a>
        <a href={github}>Github repo</a>
      </div>
    </div>
  );
};

export default SingleProject;
