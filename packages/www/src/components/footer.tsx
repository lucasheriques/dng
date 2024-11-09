import { Button } from "@/components/ui/button";
import { POPULAR_ARTICLES, socials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import FooterHeroImage from "../../public/footer-hero.png";
const tools = [
  { name: "[Em breve] Calculadora de Salário Líquido CLT vs PJ", href: "#" },
  { name: "Newsletter", href: socials.newsletter },
];

const social = [
  {
    name: "LinkedIn",
    href: socials.linkedin,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: socials.twitter,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  // {
  //   name: "WhatsApp",
  //   href: socials.whatsapp,
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   icon: (props: any) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  //     </svg>
  //   ),
  // },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0118]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={FooterHeroImage}
            placeholder="blur"
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
            Faça parte da mentoria
          </h2>
          <p className="mt-2 text-4xl font-semibold text-white">
            Desenvolva sua carreira internacional em engenharia de software
          </p>
          <p className="mt-6 text-lg text-gray-300">
            Você receberá um e-mail sobre como participar depois de se
            inscrever.
            <br />
            <a
              href="https://newsletter.nagringa.dev/about#§beneficios-para-assinantes-pagos"
              className="text-accent-secondary font-semibold hover:text-[#5CFFE1]/90 transition-colors"
            >
              Confira todos os benefícios aqui.
            </a>
          </p>
          <div className="mt-8">
            <Button
              size="xl"
              asChild
              className="group group-hover:motion-preset-slide-right-lg motion-duration-1000"
            >
              <Link
                href={`${socials.newsletter}/subscribe?ref=devnagringa`}
                target="_blank"
              >
                Participar da mentoria
                <div className="motion-preset-float bg-white/30 text-black rounded-full w-8 h-8 flex items-center justify-center">
                  🛸
                </div>
              </Link>
            </Button>
            <p className="text-xs text-gray-300">
              Para os devs deste e de outros mundos também.
            </p>
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
              Tem alguma dúvida? Fale comigo aqui:
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
