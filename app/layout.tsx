import type { Metadata } from "next";
import {
  Archivo,
  Hanken_Grotesk,
  Instrument_Serif,
  Manrope,
} from "next/font/google";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-hanken",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grafty — Modern Villa Housing",
  description:
    "Architecture studio crafting serene, modern villas with rustic charm and modern comforts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${archivo.variable} ${hanken.variable} ${instrument.variable} ${manrope.variable}`}
    >
      <body>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
