import About from "@/components/about";
import { AnimatedHeroBackground } from "@/components/animated-hero-background";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Timeline } from "@/components/timeline";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <AnimatedHeroBackground />
        <Header />

        {/* Hero Content */}
        <Hero />
      </div>

      <Features />
      <About />
      <Timeline />
      <Footer />
    </div>
  );
}
