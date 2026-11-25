import { ArrowUpRight, Github } from 'lucide-react';
import Reveal, { SectionLabel } from './Reveal';

interface Project {
  title: string;
  tagline: string;
  image: string;
  bullets: string[];
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  apiUrl?: string;
}

const enlaza: Project = {
  title: 'Enlaza',
  tagline: 'Facturación electrónica multi-empresa con cadena de integridad verificable',
  image: 'img/enlaza.png',
  bullets: [
    'Numeración de facturas sin huecos con bloqueo pesimista, probada con 10 hilos concurrentes.',
    'Cadena de hashes SHA-256 entre facturas y un endpoint que detecta la primera manipulación.',
    'JWT con rotación de refresh tokens y detección de reutilización.',
    '81 tests contra PostgreSQL real, 95,7 % de cobertura y CI en cada push.',
  ],
  tech: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Testcontainers', 'Docker', 'GitHub Actions'],
  demoUrl: 'https://enlaza-frontend.vercel.app',
  repoUrl: 'https://github.com/delmocss/enlaza',
  apiUrl: 'https://enlaza-api-th30.onrender.com/swagger-ui.html',
};

const slotify: Project = {
  title: 'Slotify',
  tagline: 'Reservas multi-tenant para pequeños negocios',
  image: 'img/slotify.png',
  bullets: [
    'Reservas sin solapamientos gracias a un bloqueo consultivo de PostgreSQL por negocio, servicio y día.',
    'Multi-tenancy con roles; la pertenencia se vuelve a comprobar en base de datos en cada petición.',
    'Demo con copias privadas por inicio de sesión, que se eliminan a las 24 horas.',
  ],
  tech: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
  demoUrl: 'https://slotify-client-theta.vercel.app/',
  repoUrl: 'https://github.com/delmocss/slotify',
};

function Links({ p }: { p: Project }) {
  const base =
    'inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-colors';
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <a
        href={p.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-accent bg-accent text-bg hover:bg-accent-strong`}
      >
        Demo en vivo <ArrowUpRight className="h-4 w-4" />
      </a>
      {p.apiUrl && (
        <a
          href={p.apiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} border-line bg-surface-2 text-fg hover:border-accent/50`}
        >
          API (Swagger) <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      <a
        href={p.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-line bg-surface-2 text-fg hover:border-accent/50`}
      >
        <Github className="h-4 w-4" /> Código
      </a>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((b) => (
        <li key={b} className="flex gap-3 leading-relaxed text-muted">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {b}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="02" title="Proyectos" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Dos proyectos desplegados</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Con demo pública, código abierto y tests que comprueban lo difícil.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <article className="grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[1.05fr_1fr]">
            <div className="relative min-h-64 border-b border-line bg-surface-2 lg:border-b-0 lg:border-r">
              <img
                src={enlaza.image}
                alt="Captura de la página de inicio de Enlaza"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">Proyecto destacado</span>
              <h3 className="mt-2 text-3xl font-semibold text-fg">{enlaza.title}</h3>
              <p className="mt-2 text-lg text-fg/90">{enlaza.tagline}</p>
              <Bullets items={enlaza.bullets} />
              <Chips items={enlaza.tech} />
              <Links p={enlaza} />
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <article className="grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[1fr_1.05fr]">
            <div className="order-2 p-8 md:p-10 lg:order-1">
              <h3 className="text-2xl font-semibold text-fg">{slotify.title}</h3>
              <p className="mt-2 text-lg text-fg/90">{slotify.tagline}</p>
              <Bullets items={slotify.bullets} />
              <Chips items={slotify.tech} />
              <Links p={slotify} />
            </div>
            <div className="relative order-1 min-h-64 border-b border-line bg-surface-2 lg:order-2 lg:border-b-0 lg:border-l">
              <img
                src={slotify.image}
                alt="Captura de la página de inicio de Slotify"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
