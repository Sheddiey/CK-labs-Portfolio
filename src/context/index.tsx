
import { ReactNode, createContext, useEffect, useState } from "react";

interface AppContextType {
  changeBg: () => void;
  bg: string;
  screen: string;
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

interface ApplicationProps {
  children: ReactNode;
}

export const Application = ({ children }: ApplicationProps) => {
  const [bg, setBg] = useState("");
  const [screen, setScreen] = useState("sm");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const bgs = ["custom-bg1", "custom-bg2", "custom-bg4"];

  const changeBg = () => {
    const random = Math.floor(Math.random() * bgs.length);
    setBg(bgs[random]);
  };

  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setScreen("sm");
    } else if (width >= 640 && width < 768) {
      setScreen("md");
    } else if (width >= 768 && width < 1024) {
      setScreen("lg");
    } else if (width >= 1024 && width < 1280) {
      setScreen("xl");
    } else {
      setScreen("2xl");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <AppContext.Provider
      value={{ changeBg, screen, bg, isNavOpen, setIsNavOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};
