import Image from "next/image";
import figure1 from "@/public/images/figure1.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Presentation() {
  return (
    <section className="flex flex-col items-center bg-black w-full py-14">
      <div className="flex flex-col items-center container mx-auto h-full w-full">
        <h2
          className={`${oswald.className} font-semibold text-4xl text-center`}
        >
          The Story Of Our Locations
        </h2>
        <h3 className={`${oswald.className} text-2xl font-semibold pt-5`}>
          What we do
        </h3>
        <p className="tracking-wide leading-relaxed text-center py-5 w-9/12">
          Our company is providing the service of an Internet café, but not
          quite as you know them. The modern Internet cafes don't just limit to
          the old standards meaning that they will have way more functions than
          just Internet access. In our café, the main focus will be to gather
          people together in order to have fun. To do this, special equipment is
          provided such as, gaming PCs, consoles and other peripherals related
          to gaming.
        </p>
        <Image
          className="object-cover w-8/12 h-[400px]"
          src={figure1}
          alt="Figure"
        />
        <h2 className={`${oswald.className} font-semibold text-2xl`}>Trends</h2>
        <p className="tracking-wide leading-relaxed text-center py-5 w-9/12">
          One of the most popular relaxing habits these days is playing games
          with your fiends or loved ones and so with what we provide, there is
          almost a guarantee that every minute spent in our Internet café will
          be full of enjoyment.
        </p>
      </div>
      <button className="bg-tertiary text-black border border-transparent transition duration-300 hover:bg-transparent hover:text-primary hover:border-primary px-10 py-2">
        PLAY NOW
      </button>
    </section>
  );
}
