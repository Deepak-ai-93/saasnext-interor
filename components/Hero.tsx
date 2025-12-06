import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center perspective-container">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-luxury-black z-10" />
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 text-center px-4"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-luxury-gold uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-medium"
        >
          Est. 2024
        </motion.p>
        
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight">
          <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.5 }}
            className="block origin-bottom"
          >
            TIMELESS
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.7 }}
            className="block origin-top italic text-luxury-gold/90"
          >
            ELEGANCE
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-md mx-auto text-gray-300 font-light leading-relaxed mb-12"
        >
          Where architectural mastery meets bespoke interior design. 
          Crafting spaces that breathe life into your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
           <a href="#collections" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border border-luxury-gold/30 rounded-full shadow-md">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-luxury-gold group-hover:translate-x-0 ease">
            <ArrowDown size={20} />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-luxury-gold transition-all duration-300 transform group-hover:translate-x-full ease">Discover</span>
            <span className="relative invisible">Discover</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-black to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-[1px] bg-white/5 z-10 hidden md:block" />
      <div className="absolute top-0 left-12 h-full w-[1px] bg-white/5 z-10 hidden md:block" />
    </div>
  );
};

export default Hero;