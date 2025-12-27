
import React from 'react';
import { motion } from 'framer-motion';

export const FloralDivider: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex items-center justify-center py-12 gap-4"
    >
      <div className="h-px w-12 md:w-32 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C50 10 60 40 90 50C60 60 50 90 50 90C50 90 40 60 10 50C40 40 50 10 50 10Z" stroke="#D4AF37" strokeWidth="2" fill="#D4AF37" fillOpacity="0.1"/>
        <circle cx="50" cy="50" r="8" fill="#8B1538" stroke="#D4AF37" strokeWidth="2"/>
        <path d="M35 35L20 20M65 35L80 20M35 65L20 80M65 65L80 80" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round"/>
      </svg>
      <div className="h-px w-12 md:w-32 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
    </motion.div>
  );
};
