import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function CallToAction() {
  return (
    <section className="bg-black py-14">
      <div className="container mx-auto flex flex-col gap-5 items-center w-full">
        <h2 className={`${oswald.className} text-5xl font-semibold`}>
          Join the Club
        </h2>
        <p className="mb-3">
          Join our email list and get access to special deals exclusive to our
          subscribers.
        </p>
        <form className="flex flex-col items-center w-9/12">
          <label name="e-mail" className="self-start text-sm mb-1">
            Enter your email here *
          </label>
          <div className="flex justify-stretch w-full">
            <input
              type="email"
              className="w-full bg-transparent border border-solid border-white border-r-0 focus:outline-none focus:border focus:border-solid focus:border-primary py-2 px-2"
              maxLength={50}
            />
            <button className="w-1/4 h-full bg-primary border border-solid border-primary text-black transition duration-500 hover:bg-transparent hover:text-primary py-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}