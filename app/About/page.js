import Image from "next/image";
import background from "@/public/images/geometric-gradient.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function About() {
  return (
    <main className="flex flex-col">
      <Image
        className="absolute z-[-10] overflow-hidden object-cover w-full h-lvh"
        src={background}
        alt="Background Image"
      />
      <section>
        <div className="container mx-auto flex justify-center mt-20">
          <div className="flex flex-col items-center gap-5 bg-white bg-opacity-10 backdrop-blur shadow-md w-1/2 px-12 py-10">
            <h1 className={`${oswald.className} text-5xl font-semibold mb-3`}>
              About PixelNet Hub
            </h1>
            <div className="flex flex-col items-center text-center">
              <p className="leading-loose mb-5">
                Founded in 2023, PixelNet Hub is a place designed to bring
                people together through the shared love of gaming. We believe
                that face-to-face interaction is more important than online play
                and strive to create an environment that is both welcoming and
                inclusive. Our mission is to provide a safe and fun space for
                gamers of all ages and backgrounds to come together, play, and
                create lasting memories. We take pride in our community and
                strive to create a space where gamers can come together,
                connect, and form lasting friendships. Whether you’re a lifelong
                gamer or just getting into the game, we invite you to join us
                and experience the best of what gaming has to offer.
              </p>
              <p
                className={`${oswald.className} text-xl font-semibold mt-3 w-80`}
              >
                If you want to learn more about our story feel free to Contact
                Us
              </p>
              <button className="bg-white text-black transition duration-500 border border-white hover:text-white hover:bg-black hover:bg-opacity-30 mt-5 px-12 py-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
