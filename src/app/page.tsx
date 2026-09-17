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
          <p className="eyebrow">Tecnologia aplicada · processos · automação</p>
          <div className="hero-grid">
            <div>
              <h1 id="hero-title">Ideias, processos e tecnologia em construção.</h1>
              <p className="hero-copy">
                Projetos, experimentos e aprendizados sobre software, IA, automação e
                processos — sempre partindo de problemas reais.
              </p>
              <a className="primary-link" href="#artigos">
                Explorar artigos <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note" aria-label="Nota do autor">
              <span className="note-number">01</span>
              <p>
                Um espaço para documentar soluções em construção: entender um problema,
                organizar o processo, testar uma ferramenta e aprender com o resultado.
              </p>
              <span className="note-rule" />
              <span className="note-caption">Desde 2026 · Guaratuba</span>
            </div>
          </div>
        </section>

        <section className="articles-section" id="artigos" aria-labelledby="articles-title">
          <div className="section-heading">
            <p className="eyebrow">Leituras recentes</p>
            <h2 id="articles-title">Da ideia à solução.</h2>
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
            <h2 id="about-title">Tecnologia se constrói em público.</h2>
          </div>
          <p>
            Este é um espaço para documentar a construção de soluções digitais: entender
            um problema, organizar o processo, testar uma ferramenta e aprender
            com o resultado. Menos respostas prontas, mais clareza sobre como as
            coisas são construídas.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>Robson Lopes · tecnologia, processos e automação</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
