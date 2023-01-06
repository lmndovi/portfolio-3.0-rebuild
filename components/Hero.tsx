import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirles from "./BackgroundCirles";
import PortraitImage from "../assets/sideon.jpg";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function ({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, I'm Lu Ndovi.",
      "Athlete-SalsaDancer-PlantDad.tsx",
      "<ButMainlyJustACoder />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCirles />
      <Image
        src={PortraitImage}
        alt="Lu Ndovi"
        className="relative rounded-full mx-auto object-cover h-48 w-48"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="gold" />
        </h1>

        <div className="pt-6">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
