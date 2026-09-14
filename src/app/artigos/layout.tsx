import Link from "next/link";

export default function ArticlesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Blog Robson Lopes, início">
          <span className="brand-mark">RL</span>
          <span>blog.robsonlopes.tec.br</span>
        </Link>
        <Link className="back-link" href="/#artigos">
          ← Todos os artigos
        </Link>
      </header>
      {children}
      <footer className="site-footer">
        <span>Robson Lopes · tecnologia com propósito</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
