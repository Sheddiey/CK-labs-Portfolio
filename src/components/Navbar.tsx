import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const navItems = ['Home', 'About', 'My work', 'Contact Me'];
  return (
    <nav className="sticky z-[100] top-0">
      <MaxWidthWrapper>
        <div className="px-5 rounded-b-xl h-12 inset-x-0 w-full bg-blue_2/50 backdrop-blur-lg transition-all">
          <div className="flex h-12 items-center justify-between">
            <p>Logo</p>
            <div className="h-full text-blue_5 font-medium flex items-center space-x-4">
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">My Work</p>
              <p className="cursor-pointer">Contact Me</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
