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

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      nameTyped.destroy();
      missionTyped.destroy();
      whyCareTyped.destroy();
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 px-18 crt">
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
          <a href="#" className="m-auto hover:bg-green-900">
            DEEDS
          </a>
          <a href="#" className="m-auto hover:bg-green-900">
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
      <div className="flex flex-row justify-between w-full">
        <p className="text-green-400 font-mono w-1/3">
          Surely <span className="text-gray-600">thou</span> wert void of
          greatness,
          <br />
          Having neither strength nor beauty,
          <br />
          When the moose was trampling on{" "}
          <span className="text-gray-600">thee</span>,
          <br />
          When the roebuck trod upon <span className="text-gray-600">thee</span>
          ,
          <br />
          When the tracks of wolves were in{" "}
          <span className="text-gray-600">thee</span>,
          <br />
          And the bear-paws scratched <span className="text-gray-600">
            thy
          </span>{" "}
          body.
          <br />
          Surely <span className="text-gray-600">thou</span> hadst little value
          <br />
          When the skilful Ilmarinen,
          <br />
          First of all the iron-workers,
          <br />
          Brought <span className="text-gray-600">thee</span> from the blackened
          swamp-lands,
          <br />
          Took <span className="text-gray-600">thee</span> to his ancient
          smithy,
          <br />
          Placed <span className="text-gray-600">thee</span> in his fiery
          furnace.
          <br />
          Truly <span className="text-gray-600">thou</span> hadst little vigor,
          <br />
          Little strength, and little danger,
          <br />
          When <span className="text-gray-600">thou</span> in the fire wert
          hissing,
          <br />
          Rolling forth like seething water,
          <br />
          From the furnace of the smithy,
          <br />
          When <span className="text-gray-600">thou</span> gavest oath the
          strongest,
          <br />
          By the furnace, by the anvil,
          <br />
          By the tongs, and by the hammer,
          <br />
          By the dwelling of the blacksmith,
          <br />
          By the <span className="text-red-400">fire</span> within the{" "}
          <span className="text-red-400">furnace</span>.
          <br />
        </p>
      </div>
      <footer className="fixed bottom-0 flex flex-row items-center justify-evenly w-full text-green-400 font-mono text-xs">
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
          robotmascot isn&apos;t the UK marketing agency
        </p>
        <p className="flex flex-row self-center">
          <span>
            <Image width={32} height={32} src="/grunt.png" alt="Grunt" />
          </span>
          <span className="self-center">2024 Adam del Cano</span>
          <span>
            <Image
              width={32}
              height={32}
              src="/grunt-defend-2.png"
              alt="Grunt"
            />
          </span>
        </p>
      </footer>
    </main>
  );
}
