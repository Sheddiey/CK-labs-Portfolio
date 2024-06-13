import TextArea from "antd/es/input/TextArea";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "antd";
import { Github, Linkedin, Mail, MapPinIcon, Phone } from "lucide-react";
import CardWrapper from "./CardWrapper";

const Contactme = () => {
  return (
    <MaxWidthWrapper>
      <CardWrapper>
        <div className="grid grid-cols-2 p-5 space-x-10 my-10 py-5 ">
          <div>
            <form className="space-y-4 grid">
              <p className="font-bold text-2xl">
                Get in <span className="text-blue_5">Touch</span>
              </p>
              <Input type="text" placeholder="Full Name" required />
              <Input type="text" placeholder="Email" required />
              <TextArea placeholder="Message" required />
              <button
                className="bg-blue_5 text-white py-2 px-4 rounded-lg"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div className="grid">
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
            <div className="flex gap-2">
              <Linkedin />
              <Github />
            </div>
          </div>
        </div>{" "}
      </CardWrapper>
    </MaxWidthWrapper>
  );
};

export default Contactme;
