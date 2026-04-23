import { createFileRoute, redirect } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Milestones } from "@/components/Milestones";
import { Contact, Footer } from "@/components/Contact";
import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/content";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "en" && params.lang !== "de") {
      throw redirect({ to: "/en" });
    }
  },
  component: LangPage,
});

function LangPage() {
  const { lang } = Route.useParams();
  return (
    <LanguageProvider lang={lang as Language}>
      <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Milestones />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
