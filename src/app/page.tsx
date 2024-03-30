"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import Header from "@/Components/Header/Header";
import Intro from "@/Components/Intro/Intro";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  const myName = useRef(null);
  const mission = useRef(null);
  const whyCare = useRef(null);

  useEffect(() => {
    const nameTyped = new Typed(myName.current, {
      strings: ["Adam del Cano"],
      typeSpeed: 50,
    });
    const missionTyped = new Typed(mission.current, {
      strings: [
        "^1000Web development^2000",
        "^1000Full-stack development^2000",
        "^1000Frontend development^2000",
        "Weird ideas^2000",
      ],
      typeSpeed: 50,
      loop: true,
    });
    const whyCareTyped = new Typed(whyCare.current, {
      strings: ["^2000 You want me to do that for you."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      nameTyped.destroy();
      missionTyped.destroy();
      whyCareTyped.destroy();
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 px-18">
      <header className="flex flex-row justify-between w-full text-green-400 font-mono p-18">
        <p className="flex flex-row text-5xl">⍝</p>
        <div className="flex flex-row text-xl justify-between gap-6">
          <a href="#" className="m-auto">
            DEEDS
          </a>
          <a href="#" className="m-auto">
            [REDACTED]
          </a>
        </div>
      </header>
      <form className="w-full max-w-lg self-start justify-self-start">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Who is this clown?
            </label>
            <input
              className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight disabled"
              id="grid-first-name"
              type="text"
              ref={myName}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              What does he do?
            </label>
            <input
              className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 leading-tight disabled"
              id="grid-last-name"
              type="text"
              placeholder=""
              ref={mission}
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Why should I care?
            </label>
            <input
              className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 leading-tight disabled"
              id="grid-password"
              ref={whyCare}
            ></input>
          </div>
        </div>
      </form>
      <footer className="fixed bottom-0 flex flex-row items-center justify-center w-full text-green-400 font-mono ">
        <p className="text-xs">
          2024 Adam del Cano (big surprise on that name, I know)
        </p>
      </footer>
    </main>
  );
}
