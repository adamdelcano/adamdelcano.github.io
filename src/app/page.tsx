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
  const contactPointer = useRef(null);

  useEffect(() => {
    const nameTyped = new Typed(myName.current, {
      strings: ["^100Adam del Cano"],
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
      strings: ["^2000You want me to do that for you."],
      typeSpeed: 50,
    });
    const contactTyped = new Typed(contactPointer.current, {
      strings: ["^4000Professional Inquiries: adam.j.delcano@gmail.com\nPersonal Contact: robotmascot@gmail.com\nsocials: @robotmascot on bsky.app and treehouse.systems.social"],
      typeSpeed: 50,
      showCursor: false,
      loop: false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      nameTyped.destroy();
      missionTyped.destroy();
      whyCareTyped.destroy();
      contactTyped.destroy();
    };
  }, []);
  return (
    <main className="flex min-h-screen lg:w-2/3 flex-col items-center justify-start p-6 mx-auto bg-cover bg-slate-950">
      <header className="flex flex-col md:flex-row justify-items-end w-full text-green-400 font-mono p-18">
        <p className="text-5xl text-center md:text-left has-tooltip w-screen">
          ⍝
          <span className="tooltip text-xs m-18 bg-slate-900">
            If you&apos;re curious, this is the{" "}
            <a
              href="https://en.wikipedia.org/wiki/APL_syntax_and_symbols"
              target="_blank"
            >
              APL
            </a>{" "}
            symbol for comment, sometimes named a lamp.
          </span>
        </p>
        <div className="flex flex-row md:text-xl justify-items-end md:gap-6">
          <a href="#" className="m-auto hover:bg-green-900">
            ABOUT
          </a>
          <a href="#" className="m-auto hover:bg-green-900">
            WRITING
          </a>
          <a href="#" className="m-auto hover:bg-green-900">
            PROJECTS
          </a>
          <a href="#" className="m-auto hover:bg-green-900">
            RESUME
          </a>
        </div>
      </header>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <form className="max-w-lg self-start justify-self-start">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Whose site is this?
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight disabled"
                id="grid-name"
                type="text"
                ref={myName}
                disabled
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-mission"
              >
                What does he do?
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 leading-tight disabled"
                id="grid-mission"
                type="text"
                placeholder=""
                ref={mission}
                disabled
              />
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
                disabled
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="contact-pointer"
              >
                How can I get in touch?
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 leading-tight"
                id="contact-pointer"
                ref={contactPointer}
                disabled
                rows={5}
              />
            </div>
          </div>
        </form>
        <p className="max-w-lg text-green-500">
          <br />
          Familiar Frontend stack:{" "}
          <span className="text-green-400">
            TypeScript, React, Next.js, Tailwind CSS
          </span>
          <br />
          Familiar Backend stack:{" "}
          <span className="text-green-400">Python, GraphQL, MongoDB</span>
          <br />
          Familiar Spirit:{" "}
          <span className="text-green-400">Peridot (a small black cat)</span>
        </p>
      </div>
      <div className="flex flex-row w-full justify-evenly my-20 py-5">
      <div className="border-4 border-slate-600 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-pink-500/50 before:hover:bg-pink-500/75 before:scale-50 before:hover:scale-75 relative inline-block">
      <div className="solid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
      </div>
      <div className="border-4 border-slate-600 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-pink-500/50 before:hover:bg-pink-500/75 before:scale-50 before:hover:scale-75 relative inline-block">
      <div className="solid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
      </div>
      <div className="border-4 border-slate-600 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-pink-500/50 before:hover:bg-pink-500/75 before:scale-50 before:hover:scale-75 relative inline-block">
      <div className="solid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
      </div>
      </div>
      <div className="flex flex-row w-full justify-evenly my-20 py-5">
      <div className="solid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
      <div className="solid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
      <div className="solid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
      </div>
      <footer className="fixed bottom-0 flex flex-row items-center justify-evenly text-green-400 font-mono text-xs bg-gray-900/75">
        <p className="flex flex-row self-center">2024 Adam del Cano</p>
      </footer>
    </main>
  );
}
