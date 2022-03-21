import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="w-full bg-primary-bg pb-10">
      <div className="w-full max-w-7xl mx-auto pt-16">
        <HeroLeft />
        <HeroRight />
      </div>
      <div className=" h-20 bg-secondary-bg absolute bottom-0 inset-x-0"></div>
    </div>
  );
};

export default Hero;
