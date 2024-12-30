import Image from "next/image";
import { Oswald } from "next/font/google";
import calendar from "@/public/svg/calendar.svg";
import phone from "@/public/svg/phone.svg";
import location from "@/public/svg/location.svg";

const oswald = Oswald({ subsets: ["latin"] });

export default function Info() {
  return (
    <section className="bg-black py-14">
      <div className="container mx-auto flex justify-center">
        <div className="flex jusify-stretch w-9/12">
          <div className="flex flex-col items-cneter justify-center bg-[#404040] border border-solid border-secondary px-8 py-10 min-w-[280px] w-1/2">
            <h3 className={`${oswald.className} text-3xl font-semibold mb-2`}>
              Schedule
            </h3>
            <div className="flex items-center mb-4">
              <Image src={calendar} alt="Calendar Icon" />
              <div className="flex flex-col ml-4">
                <p className="lg:inline flex flex-col">
                  Monday-Friday: <span>14:00-22:00</span>
                </p>
                <p className="lg:inline flex flex-col">
                  Saturady-Sunday: <span>12:00-00:00</span>
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Image src={phone} alt="Phone Icon" />
              <p className="xl:inline flex flex-col ml-4">
                Phone for reservations: <span>+40712 345 678</span>
              </p>
            </div>
            <h3
              className={`${oswald.className} text-3xl font-semibold mt-4 mb-2`}
            >
              Adress
            </h3>
            <div className="flex items-center">
              <Image src={location} alt="Location Icon" />
              <p className="ml-4">Tractorul, Brasov, Romania</p>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <p>test</p>
          </div>
        </div>
      </div>
    </section>
  );
}
