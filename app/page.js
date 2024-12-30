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
        <div className="container flex flex-col md:flex-row gap-20 items-center justify-center mx-auto w-full">
          <HomeCard />
          <HomeCard />
        </div>
      </section>
      <CallToAction />
      <Info />
    </main>
  );
}
