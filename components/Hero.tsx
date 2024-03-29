import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hey, I'm ${pageInfo?.name}.`,
      "Athlete-SalsaDancer-PlantDad.tsx",
      "<ButMainlyACoder/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-7 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative mx-auto h-44 w-44 md:h-48 md:w-48">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Lu Ndovi"
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="mx-auto text-4xl lg:text-6xl font-semibold px-12">
          <span className="mx-2">{text}</span>
          <Cursor cursorColor="blue" />
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
