import Link from "next/link";
import { articles } from "@/content/articles";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Blog Robson Lopes, início">
          <span className="brand-mark">RL</span>
          <span>blog.robsonlopes.tec.br</span>
        </Link>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#artigos">Artigos</a>
          <a href="#sobre">Sobre</a>
          <a className="nav-link-external" href="https://robsonlopes.tec.br/">
            Portfólio <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <p className="eyebrow">Caderno digital · tecnologia e prática</p>
          <div className="hero-grid">
            <div>
              <h1 id="hero-title">Ideias que saem do papel e encontram o mundo.</h1>
              <p className="hero-copy">
                Artigos sobre tecnologia, automação e os aprendizados por trás de
                projetos reais, escritos por Robson Lopes.
              </p>
              <a className="primary-link" href="#artigos">
                Explorar artigos <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note" aria-label="Nota do autor">
              <span className="note-number">01</span>
              <p>
                Um espaço para documentar decisões, descobertas e o trabalho
                invisível que transforma uma pergunta em produto.
              </p>
              <span className="note-rule" />
              <span className="note-caption">Desde 2026 · Minas Gerais</span>
            </div>
          </div>
        </section>

        <section className="articles-section" id="artigos" aria-labelledby="articles-title">
          <div className="section-heading">
            <p className="eyebrow">Leituras recentes</p>
            <h2 id="articles-title">Do processo ao resultado.</h2>
          </div>
          <div className="article-list">
            {articles.map((article) => (
              <article className="article-card" key={article.slug}>
                <div className="article-index">
                  {article.number} / {article.status}
                </div>
                <div>
                  <p className="article-category">{article.category}</p>
                  <h3>
                    <Link className="article-title-link" href={`/artigos/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  {article.description && (
                    <p className="article-description">{article.description}</p>
                  )}
                </div>
                <span className="article-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="sobre" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">Sobre este espaço</p>
            <h2 id="about-title">Construir também é aprender em público.</h2>
          </div>
          <p>
            Este blog acompanha projetos, experimentos e escolhas técnicas sem
            esconder as dúvidas do caminho. Menos receita pronta, mais contexto
            para tomar decisões melhores.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>Robson Lopes · tecnologia com propósito</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
