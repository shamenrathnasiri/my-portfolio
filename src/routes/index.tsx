import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ari Solène — Software Engineer Portfolio" },
      {
        name: "description",
        content:
          "Senior software engineer crafting fast, accessible products at the intersection of design systems and distributed backends.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Work />
      <Projects />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}
