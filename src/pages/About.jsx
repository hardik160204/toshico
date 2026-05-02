import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-20 bg-white min-h-screen overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="bg-slate-950 py-24 md:py-32 text-center px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#B91C1C] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-500 text-xs font-bold tracking-[0.2em] mb-6 border border-red-500/30">
            OUR STORY
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Redefining the <br/> Living Room.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            We believe that a cinematic experience shouldn't be a luxury. Here is how Toshico was born.
          </p>
        </motion.div>
      </section>

      {/* THE STORY TIMELINE */}
      <section className="py-20 md:py-32 px-6 relative">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line for Desktop (Hidden on mobile for cleaner look) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

          {/* CHAPTER 1 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[45%] text-left md:text-right mb-8 md:mb-0"
            >
              <h3 className="text-red-600 font-bold tracking-widest text-sm uppercase mb-2">The Problem</h3>
              <h2 className="text-3xl font-black text-slate-900 mb-4">A Broken Market</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                It started with a simple observation. When shopping for a TV, you were forced to make a choice: pay an absolute fortune for a premium brand, or settle for a budget TV with washed-out colors and terrible, tinny audio. There was no middle ground.
              </p>
            </motion.div>
            
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-slate-100 items-center justify-center z-10 shadow-sm">
              <div className="w-4 h-4 bg-slate-900 rounded-full"></div>
            </div>

            <div className="w-full md:w-[45%] hidden md:block"></div>
          </div>

          {/* CHAPTER 2 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32">
            <div className="w-full md:w-[45%] hidden md:block"></div>
            
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-slate-100 items-center justify-center z-10 shadow-sm">
              <div className="w-4 h-4 bg-[#B91C1C] rounded-full"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[45%] text-left"
            >
              <h3 className="text-red-600 font-bold tracking-widest text-sm uppercase mb-2">The Display</h3>
              <h2 className="text-3xl font-black text-slate-900 mb-4">The Pursuit of Perfection</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                We knew the heart of any great TV is the panel. We bypassed standard displays and partnered directly with manufacturers to source A++ Grade BOE Panels. This meant zero dead pixels, crystal-clear 4K upscaling, and a massive 178° viewing angle. The picture was finally perfect.
              </p>
            </motion.div>
          </div>

          {/* CHAPTER 3 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-20 md:mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[45%] text-left md:text-right mb-8 md:mb-0"
            >
              <h3 className="text-red-600 font-bold tracking-widest text-sm uppercase mb-2">The Audio</h3>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Solving the Sound</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Even with a beautiful screen, the experience is ruined if you can't hear the dialogue. Instead of forcing our customers to buy expensive, messy external speakers, we custom-engineered powerful soundbars directly into the frame of the TV.
              </p>
            </motion.div>
            
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-slate-100 items-center justify-center z-10 shadow-sm">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>

            <div className="w-full md:w-[45%] hidden md:block"></div>
          </div>

          {/* CHAPTER 4 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-[45%] hidden md:block"></div>
            
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-slate-100 items-center justify-center z-10 shadow-sm">
              <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[45%] text-left"
            >
              <h3 className="text-red-600 font-bold tracking-widest text-sm uppercase mb-2">The Result</h3>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Toshico Today</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                By combining A++ panels, built-in soundbars, and the seamless Google TV OS, we built the television we always wanted to own. We cut out the unnecessary markups to bring uncompromising, premium quality directly to your living room. Toshico is made for the future.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* BOTTOM BRANDING CALLOUT */}
      <section className="bg-slate-50 py-24 text-center px-6 border-t border-slate-200">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
             <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Experience the Difference</h2>
          <p className="text-slate-600 text-lg mb-8">
            Stop compromising. Discover the Toshico lineup today.
          </p>
          <a href="/products" className="inline-block bg-[#B91C1C] text-white font-bold tracking-widest uppercase py-4 px-10 rounded-xl hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20">
            View Our Products
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default About;