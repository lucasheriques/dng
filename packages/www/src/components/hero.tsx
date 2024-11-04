"use client";

import { AnimatedStat } from "@/app/hero/animated-stat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

const AnimatedText = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            opacity: { delay: delay + index * 0.05, duration: 0.3 },
            filter: { delay: delay + index * 0.05 + 0.3, duration: 0.3 },
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Badge
          variant="outline"
          className="border-[#5CFFE1]/30 text-[#5CFFE1] mb-6 backdrop-blur-sm"
        >
          +100 devs brasileiros na comunidade
        </Badge>
      </motion.div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
        <AnimatedText text="Do Brasil para o" delay={0.3} />
        <br />
        <motion.span
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            opacity: { delay: 0.9, duration: 0.3 },
            filter: { delay: 0.9, duration: 0.3 },
          }}
          className="bg-gradient-to-r from-primary via-yellow-400 to-[#FF4B8C] text-transparent bg-clip-text inline-block"
        >
          mundo inteiro
        </motion.span>
      </h1>
      <p className="text-xl text-white/80 mb-8 max-w-2xl">
        <AnimatedText
          text="Sua jornada como dev não precisa ter fronteiras. Junte-se a uma comunidade de desenvolvedores brasileiros que estão conquistando oportunidades globais e crescendo na carreira."
          delay={0.9}
        />
      </p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 2.1 }} // Delayed to appear after text
      >
        <Link href={`${socials.newsletter}/subscribe?ref=devnagringa`}>
          <Button className="h-12 px-6 text-lg min-w-full">
            Participe das mentorias
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Button variant="outline" className="h-12 px-6 text-lg">
          Veja o conteúdo gratuito
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="mt-16 flex justify-center items-center border-t border-white/10 pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl w-full">
          <AnimatedStat
            value={800}
            label="inscritos na newsletter"
            color="text-primary"
          />
          <AnimatedStat
            value={100}
            label="membros na comunidade"
            color="text-yellow-400"
          />
          <AnimatedStat
            value={15}
            label="assinantes da mentoria"
            color="text-[#FF4B8C]"
          />
        </div>
      </motion.div>
    </>
  );
}
