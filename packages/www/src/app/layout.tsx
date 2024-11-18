import { Providers } from "@/app/providers";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
export const metadata = {
  title: "Dev na Gringa | Do Brasil para o mundo inteiro.",
  description: `O Dev na Gringa é uma comunidade para todos interessados em engenharia de software e áreas adjacentes. Nosso foco é em crescimento profissional e carreira internacional.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased dark
        selection:bg-teal-500 selection:text-slate-950 bg-slate-950`}
      >
        <Providers>
          <Header />
          <main className="min-h-dvh bg-slate-950">{children}</main>
          <Footer />
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
}
