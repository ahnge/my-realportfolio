import Image from "next/image";
import profileImg from "../../public/profile1.jpg";

const HeroRight = () => {
  return (
    <div className=" mt-24">
      <dir className="w-[230px] h-[230px] bg-action-pur relative rounded-full mx-auto">
        <div className=" absolute w-[196px] h-[196px] left-4 -top-10">
          <Image src={profileImg} className="rounded-full" />
        </div>
      </dir>
    </div>
  );
};

export default HeroRight;
