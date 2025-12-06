import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
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

  const containerVars: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      }
    }
  };

  const letterVars: Variants = {
    hidden: { opacity: 0, y: 100, rotateX: 90, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      }
    }
  };

  const title1 = "TIMELESS";
  const title2 = "ELEGANCE";

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center perspective-container">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-luxury-black z-10" />
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover scale-110"
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
          className="text-luxury-gold uppercase tracking-[0.4em] mb-8 text-sm md:text-base font-medium"
        >
          Est. 2024
        </motion.p>
        
        <div className="flex flex-col items-center mb-8">
          <motion.div 
            className="flex overflow-hidden pb-4"
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            {title1.split("").map((char, i) => (
              <motion.span 
                key={`t1-${i}`} 
                variants={letterVars}
                className="font-serif text-5xl md:text-8xl lg:text-9xl text-white inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="flex overflow-hidden pb-4"
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            {title2.split("").map((char, i) => (
              <motion.span 
                key={`t2-${i}`} 
                variants={letterVars}
                className="font-serif text-5xl md:text-8xl lg:text-9xl text-luxury-gold/90 italic inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-md mx-auto text-gray-300 font-light leading-relaxed mb-12 tracking-wide"
        >
          Where architectural mastery meets bespoke interior design. 
          Crafting spaces that breathe life into your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
           <a href="#collections" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border border-luxury-gold/30 rounded-full shadow-md backdrop-blur-sm">
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