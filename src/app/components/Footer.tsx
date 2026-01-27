import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-24 bg-[var(--color-text)] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ y: -5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-secondary)] transition-colors"
          >
            Volver arriba <ArrowUp className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}