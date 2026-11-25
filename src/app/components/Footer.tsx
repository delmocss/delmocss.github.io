import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Sergio Del Moral · Hecho con React, TypeScript y Tailwind</p>
        <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Volver arriba <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
