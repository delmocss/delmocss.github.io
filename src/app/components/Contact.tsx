import { Github, Linkedin, Mail } from 'lucide-react';
import Reveal, { SectionLabel } from './Reveal';

const links = [
  { icon: Linkedin, label: 'LinkedIn', value: 'sergio-del-moral-carrillo', href: 'https://www.linkedin.com/in/sergio-del-moral-carrillo/' },
  { icon: Github, label: 'GitHub', value: 'delmocss', href: 'https://github.com/delmocss' },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-28 pt-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center md:px-16">
          <div className="glow pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2" />
          <div className="relative">
            <SectionLabel index="04" title="Contacto" />
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">¿Tienes una vacante junior?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Busco mi primer puesto como desarrollador backend o full-stack Java en Madrid, con incorporación
              inmediata. Escríbeme y te respondo en 24-48 horas.
            </p>

            <a
              href="mailto:delmoralcs@gmail.com"
              className="mt-9 inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              <Mail className="h-5 w-5" /> delmoralcs@gmail.com
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm text-fg transition-colors hover:border-accent/50"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-muted">{l.label}</span> {l.value}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
