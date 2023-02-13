import LearningTech from "../techusing/LearningTech";
import Tech from "../techusing/Tech";

const About = () => {
  return (
    <div className=" w-full bg-primary-bg" id="about">
      <div className="w-full max-w-7xl px-10 pt-9 pb-20 mx-auto lg:px-14">
        <h1 className=" text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
          About me:
        </h1>
        <p
          className={`text-white font-normal text-sm sm:text-base mt-5 transition duration-1000 `}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ab
          reprehenderit facilis, repellendus laudantium animi iste itaque saepe?
          Odit, nesciunt.
        </p>
        <p
          className={`text-white mt-3 font-semibold text-sm sm:text-base md:mt-5 transition duration-1000 `}
        >
          <span className=" text-action-pur mr-3 font-bold text-5xl">1+</span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem odio
          ipsam ad eligendi accusamus!
        </p>
      </div>
      <Tech />
      <LearningTech />
    </div>
  );
};

export default About;
