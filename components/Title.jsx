import background from "@/public/images/829364.jpg";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Title() {
  return (
    <>
      <Image
        className="absolute z-[-10] overflow-hidden object-cover w-full h-lvh"
        src={background}
        alt="Background Image"
      />

      <section className="container flex flex-col justify-center items-center gap-5 mx-auto h-lvh">
        <h1 className={`${oswald.className} text-7xl font-semibold`}>
          PixelNet Hub
        </h1>
        <p className="text-lg mb-5">Explore Other Worlds</p>
        <div className="flex flex-col justify-center items-center gap-10 text-center bg-[#000000] shadow-md px-16 py-6 w-[530px] h-96">
          <h2 className={`${oswald.className} text-6xl font-semibold`}>
            WELCOME
          </h2>
          <p className="leading-loose">
            Accept the challenge and higher your expectations. Visit one of our
            locations and be transferred into another dimension.
          </p>
          <button className="bg-secondary text-black px-3 py-2">
            PLAY NOW
          </button>
        </div>
      </section>
    </>
  );
}
