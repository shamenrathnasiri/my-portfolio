import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </QueryClientProvider>
  );
}
