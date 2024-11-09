import { BorderBeam } from "@/components/ui/border-beam";
import {
  BookOpen,
  Network,
  Presentation,
  Target,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface MentorshipSectionProps {
  newsletterUrl: string;
}

interface MentorshipCardProps {
  children: React.ReactNode;
}

function MentorshipCard({ children }: MentorshipCardProps) {
  return <div className="bg-white/5 p-6 rounded-lg">{children}</div>;
}

const mentorshipItems = [
  {
    tabContent: (
      <>
        <Presentation className="h-4 w-4 mr-2 text-[#FF4B8C] group-data-[state=active]:text-primary" />
        Mentoria em Grupo
      </>
    ),
    title: "Mentoria em Grupo",
    content: (
      <>
        <h3 className="text-white font-medium mb-2">Mentoria em Grupo</h3>
        <p className="text-neutral-300 text-sm mb-4">
          Três encontros mensais para resolver dúvidas e compartilhar
          experiências. Um deles exclusivamente para System Design.
        </p>
        <p className="text-neutral-300 text-sm border-t border-white/10 pt-4">
          Durante nossos encontros mensais, você terá a oportunidade de discutir
          desafios reais, receber feedback personalizado e aprender com as
          experiências de outros profissionais. A sessão dedicada a System
          Design permite aprofundar em aspectos técnicos cruciais para
          entrevistas e crescimento profissional.
        </p>
      </>
    ),
  },
  {
    tabContent: (
      <>
        <UsersRound className="h-4 w-4 mr-2 text-blue-400 group-data-[state=active]:text-primary" />
        Mentoria Individual
      </>
    ),
    title: "Mentoria Individual",
    content: (
      <>
        <h3 className="text-white font-medium mb-2">Mentoria Individual</h3>
        <p className="text-neutral-300 text-sm mb-4">
          Sessões personalizadas one-on-one para focar em seus objetivos
          específicos e acelerar seu desenvolvimento.
        </p>
        <p className="text-neutral-300 text-sm border-t border-white/10 pt-4">
          Receba atenção individualizada para suas necessidades específicas.
          Seja para preparação para entrevistas, revisão de código, planejamento
          de carreira ou desafios técnicos, as sessões individuais permitem um
          acompanhamento mais próximo e personalizado do seu desenvolvimento
          profissional.
        </p>
      </>
    ),
  },
  {
    tabContent: (
      <>
        <Target className="h-4 w-4 mr-2 text-yellow-400 group-data-[state=active]:text-primary" />
        Grupo de Responsabilidade
      </>
    ),
    title: "Grupo de Responsabilidade",
    content: (
      <>
        <h3 className="text-white font-medium mb-2">
          Grupo de Responsabilidade
        </h3>
        <p className="text-neutral-300 text-sm mb-4">
          Acompanhamento mensal de metas e progresso com outras pessoas. Um
          pouco de pressão social para você se manter na trilha.
        </p>
        <p className="text-neutral-300 text-sm border-t border-white/10 pt-4">
          Estabeleça metas claras, compartilhe seu progresso e receba suporte
          contínuo da comunidade. Este grupo fornece a estrutura e motivação
          necessárias para manter seu desenvolvimento profissional consistente e
          alcançar seus objetivos de carreira.
        </p>
      </>
    ),
  },
  {
    tabContent: (
      <>
        <BookOpen className="h-4 w-4 mr-2 text-violet-400 group-data-[state=active]:text-primary" />
        Conteúdo Exclusivo
      </>
    ),
    title: "Conteúdo Exclusivo",
    content: (
      <>
        <h3 className="text-white font-medium mb-2">Conteúdo Exclusivo</h3>
        <p className="text-neutral-300 text-sm mb-4">
          Guias práticos sobre processos seletivos internacionais e uma
          comunidade para troca de experiências.
        </p>
        <p className="text-neutral-300 text-sm border-t border-white/10 pt-4">
          Acesse materiais exclusivos desenvolvidos com base em experiências
          reais de processos seletivos internacionais. Inclui templates, estudos
          de caso, dicas práticas e uma biblioteca crescente de recursos para
          impulsionar sua carreira global.
        </p>
      </>
    ),
  },
];

export function MentorshipSection({ newsletterUrl }: MentorshipSectionProps) {
  return (
    <div>
      <div className="prose dark:prose-invert mb-8">
        <p>
          Com a demanda do conteúdo, vi uma oportunidade algo que eu sempre
          quis. Uma comunidade exclusiva para profissionais de TI que estão
          buscando crescimento profissional e pessoal.
        </p>
        <p>
          Um lugar onde podemos compartilhar experiências, dúvidas, e
          oportunidades.
        </p>
        <p>
          E é daqui que nasceu a mentoria do Dev na Gringa. Onde você pode ter
          acesso a:
        </p>
      </div>

      <Tabs defaultValue={mentorshipItems[0].title} className="mb-8 grid gap-8">
        <TabsList className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 bg-transparent">
          {mentorshipItems.map((item) => (
            <TabsTrigger
              key={item.title}
              value={item.title}
              className="group bg-white/5 text-neutral-400 hover:text-neutral-200 hover:bg-white/10
                data-[state=active]:border data-[state=active]:border-primary/50
                data-[state=active]:bg-primary/10 data-[state=active]:text-primary
                data-[state=active]:hover:bg-primary/20 data-[state=active]:hover:border-primary
                transition-colors"
            >
              {item.tabContent}
            </TabsTrigger>
          ))}
        </TabsList>
        {mentorshipItems.map((item) => (
          <TabsContent key={item.title} value={item.title}>
            <div className="relative h-full w-full rounded-xl max-w-full overflow-hidden">
              <BorderBeam />
              <MentorshipCard>{item.content}</MentorshipCard>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Button className="w-full md:w-auto min-w-64" asChild>
        <Link href={`${newsletterUrl}/subscribe?ref=devnagringa`}>
          Faça parte da mentoria
          <Network className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
