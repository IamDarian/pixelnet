import { Oswald } from "next/font/google";
import Image from "next/image";
import imgItem from "@/public/images/custom-for-all-sm.jpg";

const oswald = Oswald({ subsets: ["latin"] });

export default function BookOption() {
  return (
    <div className="grid items-center w-full h-fit my-10">
      <div className="flex flex-col justify-center row-start-1 row-end-1 col-start-1 col-end-1 bg-black border border-stone-700 transition hover:shadow-xl z-10 max-w-fit py-14 px-14">
        <div className="flex flex-col border-b gap-3 border-stone-700 pb-5">
          <h3 className={`${oswald.className} font-semibold text-2xl`}>
            PC Gaming
          </h3>
          <p>Acess to any available PC games for 1 hour.</p>
          <p className="underline cursor-pointer w-fit">Read More</p>
          {/* <p className="text-justify">
            Test your competitiveness with players inside or outside the hub and
            reach your limits on our modern systems. Play all the new and
            popular competitive titles without dropping a single frame. Come
            check it out!
          </p> */}
        </div>
        <div className="flex flex-col gap-3 pt-5">
          <p>Time: 1hr</p>
          <p>Price: 14.99lei</p>
          <button className="bg-primary text-black border border-primary transition duration-500 hover:bg-transparent hover:text-primary w-32 py-2 px-1">
            Book Now
          </button>
        </div>
      </div>
      <div className="justify-self-end row-start-1 row-end-1 col-start-1 col-end-1 max-w-[560px] h-[550px]">
        <Image src={imgItem} alt="Book Image" className="object-cover h-full" />
      </div>
    </div>
  );
}
