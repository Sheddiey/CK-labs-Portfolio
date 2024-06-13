"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import sheddiey from "../../public/sheddiey.jpg";
import react from "../../public/react-original.svg";
import css3 from "../../public/css3-original.svg";
import firebase from "../../public/firebase-plain.svg";
import html5 from "../../public/html5-original.svg";
import javaScript from "../../public/javascript-original.svg";
import nextjs from "../../public/nextjs-original.svg";
import node from "../../public/nodejs-original.svg";
import tailwind from "../../public/tailwindcss-plain.svg";
import typeScript from "../../public/typescript-original.svg";
import CardWrapper from "@/components/CardWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div className="grid px-5 items-center h-[calc(100vh-3.5rem)]">
          <div className="grid space-x-5 grid-cols-2">
            <motion.div
              whileInView={{
                x: 0,
              }}
              initial={{ x: -60 }}
              transition={{ duration: 1 }}
              className="flex space-y-5 flex-col justify-center"
            >
              <p className="font-bold text-4xl">Helo, I&apos;m</p>
              <span className="text-blue_5 text-4xl font-bold">
                Shadrack Cheruiyot
              </span>
              <p className="text-white">
                I&apos;m a web developer, passionate about crafting accessible
                and user-friendly websites. With expertise in React for dynamic
                interfaces and Tailwind CSS for sleek designs, I ensure your
                site looks great on any device. Leveraging Git for collaboration
                and Firebase for backend needs, I&apos;m committed to delivering
                top-notch web solutions. I am seeking a full-time position as a
                Front-end Web Developer.
              </p>
              <div className="flex space-x-4 mt-5">
                <button className="bg-blue_5 text-white py-2 px-4 rounded-lg">
                  Hire Me
                </button>
                <button className="flex items-center">
                  Download CV
                  <DownloadIcon />
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                className="rounded-tl-[40%] rounded-br-[40%] border-2 border-blue_5"
                height={390}
                src={sheddiey}
                alt="Sheddiey"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center gap-4"
          >
            <Image src={react} alt="CSS3" width={40} height={40} />
            <Image src={javaScript} alt="JavaScript" width={40} height={40} />
            <Image src={typeScript} alt="Ts" width={40} height={40} />
            <Image src={tailwind} alt="Tailwind CSS" width={40} height={40} />
            <Image src={css3} alt="CSS3" width={40} height={40} />
            <Image src={html5} alt="HTML5" width={40} height={40} />
            <Image src={firebase} alt="Firebaase" width={40} height={40} />
            <Image src={node} alt="Node" width={40} height={40} />
            <Image src={nextjs} alt="Nextjs" width={40} height={40} />
          </motion.div>
        </div>
      </CardWrapper>
    </MaxWidthWrapper>
  );
}
