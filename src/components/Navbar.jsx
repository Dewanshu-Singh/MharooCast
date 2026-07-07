import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Headphones } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-500`}
    >
      <div className={`max-w-[85rem] mx-auto rounded-full px-6 flex justify-between items-center transition-all duration-500 border ${scrolled ? 'glass bg-black/60 border-white/10 shadow-[0_8px_32px_rgba(214,0,28,0.15)] py-2.5 backdrop-blur-xl' : 'bg-transparent border-transparent py-4'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D6001C]/20 to-transparent border border-[#D6001C]/30 flex items-center justify-center group-hover:from-[#D6001C] group-hover:to-[#990014] transition-all duration-500 shadow-[0_0_15px_rgba(214,0,28,0.2)]">
             <Headphones size={18} className="text-[#FF4D6D] group-hover:text-white transition-colors duration-500" />
          </div>
          <span className="font-poppins font-bold text-xl tracking-tight text-white flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6001C] to-[#FF4D6D]">Mharoo</span>
            <span className="ml-0.5">Cast</span>
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 font-inter text-sm font-medium text-[#B8B8B8] bg-white/5 rounded-full p-1.5 border border-white/5 shadow-inner backdrop-blur-md">
          {['About', 'Episodes', 'Guests'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="px-5 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Subscribe Button */}
        <div className="hidden md:flex items-center">
          <button className="relative group overflow-hidden bg-gradient-to-r from-[#D6001C] to-[#990014] border border-[#D6001C]/50 text-white font-inter font-semibold text-sm px-8 py-2.5 rounded-full shadow-[0_0_20px_rgba(214,0,28,0.3)] hover:shadow-[0_0_30px_rgba(214,0,28,0.6)] hover:-translate-y-0.5 transition-all duration-300">
            <span className="relative z-10">Subscribe</span>
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2.5 rounded-full hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 glass bg-black/90 rounded-3xl p-6 flex flex-col gap-4 md:hidden border border-white/10 shadow-2xl backdrop-blur-2xl"
          >
            {['About', 'Episodes', 'Guests'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-[#B8B8B8] hover:text-white hover:bg-white/10 p-4 rounded-2xl text-lg font-medium transition-all flex items-center justify-between" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="h-px w-full bg-white/10 my-2" />
            <button className="bg-gradient-to-r from-[#D6001C] to-[#990014] hover:to-[#D6001C] transition-colors text-white font-inter font-semibold text-base px-6 py-4 rounded-2xl mt-2 w-full shadow-[0_0_20px_rgba(214,0,28,0.3)]">
              Subscribe Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
