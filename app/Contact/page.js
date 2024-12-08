"use client";
import { Oswald } from "next/font/google";
import { useState } from "react";

const oswald = Oswald({ subsets: ["latin"] });

export default function Contact() {
  const [active, setIsActive] = useState(false);

  const toggleText = () => {
    setIsActive(!active);
  };

  return (
    <main className="flex flex-col bg-black w-full">
      <section className="container flex items-center justify-between mx-auto mt-20">
        <div className="flex flex-col">
          <div className="flex flex-col mb-8">
            <h2 className={`${oswald.className} font-semibold text-4xl mb-2`}>
              Contact Us
            </h2>
            <div className="flex">
              <p>Adress: Tractorul, Brasov, Romania</p>
            </div>
            <div className="flex">
              <p>Telephone: +40712 345 678</p>
            </div>
            <div className="flex">
              <p>E-mail: info.pixelnet@mysite.hub</p>
            </div>
          </div>
          <h2 className={`${oswald.className} font-semibold text-4xl mb-2`}>
            Schedule
          </h2>
          <p>Mon-Fri: 14:00-22:00</p>
          <p>Sat-Sun: 12:00-00:00</p>
          <p>Schedule may be affected by national holidays</p>
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
      </section>
    </main>
  );
}
