import { Cards } from "@/components/home/Cards";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <Introduction />
      <Cards />
    </div>
  );
}
