import React from 'react';
import { motion } from 'framer-motion';
import { WeddingEvent } from '../types';

interface EventCardProps {
  event: WeddingEvent;
  index: number;
}

const FloralCorner = ({ className = "" }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} opacity-30`}>
    <path d="M0 40V10C0 4.47715 4.47715 0 10 0H40" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="5" cy="5" r="2" fill="#D4AF37" />
    <path d="M15 5C15 5 12 12 5 15C12 18 15 25 15 25C15 25 18 18 25 15C18 12 15 5 15 5Z" fill="#D4AF37" fillOpacity="0.2" />
  </svg>
);

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative w-full max-w-lg mx-auto mb-10 md:mb-16 px-2"
    >
      <div
        className="bg-white/95 p-6 md:p-10 rounded-3xl border border-[#D4AF37]/40 shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
      >
        {/* Floral Corners */}
        <FloralCorner className="absolute top-2 left-2" />
        <FloralCorner className="absolute top-2 right-2 rotate-90" />
        <FloralCorner className="absolute bottom-2 left-2 -rotate-90" />
        <FloralCorner className="absolute bottom-2 right-2 rotate-180" />

        {/* Decoration Overlay */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full scale-150 blur-md group-hover:bg-[#D4AF37]/20 transition-colors"></div>
            <div className="text-4xl md:text-5xl relative z-10 transition-transform duration-500 group-hover:scale-110">
              {event.icon}
            </div>
          </div>

          <h3 className="font-cinzel text-xl md:text-3xl mb-2 text-[#8B1538] leading-tight tracking-tight uppercase">{event.title}</h3>

          <div className="flex items-center gap-3 mb-1">
            <div className="h-[1px] w-4 bg-[#D4AF37]/50"></div>
            <p className="font-cormorant font-bold text-[#D4AF37] text-lg md:text-xl uppercase tracking-widest">{event.date}</p>
            <div className="h-[1px] w-4 bg-[#D4AF37]/50"></div>
          </div>

          <p className="font-cormorant text-[11px] md:text-sm mb-4 uppercase tracking-[0.3em] font-bold text-gray-500">{event.time}</p>

          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mb-6"></div>

          <p className="font-cormorant text-base md:text-lg italic mb-1 text-gray-400">at</p>
          <p className="font-cormorant font-bold text-gray-800 text-lg md:text-2xl mb-1 leading-snug px-2">{event.venue}</p>
          <p className="font-cormorant text-[10px] md:text-xs text-gray-400 mb-6 uppercase tracking-[0.2em]">{event.address}</p>

          <p className="font-cormorant text-base md:text-xl text-gray-700 leading-relaxed px-2 md:px-8 italic font-light">
            {event.description}
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 w-full">
            <p className="font-cormorant text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-2">Attire Recommendation</p>
            <p className="font-cinzel text-xs md:text-base text-[#8B1538] font-bold tracking-wider">{event.dressCode}</p>
          </div>
        </div>
      </div>

      {/* Animated dots for timeline */}
      <div className="hidden md:block absolute left-[-60px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37] twinkle"></div>
    </motion.div>
  );
};