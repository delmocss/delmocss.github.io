import { Github } from 'lucide-react';

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-medium text-fg">
          sergio<span className="text-accent">.dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/delmocss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-md p-2 text-muted transition-colors hover:text-fg sm:block"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}
