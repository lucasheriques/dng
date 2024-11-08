import { BookOpen, Network, Target, Users } from "lucide-react";
import Link from "next/link";
import { MentorshipCard } from "./mentorship-card";
import { Button } from "./ui/button";

interface MentorshipSectionProps {
  newsletterUrl: string;
}

export function MentorshipSection({ newsletterUrl }: MentorshipSectionProps) {
  const mentorshipItems = [
    {
      icon: Users,
      title: "Mentoria em Grupo",
      description:
        "Três encontros mensais para resolver dúvidas e compartilhar experiências. Um deles exclusivamente para System Design.",
      iconColor: "text-[#FF4B8C]",
    },
    {
      icon: Target,
      title: "Grupo de Responsabilidade",
      description:
        "Acompanhamento mensal de metas e progresso com outras pessoas. Um pouco de pressão social para você se manter na trilha.",
      iconColor: "text-yellow-400",
    },
    {
      icon: BookOpen,
      title: "Conteúdo Exclusivo",
      description:
        "Guias práticos sobre processos seletivos internacionais e uma comunidade para troca de experiências.",
      iconColor: "text-primary",
    },
  ];

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
        <p>E é daqui que nasceu a mentoria do Dev na Gringa.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {mentorshipItems.map((item, index) => (
          <MentorshipCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            iconColor={item.iconColor}
          />
        ))}
      </div>
      <Button className="w-full md:w-auto min-w-64" asChild>
        <Link href={`${newsletterUrl}/subscribe?ref=devnagringa`}>
          Faça parte da mentoria
          <Network className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
