import CardWrapper from "./CardWrapper";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="relative mb-4">
      <MaxWidthWrapper>
          <div className="h-full">
            <p className="text-center text-sm mt-4">
              &copy;Sheddiey {new Date().getFullYear()} All rights reserved
            </p>
          </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
