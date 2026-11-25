import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, MapPin } from 'lucide-react';

const stats = [
  { value: '81', label: 'tests', note: 'contra PostgreSQL real con Testcontainers' },
  { value: '95,7%', label: 'cobertura', note: 'de líneas medida con JaCoCo' },
  { value: '10', label: 'hilos concurrentes', note: 'numeración de facturas sin huecos' },
  { value: 'SHA-256', label: 'cadena de hashes', note: 'detecta la primera manipulación' },
];

export default function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-36 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponible · incorporación inmediata
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight text-fg md:text-7xl"
          >
            Sergio Del Moral
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-2xl font-medium md:text-3xl"
          >
            <span className="text-fg">Desarrollador backend junior</span>
            <br />
            <span className="text-gradient">Java · Spring Boot · PostgreSQL</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Construyo APIs que no fallan: concurrencia, seguridad y tests contra bases de datos reales. Busco mi
            primer puesto como desarrollador backend o full-stack Java.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/delmocss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-medium text-fg transition-colors hover:border-accent/50"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-del-moral-carrillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-medium text-fg transition-colors hover:border-accent/50"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" /> Madrid · presencial, híbrido o remoto
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="glow absolute -inset-10 -z-10" />
          <div className="overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
              <span className="ml-3 font-mono text-xs text-muted">enlaza · en números</span>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-6">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">{s.label}</dt>
                  <dd className="mt-2 whitespace-nowrap text-2xl font-semibold text-fg sm:text-3xl">{s.value}</dd>
                  <p className="mt-2 text-sm leading-snug text-muted">{s.note}</p>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
