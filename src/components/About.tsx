"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CardWrapper from "./CardWrapper";

const About = () => {
  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div className="bg-blue_2/50 p-5 rounded-xl ">
          <p className="text-centerfont-bold text-2xl mb-5 text-blue_1">
            About me
          </p>
          <div className="overflow-hidden grid grid-cols-2 mb-10">
            <div>kk</div>
            <motion.div
              whileInView={{
                x: 0,
              }}
              initial={{ x: 60 }}
              transition={{ duration: 1 }}
            >
              <p className="text-left">
                As a web developer passionate about crafting accessible and
                user-friendly websites, I bring expertise in React and Next.js
                for dynamic, server-side rendered interfaces, and Tailwind CSS
                for sleek, responsive designs. Proficient in TypeScript for
                robust, type-safe code, my skills in Git enhance collaboration,
                while my experience with Firebase ensures robust backend
                solutions. Committed to delivering top-notch web experiences, I
                seek a full-time Front-end Web Developer position to leverage my
                skills in creating outstanding digital products that look great
                on any device.
              </p>
            </motion.div>
          </div>
        </div>
      </CardWrapper>
    </MaxWidthWrapper>
  );
};

export default About;
