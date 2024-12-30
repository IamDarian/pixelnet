import BookOption from "@/components/BookOption";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Book() {
  return (
    <main className="flex flex-col items-center bg-[url(../public/images/geometric-gradient.png)] bg-repeat w-full">
      <section className="container bg-black flex flex-col items-center w-1/2 mt-20 mx-auto px-7">
        <h2 className={`${oswald.className} text-4xl font-semibold mt-10`}>
          Our Services
        </h2>
        <BookOption />
        <BookOption />
      </section>
    </main>
  );
}
