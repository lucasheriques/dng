"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, MailCheck } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  description: string;
  permalink: string;
}

const mockBlogPosts: BlogPost[] = [
  {
    title: "5 Dicas para Conseguir seu Primeiro Trabalho Remoto Internacional",
    date: "2024-03-15",
    description:
      "Descubra estratégias comprovadas para se destacar no mercado global de tecnologia.",
    permalink: "https://newsletter.nagringa.dev/post-1",
  },
  {
    title: "Como Preparar seu LinkedIn para Vagas Internacionais",
    date: "2024-03-01",
    description:
      "Aprenda a otimizar seu perfil e atrair recrutadores de empresas globais.",
    permalink: "https://newsletter.nagringa.dev/post-2",
  },
  {
    title: "Dominando Entrevistas Técnicas em Inglês: Guia Completo",
    date: "2024-02-15",
    description:
      "Técnicas e dicas para se sair bem em entrevistas técnicas conduzidas em inglês.",
    permalink: "https://newsletter.nagringa.dev/post-3",
  },
];

export function NewsletterSectionComponent() {
  return (
    <section className="py-24 bg-[#0A0118]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-4 text-[#5CFFE1] border-[#5CFFE1]/30"
          >
            Newsletter
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Últimos artigos da Dev na Gringa
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockBlogPosts.map((post, index) => (
            <motion.div
              key={post.permalink}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#1A0B2E] border-[#5CFFE1]/10 hover:border-[#5CFFE1]/30 transition-colors h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-[#5CFFE1] text-xl">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-white/60 mb-4">
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-white/80 mb-4 flex-grow">
                    {post.description}
                  </p>
                  <Link
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="text-[#5CFFE1] p-0 hover:underline"
                    >
                      Ler artigo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="https://newsletter.nagringa.dev/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#5CFFE1] hover:bg-[#5CFFE1]/90 text-[#0A0118]">
              Assinar a newsletter
              <MailCheck className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
