import Image from "next/image";
import profileImg from "../../public/profile1.jpg";

const HeroRight = () => {
  return (
    <div className=" mt-24 flex-1 sm:mt-0">
      <dir className="w-[230px] h-[230px] mt-10 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[486px] xl:h-[486px] bg-action-pur relative rounded-full mx-auto">
        <div className=" absolute w-[196px] h-[196px] md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[366px] xl:h-[366px] left-4 lg:left-6 xl:left-14 -top-10 md:-top-16">
          <Image src={profileImg} className="rounded-full" priority={true} />
        </div>
      </dir>
    </div>
  );
};

export default HeroRight;
