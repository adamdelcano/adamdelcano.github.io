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
      strings: ["^2000 You want me to do that for you."],
      typeSpeed: 50,
    });
    const contactTyped = new Typed(contactPointer.current, {
      strings: ["^4000 Check the bottom of the page for contact information."],
      typeSpeed: 50,
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
    <main className="flex min-h-screen flex-col items-center justify-start p-6 px-18 bg-indigo-950 bg-cover">
      <header className="flex flex-row justify-between w-full text-green-400 font-mono p-18">
        <p className="flex flex-row text-5xl has-tooltip">
          ⍝
          <span className="tooltip text-xs m-18">
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
        <div className="flex flex-row text-xl justify-between gap-6">
          <a href="#" className="m-auto hover:bg-bg-green-900">
            DEEDS
          </a>
          <a href="#" className="m-auto hover:bg-bg-green-900">
            [REDACTED]
          </a>
        </div>
      </header>
      <div className="flex flex-row w-full justify-evenly">
        <form className="max-w-lg self-start justify-self-start">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Who is this clown?
              </label>
              <input
                className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight disabled"
                id="grid-name"
                type="text"
                ref={myName}
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
              <input
                className="appearance-none block w-full bg-gray-900 text-green-400 border border-gray-900 rounded py-3 px-4 leading-tight disabled"
                id="contact-pointer"
                ref={contactPointer}
              />
            </div>
          </div>
        </form>
        <div
          className="flex self-center align-center items-center justify-center mx-auto"
        >
          <p className="text-green-300 font-mono rounded py-3 px-4 pr-1 mt-24 text-sm bg-gray-700/75">
            Surely <span className="text-red-100">thou</span> wert void of
            greatness,
            <br />
            Having neither strength nor beauty,
            <br />
            When the moose was trampling on{" "}
            <span className="text-red-100">thee</span>,
            <br />
            When the roebuck trod upon{" "}
            <span className="text-red-100">thee</span>
            ,
            <br />
            When the tracks of wolves were in{" "}
            <span className="text-red-100">thee</span>,
            <br />
            And the bear-paws scratched{" "}
            <span className="text-red-200">thy</span> body.
            <br />
            Surely <span className="text-red-200">thou</span> hadst little value
            <br />
            When the skilful Ilmarinen,
            <br />
            First of all the iron-workers,
            <br />
            Brought <span className="text-red-200">thee</span> from the
            blackened swamp-lands,
            <br />
            Took <span className="text-red-200">thee</span> to his ancient
            smithy,
            <br />
            Placed <span className="text-red-300">thee</span> in his fiery
            furnace.
            <br />
            Truly <span className="text-red-300">thou</span> hadst little vigor,
            <br />
            Little strength, and little danger,
            <br />
            When <span className="text-red-300">thou</span> in the fire wert
            hissing,
            <br />
            Rolling forth like seething water,
            <br />
            From the furnace of the smithy,
            <br />
            When <span className="text-red-300">thou</span> gavest oath the
            strongest,
            <br />
            By the furnace, by the anvil,
            <br />
            By the tongs, and by the hammer,
            <br />
            By the dwelling of the blacksmith,
            <br />
            By the <span className="text-red-500">fire</span> within the{" "}
            <span className="text-red-600">furnace</span>.
            <br />
          </p>
        </div>
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
          <span className="text-green-400">Peridot (black cat)</span>
        </p>

      </div>
      <footer className="fixed bottom-0 flex flex-row items-center justify-evenly w-full text-green-400 font-mono text-xs bg-gray-900/75">
        <p>
          <span className="text-green-600">Professional Inquiries: </span>
          adam.j.delcano@gmail.com
        </p>
        <p>
          <span className="text-green-600">Personal Contact: </span>{" "}
          robotmascot@gmail.com
        </p>
        <p>
          <span className="text-green-600">Elsewhere: </span> Wherever
          robotmascot isn&apos;t the UK marketing agency (no offense, they&apos;re nice)
        </p>
        <p className="flex flex-row self-center">2024 Adam del Cano</p>
        <p>
          <a href="https://www.freepik.com/free-vector/retro-futuristic-landscape-background-with-sun_5072281.htm#query=horizon%20grid&position=8&from_view=keyword&track=ais&uuid=e6966af8-f0dd-4c34-adf6-33cab7e6124a">
            Background Image by pikisuperstar
          </a>{" "}
          on Freepik
        </p>
      </footer>
    </main>
  );
}
