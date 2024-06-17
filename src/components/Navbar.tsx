import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const navItems = ["Home", "About", "My work", "Contact Me"];
  return (
    <nav className="sticky z-[100] top-0">
      <div className="px-5 h-12 inset-x-0 w-full shadow-sm shadow-black  bg-green-900/50 backdrop-blur-xl transition-all">
        <MaxWidthWrapper>
          <div className="flex h-12 items-center justify-between">
            <p>Logo</p>
            <div className="h-full hidden  text-white font-medium md:flex items-center space-x-4">
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">My Work</p>
              <p className="cursor-pointer">Contact Me</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </nav>
  );
};

export default Navbar;
