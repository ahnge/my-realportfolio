import {
  NextLogo,
  ReactLogo,
  ReduxLogo,
  StrapiLogo,
  TailwindLogo,
} from "../logos/logo";

const Tech = () => {
  return (
    <div className="w-full bg-primary-bg">
      <div className="w-full px-10 lg:px-14 max-w-7xl mx-auto pt-9 pb-20">
        <h1 className="text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
          Using Techs:
        </h1>
        <div className="grid grid-cols-3 gap-10 mt-10 lg:mt-14 sm:grid-cols-5">
          <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
            <NextLogo />
          </div>
          <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
            <ReactLogo />
          </div>
          <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
            <TailwindLogo />
          </div>
          <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
            <StrapiLogo />
          </div>
          <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
            <ReduxLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
