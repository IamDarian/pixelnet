import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/Logo.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="fixed z-10 flex bg-[#01002e] w-full h-20">
      <div className="container flex items-center justify-between font-medium mx-auto w-full">
        <Link href="/" className="flex gap-4 items-center">
          <Image src={logo} width={64} height={64} alt="Logo" />
          <p
            className={`${oswald.className} text-3xl font-medium underline transition duration-300 hover:text-tertiary`}
          >
            PixelNet Hub
          </p>
        </Link>
        <div className="flex gap-10 text-lg">
          <p>Book Online</p>
          <p>News & Events</p>
          <Link
            href="/About"
            className="transition duration-300 hover:text-tertiary"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="transition duration-300 hover:text-tertiary"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
