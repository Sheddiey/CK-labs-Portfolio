import CardWrapper from "./CardWrapper";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className=" h-20 mb-4 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200 bg-blue_2/40 backdrop-blur-sm h-full mb-2 rounded-xl">
          <p className="text-center text-sm mt-4">
            &copy;Sheddiey {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
