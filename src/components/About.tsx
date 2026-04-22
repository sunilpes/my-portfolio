import { FadeIn } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald">
            {t.about.sectionLabel}
          </p>
        </FadeIn>

        <div className="mt-4 grid gap-16 lg:grid-cols-[1fr_420px] lg:items-start">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-silver md:text-5xl">
              {t.about.headlineLine1}
              <br />
              <span className="text-gradient-emerald">{t.about.headlineLine2}</span>
            </h2>
            <div className="mt-8 space-y-5 text-silver-dim md:text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-xl border border-border bg-surface/60 p-6 backdrop-blur">
              <div className="divide-y divide-border">
                {t.about.traits.map((trait) => (
                  <div
                    key={trait.label}
                    className="flex flex-col gap-0.5 py-4 first:pt-0 last:pb-0"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-widest text-silver-dim">
                      {trait.label}
                    </p>
                    <p className="text-sm text-silver">{trait.value}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://raw.githubusercontent.com/sunilpes/code-sculptor-page/main/public/sunil-pandith-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-emerald/40 bg-emerald/10 px-4 py-3 font-mono text-xs uppercase tracking-widest text-emerald transition-all hover:bg-emerald/20 hover:glow-emerald"
              >
                {t.about.downloadCV}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
