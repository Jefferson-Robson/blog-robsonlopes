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
  "slug": "corrida-ia-dados",
  "number": "04",
  "category": "IA e dados",
  "status": "Publicado",
  "publishedAt": "2026-10-10",
  "title": "Como estou usando IA e dados na minha preparação para os 5 km",
  "description": "GPT, smartwatch e Strava na minha jornada de iniciante: o que registro, o que observo e o que ainda quero aprender."
},
{
  "slug": "assistente-agenda-beta",
  "number": "03",
  "category": "Software e automação",
  "status": "Publicado",
  "publishedAt": "2026-10-10",
  "title": "Assistente de agenda: do problema real à preparação do beta",
  "description": "O escopo do projeto, a integração com Google Calendar e os cuidados antes de testar com outras pessoas."
},
{
  "slug": "documentar-processos",
  "number": "02",
  "category": "Processos",
  "status": "Publicado",
  "publishedAt": "2026-10-10",
  "title": "Como estou organizando o conhecimento que virou rotina",
  "description": "Uma abordagem para transformar experiência de trabalho em um guia que outra pessoa consiga seguir."
},
  {
    slug: "automacao",
    number: "01",
    category: "Processos",
    status: "Publicado",
    publishedAt: "2026-09-13",
    title: "Antes de automatizar: entender a tarefa repetitiva",
    description:
      "Reflexões sobre observar processos, testar ideias e medir resultados antes de afirmar ganhos.",
  },
];