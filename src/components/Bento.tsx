import { Network, Cloud, Workflow, Database, Cpu, GitBranch } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    icon: Network,
    title: "Distributed Systems",
    tags: ["Apache Spark", "Apache Kafka", "Apache Flink", "Apache Druid"],
    body: "Petabyte-scale processing with fault-tolerant, real-time compute fabrics.",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    tags: ["AWS EMR", "GCP Dataproc", "GKE", "Kubernetes"],
    body: "Multi-cloud architectures — led 500TB AWS → GCP migration, 35% cost reduction.",
    span: "md:col-span-2",
  },
  {
    icon: Workflow,
    title: "Orchestration",
    tags: ["Apache Airflow", "Apache Beam", "Amazon Kinesis"],
    body: "Reliable DAGs, event-driven ingestion, and observable workflows.",
    span: "md:col-span-1",
  },
  {
    icon: Database,
    title: "Warehousing",
    tags: ["BigQuery", "Oracle DB", "Redis"],
    body: "Modeled, governed, query-optimized at scale.",
    span: "md:col-span-1",
  },
  {
    icon: Cpu,
    title: "Stream Processing",
    tags: ["Kafka", "Flink", "Druid"],
    body: "50 TB/day real-time analytics with low-latency delivery.",
    span: "md:col-span-1",
  },
  {
    icon: GitBranch,
    title: "DataOps",
    tags: ["dbt", "SQL", "CI/CD"],
    body: "Treating data like code — transformations, tests, and versioned models.",
    span: "md:col-span-1",
  },
];

export function Bento() {
  return (
    <section id="competencies" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald">
                / 01 — Competencies
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-silver md:text-5xl">
                The architecture stack.
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-silver-dim md:block">
              Tooling chosen for reliability and operational efficiency at scale.
            </p>
          </div>
        </FadeIn>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={item.title}
                delay={i * 0.06}
                className={`group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-6 backdrop-blur transition-all hover:border-emerald/40 ${item.span}`}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-lg ${
                        item.featured ? "bg-emerald text-primary-foreground" : "bg-emerald/10 text-emerald"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3
                    className={`font-semibold tracking-tight text-silver ${
                      item.featured ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-silver-dim">{item.body}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-silver-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald/5 blur-2xl transition-opacity group-hover:bg-emerald/15"
                />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
