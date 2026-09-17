import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.robsonlopes.tec.br"),
  title: "Blog Robson Lopes | Tecnologia, processos e automação",
  description:
    "Projetos, experimentos e aprendizados sobre tecnologia, processos, automação e IA aplicada.",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://blog.robsonlopes.tec.br",
    siteName: "Blog Robson Lopes",
    title: "Blog Robson Lopes | Tecnologia e prática",
    description:
      "Projetos, experimentos e aprendizados sobre tecnologia, processos, automação e IA aplicada.",
  },
  twitter: {
    card: "summary",
    title: "Blog Robson Lopes | Tecnologia e prática",
    description:
      "Projetos, experimentos e aprendizados sobre tecnologia, processos, automação e IA aplicada.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
