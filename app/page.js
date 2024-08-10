import Title from "@/components/Title";
import Presentation from "@/components/Presentation";
import HomeCard from "@/components/HomeCard";
import CallToAction from "@/components/CallToAction";
import Info from "@/components/Info";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Title />
      <Presentation />
      <section className="w-full bg-[#404040] py-14">
        <div className="container mx-auto flex flex-col items-center w-full">
          <HomeCard />
        </div>
      </section>
      <CallToAction />
      <Info />
    </main>
  );
}
