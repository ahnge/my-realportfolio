import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import HeroBtns from "./HeroBtns";

const HeroLeft = () => {
  // states
  const [nameIsInView, setNameIsInView] = useState(false);
  const [descIsInView, setDescIsInView] = useState(false);

  // useinview hook
  const { ref: helloRef, inView: helloInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: nameRef, inView: nameInview } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { ref: descRef, inView: descInview } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNameIsInView(true);
    }, 500);

    const secTimeout = setTimeout(() => {
      setDescIsInView(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(secTimeout);
    };
  }, [nameInview, descInview]);

  return (
    <div className="text-white flex-1 sm:pt-10 sm:pb-28 lg:pt-16 xl:pt-24">
      <p
        ref={helloRef}
        className={`text-base font-semibold md:text-xl lg:text-2xl xl:text-[2rem] transition duration-1000 ${
          helloInView
            ? "opacity-100 translate-x-0"
            : " -translate-x-5 opacity-0"
        }`}
      >
        Hello, I&apos;m
      </p>
      <h3
        ref={nameRef}
        className={`font-semibold text-2xl md:text-4xl lg:text-5xl mt-2 md:mt-4 xl:text-[3.25rem] transition duration-1000 ${
          nameIsInView
            ? "opacity-100 translate-x-0"
            : " -translate-x-5 opacity-0"
        }`}
      >
        Nayzaw Minnaing
      </h3>
      <p
        ref={descRef}
        className={`font-normal text-base mt-3 md:mt-5 lg:text-lg max-w-md xl:mt-8 transition duration-1000 ${
          descIsInView
            ? "opacity-100 translate-x-0"
            : " -translate-x-5 opacity-0"
        }`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsam
        autem pariatur reprehenderit.
      </p>
      <HeroBtns />
    </div>
  );
};

export default HeroLeft;
