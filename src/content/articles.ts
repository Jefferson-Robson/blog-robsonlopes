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
    slug: "benchmark-llms-python",
    number: "06",
    category: "IA e desenvolvimento",
    status: "Publicado",
    publishedAt: "2026-10-31",
    title: "Três LLMs gratuitas, o mesmo desafio e uma surpresa nos testes",
    description: "OpenCode 2, análise de arquitetura, Python e 30 testes: o que aprendi comparando DeepSeek, GLM e Nemotron.",
  },
  {
    slug: "assistente-robson-make",
    number: "05",
    category: "Automação e projetos",
    status: "Publicado",
    publishedAt: "2026-10-31",
    title: "Assistente do Robson: um bot útil antes de colocar IA em tudo",
    description: "Diário de construção de um atendimento pelo Telegram e Make, com menus, callbacks, limites e retorno humano.",
  },

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