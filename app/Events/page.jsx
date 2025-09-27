import Image from "next/image";
import mouse from "@/public/images/mouse.png";

export default function Events() {
  return (
    <main>
      <section className="container flex flex-col gap-20 mx-auto w-full">
        <h1 className="text-4xl text-center">Coming Up Next</h1>
        <p className="text-center">Updates, News and Events from PixelNet</p>
        <div className="flex h-96">
          <Image
            src={mouse}
            alt="event image"
            className="flex-1 object-cover"
          />
          <div className="flex flex-col flex-1">
            <h2>Event Name</h2>
            <div className="flex">
              <p className="mx-2 border-l border-white">Event Date</p>
              <p className="mx-2">Event Description</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
