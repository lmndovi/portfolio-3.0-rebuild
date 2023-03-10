import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <div
        // initial={{
        //   x: directionLeft ? -200 : 200,
        //   opacity: 0,
        // }}
        // transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, x: 0 }}
        className="relative h-16 w-16 opacity-80 rounded-full overflow-hidden md:h-20 md:w-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={urlFor(skill?.image).url()}
          className="rounded-full object-cover border border-gray-500"
          alt=""
          fill
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-20 md:w-20 xl:h-20 xl:w-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
