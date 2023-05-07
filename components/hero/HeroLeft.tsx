import SocialIcons from "./SocialIcons";

const HeroLeft = () => {
  return (
    <div className="flex-1 text-tertairy-bg text-white sm:pt-10 sm:pb-28 lg:pt-16 xl:pt-24 sm:text-center xl:text-left">
      <h3
        className={`font-semibold text-2xl md:text-4xl mt-2 md:mt-4 transition duration-1000`}
      >
        Hi, I&#39;m Nayzaw
      </h3>
      <p
        className={`font-normal text-base sm:mx-auto mt-3 md:mt-5 lg:text-lg max-w-md xl:mt-8 transition duration-1000 xl:mx-0`}
      >
        A web developer with a passion for creating beautiful and functional
        websites. I&#39;m committed to delivering exceptional results for my
        clients. Let&#39;s work together to bring your vision to life!
      </p>
      <SocialIcons />
    </div>
  );
};

export default HeroLeft;
