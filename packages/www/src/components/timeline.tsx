"use client";
import { ArticleCard } from "@/components/article-card";
import { ExpandableCard } from "@/components/expandable-card";
import { MentorshipSection } from "@/components/mentorship-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { POPULAR_ARTICLES, socials } from "@/lib/constants";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  date?: string;
  content: React.ReactNode;
}

const data: TimelineEntry[] = [
  {
    title: "Newsletter",
    date: "Maio 2024",
    content: (
      <div className="space-y-8">
        <div className="prose dark:prose-invert">
          <p>Tudo começou com a newsletter.</p>
          <p>
            Apesar de texto não ser tão popular no Brasil quanto outros
            conteúdos visuais (vídeos, fotos, etc), eu acho que é uma ferramenta
            muito poderosa para compartilhar conhecimento
          </p>
          <p>
            A maior parte desses artigos serão de graça, pra sempre. Pois o meu
            objetivo é aprender cada vez mais para repassar todo meu
            conhecimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {POPULAR_ARTICLES.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              link={article.link}
              readingTime={article.readingTime}
              views={article.views}
            />
          ))}
        </div>
        <Button className="w-full md:w-auto min-w-64" variant="outline" asChild>
          <Link
            href={`${socials.newsletter}/subscribe?ref=devnagringa`}
            className="flex items-center"
          >
            Receba os artigos toda semana
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    ),
  },
  {
    title: "Mentoria",
    date: "Junho 2024",
    content: <MentorshipSection newsletterUrl={socials.newsletter} />,
  },
  {
    title: "Depoimentos",
    date: "Novembro 2024",
    content: (
      <div>
        <div className="prose dark:prose-invert mb-8">
          <p>E aqui vem a parte mais gratificante.</p>
          <p>
            Ver como as pessoas estão evoluindo, e como a comunidade e o meu
            conteúdo está impactando a vida das pessoas que me cederam sua
            confiança.
          </p>
        </div>
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
              <Link
                href="https://www.linkedin.com/in/daianegalvao/"
                target="_blank"
                className="flex items-center space-x-4"
              >
                <Avatar>
                  <AvatarImage src="/reviews/daiane.jpeg" alt="Daiane Galvão" />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">Daiane Galvão</p>
                  <p className="text-sm text-white/60">
                    Senior Software Engineer @ Hotmart
                  </p>
                </div>
              </Link>
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
              <Link
                href="https://www.linkedin.com/in/matusca96/"
                target="_blank"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="/reviews/matheus.jpeg"
                      alt="Matheus Gomes"
                    />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">Matheus Gomes</p>
                    <p className="text-sm text-white/60">
                      Technical Lead @ MoOngy
                    </p>
                  </div>
                </div>
              </Link>
            }
          />
        </div>
      </div>
    ),
  },
];

const TimelineCircle = ({
  scrollYProgress,
  index,
  total,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) => {
  const circleTransform = useTransform(
    scrollYProgress,
    [index / total, (index + 0.6) / total],
    ["rgb(229 229 229)", "#ff4d8e"]
  );

  const circleScale = useTransform(
    scrollYProgress,
    [index / total, (index + 0.1) / total],
    [1, 1.2]
  );

  return (
    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-transparent backdrop-blur-sm flex items-center justify-center shadow-lg">
      <motion.div
        className="h-6 w-6 rounded-full border-2 border-neutral-200/40 dark:border-neutral-700/40 flex items-center justify-center"
        style={{
          scale: circleScale,
          background: circleTransform,
          boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
        }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-white dark:bg-white/90"
          style={{
            scale: circleScale,
          }}
        />
      </motion.div>
    </div>
  );
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-slate-950 md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <TimelineCircle
                scrollYProgress={scrollYProgress}
                index={index}
                total={data.length}
              />
              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-400">
                  {item.title}
                </h3>
                {item.date && (
                  <span className="text-sm text-neutral-400 dark:text-neutral-500">
                    {item.date}
                  </span>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4 text-left">
                <h3 className="text-2xl font-bold text-neutral-500 dark:text-neutral-400">
                  {item.title}
                </h3>
                {item.date && (
                  <span className="text-sm text-neutral-400 dark:text-neutral-500">
                    {item.date}
                  </span>
                )}
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-accent-secondary via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
