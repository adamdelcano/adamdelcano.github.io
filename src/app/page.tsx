"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Footer from "@/components/Footer/Footer";
import Familiars from "@/components/Familiars/Familiars";
import Spinner from "@/components/Spinner/Spinner";
import adamPic from "/public/adam.jpeg";
import adamTransparent from "/public/adam_transparent_bg.png";
import testAvatar from "/public/test_avatar.webp";

export default function Home() {
  return (
    <main className="flex max-w-full flex-col items-center">
      <div className="text-green-100 sm:w-2/3 my-12">
        <div className="float-right w-1/3 relative duration-500 ease-in-out group">
          <div className="w-full h-full rounded-full overflow-hidden duration-500 ease-in-out relative group-hover:scale-90">
            <div className="absolute duration-500 ease-in-out bg-gradient-to-br from-slate-200 to-slate-600 right-0 top-0 rounded-full w-full h-full group-hover:scale-[86%] group-hover:top-[10%]"></div>
            <Image
              src={adamTransparent}
              alt="Adam del Cano"
              className="rounded-full duration-500 ease-in-out transform  group-hover:scale-150  group-hover:translate-y-6 z-50"
            />
          </div>
          <p className="absolute w-1/2 right-1/4 rounded-xl -top-12 mx-auto text-center bg-slate-950 z-50 duration-300 ease-in opacity-0 group-hover:opacity-100">
            Yup, that&apos;s <span className="text-green-500">me!</span>
          </p>
        </div>
        <div>
          <h1 className="text-4xl">Hello!</h1>
          <p>
            I&apos;m{" "}
            <span className="text-green-500 has-tooltip">
              Adam del Cano
              <span className="tooltip text-green-100"> he/him</span>
            </span>
            .
          </p>
          <p>
            If you&apos;re reading this, this site is still very much under
            construction! Pardon the... everything.
          </p>
          <p>
            I do full-stack development with an emphasis on frontend and web
            development. I enjoy building websites- there&apos;s something
            profoundly satisfying about the cycle of iterating with feedback. It
            scratches an itch in my brain&apos;s heart.
          </p>
          <p>
            The nav tabs will take you to more about me, my blog, my
            self-contained projects, and my resume.
          </p>
          <p>
            If you want to see me showcase frontend stuff, that&apos;s here-
            scroll down and check it out.
          </p>
          <p></p>
        </div>
        <div className="flex flex-col justify-evenly my-20 py-5">
          <p className="mx-auto">I can do things in vanilla html/css<span className="text-red-500 has-tooltip">*<span className="tooltip text-green-200">This is <em>technically</em> using TailwindCSS&apos; preset colors/distances.</span></span>.</p>
          <Spinner />
        </div>

        <div className="flex bg-gradient-to-r from-slate-950 to-red-500 via-orange-900 flex-row my-20 py-5 size-full">
        <motion.div
          className="bg-gradient-to-bl from-orange-900 to-orange-400 size-24 border-2 border-gray-950 absolute"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
          <motion.div
            className="size-24"
            animate={{
              x: [0, 400, 0],
              rotate: [0, 180, 0],
              borderRadius: ["0%", "50%", "0%"],
              backgroundColor: ["#ffffff", "#7f1d1d", "#b91c1c", "#ffffff"],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
      </div>
    </main>
  );
}
