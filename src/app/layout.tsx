import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam del Cano",
  description: "Adam's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen lg:w-2/3 flex-col items-center justify-start p-6 mx-auto bg-cover bg-slate-950 text-lg text-green-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
