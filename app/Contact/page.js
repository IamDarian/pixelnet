"use client";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Maps from "@/components/Maps";

import phone from "@/public/svg/phone.svg";
import location from "@/public/svg/location.svg";
import mail from "@/public/svg/mail.svg";
import timetable from "@/public/svg/calendar.svg";

const oswald = Oswald({ subsets: ["latin"] });

export default function Contact() {
  const [active, setIsActive] = useState(false);

  const toggleText = () => {
    setIsActive(!active);
  };

  return (
    <main className="flex flex-col justify-center bg-black w-full">
      <section className="container flex flex-col justify-center mx-auto mt-24 mb-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col gap-1 mb-8">
              <h2 className={`${oswald.className} font-semibold text-4xl mb-1`}>
                Contact Us
              </h2>
              <div className="flex items-center gap-2">
                <Image
                  src={location}
                  alt="Location icon"
                  width={32}
                  height={32}
                />
                <p>Adress: Tractorul, Brasov, Romania</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={phone}
                  alt="Telephone icon"
                  width={32}
                  height={32}
                />
                <p>Telephone: +40712 345 678</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={mail} alt="Mail icon" width={32} height={32} />
                <p>E-mail: info.pixelnet@mysite.hub</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className={`${oswald.className} font-semibold text-4xl mb-1`}>
                Schedule
              </h2>
              <div className="flex gap-2">
                <Image
                  src={timetable}
                  alt="Timetable icon"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col">
                  <p>Mon-Fri: 14:00-22:00</p>
                  <p>Sat-Sun: 12:00-00:00</p>
                </div>
              </div>
              <p className="text-neutral-400">
                Schedule may be affected by national holidays
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label>Name *</label>
              <input
                className="border border-white bg-transparent px-2 py-2"
                required
              />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label>Email *</label>
                <input
                  className="border border-white bg-transparent px-2 py-2"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Phone</label>
                <input className="border border-white bg-transparent px-2 py-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Subject *</label>
              <input
                className="border border-white bg-transparent px-2 py-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Message *</label>
              <textarea
                className="border border-white bg-transparent max-h-72 min-h-20 h-40 px-2 py-2"
                maxLength={600}
                required
              />
            </div>
            <button
              className="bg-tertiary text-black border border-tertiary transition duration-500 hover:text-white hover:bg-transparent px-5 py-2"
              onClick={toggleText}
            >
              Submit
            </button>
            <p className={active ? "self-center" : "hidden"}>
              Thanks for submitting!
            </p>
          </form>
        </div>
      </section>
      <Maps latitude={45.6669099} longitude={25.6078415} />
    </main>
  );
}
