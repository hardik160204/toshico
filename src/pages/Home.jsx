import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import TrustMarquee from '../components/TrustMarquee.jsx';

import heroImage from '../assets/images/hero.jpg'; 
import logoImage from '../assets/images/toshico-logo.svg';
import tv32 from '../assets/images/tv-32.png'; 
import tv43 from '../assets/images/tv-43.png';
import panelImage from '../assets/images/panel-closeup.png'; 

const Home = () => {
  return (
    <div className="pt-20 bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      {/* THIS SECTION TAG WAS MISSING! */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">
        
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 w-full h-full z-0 bg-slate-950">
          
          {/* Swapped to object-right for mobile to pan the camera away from the center logo */}
          <img 
            src={heroImage} 
            alt="Family enjoying Toshico Smart TV" 
            className="w-full h-full object-cover object-right md:object-center" 
          />
          
          {/* Added a slightly darker base tint specifically for mobile readability */}
          <div className="absolute inset-0 bg-slate-950/40 md:bg-transparent"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 md:via-slate-900/60 to-slate-900/50 md:to-slate-900/40"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-8 md:mt-0"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-600/90 text-white text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-sm shadow-xl">
            THE NEW STANDARD
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
            Cinematic Brilliance. <br className="hidden md:block" /> 
            <span className="text-gray-300 font-medium">Everyday Price.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-lg font-light leading-relaxed">
            Experience the TOSHICO Smart Google LED TV lineup. Featuring an A++ Grade BOE Panel 
            and built-in Soundbar speakers for an uncompromising home theater experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link to="/products" className="w-full sm:w-auto bg-[#B91C1C] text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-red-800 hover:shadow-lg transition-all text-center">
              EXPLORE LINEUP
            </Link>
            <a href="tel:+919414420950" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-white hover:text-slate-900 hover:border-white transition-all text-center shadow-xl">
              CALL FOR INQUIRY
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. PRODUCT LINEUP SECTION */}
      <section className="w-full bg-[#050814] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Our Premium Lineup
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect size for your space. Every Toshico TV features our signature A++ Grade BOE Panel and bezel-less design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* PRODUCT CARD 1: 32-inch */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-300 group flex flex-col"
            >
              <div className="bg-slate-50/50 rounded-xl h-64 md:h-72 flex items-center justify-center p-4 mb-6">
                <img src={tv32} alt="Toshico 32 Inch TV" className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="mt-auto">
                <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">80 cm Display</span>
                <h3 className="text-2xl font-bold text-white mb-4">Toshico 32" Smart Android TV</h3>
                <ul className="space-y-2 mb-8 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">✓ HD Ready A++ Grade BOE Panel</li>
                  <li className="flex items-center gap-2">✓ Frameless Bezel-Less Design</li>
                  <li className="flex items-center gap-2">✓ Built-in Soundbar System</li>
                  <li className="flex items-center gap-2">✓ Pre-loaded: Netflix, Prime, Hotstar</li>
                </ul>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-800">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Starting at</p>
                    <p className="text-2xl font-black text-white">₹9,000</p> 
                  </div>
                  <Link to="/products" className="bg-[#B91C1C] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-red-800 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* PRODUCT CARD 2: 43-inch */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-300 group flex flex-col"
            >
              <div className="bg-slate-50/50 rounded-xl h-64 md:h-72 flex items-center justify-center p-4 mb-6">
                <img src={tv43} alt="Toshico 43 Inch TV" className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="mt-auto">
                <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">109 cm Display</span>
                <h3 className="text-2xl font-bold text-white mb-4">Toshico 43" Smart Android TV</h3>
                <ul className="space-y-2 mb-8 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">✓ Full HD / 4K Ultra HD BOE Panel</li>
                  <li className="flex items-center gap-2">✓ Premium Frameless Design</li>
                  <li className="flex items-center gap-2">✓ Immersive Soundbar Audio</li>
                  <li className="flex items-center gap-2">✓ Smart Android Ecosystem</li>
                </ul>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-800">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Starting at</p>
                    <p className="text-2xl font-black text-white">₹15,000</p> 
                  </div>
                  <Link to="/products" className="bg-[#B91C1C] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-red-800 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <TrustMarquee />

      {/* 3. THREE-PILLAR FEATURES SECTION */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { title: "A++ BOE Panel", desc: "Industry-leading display technology ensuring vivid colors, deep blacks, and zero dead pixels." },
              { title: "Google TV OS", desc: "Access 10,000+ apps, voice controls, and seamless casting directly on your Toshico screen." },
              { title: "Soundbar Audio", desc: "A built-in acoustic system that delivers rich, immersive sound without external speakers." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center md:text-left p-6 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-red-50 text-[#B91C1C] rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 4. DEEP DIVE: SPLIT SECTION */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative z-10"
          >
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              
              <img 
                src={panelImage} 
                alt="Close up of A++ Grade BOE Panel" 
                className="w-full h-full object-contain p-6" 
              />
              
              {/* HOTSPOT 1: The Bezel (Top Right) */}
              <div className="absolute top-[35%] right-[25%] group cursor-pointer z-20">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-white shadow-lg"></span>
                </div>
                <div className="absolute top-8 right-0 md:-right-4 w-48 bg-white/90 backdrop-blur-lg shadow-2xl border border-white/50 rounded-2xl p-4 opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-active:opacity-100 group-active:scale-100 transition-all duration-300 origin-top-right">
                  <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1.5">Zero-Bezel Design</p>
                  <p className="text-slate-800 text-sm font-medium leading-snug">Edge-to-edge glass for a completely borderless viewing experience.</p>
                </div>
              </div>

              {/* HOTSPOT 2: The Display (Center Left) */}
              <div className="absolute top-[45%] left-[20%] group cursor-pointer z-20">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white shadow-lg"></span>
                </div>
                <div className="absolute top-8 left-0 md:-left-4 w-48 bg-white/90 backdrop-blur-lg shadow-2xl border border-white/50 rounded-2xl p-4 opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-active:opacity-100 group-active:scale-100 transition-all duration-300 origin-top-left">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1.5">Crystal 4K Resolution</p>
                  <p className="text-slate-800 text-sm font-medium leading-snug">16.7 million vivid colors bringing every single pixel to life.</p>
                </div>
              </div>

              {/* HOTSPOT 3: The Frame/Logo (Bottom Right) */}
              <div className="absolute bottom-[40%] right-[20%] group cursor-pointer z-20">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-lg"></span>
                </div>
                <div className="absolute bottom-8 right-0 md:-right-4 w-48 bg-white/90 backdrop-blur-lg shadow-2xl border border-white/50 rounded-2xl p-4 opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-active:opacity-100 group-active:scale-100 transition-all duration-300 origin-bottom-right">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1.5">A++ BOE Panel</p>
                  <p className="text-slate-800 text-sm font-medium leading-snug">Flawless, zero dead-pixel guarantee with ultra-durability.</p>
                </div>
              </div>

            </div> 
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Flawless precision.<br/>Down to the pixel.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We exclusively use A++ Grade BOE Panels. This means your TV undergoes rigorous quality testing to ensure unmatched brightness, crystal-clear contrast, and a lifespan that outlasts the competition. 
            </p>
            <ul className="space-y-4 mb-8 text-left inline-block md:block">
              {['Stunning 4K Upscaling', '178° Ultra-Wide Viewing Angle', 'Energy Efficient Architecture'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 5. CINEMATIC AUDIO (DARK MODE) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#B91C1C] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B91C1C] font-bold tracking-[0.2em] text-sm mb-4 block uppercase"
          >
            Built-in Soundbar
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Feel every beat.<br />Hear every whisper.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Forget messy wires and external speakers. Our custom-engineered built-in soundbar delivers a rich, room-filling acoustic experience right out of the box.
          </motion.p>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-32 bg-white text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Ready to upgrade your living room?</h2>
          <p className="text-xl text-gray-600 mb-10">Browse our sizes and find the perfect fit for your home.</p>
          <Link to="/products" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-xl font-bold tracking-widest hover:bg-[#B91C1C] transition-all duration-300">
            VIEW AVAILABLE MODELS
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;