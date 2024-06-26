import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: String;
  children?: ReactNode;
}) => {
  return (
    <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-5 lg:px-20 ">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;