import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Terminal } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#milestones", label: t.nav.milestones },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-emerald/10 text-emerald">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="text-silver">sunil <span className="text-emerald">pandith</span></span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-silver-dim transition-colors hover:text-emerald"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle lang={lang} setLang={setLang} />
          <a
            href="#contact"
            className="rounded-md border border-emerald/40 bg-emerald/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-emerald transition-all hover:bg-emerald/20 hover:glow-emerald"
          >
            {t.nav.getInTouch}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border text-silver md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 font-mono text-sm uppercase tracking-widest text-silver-dim hover:text-emerald"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between gap-3">
              <LangToggle lang={lang} setLang={setLang} />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md border border-emerald/40 bg-emerald/10 px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-emerald"
              >
                {t.nav.getInTouch}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const btn = (code: Language, label: string) => (
    <button
      key={code}
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      className={`px-2 py-1 font-mono text-[11px] uppercase tracking-widest transition-colors ${
        lang === code ? "text-emerald" : "text-silver-dim hover:text-silver"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex items-center rounded-md border border-border bg-surface/60 px-1 backdrop-blur">
      {btn("en", "EN")}
      <span className="text-border">|</span>
      {btn("de", "DE")}
    </div>
  );
}
