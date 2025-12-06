import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-luxury-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <div className="mb-12 md:mb-0">
                <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-6 tracking-wider">LUMIÈRE</h2>
                <p className="max-w-xs text-gray-400 font-light leading-relaxed">
                    Crafting award-winning interiors for the world's most discerning clients.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <div>
                    <h4 className="text-sm uppercase tracking-widest text-white mb-6">Contact</h4>
                    <ul className="space-y-4 text-gray-400 font-light">
                        <li className="hover:text-luxury-gold transition-colors cursor-pointer">hello@lumiere.com</li>
                        <li className="hover:text-luxury-gold transition-colors cursor-pointer">+1 (212) 555-0199</li>
                        <li>152 Wooster St,<br/>New York, NY 10012</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm uppercase tracking-widest text-white mb-6">Social</h4>
                    <ul className="space-y-4 text-gray-400 font-light">
                        <li className="hover:text-luxury-gold transition-colors cursor-pointer">Instagram</li>
                        <li className="hover:text-luxury-gold transition-colors cursor-pointer">Pinterest</li>
                        <li className="hover:text-luxury-gold transition-colors cursor-pointer">LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500 uppercase tracking-widest">
            <p>&copy; 2024 Lumière Interiors. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
                <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
                <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;