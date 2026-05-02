import { motion } from 'motion/react';
import tv32 from '../assets/images/tv-32.png'; 
import tv43 from '../assets/images/tv-43.png';

const Products = () => {
  const phone = "919414420950"; // Replace with owner's number

  // UPDATED: Added the actual imported image to each TV model
  const tvModels = [
    {
      id: "43-inch",
      title: '43" SMART GOOGLE LED TV',
      tag: "Flagship Size",
      image: tv43, // Connects the 43" image here
      features: [
        "A++ Grade BOE Panel for Great Picture Quality",
        "Built-in Soundbar Speakers for Immersive Audio",
        "Premium Remote Quality",
        "Google TV OS with App Store"
      ],
      whatsappText: "Hi Toshico, I want to inquire about the 43-inch Smart Google LED TV."
    },
    {
      id: "32-inch",
      title: '32" SMART GOOGLE LED TV',
      tag: "Perfect for Bedrooms",
      image: tv32, // Connects the 32" image here
      features: [
        "A++ Grade BOE Panel for Great Picture Quality",
        "Built-in Soundbar Speakers for Immersive Audio",
        "Premium Remote Quality",
        "Smart OS Ecosystem"
      ],
      whatsappText: "Hi Toshico, I want to inquire about the 32-inch Smart LED TV."
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Our Display Lineup
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            Experience unparalleled clarity and sound with our latest generation of A++ Grade BOE Panel televisions.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {tvModels.map((tv, index) => (
            <motion.div 
              key={tv.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              
              {/* UPDATED: Product Image replacing the grey placeholder */}
              <div className="w-full h-64 md:h-80 bg-slate-50/80 rounded-2xl mb-8 flex items-center justify-center p-6 relative group overflow-hidden">
                <img 
                  src={tv.image} 
                  alt={tv.title} 
                  className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 z-10"
                />
                {/* Subtle hover effect on image container */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </div>

              {/* Product Info */}
              <div className="flex-grow">
                <span className="text-xs font-bold tracking-widest text-[#B91C1C] uppercase mb-2 block">
                  {tv.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                  {tv.title}
                </h2>
                
                <ul className="space-y-4 mb-8">
                  {tv.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-slate-700 text-sm md:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile-Friendly Full-Width CTA */}
              <a 
                href={`https://wa.me/${phone}?text=${encodeURIComponent(tv.whatsappText)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full mt-auto bg-slate-900 text-white text-center py-4 rounded-xl font-bold tracking-wide hover:bg-[#B91C1C] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.666.598 1.236.784 1.41.87.174.086.275.072.376-.043.1-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.174.087.289.129.332.202.043.073.043.423-.101.827z"/>
                </svg>
                INQUIRE ON WHATSAPP
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;