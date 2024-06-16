'use client'

import { Application } from "@/context";

interface PageProps {
    children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
      <Application>
        {children}
      </Application>
    );
  };
  
  export default Page;