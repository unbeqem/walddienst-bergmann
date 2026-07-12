import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { LocalBusinessSchema } from "@/components/layout/LocalBusinessSchema";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Walddienst Bergmann",
    template: "%s",
  },
  description:
    "Walddienst Bergmann – Forstwirtschaft, Baumpflege und Gefahrenbaumfällung aus Neukirch.",
  openGraph: {
    title: "Walddienst Bergmann",
    description:
      "Forstwirtschaft, Baumpflege und Gefahrenbaumfällung aus Neukirch – RAL-zertifiziert.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans">
        <LocalBusinessSchema />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieNotice />
        </MotionProvider>
      </body>
    </html>
  );
}
