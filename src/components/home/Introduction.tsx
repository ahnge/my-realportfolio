import React from "react";

const Introduction = () => {
  return (
    <div className="py-20 w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Hi, I&apos;m Nayzaw Minnaing.
      </p>
      <p className="md:text-xl text-center mt-3 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
        A Full-stack developer with over 2 years experience.
      </p>
    </div>
  );
};

export default Introduction;
