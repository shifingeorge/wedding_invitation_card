
import React from 'react';
import { motion } from 'framer-motion';
import { BISMILLAH, BRIDE_NAME, GROOM_NAME } from '../constants';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a0505] overflow-hidden p-4">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, -100, -200],
              opacity: [0.3, 0.6, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 3, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative cursor-pointer group w-full max-w-[450px]"
        onClick={onOpen}
      >
        {/* Envelope Body */}
        <div className="relative w-full aspect-[4/3] bg-[#8B1538] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-[#D4AF37] overflow-hidden flex flex-col items-center justify-center px-6">
          <div className="absolute inset-0 islamic-pattern opacity-10"></div>
          
          {/* Top Seal / Flap Detail */}
          <div className="absolute top-0 w-full h-1/2 bg-[#6B0F1A] border-b-2 border-[#D4AF37]/50" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
          
          <div className="relative z-10 flex flex-col items-center text-center mt-4">
            <div className="font-amiri text-[#D4AF37] text-lg md:text-xl mb-3 leading-tight">{BISMILLAH}</div>
            <div className="font-cinzel text-[#FFF8E7] text-xl md:text-3xl font-bold tracking-[0.15em] leading-snug">
              {BRIDE_NAME}<br/><span className="text-[#D4AF37]">&</span><br/>{GROOM_NAME}
            </div>
            <div className="font-vibes text-[#D4AF37] text-xl md:text-2xl mt-4 opacity-90">
              You are invited to the Wedding
            </div>
          </div>
        </div>
        
        {/* Tap Indicator */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#D4AF37] font-cormorant text-center mt-8 tracking-[0.3em] uppercase text-xs font-bold"
        >
          Tap to Open the Invitation
        </motion.p>
      </motion.div>
    </div>
  );
};
