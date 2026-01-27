import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Download, FileText } from 'lucide-react';

export default function CV() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="relative p-12 bg-gradient-to-br from-white via-white to-[var(--color-secondary)]/20 rounded-sm border-2 border-[var(--color-border)] shadow-xl"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-6"
          >
            <FileText className="w-16 h-16 text-[var(--color-primary)]" />
          </motion.div>

          <h2 className="mb-6">Currículum Vitae</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Descarga mi CV para conocer más sobre mi experiencia, formación y habilidades técnicas
          </p>

          <motion.a
            href="/CVSergio.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(107, 88, 71, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-primary)] text-white rounded-sm font-semibold hover:bg-[var(--color-accent)] transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Descargar CV
          </motion.a>

          <p className="mt-6 text-sm font-medium text-[var(--color-text-secondary)]">
            Formato PDF • Actualizado Enero 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}