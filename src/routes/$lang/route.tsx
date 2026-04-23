import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/content";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "en" && params.lang !== "de") {
      throw redirect({ to: "/en" });
    }
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  return (
    <LanguageProvider lang={lang as Language}>
      <Outlet />
    </LanguageProvider>
  );
}
