import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { content, type Content, type Language } from "./content";

type Ctx = {
  lang: Language;
  setLang: (l: Language) => void;
  t: Content;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "site-lang";

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Language;
  children: ReactNode;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Language) => {
    navigate({ to: "/$lang", params: { lang: newLang }, resetScroll: false });
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
