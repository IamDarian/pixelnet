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
        <div className="flex jusify-stretch w-9/12 h-80">
          <div className="flex flex-col items-cneter justify-center bg-[#404040] border border-solid border-secondary px-8 w-1/2">
            <h3 className={`${oswald.className} text-3xl font-semibold mb-2`}>
              Schedule
            </h3>
            <div className="flex items-center mb-4">
              <Image src={calendar} alt="Calendar Icon" />
              <div className="flex flex-col ml-4">
                <p>Monday-Friday: 14:00-22:00</p>
                <p>Saturady-Sunday: 12:00-00:00</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image src={phone} alt="Phone Icon" />
              <p className="ml-4">Phone for reservations: +40712 345 678</p>
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
