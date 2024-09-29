"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

import Familiars from "@/components/Familiars/Familiars";
import Intro from "@/components/Intro/Intro";

export default function About() {
  return (
    <main>
      <div className="flex flex-col md:flex-row w-full my-4 justify-between">
        <Intro />
        <Familiars />
      </div>
      <div className="flex flex-col">
        <p>
          I have a bunch of hobbies, most of which boil down to &ldquo;get
          really interested in something then tinker with it&rdquo;.
        </p>
        <p>
          That includes both board- and computer-based strategy and roleplaying
          games, 3D printing (full disclosure: not a strong suit, my Ender 3
          clone spends as much time clogged as doing anything else), and
          building and painting miniatures and models (I am almost certainly
          familiar with whatever fictional universe&apos;s lore you&apos;re
          thinking of after reading those last couple sentences, feel free to
          ask me stuff about it). Once in a while I&apos;ll do some basic
          electronics work, but past replacing some capacitator-plague afflicted
          monitors I don&apos;t claim anything resembling proficiency.
        </p>
        <p>
          In terms of slightly less &rdquo;yup he&apos;s normal&ldquo; activities,
          I&apos;ve done amateur blacksmithing, operated a flamethrower, have
          done live-action roleplaying,
        </p>
      </div>
    </main>
  );
}
