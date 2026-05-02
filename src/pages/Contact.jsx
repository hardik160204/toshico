import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="pt-20 bg-white min-h-screen flex flex-col">
      
      {/* HEADER SECTION */}
      <section className="bg-slate-950 py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#B91C1C] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="text-[#B91C1C] font-bold tracking-[0.2em] text-sm mb-4 block uppercase">
            We are here for you
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question about our TV lineup, need support, or want to inquire about bulk orders? Our team is ready to help.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO GRID */}
      <section className="py-20 flex-grow px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-50 text-[#B91C1C] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Head Office</h4>
              <p className="text-gray-600 leading-relaxed">
                D 20 Samridhi Nagar,<br />
                Near Barahn Road<br />
                Kota, rajasthan, India
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-50 text-[#B91C1C] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Direct Line & WhatsApp</h4>
              <p className="text-gray-600 mb-4">Call or text us directly for the fastest response.</p>
              <a href="tel:+919414425090" className="mt-auto inline-block bg-slate-900 text-white font-bold tracking-widest py-3 px-6 rounded-xl hover:bg-[#B91C1C] transition-colors w-full">
                +91 94144 25090
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-50 text-[#B91C1C] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Email Support</h4>
              <p className="text-gray-600 mb-4">Drop us an email and we will get back to you within 24 hours.</p>
              <a href="mailto:Pavan.astha1@gmail.com" className="mt-auto inline-block bg-slate-100 text-slate-900 font-bold py-3 px-6 rounded-xl hover:bg-slate-200 transition-colors w-full break-all text-sm md:text-base">
                Pavan.astha1@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center"
          >
            <h4 className="text-xl font-bold text-slate-900 mb-6">Business Hours</h4>
            <div className="space-y-3 text-slate-600 max-w-sm mx-auto">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <span className="font-medium">Monday - Saturday</span> 
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-medium">Sunday</span> 
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-bold">Closed</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;