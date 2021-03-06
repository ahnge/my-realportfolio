import { Eye, User } from "../logos/logo";

const HeroBtns = () => {
  // onClick functions
  const handleScroll = (e) => {
    e.preventDefault();
    const location = document.querySelector("#portfolio").offsetTop;

    const navHeight = document.querySelector("#nav").offsetHeight;

    window.scrollTo({
      left: 0,
      top: location - navHeight,
    });
  };

  return (
    <div className="flex flex-col space-y-5 mt-5 md:mt-7 lg:flex-row-reverse lg:space-y-0 lg:justify-end">
      <button
        className="flex w-fit px-6 items-center py-2 rounded-lg text-base border-2 border-action-pur hover:scale-105 transition"
        onClick={handleScroll}
      >
        Projects <Eye />
      </button>
    </div>
  );
};

export default HeroBtns;
