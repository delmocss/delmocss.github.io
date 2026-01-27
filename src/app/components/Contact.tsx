import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'delmoralcs@gmail.com',
    href: 'mailto:delmoralcs@gmail.com',
    color: '#6B5847'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Sergio Del Moral',
    href: 'https://linkedin.com/in/sergio-del-moral-carrillo-6619b7234',
    color: '#0A66C2'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@delmocss',
    href: 'https://github.com/delmocss',
    color: '#1A1A1A'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-[var(--color-secondary)]/5 to-[var(--color-secondary)]/10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Contacto</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(107, 88, 71, 0.2)' }}
                className="group p-8 bg-white rounded-sm border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: method.color }}
                  />
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold">{method.label}</h3>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center p-10 bg-white/80 backdrop-blur-sm rounded-sm border-2 border-[var(--color-border)] shadow-lg"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Send className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
          </motion.div>
          <p className="text-lg mb-4 font-medium text-[var(--color-text)]">
            Disponible para proyectos freelance y oportunidades laborales
          </p>
          <p className="text-sm font-medium text-[var(--color-text-secondary)]">
            Tiempo de respuesta: 24-48 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}