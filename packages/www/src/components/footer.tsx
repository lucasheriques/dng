"use client";

import { Button } from "@/components/ui/button";
import { socials } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const popularPosts = [
  {
    title: "Como se Preparar para Entrevistas Técnicas em Inglês",
    date: "Mar 15, 2024",
  },
  {
    title: "Guia Completo de System Design para Brasileiros",
    date: "Mar 10, 2024",
  },
  {
    title: "5 Dicas para Conseguir seu Primeiro Trabalho Remoto",
    date: "Mar 5, 2024",
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0118] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/footer-hero.png"
            alt="Mapa mundi digital com efeito cósmico"
            fill
            className="object-cover opacity-90"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-[#0A0118]/80 to-[#0A0118]/60" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Community Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="h-6 w-6 text-[#5CFFE1]" />
              <span className="font-bold text-white text-xl">
                Dev na Gringa
              </span>
            </div>
            <p className="text-white/80">
              Uma comunidade para profissionais de TI brasileiros que querem
              crescer na carreira e se destacar no mercado internacional.
            </p>
            <div className="pt-4">
              <Link href={socials.discord} target="_blank">
                <Button variant="outline" className="w-full sm:w-auto">
                  Junte-se à comunidade
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Popular Posts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Posts Populares
            </h3>
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="#" className="block">
                    <p className="text-white/80 group-hover:text-[#5CFFE1] transition-colors">
                      {post.title}
                    </p>
                    <p className="text-sm text-white/60">{post.date}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-[#5CFFE1] transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:opacity-100 transition-opacity" />
                  Algoritmos e Estruturas de Dados
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-[#5CFFE1] transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  System Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-[#5CFFE1] transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <p className="text-white/80">
                Tem alguma dúvida? Entre em contato comigo:
              </p>
              <a className="text-primary block" href="mailto:hi@lucasfaria.dev">
                hi@lucasfaria.dev
              </a>
              <div className="flex space-x-4 pt-2">
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#5CFFE1] transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </motion.div>
                </Link>
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#5CFFE1] transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </motion.div>
                </Link>
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#5CFFE1] transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            &copy; {new Date().getFullYear()} Dev na Gringa. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
