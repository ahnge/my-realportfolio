import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="w-full bg-primary-bg pb-10 sm:pb-0 relative" id="home">
      <div className="w-full px-10 max-w-7xl mx-auto pt-16 sm:pt-24 flex flex-col sm:flex-row sm:gap-5 lg:px-14">
        <HeroLeft />
        <HeroRight />
      </div>
      <div className=" h-20 bg-secondary-bg absolute xl:h-28 bottom-0 inset-x-0"></div>
    </div>
  );
};

export default Hero;
