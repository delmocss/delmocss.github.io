import { Briefcase, GraduationCap } from 'lucide-react';
import Reveal, { SectionLabel } from './Reveal';

const timeline = [
  {
    when: '2026 – actualidad',
    title: 'Grado en Ingeniería Matemática',
    place: 'Universidad del Atlántico Medio (online)',
    icon: GraduationCap,
  },
  {
    when: '2024 – 2025',
    title: 'CFGS Desarrollo de Aplicaciones Web',
    place: 'IES Valle del Miro · nota media 8',
    icon: GraduationCap,
  },
  {
    when: 'sept. – dic. 2023',
    title: 'Programador en prácticas',
    place: 'Gomez Group Metering · Java, Spring Boot y TypeScript en la web corporativa',
    icon: Briefcase,
  },
  {
    when: '2021 – 2023',
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
    place: 'IES Federica Montseny · nota media 8',
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionLabel index="01" title="Sobre mí" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Backend con criterio, probado de verdad
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Tengo los ciclos de DAM y DAW y estudio el Grado en Ingeniería Matemática. Me interesa construir APIs
              que no fallan: concurrencia, seguridad y tests contra bases de datos reales, no simuladas.
            </p>
            <p>
              Mis dos proyectos están desplegados, con demo pública, CI y código abierto. Busco mi primer puesto como
              desarrollador backend o full-stack Java en Madrid (presencial, híbrido o remoto).
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ol className="relative space-y-8 border-l border-line pl-8">
            {timeline.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.title} className="relative">
                  <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface">
                    <Icon className="h-4 w-4 text-accent" />
                  </span>
                  <p className="font-mono text-xs text-accent">{t.when}</p>
                  <h3 className="mt-1 text-lg font-medium text-fg">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t.place}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
