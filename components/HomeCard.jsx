import Image from "next/image";
import Link from "next/link";
import mouse from "@/public/images/mouse.png";

export default function HomeCard() {
  return (
    <div className="border border-solid border-secondary bg-black shadow-md transition duration-300 hover:scale-[1.02] w-[450px] h-[660px]">
      <Image
        src={mouse}
        className="object-cover h-2/3"
        alt="Presentation image of gaming gear"
      />
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-3xl mt-5">Watch the Pros</h2>
        <div className="flex gap-3 text-lg justify-center">
          <p>Time TBD</p>
          <p>|</p>
          <p>PixelNet Hub</p>
        </div>
        <button className="bg-primary text-black py-2 px-12 mt-4">
          Details
        </button>
      </div>
    </div>
  );
}