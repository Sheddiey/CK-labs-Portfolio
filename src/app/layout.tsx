'use client'

import type { Metadata } from "next";
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
    <html lang="en">
      <body className={inter.className}>
        <Application>
          <div className="bg-[url('/10.jpg')] bg-center bg-cover bg-">
          <Navbar />
          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 bg-cover bg- flex flex-col h-full">{children}</div>
            <About />
            <Projects />
            <Contactme />
            <Footer />
          </main>
        </div>
        </Application>
          
        
      </body>
    </html>
  );
}
