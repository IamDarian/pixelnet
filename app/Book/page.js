import Image from "next/image";
import background from "@/public/images/geometric-gradient.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Book() {
  return (
    <main
      className={`flex flex-col items-center bg-[${background}] bg-repeat w-full`}
    >
      <section className="bg-black flex flex-col items-center w-[300px] h-[600px]">
        <h2>Our Services</h2>
      </section>
    </main>
  );
}
