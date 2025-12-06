import React from 'react';
import { motion } from 'framer-motion';
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
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group bg-luxury-black/50 border border-white/5 p-8 md:p-10 hover:border-luxury-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-luxury-gold/5"
                    >
                        <div className="text-luxury-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                            {getIcon(service.icon)}
                        </div>
                        <h3 className="text-xl font-serif text-white mb-4 group-hover:text-luxury-gold transition-colors">{service.title}</h3>
                        <p className="text-gray-400 font-light text-sm leading-relaxed border-t border-white/10 pt-4 group-hover:border-luxury-gold/20 transition-colors">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;