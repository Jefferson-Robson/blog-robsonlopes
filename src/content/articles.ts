export type Article = {
  slug: string;
  number: string;
  category: string;
  status: string;
  publishedAt: string;
  title: string;
  description?: string;
};

export const articles: Article[] = [
  {
    slug: "automacao",
    number: "01",
    category: "Processos",
    status: "Publicado",
    publishedAt: "2026-09-13",
    title: "O que aprendi ao transformar uma tarefa repetitiva em automação",
    description:
      "Um registro honesto sobre observar o problema, testar a ideia e construir algo que realmente economiza tempo.",
  },
];