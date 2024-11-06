"use client";

import { AnimatedStat } from "@/app/hero/animated-stat";
import { ExpandableCard } from "@/components/expandable-card";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import { Timeline } from "@/components/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Newsletter",
    date: "Maio 2024",
    content: (
      <div className="space-y-8">
        <div className="prose dark:prose-invert">
          <p>
            Eu sempre quis produzir conteúdo para ajudar os outros, mas nunca
            tinha a certeza de como começar.
          </p>
          <p>
            O conselho que finalmente funcionou pra mim foi: escrever o que eu
            gostaria de saber 2 anos atrás.
          </p>
          <p>
            A maior parte desses artigos serão de graça, pra sempre. Pois o meu
            objetivo é aprender cada vez mais para repassar todo meu
            conhecimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Como consegui meu primeiro trabalho remoto
            </h3>
            <p className="text-neutral-300 text-sm mb-4">
              O passo a passo completo que usei para me destacar e ser
              contratado por uma empresa americana...
            </p>
            <span className="text-primary text-xs">
              +300 leitores • 12 min de leitura
            </span>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Inglês técnico para entrevistas
            </h3>
            <p className="text-neutral-300 text-sm mb-4">
              As principais expressões e termos que você precisa dominar para se
              comunicar bem em processos seletivos...
            </p>
            <span className="text-primary text-xs">
              +250 leitores • 8 min de leitura
            </span>
          </div>
        </div>
        <Link
          href={`${socials.newsletter}/subscribe?ref=devnagringa`}
          className="block"
        >
          <Button className="w-full md:w-auto" variant="outline">
            Receba os artigos toda semana
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: "Mentoria",
    date: "Junho 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Acelere sua carreira com mentoria personalizada e recursos exclusivos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 p-6 rounded-lg">
            <Globe2 className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-white font-medium mb-2">Conteúdo Exclusivo</h3>
            <p className="text-neutral-300 text-sm">
              Guias práticos e vídeos detalhados sobre processos seletivos
              internacionais
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <Globe2 className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="text-white font-medium mb-2">Templates Prontos</h3>
            <p className="text-neutral-300 text-sm">
              Currículos, portfólios e emails que já ajudaram dezenas de devs
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <Globe2 className="h-8 w-8 text-[#FF4B8C] mb-4" />
            <h3 className="text-white font-medium mb-2">Mentoria em Grupo</h3>
            <p className="text-neutral-300 text-sm">
              Encontros mensais para resolver dúvidas e compartilhar
              experiências
            </p>
          </div>
        </div>
        <Link
          href={`${socials.newsletter}/subscribe?ref=devnagringa`}
          className="block"
        >
          <Button className="w-full md:w-auto">
            Comece sua jornada internacional
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: "Comunidade",
    date: "Junho 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Faça parte de uma rede de desenvolvedores brasileiros compartilhando
          conhecimento e oportunidades
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-white font-medium mb-2">Networking Ativo</h3>
            <p className="text-neutral-300 text-sm">
              Conecte-se com devs que já trabalham em empresas internacionais
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-white font-medium mb-2">Vagas Exclusivas</h3>
            <p className="text-neutral-300 text-sm">
              Acesso a oportunidades compartilhadas pela própria comunidade
            </p>
          </div>
        </div>
        <Link
          href={`${socials.newsletter}/subscribe?ref=devnagringa`}
          className="block"
        >
          <Button variant="outline" className="w-full md:w-auto">
            Entre para a comunidade
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    ),
  },
  {
    title: "Depoimentos",
    date: "Novembro 2024",
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExpandableCard
            title="Mentoria individual"
            summary="Essa mentoria com o Lucas foi um achado viu. O cara é uma
                    referência técnica gigante e uma fonte de energia para quem
                    deseja crescer na área."
            fullContent={
              <div className="prose dark:prose-invert">
                <p>O Lucas é um mentor muito prático e direto ao ponto.</p>
                <p>
                  Ele procura entender meus objetivos antes de me orientar, dá
                  feedback personalizado e ajuda a organizar minhas metas.
                </p>
                <p>
                  Tenho conseguido identificar melhor os meus GAP&apos;s
                  técnicos(sem medo de julgamentos) e estou melhorando a gestão
                  da minha agenda de estudos e desenvolvimento técnico,
                  conciliando bem com a progressão profissional que eu almejo.
                </p>
                <p>
                  Além do mais, o Lucas inspira a gente pela própria prática
                  sabe: ele cria e compartilha novos projetos e ideias com a
                  comunidade, o que acaba motivando a gente a buscar o mesmo
                  nível de inovação e comprometimento.
                </p>
                <p>
                  Essa mentoria com o Lucas foi um achado viu. O cara é uma
                  referência técnica gigante e uma fonte de energia para quem
                  deseja crescer na área.
                </p>
              </div>
            }
            footer={
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/reviews/daiane.jpeg" />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">
                    <Link
                      href="https://www.linkedin.com/in/daianegalvao/"
                      target="_blank"
                    >
                      Daiane Galvão
                    </Link>
                  </p>
                  <p className="text-sm text-white/60">
                    Senior Software Engineer @ Hotmart
                  </p>
                </div>
              </div>
            }
          />
          <ExpandableCard
            title="Mentoria em grupo"
            summary="Meu campo de visão era bem restrito, mas os artigos e mentorias do Lucas me ajudaram a expandi-lo, tanto em aspectos técnicos quanto em questões sociais e de comunicação."
            fullContent={
              <div className="prose dark:prose-invert">
                <p>
                  Conheci o Lucas através de um dos primeiros artigos dele. Já
                  estava trabalhando no exterior e me identifiquei muito com os
                  temas que ele abordava, especificamente quando ele aborda
                  sobre as algemas de ouro - aquilo mexeu muito comigo, pois na
                  época já vinha me sentindo desconfortável com o rumo que minha
                  carreira como dev estava tomando.
                </p>
                <p>
                  Me sentia muito parado no tempo e acomodado. Depois disso,
                  assinei e comecei a acompanhar a newsletter, e desde então
                  tenho aprendido bastante. Consegui entender os pontos que eu
                  precisava melhorar para sair da minha zona de conforto.
                </p>
                <p>
                  Durante as mentorias e todo o material que o Lucas fornece,
                  aprendi tudo que eu precisava melhorar: minha comunicação,
                  minha postura em redes sociais como LinkedIn, leetcode, system
                  designs, como me comportar em diferentes etapas de uma
                  entrevista. Tudo isso naturalmente está fazendo eu melhorar a
                  cada dia e agora estou de fato enxergando um novo sentido na
                  minha carreira como dev.
                </p>
                <p>
                  Não apenas os artigos e mentorias, mas sempre conversamos por
                  mensagem todos os dias, onde recebo conselhos técnicos,
                  discutimos sobre alguma empresa em específico, um problema
                  técnico, qualquer coisa, inclusive às vezes assuntos da vida.
                </p>
                <p>
                  Acredito que isso seja um grande diferencial em sua mentoria -
                  é como criar uma relação de amizade onde vocês podem trocar
                  experiências o tempo todo, com todos os membros da comunidade.
                </p>
              </div>
            }
            footer={
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/reviews/matheus.jpeg" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">
                    <Link
                      href="https://www.linkedin.com/in/matusca96/"
                      target="_blank"
                    >
                      Matheus Gomes
                    </Link>
                  </p>
                  <p className="text-sm text-white/60">
                    Technical Lead @ MoOngy
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    ),
  },
];

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
            <div className="flex items-center gap-2">
              <Globe2 className="h-6 w-6 text-[#5CFFE1]" />
              <span className="font-bold text-white text-xl">
                Dev na Gringa
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href={`${socials.discord}`}>
                <Button variant="ghost">Comunidade</Button>
              </Link>
              <Link href={`${socials.newsletter}/subscribe?ref=devnagringa`}>
                <Button className="bg-[#5CFFE1] hover:bg-[#5CFFE1]/90 text-[#0A0118]">
                  Participar
                </Button>
              </Link>
            </div>
          </nav>
        </motion.header>

        {/* Hero Content */}
        <div className="w-full max-w-7xl mx-auto px-4 pt-24 relative z-10">
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
              className="bg-gradient-to-r from-primary via-yellow-400 to-accent-secondary text-transparent bg-clip-text inline-block animate-gradient"
            >
              mundo inteiro
            </motion.span>
          </h1>
          <h2 className="text-xl text-white/80 mb-8 max-w-2xl">
            <AnimatedText
              text="Sua jornada como dev não precisa ter fronteiras. Junte-se a uma comunidade de desenvolvedores brasileiros que estão conquistando oportunidades globais e crescendo na carreira."
              delay={0.9}
            />
          </h2>
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
            <Link href={`${socials.newsletter}/archive?ref=devnagringa`}>
              <Button variant="outline" className="h-12 px-6 text-lg">
                Veja o conteúdo gratuito
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
                value={850}
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
        </div>
      </div>

      <Features />
      <Timeline data={data} />
      <Footer />
    </div>
  );
}
