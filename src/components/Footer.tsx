import { FaGithub, FaUpwork } from "react-icons/fa6";
import CardWrapper from "./CardWrapper";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo3.png";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const footerItems = ["Home", "About", "MyWork", "ContactMe"];
  return (
    <footer className="relative mb-4">
      <MaxWidthWrapper>
        <CardWrapper>
          <div className="h-full pt-5">
            <div className="grid grid-cols-3 content-around">
              <Image
                className="place-self-center"
                height={200}
                width={200}
                src={logo}
                alt="logo"
              />
              <motion.ul className="grid">
                {footerItems.map((item, index) => (
                  <motion.li
                    className="cursor-pointer w-max text-white font-semibold hover:text-blue_5 transition-colors duration-300"
                    key={item}
                  >
                    <ScrollLink to={item} smooth={true} duration={500}>
                      {item.replace(/([A-Z])/g, " $1").trim()}
                    </ScrollLink>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="grid text-white text-2xl content-evenly">
                <Link
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~0152b4d1bddec8e507"
                >
                  <FaUpwork className="cursor-pointer hover:text-blue_5  hover:scale-125 transition-all duration-300 " />
                </Link>
                <Link href="https://github.com/Sheddiey" target="_blank">
                  <FaGithub className="cursor-pointer hover:text-blue_5  hover:scale-125 transition-all duration-300 " />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sheddiey/"
                  target="_blank"
                >
                  <Linkedin className="cursor-pointer hover:text-blue_5  hover:scale-125 transition-all duration-300 " />
                </Link>
              </div>
            </div>
            <p className="text-center text-sm py-2">
              &copy;Sheddiey {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </CardWrapper>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
