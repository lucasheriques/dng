import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
export const metadata = {
  title: "Dev na Gringa",
  description: "Comunidade de desenvolvedores brasileiros no mundo",
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
        {children}
      </body>
    </html>
  );
}
