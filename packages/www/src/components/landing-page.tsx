"use client";

import About from "@/components/about";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/constants";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            src="/hero.png"
            alt="Mapa mundi artístico com Brasil em destaque"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-[#0A0118]/50 to-transparent" />
        </motion.div>

        {/* Header */}
        <motion.header
          className="absolute top-0 left-0 right-0 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <div className="items-center gap-2 flex">
              <Globe2 className="h-6 w-6 text-[#5CFFE1]" />
              <span className="font-bold text-white text-xl">
                Dev na Gringa
              </span>
            </div>
            <div className="items-center gap-4 sm:flex hidden">
              <Button variant="ghost" asChild>
                <Link href={`${socials.discord}`}>Comunidade</Link>
              </Button>
              <Button asChild>
                <Link href={`${socials.newsletter}/subscribe?ref=devnagringa`}>
                  Participar
                </Link>
              </Button>
            </div>
          </nav>
        </motion.header>

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
