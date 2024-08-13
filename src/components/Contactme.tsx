"use client";

import { useRef, useState, ChangeEvent } from "react";
import { message as antdMessage } from "antd";
import { Github, Linkedin, Mail, MapPinIcon, Phone } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaUpwork } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CardWrapper from "./CardWrapper";
import { z } from "zod";

const formSchema = z.object({
  user_name: z.string().nonempty("Full Name is required"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
});

type FormData = z.infer<typeof formSchema>;

const Contactme: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = formSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      validation.error.errors.forEach((error) => {
        if (error.path.length > 0) {
          const fieldName = error.path[0] as keyof FormData;
          fieldErrors[fieldName] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_5kq3b2l",
          "template_ftf88vs",
          formRef.current,
          "s1QzsaEZUoxbOStqi"
        )
        .then(
          (result) => {
            console.log(result.text);
            antdMessage.success("Message sent successfully!");
            setFormData({
              user_name: "",
              user_email: "",
              message: "",
            });
            setErrors({});
          },
          (error) => {
            console.log(error.text);
            antdMessage.error("Message not sent! Please try again.");
          }
        );
    }
  };

  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div className="grid md:grid-cols-2 p-5 space-y-10 md:space-x-10 my-10 py-5">
          <div>
            <form
              className="space-y-4 grid"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <p className="font-bold text-white text-2xl">
                Get in <span className="text-blue_5">Touch</span>
              </p>
              <label htmlFor="user_name" className="sr-only">
                Full Name
              </label>
              <input
                id="user_name"
                name="user_name"
                className={`bg-white/90 p-2 rounded-md focus:outline-blue_5/60 ${
                  errors.user_name ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Full Name"
                value={formData.user_name}
                onChange={handleInputChange}
                required
              />
              {errors.user_name && (
                <p className="text-red-500">{errors.user_name}</p>
              )}
              <label htmlFor="user_email" className="sr-only">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                className={`bg-white/90 p-2 focus:outline-blue_5/60 rounded-md ${
                  errors.user_email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email"
                value={formData.user_email}
                onChange={handleInputChange}
                required
              />
              {errors.user_email && (
                <p className="text-red-500">{errors.user_email}</p>
              )}
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`bg-white/90 p-2 focus:outline-blue_5/60 rounded-md ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
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
              sscheruiyotk@gmail.com
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
