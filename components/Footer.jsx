import Image from "next/image";
import logo from "@/public/images/Logo.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-[#404040] border-t border-secondary pt-8 pb-4">
      <div className="container mx-auto flex flex-col items-center text-sm text-slate-400 w-full">
        <div className="flex gap-3 mb-2">
          <Image src={logo} width={32} alt="PixelNet Logo" />
          <h3 className={`${oswald.className} text-2xl font-semibold`}>
            PixelNet.Hub
          </h3>
        </div>
        <p>Contact: info.pixelnet@mysite.hub</p>
        <p>Phone: +40712 345 678</p>
        <p className="mt-2">
          @2024 by PixelNet Hub. Proudly created by IamDarian. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
