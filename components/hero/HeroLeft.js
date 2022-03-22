import HeroBtns from "./HeroBtns";

const HeroLeft = () => {
  return (
    <div className="text-white flex-1 sm:pt-10 sm:pb-28 lg:pt-16 xl:pt-24">
      <p className="text-base font-semibold md:text-xl lg:text-2xl xl:text-[2rem]">
        Hello, I'm
      </p>
      <h3 className="font-semibold text-2xl md:text-4xl lg:text-5xl mt-2 md:mt-4 xl:text-[3.25rem]">
        Nayzaw Minnaing
      </h3>
      <p className="font-normal text-base mt-3 md:mt-5 lg:text-lg max-w-md xl:mt-8">
        Freelance developer. I create seamless web experiences for end-users.
      </p>
      <HeroBtns />
    </div>
  );
};

export default HeroLeft;
