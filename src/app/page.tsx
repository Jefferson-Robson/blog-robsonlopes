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
              <h1 id="hero-title">Tecnologia para negócios funcionarem melhor.</h1>
              <p className="hero-copy">
                Minha jornada em software, IA, automação e processos: projetos reais,
                decisões técnicas e aprendizados que compartilho enquanto construo.
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
            Sou Robson Lopes, estudante de Engenharia de Software. Estou conectando
            minha experiência com processos à construção de soluções digitais. Aqui
            documento o assistente de agenda, minha jornada dos 5 km com IA e dados
            e o que aprendo ao desenvolver com inteligência artificial.
          </p>
        </section>
        <section className="articles-section" aria-labelledby="journey-title">
          <div className="section-heading">
            <p className="eyebrow">Minha jornada · outubro de 2026</p>
            <h2 id="journey-title">O que estou construindo agora.</h2>
          </div>
          <div className="post-content">
            <p><strong>Assistente de agenda:</strong> desenvolvimento de uma integração com Google Calendar e mensagens, com preparação de um beta individual no Telegram.</p>
            <p><strong>Dos primeiros treinos aos 5 km:</strong> uso de GPT, Amazfit Bip U, Zepp e Strava para registrar e entender minha evolução até 26 de março de 2027.</p>
            <p><strong>Processos e software:</strong> documentação de rotinas, estudo de POO e uso de IA com revisão e entendimento do código.</p>
            <p><strong>Robson Crypto Lab:</strong> um laboratório educacional de Bitcoin, cripto e tecnologia. Testando estratégias, analisando dados e entendendo o mercado, sem promessas de lucro.</p>
            <p><a href="https://www.youtube.com/@RobsonCryptoLab">Acompanhar o Robson Crypto Lab ↗</a> · <a href="https://robsonlopes.tec.br/">Conhecer meus projetos ↗</a></p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Robson Lopes · tecnologia, processos e automação</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
