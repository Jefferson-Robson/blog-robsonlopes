import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Artigos | Blog Robson Lopes",
  description: "Artigos sobre tecnologia, processos e projetos reais.",
};

export default function ArticlesPage() {
  return (
    <main className="articles-index-page">
      <header className="articles-index-header">
        <p className="eyebrow">Arquivo</p>
        <h1>Todos os artigos.</h1>
        <p>
          Notas sobre decisões técnicas, automação e os aprendizados que aparecem
          quando uma ideia começa a ser construída.
        </p>
      </header>

      <div className="article-list">
        {articles.map((article) => (
          <article className="article-card" key={article.slug}>
            <div className="article-index">
              {article.number} / {article.status}
            </div>
            <div>
              <p className="article-category">{article.category}</p>
              <h2>
                <Link className="article-title-link" href={`/artigos/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>
              {article.description && (
                <p className="article-description">{article.description}</p>
              )}
            </div>
            <span className="article-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </main>
  );
}
