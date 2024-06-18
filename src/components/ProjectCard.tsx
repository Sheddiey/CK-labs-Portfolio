"use client";

import { AppContext } from "@/context";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectsCard = ({ project, index, range, target, progress }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const cardScale = useTransform(progress, range, [1, target]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [2, 1]);

  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Context must be used");
  }

  const { screen } = context;

  return (
    <motion.div
      ref={ref}
      className={`flex sm:p-2.5 md:px-16 align-center justify-center sticky mb-5`}
      style={{ top: `calc(15% + ${index * 25}px)` }}
    >
      <motion.div
        className={`w-full bg-[#589b76] shadow-xl border-green-300/50 border backdrop-blur-[10px] xl:h-[575px] rounded-xl md:rounded-xl xl:gap-[40px] ${
          screen === "xl" || screen === "2xl" ? "p-[40px]" : ""
        }
      `}
        style={{
          scale: cardScale,
          display: "flex",
          flexDirection:
            screen === `sm` || screen === `md` || screen === `lg`
              ? "column-reverse"
              : index % 2 === 0
              ? "row-reverse"
              : "row",
          overflow: "hidden",
        }}
      >
        <div
          className="flex flex-col p-5"
          style={{
            width:
              screen === "sm" || screen === "md" || screen === "lg"
                ? "100%"
                : "50%",
          }}
        >
          <h3 className="text-blue_5 font-bold text-2xl">{project.title}</h3>
          <p className="font-medium">{project.description}</p>
          <div className="flex flex-wrap mt-10 gap-3 items-center">
            {project.tags.map((tag: any, index: number) => (
              <span className="bg-white px-2 rounded-[5px]" key={index}>
                {tag}
              </span>
            ))}
            <Link
              className="text-white border-b-2 hover:text-blue_5 transition-all delay-15`0 ease-out border-blue_5"
              href={project.link}
              target="_blank"
            >
              <span className="self-center">
                Visit <HiOutlineExternalLink className="inline" />
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`xl:h-[435px] overflow-hidden relative ${
            screen === "sm" || screen === "md" || screen === "lg"
              ? ""
              : "rounded-[20px]"
          }`}
          style={{
            width:
              screen === "sm" || screen === "md" || screen === "lg"
                ? "100%"
                : "50%",
          }}
        >
          <motion.div className={`w-full h-full`} style={{ scale }}>
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover h-[300px] lg:h-[435px] w-[100%]"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsCard;
