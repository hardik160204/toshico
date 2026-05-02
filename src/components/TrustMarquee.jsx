import { motion } from 'motion/react';

const TrustMarquee = () => {
  // Updated trust signals
  const features = [
    "A++ GRADE BOE PANELS",
    "1 YEAR COMPREHENSIVE WARRANTY",
    "CASH ON DELIVERY AVAILABLE",
    "BUILT-IN SOUNDBAR AUDIO",
  ];

  // Duplicated 4 times to ensure the loop is completely seamless on any screen size
  const marqueeItems = [...features, ...features, ...features, ...features];

  return (
    <div className="w-full bg-slate-950 py-3 md:py-4 overflow-hidden border-y border-[#B91C1C]/30 flex items-center">
      <motion.div
        className="flex whitespace-nowrap gap-8 md:gap-12 pl-8 md:pl-12"
        animate={{ x: ["0%", "-50%"] }} // Scrolls exactly half its width, then resets instantly
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 25 // Slightly adjusted speed for the shorter list
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 md:gap-4">
            {/* The little red flame separator - scaled down slightly for mobile */}
            <svg className="w-3 h-3 md:w-4 md:h-4 text-[#B91C1C]" fill="currentColor" viewBox="0 0 24 24">
               <path d="M11.25 2.25c-1.5 2.25-3 4.875-3 7.875 0 2.25 1.5 3 1.5 3s-1.5-1.5-1.5-3.75c0-.75.375-2.25.375-2.25s-1.875 1.5-2.625 3.375c-.75 1.875-.75 4.125.75 6S9 21.75 12 21.75c3.375 0 6-2.625 6-6 0-3.375-1.875-5.625-2.625-6.75-.75-1.125-1.5-2.25-1.5-2.25s.75 1.5 1.125 3c.375 1.5.375 3-.375 4.5 0 0 1.5-1.125 1.5-2.625 0-2.25-1.5-4.875-3.375-7.125C11.625 3 11.25 2.25 11.25 2.25z" />
            </svg>
            {/* Text scales from extra-small on phones to base size on desktops */}
            <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustMarquee;