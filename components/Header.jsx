"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/images/Logo.png";
import { Oswald } from "next/font/google";
import { usePathname } from "next/navigation";

const oswald = Oswald({ subsets: ["latin"] });

export default function Header() {
  const [line, setLine] = useState(0);
  const path = usePathname();

  return (
    <header className="fixed z-50 flex bg-[#00023b] w-full h-20">
      <div className="container flex items-center justify-between font-medium mx-auto w-full">
        <Link
          href="/"
          className="flex gap-4 items-center"
          onClick={() => setLine(0)}
        >
          <Image src={logo} width={64} height={64} alt="Logo" />
          <p
            className={`${oswald.className} text-3xl font-medium underline transition duration-300 hover:text-tertiary`}
          >
            PixelNet Hub
          </p>
        </Link>
        <div className=" md:"></div>
        <div className="md:flex gap-10 text-lg hidden">
          <Link
            href="/Book"
            className={
              line === 1 && path === "/Book"
                ? "transition duration-300 hover:text-tertiary border-t-4 border-primary text-secondary px-1"
                : "transition duration-300 hover:text-tertiary px-1"
            }
            onClick={() => setLine(1)}
          >
            Book Online
          </Link>
          <p>News & Events</p>
          <Link
            href="/About"
            className={
              line === 3 && path === "/About"
                ? "transition duration-300 hover:text-tertiary border-t-4 border-primary text-secondary px-1"
                : "transition duration-300 hover:text-tertiary px-1"
            }
            onClick={() => setLine(3)}
          >
            About
          </Link>
          <Link
            href="/Contact"
            className={
              line === 4 && path === "/Contact"
                ? "transition duration-300 hover:text-tertiary border-t-4 border-primary text-secondary px-1"
                : "transition duration-300 hover:text-tertiary px-1"
            }
            onClick={() => setLine(4)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
