import { AboutSection } from "./_components/AboutSection";
import { EventsSection } from "./_components/EventsSection";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/HeroSection";
import { Marquee } from "./_components/Marquee";
import { StatsSection } from "./_components/StatsSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Marquee />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <EventsSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
