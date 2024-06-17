
import { Metadata } from "next";

interface PageProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Sheddiey",
  description: "Personal website",
};


const Page: React.FC<PageProps> = ({ children }) => {
    return (
      <div>
        {children}
      </div>
    );
  };
  
  export default Page;