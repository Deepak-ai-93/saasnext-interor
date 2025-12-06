import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PenTool, Box, Layout, Sun } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Interior Architecture",
    description: "Structural reimagining of spaces to maximize flow and light.",
    icon: "layout"
  },
  {
    id: 2,
    title: "Bespoke Furniture",
    description: "Custom-designed pieces that perfectly fit your unique aesthetic.",
    icon: "box"
  },
  {
    id: 3,
    title: "Lighting Design",
    description: "Atmospheric lighting plans to set the mood for every occasion.",
    icon: "sun"
  },
  {
    id: 4,
    title: "Art Curation",
    description: "Sourcing rare and statement pieces to elevate your environment.",
    icon: "pen"
  }
];

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'layout': return <Layout size={32} />;
        case 'box': return <Box size={32} />;
        case 'sun': return <Sun size={32} />;
        case 'pen': return <PenTool size={32} />;
        default: return <Box size={32} />;
    }
};

const TiltCard: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="perspective-container"
    >
      {children}
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-luxury-charcoal relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-medium"
                >
                    Our Expertise
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl font-serif text-white mt-4"
                >
                    Design Disciplines
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <TiltCard key={service.id} index={index}>
                        <div className="h-full bg-luxury-black/50 border border-white/5 p-8 md:p-10 hover:border-luxury-gold/50 transition-colors duration-500 hover:shadow-2xl hover:shadow-luxury-gold/5 group" style={{ transform: "translateZ(20px)" }}>
                            <div className="text-luxury-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300 origin-left">
                                {getIcon(service.icon)}
                            </div>
                            <h3 className="text-xl font-serif text-white mb-4 group-hover:text-luxury-gold transition-colors">{service.title}</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed border-t border-white/10 pt-4 group-hover:border-luxury-gold/20 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;