import { motion, useScroll, useTransform } from 'motion/react';

const FloatingShape = ({ 
  type, 
  size, 
  top, 
  left, 
  delay, 
  duration, 
  scrollSpeed 
}: { 
  type: string;
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  scrollSpeed: string;
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', scrollSpeed]);

  const shapes = {
    square: (
      <div 
        className="w-full h-full border border-[#8B7355]/20 rounded-sm" 
        style={{ transform: 'rotate(45deg)' }}
      />
    ),
    circle: (
      <div className="w-full h-full border-2 border-[#D4C4B0]/25 rounded-full" />
    ),
    triangle: (
      <div 
        className="w-0 h-0 border-l-[50%] border-r-[50%] border-b-full border-transparent border-b-[#6B5847]/20"
        style={{ 
          borderLeftWidth: `${size/2}px`,
          borderRightWidth: `${size/2}px`,
          borderBottomWidth: `${size}px`
        }}
      />
    ),
    hexagon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon 
          points="50 1 95 25 95 75 50 99 5 75 5 25" 
          fill="none" 
          stroke="#8B7355" 
          strokeWidth="2" 
          opacity="0.2"
        />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M50 10 L61 40 L92 40 L68 60 L78 90 L50 70 L22 90 L32 60 L8 40 L39 40 Z" 
          fill="none" 
          stroke="#D4C4B0" 
          strokeWidth="2" 
          opacity="0.25"
        />
      </svg>
    ),
    line: (
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#8B7355]/20 to-transparent" />
    )
  };

  return (
    <motion.div
      style={{
        y,
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        rotate: type === 'line' ? 0 : 360,
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        opacity: { duration: duration * 0.8, repeat: Infinity, delay },
        rotate: { duration, repeat: Infinity, ease: "linear", delay },
        scale: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut", delay }
      }}
    >
      {shapes[type as keyof typeof shapes]}
    </motion.div>
  );
};

const ParticleField = () => {
  const { scrollYProgress } = useScroll();
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#8B7355]/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            y: useTransform(scrollYProgress, [0, 1], ['0%', `${particle.y * 2}%`])
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const shapes = [
    // Layer 1 - Slowest
    { type: 'circle', size: 180, top: '10%', left: '15%', delay: 0, duration: 20, scrollSpeed: '15%' },
    { type: 'square', size: 120, top: '25%', left: '75%', delay: 1, duration: 25, scrollSpeed: '20%' },
    { type: 'hexagon', size: 100, top: '60%', left: '10%', delay: 0.5, duration: 22, scrollSpeed: '18%' },
    { type: 'star', size: 90, top: '45%', left: '85%', delay: 1.5, duration: 24, scrollSpeed: '16%' },
    { type: 'line', size: 200, top: '15%', left: '40%', delay: 0, duration: 15, scrollSpeed: '12%' },
    
    // Layer 2 - Medium
    { type: 'triangle', size: 80, top: '35%', left: '30%', delay: 0.8, duration: 18, scrollSpeed: '35%' },
    { type: 'circle', size: 70, top: '70%', left: '65%', delay: 2, duration: 20, scrollSpeed: '40%' },
    { type: 'square', size: 90, top: '20%', left: '55%', delay: 1.2, duration: 22, scrollSpeed: '38%' },
    { type: 'hexagon', size: 110, top: '80%', left: '25%', delay: 0.3, duration: 19, scrollSpeed: '32%' },
    { type: 'star', size: 75, top: '50%', left: '45%', delay: 1.8, duration: 21, scrollSpeed: '36%' },
    { type: 'line', size: 150, top: '65%', left: '70%', delay: 0.5, duration: 16, scrollSpeed: '30%' },
    
    // Layer 3 - Fast
    { type: 'circle', size: 60, top: '90%', left: '80%', delay: 0.2, duration: 16, scrollSpeed: '60%' },
    { type: 'square', size: 50, top: '5%', left: '90%', delay: 1.5, duration: 17, scrollSpeed: '65%' },
    { type: 'triangle', size: 65, top: '75%', left: '50%', delay: 0.7, duration: 15, scrollSpeed: '55%' },
    { type: 'hexagon', size: 85, top: '40%', left: '5%', delay: 2.2, duration: 18, scrollSpeed: '62%' },
    { type: 'star', size: 55, top: '30%', left: '92%', delay: 1, duration: 16, scrollSpeed: '58%' },
    { type: 'line', size: 180, top: '85%', left: '15%', delay: 0.4, duration: 14, scrollSpeed: '50%' },
    
    // Extra small shapes
    { type: 'circle', size: 40, top: '12%', left: '50%', delay: 1.3, duration: 14, scrollSpeed: '70%' },
    { type: 'square', size: 35, top: '55%', left: '20%', delay: 0.9, duration: 15, scrollSpeed: '68%' },
    { type: 'triangle', size: 45, top: '95%', left: '40%', delay: 1.6, duration: 13, scrollSpeed: '72%' },
    { type: 'circle', size: 30, top: '8%', left: '68%', delay: 0.6, duration: 12, scrollSpeed: '75%' },
    { type: 'star', size: 48, top: '68%', left: '88%', delay: 2.1, duration: 14, scrollSpeed: '66%' },
  ];

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])
        }}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FDFBF7] via-[#F5F1EA] to-[#E8E0D5]"
      />
      
      {/* Large blur orbs with parallax */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '25%']),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
        }}
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8B7355]/15 to-transparent blur-3xl"
      />
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']),
          x: useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
        }}
        className="absolute top-1/3 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D4C4B0]/20 to-transparent blur-3xl"
      />
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '70%']),
          x: useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
        }}
        className="absolute bottom-40 left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#8B7355]/12 to-transparent blur-3xl"
      />
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '40%']),
          scale: useTransform(scrollYProgress, [0, 1], [1, 0.8])
        }}
        className="absolute top-1/2 right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#6B5847]/18 to-transparent blur-3xl"
      />
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '90%']),
        }}
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#D4C4B0]/14 to-transparent blur-3xl"
      />
      
      {/* Floating particles */}
      <ParticleField />
      
      {/* Geometric shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(139, 115, 85, 0.03) 100%)',
          opacity: useTransform(scrollYProgress, [0, 1], [0, 0.5])
        }}
      />
    </div>
  );
}