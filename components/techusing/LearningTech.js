import { DjangoLogo, PostgrasLogo, PythonLogo } from "../logos/logo";

const LearningTech = () => {
  return (
    <div className="w-full px-10 lg:px-14 max-w-7xl mx-auto pt-9 pb-20">
      <h1 className="text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
        Learning now:
      </h1>
      <div className="grid grid-cols-3 gap-0 mt-10 lg:mt-14 sm:grid-cols-5">
        <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
          <PythonLogo />
        </div>
        <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
          <DjangoLogo />
        </div>
        <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
          <PostgrasLogo />
        </div>
        <div className="text-center text-xs sm:text-sm md:text-base text-green-400 self-center">
          Algorithms & <br /> Data structures
        </div>
      </div>
    </div>
  );
};

export default LearningTech;
