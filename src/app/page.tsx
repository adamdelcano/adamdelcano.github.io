'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import Header from "@/Components/Header";
import Intro from "@/Components/Intro";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 px-18">
      <Header />
      <Intro />
      <Footer />
    </main>
  );
}
