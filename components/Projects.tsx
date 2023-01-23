import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1B7DE5]/60">
        {projects?.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center p-20 justify-center md:p-44 h-screen mt-2">
            <Link href={project?.linkToBuild}>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
                className="h-66 mt-32 rounded-md md:h-72 md:pt-1
                 xl:h-80"
              />
            </Link>

            <div className="space-y-7 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#1B7DE5]/80">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              {/* Tech Used */}
              <div className="flex space-x-3 justify-center items-center">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology?._id}
                    src={urlFor(technology?.image).url()}
                    alt={technology?.title}
                    className="h-8 w-8 rounded-md"
                  />
                ))}
              </div>

              <p className="text-md text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#1B7DE5]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
