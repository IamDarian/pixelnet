"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/images/Logo.png";
import { Oswald } from "next/font/google";
import { usePathname } from "next/navigation";
import menu from "@/public/svg/menu.svg";
import close from "@/public/svg/close.svg";

const oswald = Oswald({ subsets: ["latin"] });

export default function Header() {
  const [line, setLine] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="fixed z-50 flex bg-[#00023b] w-full h-20 px-4">
      <div className="container flex items-center justify-between font-medium mx-auto w-full">
        <Link
          href="/"
          className="flex gap-4 items-center sm:ml-0"
          onClick={() => setLine(0)}
        >
          <Image src={logo} width={64} height={64} alt="Logo" />
          <p
            className={`${oswald.className} text-3xl font-medium underline transition duration-300 hover:text-tertiary`}
          >
            PixelNet Hub
          </p>
        </Link>
        <div className="md:hidden flex sm:mr-0">
          {menuOpen ? (
            <div className="absolute z-50 top-0 left-0 flex flex-col items-center bg-[#00023b] w-screen h-dvh">
              <div className="flex justify-between w-full pt-2">
                <Link
                  href="/"
                  className="flex gap-4 items-center sm:ml-0 ml-4"
                  onClick={() => setLine(0)}
                >
                  <Image src={logo} width={64} height={64} alt="Logo" />
                  <p
                    className={`${oswald.className} text-3xl font-medium underline transition duration-300 hover:text-tertiary`}
                  >
                    PixelNet Hub
                  </p>
                </Link>
                <Image
                  src={close}
                  alt="Close icon"
                  width={32}
                  height={32}
                  className="self-center mr-4"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
              <div className="flex flex-col items-center gap-3 text-lg border-t border-secondary w-96 mt-10">
                <Link
                  href="/"
                  className={
                    line === 0 && path === "/"
                      ? "transition duration-300 hover:text-tertiary border-t-4 border-primary text-secondary px-1"
                      : "transition duration-300 hover:text-tertiary px-1"
                  }
                  onClick={() => {
                    setLine(0);
                    setMenuOpen(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/Book"
                  className={
                    line === 1 && path === "/Book"
                      ? "transition duration-300 hover:text-tertiary border-t-4 border-primary text-secondary px-1"
                      : "transition duration-300 hover:text-tertiary px-1"
                  }
                  onClick={() => {
                    setLine(1);
                    setMenuOpen(false);
                  }}
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
                  onClick={() => {
                    setLine(3);
                    setMenuOpen(false);
                  }}
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
                  onClick={() => {
                    setLine(4);
                    setMenuOpen(false);
                  }}
                >
                  Contact
                </Link>
              </div>
              <div className="flex flex-1 items-end justify-center mt-10 pb-4">
                <p>&copy; {new Date().getFullYear()} PixelNet Hub</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Image
                src={menu}
                alt="Menu icon"
                width={32}
                height={32}
                onClick={() => setMenuOpen(true)}
              />
            </div>
          )}
        </div>
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
