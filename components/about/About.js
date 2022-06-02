import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import LearningTech from "../techusing/LearningTech";
import Tech from "../techusing/Tech";
import { aboutActive } from "../features/navmenu/inViewSlice";

const About = () => {
  // useInview hook
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.4,
  });
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: expRef, inView: expInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  // redux
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
        <p
          ref={textRef}
          className={`text-white font-normal text-sm sm:text-base mt-5 transition duration-1000 ${
            textInView
              ? "opacity-100 translate-x-0"
              : " -translate-x-5 opacity-0"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ab
          reprehenderit facilis, repellendus laudantium animi iste itaque saepe?
          Odit, nesciunt.
        </p>
        <p
          ref={expRef}
          className={`text-white mt-3 font-semibold text-sm sm:text-base md:mt-5 transition duration-1000 ${
            expInView
              ? "opacity-100 translate-x-0"
              : " -translate-x-5 opacity-0"
          }`}
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
