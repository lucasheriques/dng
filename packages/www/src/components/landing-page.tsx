"use client";

import About from "@/components/about";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../../public/hero.png";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{
            clipPath: "circle(0% at 50% 50%)",
            opacity: 1,
          }}
          animate={{
            clipPath: "circle(150% at 50% 50%)",
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
            clipPath: {
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >
          <Image
            src={HeroImage}
            alt="Mapa mundi artístico com Brasil em destaque"
            fill
            className="object-cover opacity-90"
            priority
            placeholder="blur"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-[#0A0118]/50 to-transparent" />
        </motion.div>
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
