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
      className={`w-full flex align-center justify-center sticky mb-[20px]`}
      style={{ top: `calc(15% + ${index * 25}px)` }}
    >
      <motion.div
        className={`w-[100%] xl:h-[575px] rounded-[5px] md:rounded-[5px] xl:gap-[40px] ${
          screen === "xl" || screen === "2xl" ? "p-[40px]" : ""
        }
      `}
        style={{
          scale: cardScale,
          backgroundColor: project.accent,
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
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="flex flex-wrap mt-10 gap-3 items-center">
            {project.tags.map((tag: any, index: number) => (
              <span key={index}>{tag}</span>
            ))}
            <Link href={project.link} target="_blank">
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
