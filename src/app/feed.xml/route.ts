import { articles } from "@/content/articles";

const siteUrl = "https://blog.robsonlopes.tec.br";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const dynamic = "force-static";

export function GET() {
  const items = articles
    .map(
      (article) => `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${siteUrl}/artigos/${article.slug}</link>
      <guid>${siteUrl}/artigos/${article.slug}</guid>
      <description>${escapeXml(article.description ?? "")}</description>
      <pubDate>${new Date(`${article.publishedAt}T12:00:00Z`).toUTCString()}</pubDate>
    </item>`,
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog Robson Lopes</title>
    <link>${siteUrl}</link>
    <description>Artigos sobre tecnologia, automação e projetos reais.</description>
    <language>pt-BR</language>${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
