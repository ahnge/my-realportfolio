import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
const Hero = () => {
  return (
    <div className="w-full min-h-[85vh] pb-10 bg-egreen sm:pb-0">
      <div className="flex flex-col w-full pt-24 mx-auto px-9 max-w-7xl xl:flex-row sm:gap-5 lg:px-16">
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
