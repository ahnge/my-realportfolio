import { WavyBackground } from "../ui/WavyBackground";

const MaintenancePage = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Under Maintenance
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        We'll be back soon!
      </p>
    </WavyBackground>
  );
};

export default MaintenancePage;
