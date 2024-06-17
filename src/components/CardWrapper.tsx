import { ReactNode } from "react";

const CardWrapper = ({
  className,
  children,
}: {
  className?: String;
  children?: ReactNode;
}) => {
  return (
    <div
      className={`mt-5 rounded-xl bg-green_3/50 shadow-black shadow-lg backdrop-blur-[2px] ${className}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
