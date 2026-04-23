import { createFileRoute, redirect } from "@tanstack/react-router";

const STORAGE_KEY = "site-lang";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    let lang: "en" | "de" = "en";
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "de" || saved === "en") {
        lang = saved;
      } else if (navigator.language?.toLowerCase().startsWith("de")) {
        lang = "de";
      }
    }
    throw redirect({ to: "/$lang", params: { lang } });
  },
});
