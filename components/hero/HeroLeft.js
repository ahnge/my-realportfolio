import HeroBtns from "./HeroBtns";

const HeroLeft = () => {
  return (
    <div className="text-white px-10">
      <p className="text-base font-semibold">Hello, I'm</p>
      <h3 className="font-semibold text-2xl mt-2">Nayzaw Minnaing</h3>
      <p className="font-normal text-base mt-3">
        Freelance developer. I create seamless web experiences for end-users.
      </p>
      <HeroBtns />
    </div>
  );
};

export default HeroLeft;
