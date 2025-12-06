import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Showcase3D from './components/Showcase3D';
import Services from './components/Services';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-luxury-black min-h-screen text-slate-100 selection:bg-luxury-gold selection:text-black">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="text-luxury-gold font-serif text-3xl tracking-widest border border-luxury-gold/30 px-6 py-2"
              >
                L
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navigation />
            <main>
              <Hero />
              <Showcase3D />
              
              {/* Philosophy Section */}
              <section id="philosophy" className="py-32 px-6 container mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="md:w-1/2 relative"
                >
                   <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-luxury-gold"></div>
                   <img src="https://picsum.photos/600/800?grayscale" alt="Philosophy" className="w-full object-cover shadow-2xl" />
                   <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-luxury-gold"></div>
                </motion.div>
                
                <div className="md:w-1/2">
                  <motion.h2 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
                  >
                    Designing for the <span className="text-luxury-gold italic">Senses</span>
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 font-light leading-relaxed mb-6 text-lg"
                  >
                    We believe true luxury lies in the details you feel, not just the ones you see. Our philosophy is rooted in creating environments that evoke emotion, cultivate calm, and inspire grandeur.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 font-light leading-relaxed"
                  >
                    From the tactile warmth of velvet to the cool precision of marble, we orchestrate materials to tell your unique story.
                  </motion.p>
                </div>
              </section>

              <Services />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;