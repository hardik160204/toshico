import { Link } from 'react-router-dom';

// Note: Ensure this path is correct based on where you put your logo file!
// If you didn't move it to the images folder earlier, it should be '../assets/toshico-logo.svg'
import logoImage from '../assets/images/toshico-logo.svg'; 

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        
        {/* Brand & Logo */}
        <div className="col-span-1 md:col-span-2">
          {/* UPDATED: Increased to h-20/h-24 and adjusted margin to -mr-4 */}
          <Link to="/" className="flex items-center gap-0 z-50 group inline-flex">
            <img 
              src={logoImage} 
              alt="Toshico Logo" 
              className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 -mr-4"
            />
            <div className="flex flex-col mt-1">
               <span className="text-2xl md:text-3xl font-black tracking-widest text-white leading-none">
                 TOSHICO
               </span>
               <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-gray-400 mt-1">
                 MADE FOR FUTURE
               </span>
            </div>
          </Link>
          
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm mt-6">
            Toshico Global Solutions delivers uncompromising visual quality and cutting-edge smart technology directly to your living room at an accessible price point.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold tracking-widest mb-6 uppercase text-sm text-white">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Our TVs</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Toshico</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold tracking-widest mb-6 uppercase text-sm text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-[#B91C1C] font-bold">Phone:</span> 
              <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition-colors">+91 9414420950</a>
            </li>
            <li className="flex gap-2">
              <span className="text-[#B91C1C] font-bold">WhatsApp:</span> 
              <a href="https://wa.me/919414420950" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Chat with us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Toshico. All rights reserved.</p>
        <p className="tracking-wider">A++ Grade Panels | Smart Home Ready</p>
      </div>
    </footer>
  );
};

export default Footer;