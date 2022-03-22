const About = () => {
  return (
    <div className=" w-full bg-primary-bg">
      <div className="w-full max-w-7xl px-10 pt-9 pb-20 mx-auto lg:px-14">
        <h1 className=" text-action-pur text-2xl md:text-3xl lg:text-[2rem] font-semibold">
          About me:
        </h1>
        <p className="text-white font-normal text-sm sm:text-base mt-5">
          Hi, my name is Nay Zaw Min Naing, I am a Frontend web developer. I
          have honed my skills in Web Development. Here are the major skills i
          have.{" "}
        </p>
        <p className="text-white mt-3 font-semibold text-sm sm:text-base md:mt-5">
          <span className=" text-action-pur mr-3 font-bold text-5xl">1+</span>
          years of experience. Specialised in building frontend website, while
          ensuring a seamless web experience for end users.
        </p>
      </div>
    </div>
  );
};

export default About;
