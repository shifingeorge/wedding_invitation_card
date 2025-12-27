import React from 'react';
import { motion } from 'framer-motion';

export const Lantern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ rotate: -5 }}
      animate={{ rotate: 5 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      style={{ transformOrigin: 'top center' }}
      className={`flex flex-col items-center ${className}`}
    >
      <div className="w-0.5 h-16 bg-[#D4AF37]"></div>
      <div className="w-12 h-16 relative">
        <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">
          <path d="M50 0L80 30H20L50 0Z" fill="#D4AF37" />
          <rect x="20" y="30" width="60" height="80" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="4" />
          <path d="M20 110L50 140L80 110H20Z" fill="#D4AF37" />
          <circle cx="50" cy="70" r="15" fill="#FFD700" fillOpacity="0.6" className="animate-pulse" />
          <path d="M35 30V110M65 30V110M20 50H80M20 90H80" stroke="#D4AF37" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
};
