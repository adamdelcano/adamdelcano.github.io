import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-items-end w-full text-green-200 font-mono p-18">
        <div className="text-5xl text-center md:text-left has-tooltip w-screen max-w-full">
          <span>⍲</span>
          <span className="tooltip m-18 max-w-full">
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
          <Link href="#" className="m-auto transition-all ease-in-out duration-300 hover:bg-green-900 no-underline">
            ABOUT
          </Link>
          <Link href="#" className="m-auto transition-all ease-in-out duration-300 hover:bg-green-900 no-underline">
            WRITING
          </Link>
          <Link href="#" className="m-auto transition-all ease-in-out duration-300 hover:bg-green-900 no-underline">
            PROJECTS
          </Link>
          <Link href="#" className="m-auto transition-all ease-in-out duration-300 hover:bg-green-900 no-underline">
            RESUME
          </Link>
        </div>
      </header>
    </>
  );
}
