"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";

import Header from "@/Components/Header/Header";
import Intro from "@/Components/Intro/Intro";
import Footer from "@/Components/Footer/Footer";
import Familiars from "@/Components/Familiars/Familiars";
import Spinner from "@/Components/Spinner/Spinner";
import adamPic from "/public/adam.jpeg";
import adamTransparent from "/public/adam_transparent_bg.png";
import testAvatar from "/public/test_avatar.webp";

export default function Home() {
  return (
    
    <main className="flex min-h-screen lg:w-2/3 flex-col items-center justify-start p-6 mx-auto bg-cover bg-slate-950 text-lg">
      <header className="flex flex-col md:flex-row justify-items-end w-full text-green-200 font-mono p-18">
        <div className="text-5xl text-center md:text-left has-tooltip w-screen max-w-full">
          <span>⍲</span>
          <span className="tooltip text-xs m-18 max-w-full">
            {"<-"}If you&apos;re curious, this is the{" "}
            <a
              href="https://en.wikipedia.org/wiki/APL_syntax_and_symbols"
              target="_blank"
            >
              APL
            </a>{" "}
            symbol for NAND. Not proficient with APL, just thought it was cool.
          </span>
        </div>
        <div className="flex max-sm:flex-wrap md:text-xl justify-items-end md:gap-6">
          <Link href="#" className="m-auto hover:bg-green-900 no-underline">
            ABOUT
          </Link>
          <Link href="#" className="m-auto hover:bg-green-900 no-underline">
            WRITING
          </Link>
          <Link href="#" className="m-auto hover:bg-green-900 no-underline">
            PROJECTS
          </Link>
          <Link href="#" className="m-auto hover:bg-green-900 no-underline">
            RESUME
          </Link>
        </div>
      </header>
      <div className="text-green-200 sm:w-2/3 my-12">
        <Image
            src={adamPic}
            alt="Adam del Cano"
            className="rounded-full float-right w-1/3"
          />
        <div>
          <h1 className="text-4xl">Hello!</h1>
          <p>
            I&apos;m <span className="text-green-500">Adam del Cano</span>.
          </p>
          <p>
            I do full-stack development with an emphasis on frontend and web
            development. I enjoy building websites- there&apos;s something
            profoundly satisfying about the cycle of iterating with feedback. It
            scratches an itch in my brain&apos;s heart.
          </p>
          <p>
            I have a bunch of hobbies, most of which boil down to getting
            really, <em>really</em> interested in something and then tinkering
            with it.
          </p>
          <p></p>
        </div>     
        </div>
      <Spinner />
      <footer className="mt-auto bottom-0 flex flex-row items-center justify-evenly text-green-100 font-mono text-xs bg-gray-900/75">
        <p className="flex flex-row self-center">2024 Adam del Cano</p>
      </footer>
    </main>
  );
}
