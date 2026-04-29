"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { dict, Lang, Dict } from "@/lib/i18n";

type Theme = "dark" | "light";

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Dict;
};

const AppContext = createContext<Ctx | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    const savedLang = (localStorage.getItem("lang") as Lang) || "en";
    setThemeState(savedTheme);
    setLangState(savedLang);
    document.documentElement.dataset.theme = savedTheme;
    document.documentElement.lang = savedLang;
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
    document.documentElement.dataset.theme = t;
  };
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };
  const toggleLang = () => setLang(lang === "en" ? "th" : "en");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        lang,
        setLang,
        toggleLang,
        t: dict[lang],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}
