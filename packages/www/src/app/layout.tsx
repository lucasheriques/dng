import { Providers } from "@/app/providers";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
export const metadata = {
  title: "Dev na Gringa | Do Brasil para o mundo inteiro.",
  description: `O Dev na Gringa é uma comunidade para todos os devs e engenheiros de software brasileiro. Somos focados
  na carreira internacional e crescimento profissional.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased dark`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
