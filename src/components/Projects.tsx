"use client";

import { useEffect, useRef } from "react";
import CardWrapper from "./CardWrapper";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import FadeinOnView from "@/utils/FadeinOnView";
import { projects } from "@/data/data";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    
        <motion.div ref={ref} className="w-full flex flex-col align-center justify-center relative">
          <FadeinOnView className="text-white md:text-[44px] text-[26px] mb-[24px] text-center sticky top-[0px] pt-[20px]">
            <h1 className="sticky top-[0px]">My work</h1>
          </FadeinOnView>
          {projects.map((project, index) => {
            const target = 1- (projects.length - index) * 0.05;
            return (
              <ProjectsCard
               key={index}
               project={project}
               index={index}
               range={[index * (1 / projects.length), 1]}
               target={target}
               progress={scrollYProgress}
              />
            );
          })}
        </motion.div>
      
  );
};

export default Projects;
