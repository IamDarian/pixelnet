import Header from "@/components/Header";
import { Play } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const play = Play({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "PixelNet",
  description:
    "PixelNet - Website for scheduling internet cafe and gaming setups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={play.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
