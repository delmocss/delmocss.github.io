import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-6 drop-shadow-sm">
            Sergio Del Moral
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 font-medium"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Frontend Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(107, 88, 71, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-sm font-medium shadow-lg hover:bg-[var(--color-accent)] transition-colors"
          >
            Ver Proyectos
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary)', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-sm font-medium shadow-lg transition-all"
          >
            Contacto
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-[var(--color-primary)]" />
      </motion.a>
    </section>
  );
}