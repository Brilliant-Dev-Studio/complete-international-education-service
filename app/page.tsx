import { AboutSection } from "./_components/AboutSection";
import { EventsSection } from "./_components/EventsSection";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/HeroSection";
import { Marquee } from "./_components/Marquee";
import { PromiseSection } from "./_components/PromiseSection";
import { StatsSection } from "./_components/StatsSection";
import { Testimonials } from "./_components/Testimonials";
import { WhyChooseSection } from "./_components/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Header />
      <Marquee />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <PromiseSection />
        <StatsSection />
        <WhyChooseSection />
        <EventsSection />
        <Testimonials />
      </main>
    </>
  );
}
