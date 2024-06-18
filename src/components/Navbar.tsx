import { useContext, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { AppContext } from "@/context";
import { AlignCenter, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  slideBracketLeft,
  slideBracketRight,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import FadeinOnView from "@/utils/FadeinOnView";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from "../../public/logo3.png";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const navItems = ["Home", "About", "MyWork", "ContactMe"]; 

  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Context must be used within the application");
  }

  const { isNavOpen, setIsNavOpen } = context;

  return (
    <nav className="z-[100] top-0">
      <div className="px-5 h-12 inset-x-0 w-full shadow-sm shadow-black  bg-green_3/50 backdrop-blur-xl transition-all">
        <MaxWidthWrapper>
          <div className="flex h-12 items-center relative justify-between">
            <motion.div  variants={slideInFromLeft(0.2)} >
              <Image className="cursor-pointer" height={70} width={70} src={logo} alt="logo" />
            </motion.div>
            <motion.ul className="flex gap-6 ">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  className="text-white flex relative cursor-pointer"
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered(null)}
                  variants={slideInFromRight(0.2 * index)}
                >
                  <motion.span
                    variants={slideBracketLeft}
                    initial="hidden"
                    animate={isHovered === item ? "hover" : "hidden"}
                    className="absolute font-bold text-blue_5"
                  >
                    &lt;
                  </motion.span>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="hover:text-blue_5 md:flex hidden font-bold"
                  >
                    {item.replace(/([A-Z])/g, " $1").trim()}
                  </Link>
                  <motion.span
                    variants={slideBracketRight}
                    initial="hidden"
                    animate={isHovered === item ? "hover" : "hidden"}
                    className="absolute -right-[10px] font-bold text-blue_5"
                  >
                    /&#62;
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>

            {isNavOpen && (
              <motion.div className="top-0 w-[100vw] -left-8 absolute bg-blue_3/80 backdrop-blur-[20px]">
                <motion.ul className="w-full flex flex-col justify-center">
                  {navItems.map((item, index) => (
                    <FadeinOnView delay={0.2 * index} key={index}>
                      <motion.li className="text-blue_5 font-bold cursor-pointer text-2xl py-6 text-center">
                        <motion.span
                          variants={slideBracketLeft}
                          initial="hidden"
                          animate={isHovered === item ? "hover" : "hidden"}
                          className="absolute font-bold text-blue_5"
                        >
                          &lt;
                        </motion.span>
                        <Link
                          to={item}
                          smooth={true}
                          duration={500}
                          onClick={() => {
                            setIsNavOpen(false);
                          }}
                        >
                          {item.replace(/([A-Z])/g, " $1").trim()}
                        </Link>
                        <motion.span
                          variants={slideBracketRight}
                          initial="hidden"
                          animate={isHovered === item ? "hover" : "hidden"}
                          className="absolute font-bold text-blue_5"
                        >
                          /&#62;
                        </motion.span>
                      </motion.li>
                    </FadeinOnView>
                  ))}
                </motion.ul>
              </motion.div>
            )}

            <motion.button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden cursor-pointer z-[999]"
            >
              {isNavOpen ? <X /> : <AlignCenter />}
            </motion.button>
          </div>
        </MaxWidthWrapper>
      </div>
    </nav>
  );
};

export default Navbar;
