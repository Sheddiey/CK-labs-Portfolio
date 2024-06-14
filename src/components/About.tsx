"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CardWrapper from "./CardWrapper";
import aboutImg from '../../public/manhattan-3866140.jpg'
import Image from "next/image";

const About = () => {
  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div className="p-5 rounded-xl ">
          <p className="text-center font-bold text-2xl mb-5 text-white">
            About me
          </p>
          <div className="overflow-hidden gap-5 grid grid-cols-2 mb-10">
            <div><Image src={aboutImg} alt="about Image"/></div>
            <motion.div
              whileInView={{
                x: 0,
              }}
              initial={{ x: 60 }}
              transition={{ duration: 1 }}
            >
              <p className="text-white">
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
