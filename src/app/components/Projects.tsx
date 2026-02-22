import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: 'Project Management App',
    description: 'Aplicación web para la gestión de proyectos y tareas, pensada como herramienta interna de equipo. Permite organizar proyectos, gestionar tareas y controlar el progreso de forma clara y estructurada.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://client-project-management-app.vercel.app/',
    repoUrl: 'https://github.com/delmocss/client-project-management-app'
  },
  {
    title: 'Slotify - Booking SaaS Platform',
    description: 'Plataforma de reservas full-stack diseñada con enfoque SaaS para pequeños negocios. Incluye generación inteligente de disponibilidad, sistema de reservas y cancelaciones públicas seguras, panel de control con métricas y exportación de datos.',
    image: 'img/slotify.png',
    techStack: ['Node.js + Express', 'PostgreSQL', 'TanStack React Query'],
    demoUrl: 'https://slotify-client-theta.vercel.app/',
    repoUrl: 'https://github.com/delmocss/slotify'
  },
  {
    title: 'Proyecto 3 - Nuevo',
    description: '[Describe tu tercer proyecto. Resalta las características únicas y el valor que aporta]',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    techStack: ['Vue.js', 'Express', 'PostgreSQL'],
    demoUrl: 'https://demo3.com',
    repoUrl: 'https://github.com/tuusuario/proyecto3'
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-sm overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-[var(--color-secondary)]/40 text-[var(--color-text)] rounded-full border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </motion.a>
          <motion.a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Github className="w-4 h-4" />
            Código
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-[var(--color-secondary)]/5 to-transparent">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Proyectos Destacados</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Una selección de proyectos que demuestran mis habilidades técnicas y creatividad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}