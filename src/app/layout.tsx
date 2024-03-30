import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
