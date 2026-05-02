import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

// 1. IMPORT YOUR SVG IMAGE HERE:
import logoImage from '../assets/images/toshico-logo.svg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between">
        
 {/* Brand & SVG Logo */}
        <Link to="/" className="flex items-center gap-0 z-50 group">
          
          {/* UPDATED: Massive height increase + Negative right margin to pull text closer */}
          <img 
            src={logoImage} 
            alt="Toshico Logo" 
            className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 -mr-2 md:-mr-4"
          />

          <div className="flex flex-col mt-1">
             <span className="text-2xl md:text-3xl font-black tracking-widest text-slate-900 leading-none">
               TOSHICO
             </span>
             <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-gray-500 mt-1">
               MADE FOR FUTURE
             </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600 tracking-wider">
          <Link to="/" className="hover:text-slate-900 transition-colors">HOME</Link>
          <Link to="/products" className="hover:text-slate-900 transition-colors">PRODUCTS</Link>
          <Link to="/about" className="hover:text-slate-900 transition-colors">ABOUT</Link>
          <Link to="/contact" className="hover:text-slate-900 transition-colors">CONTACT</Link>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <a 
            href="tel:+919414420950" 
            className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:bg-slate-800 transition-all"
          >
            CALL NOW
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col items-center py-6 gap-6"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900 tracking-widest">HOME</Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900 tracking-widest">PRODUCTS</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900 tracking-widest">ABOUT</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900 tracking-widest">CONTACT</Link>
            
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="mt-4 w-[80%] text-center bg-[#B91C1C] text-white px-6 py-4 rounded-xl text-md font-bold tracking-widest shadow-lg shadow-red-200"
            >
              CALL OWNER NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;