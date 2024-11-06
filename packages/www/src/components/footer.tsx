"use client";

import { Button } from "@/components/ui/button";
import { POPULAR_ARTICLES, socials } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
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

const tools = [
  { name: "Calculadora de Salário Líquido CLT vs PJ", href: "#" },
  { name: "Newsletter", href: socials.newsletter },
];

const social = [
  {
    name: "LinkedIn",
    href: socials.linkedin,
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: socials.twitter,
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0118]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/footer-hero.png"
            alt="Mapa mundi digital com efeito cósmico"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-[#0A0118]/80 to-[#0A0118]/60" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* CTA Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-[#5CFFE1] text-lg font-semibold">
            Junte-se à comunidade
          </h2>
          <p className="mt-2 text-4xl font-semibold text-white">
            Desenvolva sua carreira internacional em engenharia de software
          </p>
          <p className="mt-6 text-lg text-gray-300">
            Uma comunidade para profissionais de TI brasileiros que querem
            crescer na carreira e se destacar no mercado internacional.
          </p>
          <div className="mt-8">
            <Link
              href={`${socials.newsletter}/subscribe?ref=devnagringa`}
              target="_blank"
            >
              <Button size="xl">
                Participar das mentorias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
          {/* Popular Posts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Artigos populares
            </h3>
            <div className="space-y-4">
              {POPULAR_ARTICLES.map((post, index) => (
                <div key={index}>
                  <Link href="#" className="block">
                    <p className="text-gray-300 hover:text-[#5CFFE1] transition-colors">
                      {post.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      Tempo de leitura: {post.readingTime}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Ferramentas
            </h3>
            <ul className="space-y-4">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="text-gray-300 hover:text-[#5CFFE1] transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
            <p className="text-gray-300 mb-4">
              Tem alguma dúvida? Entre em contato:
            </p>
            <a
              className="text-[#5CFFE1] block mb-6"
              href="mailto:hi@lucasfaria.dev"
            >
              hi@lucasfaria.dev
            </a>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#5CFFE1]"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Criado por{" "}
            <Link
              href={socials.personalWebsite}
              className="text-[#5CFFE1] hover:text-[#5CFFE1]/90 transition-colors"
              target="_blank"
            >
              Lucas Faria
            </Link>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
