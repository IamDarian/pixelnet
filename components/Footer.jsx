import Image from "next/image";
import logo from "@/public/images/Logo.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-[#404040] border-t border-secondary mt-auto pt-8 pb-4 px-4">
      <div className="container mx-auto flex flex-col items-center text-sm text-neutral-400 w-full">
        <div className="flex gap-3 mb-2">
          <Image src={logo} width={32} alt="PixelNet Logo" />
          <h3 className={`${oswald.className} text-2xl font-semibold`}>
            PixelNet.Hub
          </h3>
        </div>
        <p>Contact: info.pixelnet@mysite.hub</p>
        <p>Phone: +40712 345 678</p>
        <p className="text-center mt-2 mx-4">
          © {new Date().getFullYear()} by PixelNet Hub. Proudly created by{" "}
          <a
            href="https://github.com/IamDarian"
            className="underline text-neutral-300"
            target="_blank"
          >
            IamDarian
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
