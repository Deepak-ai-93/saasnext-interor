import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "The Obsidian Loft",
    category: "Residential",
    image: "https://picsum.photos/800/600?random=1",
    description: "A dark academia inspired penthouse in New York."
  },
  {
    id: 2,
    title: "Golden Horizon",
    category: "Commercial",
    image: "https://picsum.photos/800/600?random=2",
    description: "Executive lounge design with panoramic city views."
  },
  {
    id: 3,
    title: "Azure Villa",
    category: "Hospitality",
    image: "https://picsum.photos/800/600?random=3",
    description: "Coastal luxury retreat focusing on open spaces."
  },
  {
    id: 4,
    title: "Maison Noir",
    category: "Residential",
    image: "https://picsum.photos/800/600?random=4",
    description: "Minimalist brutalism meets soft textures."
  }
];

interface CardProps {
  project: Project;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ project, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // 3D rotation effect
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // Inner content parallax
  const contentY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 perspective-container">
      <motion.div 
        style={{ scale, rotateX, opacity, transformStyle: 'preserve-3d' }} 
        className="relative flex flex-col md:flex-row bg-luxury-charcoal rounded-none border border-white/5 overflow-hidden w-[90vw] md:w-[70vw] h-[60vh] md:h-[500px] shadow-2xl origin-top"
      >
        {/* Image Section */}
        <div className="w-full md:w-[60%] h-full overflow-hidden relative">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
                <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center bg-luxury-charcoal relative overflow-hidden">
            <motion.div style={{ y: contentY }}>
                <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase mb-4 block">{project.category}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">{project.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm md:text-base">{project.description}</p>
                <button className="self-start text-white text-xs uppercase tracking-widest border-b border-luxury-gold pb-1 hover:text-luxury-gold transition-colors">
                    View Project
                </button>
            </motion.div>
            <span className="absolute bottom-8 right-8 text-6xl md:text-8xl font-serif text-white/5 select-none pointer-events-none">
                0{project.id}
            </span>
        </div>
      </motion.div>
    </div>
  );
};

const Showcase3D: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} id="collections" className="relative bg-luxury-black pt-20 pb-20">
      <div className="mb-20 px-6 md:px-20">
        <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white mb-4"
        >
            Selected Works
        </motion.h2>
        <div className="w-24 h-[1px] bg-luxury-gold"></div>
      </div>

      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return (
          <Card 
            key={project.id} 
            i={i} 
            project={project} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Showcase3D;