import { socials } from "@/lib/constants";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  Calendar,
  ChevronDown,
  FileText,
  Globe2,
  History,
  Mail,
  MessageSquare,
  PhoneCall,
  Target,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const comunidade = [
  { name: "Newsletter", href: socials.newsletter, icon: Mail },
  { name: "Discord", href: socials.discord, icon: MessageSquare },
  { name: "Fale comigo", href: socials.calendar, icon: PhoneCall },
];
const mentoria = [
  {
    name: "Participe da mentoria",
    href: `${socials.newsletter}/subscribe?ref=nagringa.dev`,
    icon: UserPlus,
  },
  {
    name: "Mentorias passadas",
    href: "https://mentoria.nagringa.dev",
    icon: History,
  },
  {
    name: "Metas do mês",
    href: "https://metas.nagringa.dev",
    icon: Target,
  },
  {
    name: "Calendário de eventos",
    href: "https://calendario.nagringa.dev/",
    icon: Calendar,
  },
  {
    name: "Todos os recursos",
    href: "https://drive.nagringa.dev",
    icon: FileText,
  },
];
const recentPosts = [
  {
    id: 1,
    title: "Design documents e RFCs",
    href: "https://newsletter.nagringa.dev/p/design-docs-e-rfcs",
    date: "Out 30, 2024",
    datetime: "2024-10-30",
    category: {
      title: "Eng. de Software",
      href: "https://newsletter.nagringa.dev/t/engenharia-de-software",
    },
    imageUrl:
      "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F949ef4b3-51fa-4e50-94c7-2a13ee0f9bdd_2912x1632.png",
    description:
      "Como fazer documentação técnica que realmente ajude você, seu time e também sua carreira.",
  },
  {
    id: 2,
    title: "Por que trabalhar na Brex?",
    href: "https://newsletter.nagringa.dev/p/por-que-trabalhar-na-brex",
    date: "Out 14, 2024",
    datetime: "2024-10-14",
    category: {
      title: "Carreira",
      href: "https://newsletter.nagringa.dev/t/carreira",
    },
    imageUrl:
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcefc7411-08d2-4c46-8ce4-1fb430bd4484_910x855.png",
    description:
      "A Brex é uma fintech fundada por dois brasileiros em 2017. Venha descobrir os meus principais motivos para trabalhar aqui.",
  },
];

export default function Header() {
  return (
    <Popover
      className="isolate z-50 bg-slate-950/75 backdrop-blur-xl shadow-lg min-w-full fixed top-0 left-0 right-0 motion-preset-slide-down border-b border-slate-800/20"
      as="header"
    >
      <div className="py-5">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <Link href="/" className="items-center gap-2 flex">
            <Globe2 className="h-6 w-6 text-[#5CFFE1]" />
            <span className="font-bold text-white text-xl">Dev na Gringa</span>
          </Link>
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-200 hover:text-white transition-colors focus:outline-primary rounded focus:outline-2 focus:outline-offset-2">
            Conteúdos e links
            <ChevronDown aria-hidden="true" className="h-5 w-5" />
          </PopoverButton>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-0 -z-10 bg-slate-900 pt-16 shadow-2xl ring-1 ring-slate-500/30 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in max-h-[calc(100vh-4rem)] overflow-y-auto"
      >
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
          <div className="grid gap-y-4 sm:grid-cols-2 gap-x-6 sm:gap-x-8">
            <div>
              <h3 className="text-sm/6 font-medium text-gray-400">
                Comunidade
              </h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {comunidade.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-200 hover:text-white transition-colors hover:bg-white/5 px-3 -mx-3 rounded-lg group"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 flex-none text-gray-500 group-hover:text-gray-300 transition-colors"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm/6 font-medium text-gray-400">
                Recursos da mentoria
              </h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {mentoria.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-200 hover:text-white transition-colors hover:bg-white/5 px-3 -mx-3 rounded-lg group"
                      target="_blank"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 flex-none text-gray-500 group-hover:text-gray-300 transition-colors"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
            <h3 className="sr-only">Recent posts</h3>
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch group"
              >
                <div className="relative flex-none">
                  <Image
                    alt={post.title}
                    width={280}
                    height={180}
                    src={post.imageUrl}
                    className="aspect-[2/1] w-full rounded-xl bg-gray-800 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto shadow-lg transition-transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/50 group-hover:ring-gray-700 transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4">
                    <time
                      dateTime={post.datetime}
                      className="text-sm/6 text-gray-400"
                    >
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-slate-800/50 backdrop-blur px-3 py-1.5 text-xs font-medium text-gray-300 hover:bg-slate-700 transition-colors"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <h4 className="mt-2 text-sm/6 font-semibold text-gray-200 group-hover:text-white transition-colors">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-2 text-sm/6 text-gray-400 group-hover:text-gray-300 transition-colors">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}