import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/pages/Header";
import { BlurFade } from "@/components/magicui/blur-fade";
import { About } from "@/components/pages/About";
import { Projects } from "@/components/pages/Projects";
import { Work } from "@/components/pages/Work";
import { Contact } from "@/components/pages/Contact";
import { Footer } from "@/components/pages/Footer";
import { useState } from "react";

export function App() {
  const [page, setPage] = useState<string>("/");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header page={page} setPage={setPage} />
      <main className="m-auto max-w-4xl p-4 md:p-8">
        {page === "/" && (
          <BlurFade inView direction="up" duration={0.2}>
            <About />
          </BlurFade>
        )}
        {page === "/projects" && (
          <BlurFade inView direction="up" duration={0.2}>
            <Projects />
          </BlurFade>
        )}
        {page === "/work" && (
          <BlurFade inView direction="up" duration={0.2}>
            <Work />
          </BlurFade>
        )}
        {page === "/contact" && (
          <BlurFade inView direction="up" duration={0.2}>
            <Contact />
          </BlurFade>
        )}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
