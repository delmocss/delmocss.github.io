import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Palette, Rocket } from 'lucide-react';

const technologies = [
  { name: 'Java 21 · Spring Boot · Spring Security', category: 'Backend', icon: Code2 },
  { name: 'PostgreSQL · Flyway', category: 'Datos', icon: Database },
  { name: 'JUnit 5 · Mockito · Testcontainers', category: 'Testing', icon: Palette },
  { name: 'Docker · GitHub Actions', category: 'DevOps · También React, TypeScript y Node.js', icon: Code2 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-16">Sobre mí</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              Tengo los ciclos de DAM y DAW y estudio el Grado en Ingeniería Matemática. Me interesa construir APIs que no fallen: concurrencia, seguridad y tests contra bases de datos reales.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Busco mi primer puesto como desarrollador backend o full-stack Java en Madrid (presencial, híbrido o remoto).
            </p>

            <motion.div 
              className="flex items-center gap-4 mt-8 p-4 bg-white/70 backdrop-blur-sm rounded-sm border-l-4 border-[var(--color-primary)] shadow-sm"
              whileHover={{ x: 10 }}
            >
              <Rocket className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
              <p className="text-[var(--color-text)] font-medium">
                Primer puesto como desarrollador backend o full-stack Java
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="mb-6">Tecnologías</h3>
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(107, 88, 71, 0.15)' }}
                  className="flex items-center gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-sm border border-[var(--color-border)] shadow-sm"
                >
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">{tech.name}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{tech.category}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}