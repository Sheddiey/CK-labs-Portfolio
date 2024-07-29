import TextArea from "antd/es/input/TextArea";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Github, Linkedin, Mail, MapPinIcon, Phone } from "lucide-react";
import CardWrapper from "./CardWrapper";
import Link from "next/link";
import { FaGithub, FaUpwork } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "antd";

const Contactme = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_5kq3b2l",
          "template_ftf88vs",
          form.current,
          "s1QzsaEZUoxbOStqi"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent");
          },
          (error) => {
            console.log(error.text);
            alert("Message not sent! Try again.");
          }
        );
    }
  };

  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div className="grid md:grid-cols-2 p-5 space-y-10 md:space-x-10 my-10 py-5">
          <div>
            <form className="space-y-4 grid" ref={form} onSubmit={sendEmail}>
              <p className="font-bold text-white text-2xl">
                Get in <span className="text-blue_5">Touch</span>
              </p>
              <Input
                className="bg-white/90"
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <Input
                className="bg-white/90"
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <TextArea
                className="bg-white/90"
                name="message"
                placeholder="Message"
                required
              />
              <button
                className="bg-blue_5 font-medium text-white hover:bg-blue_5/80 transition-colors duration-300  py-2 px-4 rounded-lg"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div className="grid space-y-5 text-white">
            <div className="flex gap-2">
              <Phone />
              +254 711 241 878
            </div>
            <div className="flex gap-2">
              <Mail />
              shadrackcheruiyot429@gmail.com
            </div>
            <div className="flex gap-2">
              <MapPinIcon />
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
