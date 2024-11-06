"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  date?: string;
  content: React.ReactNode;
}

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
    [index / total, (index + 0.2) / total],
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

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Por que eu criei o Dev na Gringa?
        </h2>
        <div className="prose dark:prose-invert text-lg">
          <p>
            Eu sempre quis produzir conteúdo para ajudar os outros, mas nunca
            tinha a certeza de como começar.
          </p>
          <p>
            O conselho que finalmente funcionou pra mim foi: escrever o que eu
            gostaria de saber 2 anos atrás.
          </p>
          <p>
            Conforme eu escrevi mais, fui criando uma comunidade para pessoas
            que tem interesses comuns:{" "}
            <span className="font-bold">crescer na carreira</span> e{" "}
            <span className="font-bold">
              trabalhar para empresas internacionais.
            </span>
          </p>
          <p>
            Desde então, minha motivação cresceu de não apenas escrever, mas
            criar uma comunidade onde essas pessoas possam ajudar umas as outras
            e crescer juntos.
          </p>
          <p>
            Aqui em baixo você pode ver a linha do tempo da nossa história.{" "}
            <span className="font-bold text-primary">
              E esse é só o começo.
            </span>
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
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
