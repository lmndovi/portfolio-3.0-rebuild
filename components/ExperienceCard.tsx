import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden h-[500px] pt-14">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative h-20 w-20 "
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt={experience.company}
          fill
          className=" rounded-full object-cover xl:w-[120px] xl:h-[120px] object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-lg mt-1">{experience.company}</p>
        <div className="flex space-x-5 my-2">
          {experience.technologies.map((technology) => (
            <div key={technology._id} className="relative h-10 w-10">
              <Image
                key={technology._id}
                className="rounded-full"
                src={urlFor(technology.image).url()}
                alt={technology.title}
                fill
              />
            </div>
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {experience.dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
