import { PostgrasLogo, PythonLogo } from "../logos/logo";
const InterestedTech = () => {
  return (
    <div className="w-full px-10 lg:px-14 max-w-7xl mx-auto pt-9 pb-20">
      <h1 className="text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
        Interested to learn:
      </h1>
      <div className="grid grid-cols-3 gap-0 mt-10 lg:mt-14 sm:grid-cols-5">
        <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
          <PythonLogo />
        </div>
        <div className=" w-16 md:w-20 lg:w-24 self-center justify-self-center">
          <PostgrasLogo />
        </div>
      </div>
    </div>
  );
};

export default InterestedTech;
