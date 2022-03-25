import Image from "next/image";

const SingleProject = ({ imgsrc, title, description, liveLink, github }) => {
  return (
    <div className="w-full p-5 bg-tertairy-bg rounded-md shadow-md">
      <div className="w-full">
        <Image src={imgsrc} className="rounded-md" />
      </div>
      <h3 className="text-action-pur uppercase font-semibold text-lg mt-2 lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-white font-normal text-sm mt-2 sm:text-base">
        {description}
      </p>
      <div className="flex mt-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="bg-action-pur mr-3 sm:mr-2 lg:mr-4 sm:px-3 hover:scale-105 hover:shadow-sm transition xl:px-4 xl:py-2 xl:text-base hover:shadow-action-pur px-4 py-1 rounded-lg text-white cursor-pointer font-normal text-sm"
        >
          View Live
        </a>
        <a
          className="px-4 border-2 border-action-pur sm:px-3 cursor-pointer py-1 rounded-lg hover:scale-105 transition text-white xl:text-base xl:px-4 xl:py-2 font-normal text-sm"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          Github repo
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
