import { ReactNode } from "react";

const CardWrapper = ({
  className,
  children,
}: {
  className?: String;
  children?: ReactNode;
}) => {
  return (
    <div className="mt-5 rounded-xl bg-blue_2/50 backdrop-blur-sm">{children}</div>
  );
};

export default CardWrapper;
