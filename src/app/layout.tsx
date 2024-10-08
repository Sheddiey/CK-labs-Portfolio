"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";
import { Application } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Application>
          <div className="bg-[url('/10.jpg')] bg-center bg-cover">
            <Navbar />
            <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
              <div id="Home" className="flex-1 flex flex-col h-full">
                {children}
              </div>
              <div id="About">
                <About />
              </div>
              <div id="MyWork">
                <Projects />
              </div>
              <div id="ContactMe">
                <Contactme />
              </div>
              <Footer />
            </main>
          </div>
        </Application>
      </body>
    </html>
  );
}
