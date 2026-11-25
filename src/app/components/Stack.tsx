import { Boxes, Database, FlaskConical, Layers, Server } from 'lucide-react';
import Reveal, { SectionLabel } from './Reveal';

const groups = [
  {
    title: 'Backend',
    icon: Server,
    items: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA / Hibernate', 'Maven', 'API REST · JWT'],
  },
  { title: 'Datos', icon: Database, items: ['PostgreSQL', 'MySQL', 'SQL', 'Flyway'] },
  { title: 'Testing', icon: FlaskConical, items: ['JUnit 5', 'Mockito', 'Testcontainers', 'JaCoCo'] },
  { title: 'DevOps', icon: Boxes, items: ['Docker', 'GitHub Actions', 'Render', 'Vercel'] },
  { title: 'También', icon: Layers, items: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Python'] },
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03" title="Stack" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Con qué trabajo</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </span>
                    <h3 className="text-lg font-medium text-fg">{g.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-sm text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
