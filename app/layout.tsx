import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://hkmmimarlik.com"),
  title: {
    default: "HKM Mimarlık — Modern Villa ve Konut Tasarımı",
    template: "%s | HKM Mimarlık",
  },
  description:
    "HKM Mimarlık; modern villa, lüks konut ve iç mekan projelerinde zamansız, sakin ve uygulanabilir mimari çözümler üretir.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HKM Mimarlık — Modern Villa ve Konut Tasarımı",
    description:
      "Modern villa, lüks konut ve iç mekan projelerinde zamansız, sakin ve uygulanabilir mimari çözümler.",
    url: "/",
    siteName: "HKM Mimarlık",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HKM Mimarlık — Modern Villa ve Konut Tasarımı",
    description:
      "Modern villa, lüks konut ve iç mekan projelerinde zamansız, sakin ve uygulanabilir mimari çözümler.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
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
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
