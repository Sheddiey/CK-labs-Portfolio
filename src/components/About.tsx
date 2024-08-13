"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CardWrapper from "./CardWrapper";
import aboutImg from "../../public/7.jpg";
import Image from "next/image";

const About = () => {
  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div id="Home" className="p-5 rounded-xl ">
          <p className="text-center font-bold text-2xl mb-5 text-blue_5">
            About me
          </p>
          <div className="overflow-hidden gap-5 grid lg:grid-cols-2 mb-10">
            <motion.div
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image src={aboutImg} className="rounded-xl" alt="about Image" />
            </motion.div>
            <motion.div
              whileInView={{
                x: 0,
              }}
              initial={{ x: 60 }}
              transition={{ duration: 1 }}
            >
              <div className="font-medium">
                <p>
                  Hi there! I&apos;m a passionate web developer with over 2
                  years of experience in creating visually stunning, accessible,
                  and user-friendly websites.
                </p>
                <ul className="list-disc ml-6 font-medium">
                  <li>
                    I specialize in{" "}
                    <strong className="text-blue_5">React</strong> and{" "}
                    <strong className="text-blue_5">Next.js</strong>, building
                    dynamic, server-rendered applications that deliver seamless
                    user experiences.
                  </li>
                  <li>
                    My expertise in{" "}
                    <strong className="text-blue_5">TypeScript</strong> ensures
                    robust, maintainable code that reduces bugs and enhances
                    quality.
                  </li>
                  <li>
                    I&apos;m proficient in{" "}
                    <strong className="text-blue_5">Tailwind CSS</strong>,
                    crafting sleek, responsive designs that look great on any
                    device.
                  </li>
                  <li>
                    On the backend, I leverage{" "}
                    <strong className="text-blue_5">Node.js</strong> and{" "}
                    <strong className="text-blue_5">Firebase</strong> to create
                    reliable and efficient systems.
                  </li>
                </ul>
                <p>
                  I&apos;m on the lookout for a full-time{" "}
                  <strong className="text-blue_5">Front-end Web Developer</strong> role where I can
                  continue to bring innovative ideas to life using the latest
                  technologies. Let&apos;s build something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </CardWrapper>
    </MaxWidthWrapper>
  );
};

export default About;
