import { Eye, User } from "../logos/logo";

const HeroBtns = () => {
  return (
    <div className="flex flex-col space-y-5 mt-5 md:mt-7 lg:flex-row-reverse lg:space-y-0 lg:justify-end">
      <button className="flex w-fit px-6 items-center py-2 rounded-lg text-base border-2 border-action-pur hover:scale-105 transition">
        Projects <Eye />
      </button>
      <button className="flex w-fit px-6 py-2 rounded-lg lg:mr-5 text-base bg-action-pur hover:shadow-lg hover:shadow-action-pur/50 transition hover:scale-105">
        Download Resume <User />
      </button>
    </div>
  );
};

export default HeroBtns;
