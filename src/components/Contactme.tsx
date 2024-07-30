import { Input  } from "antd";
import { Github, Linkedin, Mail, MapPinIcon, Phone } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaUpwork } from "react-icons/fa6";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CardWrapper from "./CardWrapper";


const Contactme: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div className="grid md:grid-cols-2 p-5 space-y-10 md:space-x-10 my-10 py-5">
          <div>
            <form className="space-y-4 grid" >
              <p className="font-bold text-white text-2xl">
                Get in <span className="text-blue_5">Touch</span>
              </p>
              <label htmlFor="user_name" className="sr-only">
                Full Name
              </label>
              <Input
                id="user_name"
                className="bg-white/90"
                type="text"
                placeholder="Full Name"
              />
              <label htmlFor="user_email" className="sr-only">
                Email
              </label>
              <Input
                id="user_email"
                className="bg-white/90"
                type="email"
                placeholder="Email"
              />
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Input
                id="message"
                className="bg-white/90"
                placeholder="Message"
              />
              <button
                className="bg-blue_5 font-medium text-white hover:bg-blue_5/80 transition-colors duration-300 py-2 px-4 rounded-lg"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div className="grid space-y-5 text-white">
            <div className="flex gap-2">
              <Phone aria-label="Phone number" />
              +254 711 241 878
            </div>
            <div className="flex gap-2">
              <Mail aria-label="Email address" />
              shadrackcheruiyot429@gmail.com
            </div>
            <div className="flex gap-2">
              <MapPinIcon aria-label="Location" />
              Remote
            </div>
            <div className="flex place-content-center text-2xl space-x-5">
              <Link
                target="_blank"
                href="https://www.upwork.com/freelancers/~0152b4d1bddec8e507"
              >
                <FaUpwork className="cursor-pointer hover:text-blue_5 hover:scale-125 transition-all duration-300" />
              </Link>
              <Link href="https://github.com/Sheddiey" target="_blank">
                <FaGithub className="cursor-pointer hover:text-blue_5 hover:scale-125 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sheddiey/"
                target="_blank"
              >
                <Linkedin className="cursor-pointer hover:text-blue_5 hover:scale-125 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </CardWrapper>
    </MaxWidthWrapper>
  );
};

export default Contactme;
