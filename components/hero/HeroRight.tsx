import Image from "next/image";
import profileImg from "../../public/me.jpg";
import Blob from "./Blob";

const HeroRight = () => {
  return (
    <div className="flex-1 mt-24 sm:mt-0">
      <div className="relative w-full max-w-xs mx-auto lg:max-w-lg">
        <Blob />
        <div className=" absolute w-[196px] lg:w-72 xl:w-[366px] top-0 left-1/2 -translate-x-1/2">
          <Image
            src={profileImg}
            alt="profile picture of Nay Zaw"
            className="rounded-full"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
