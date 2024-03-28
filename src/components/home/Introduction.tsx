import React from "react";

const Introduction = () => {
  return (
    <div className="py-20 w-full dark:bg-black bg-white dark:bg-dot-white/[0.8] bg-dot-black/[0.8] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-2xl font-bold relative z-20 bg-clip-text text-neutral-500 ">
        Hi, I&apos;m Nayzaw Minnaing.
      </p>
      <p className="md:text-xl text-center mt-3 font-bold relative z-20 bg-clip-text text-neutral-500 ">
        A Full-stack developer with over 2 years experience.
      </p>
    </div>
  );
};

export default Introduction;
