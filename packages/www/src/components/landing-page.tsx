import About from "@/components/about";
import { AnimatedHeroBackground } from "@/components/animated-hero-background";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Timeline } from "@/components/timeline";
import Image from "next/image";
import HeroImage from "../../public/hero.webp";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <AnimatedHeroBackground>
          <Image
            src={HeroImage}
            alt="Mapa mundi artístico com Brasil em destaque"
            fill
            className="object-cover opacity-90"
            priority
            placeholder="blur"
          />
        </AnimatedHeroBackground>
        <Header />
        <Hero />
      </div>

      <Features />
      <About />
      <Timeline />
      <Footer />
    </div>
  );
}
