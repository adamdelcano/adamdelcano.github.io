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
    
    <main className="flex max-w-full min-h-screen flex-col items-center">
      <div className="text-green-200 sm:w-2/3 my-12">
        <Image
            src={adamPic}
            alt="Adam del Cano"
            className="rounded-full float-right w-1/3"
          />
        <div>
          <h1 className="text-4xl">Hello!</h1>
          <p>
            I&apos;m <span className="text-green-500 has-tooltip">Adam del Cano<span className="tooltip text-green-200"> he/him</span></span>.
          </p>
          <p>
            If you&apos;re reading this, this site is still very much under construction! Pardon the... everything.
          </p>
          <p>
            I do full-stack development with an emphasis on frontend and web
            development. I enjoy building websites- there&apos;s something
            profoundly satisfying about the cycle of iterating with feedback. It
            scratches an itch in my brain&apos;s heart.
          </p>
          <p>
            The nav tabs will take you to more about me, my blog, my self-contained projects, and my resume.
          </p>
          <p>
            If you want to see me me doing frontend stuff, that&apos;s here- scroll down and check it out.
          </p>
          <p></p>
        </div>     
        </div>
      <Spinner />
    </main>
  );
}
