import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const match = value.match(/^(.*?)([\d.]+)(.*)$/);
  const parsed = match
    ? {
        prefix: match[1],
        target: parseFloat(match[2]),
        decimals: (match[2].split(".")[1] || "").length,
        suffix: match[3],
      }
    : null;

  const initial = parsed
    ? `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}`
    : value;

  const [display, setDisplay] = useState(initial);
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!inView || !parsed) return;
    const ctrl = animate(motionVal, parsed.target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(`${parsed.prefix}${v.toFixed(parsed.decimals)}${parsed.suffix}`);
      },
    });
    return ctrl.stop;
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald">
                {t.projects.sectionLabel}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-silver md:text-5xl">
                {t.projects.headline}
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-silver-dim md:block">
              {t.projects.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {t.projects.items.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-8 backdrop-blur transition-all hover:border-emerald/40">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-emerald">
                        {p.company}
                      </span>
                      <span className="text-border">·</span>
                      <span className="font-mono text-xs text-silver-dim">{p.period}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-silver">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-silver-dim">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-silver-dim"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 lg:w-[360px] lg:shrink-0">
                    {p.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-border bg-background/40 px-2 py-3 text-center"
                      >
                        <p className="w-full break-words text-lg font-semibold leading-tight text-emerald">
                          <AnimatedMetric value={m.value} />
                        </p>
                        <p className="mt-1.5 w-full break-words font-mono text-[10px] uppercase leading-tight tracking-wider text-silver-dim hyphens-auto">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald/5 blur-3xl transition-opacity group-hover:bg-emerald/10"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
