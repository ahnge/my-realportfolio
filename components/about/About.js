import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import LearningTech from "../techusing/LearningTech";
import Tech from "../techusing/Tech";
import InterestedTech from "../techusing/InterestedTech";
import { aboutActive } from "../features/navmenu/inViewSlice";

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.4,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (aboutInView) {
      dispatch(aboutActive());
    }
  }, [aboutInView]);

  return (
    <div ref={aboutRef} className=" w-full bg-primary-bg" id="about">
      <div className="w-full max-w-7xl px-10 pt-9 pb-20 mx-auto lg:px-14">
        <h1 className=" text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
          About me:
        </h1>
        <p className="text-white font-normal text-sm sm:text-base mt-5">
          Hi, I am Nayzaw Minnaing, a developer. I&apos;ve been learning web
          development since 2021 and now I&apos;ve reach a point where I am
          pretty confident with some frontend technologies.
        </p>
        <p className="text-white mt-3 font-semibold text-sm sm:text-base md:mt-5">
          <span className=" text-action-pur mr-3 font-bold text-5xl">1+</span>
          year of experience. Specialised in building frontend website, while
          ensuring a seamless web experience for end users.
        </p>
      </div>
      <Tech />
      <LearningTech />
      <InterestedTech />
    </div>
  );
};

export default About;
