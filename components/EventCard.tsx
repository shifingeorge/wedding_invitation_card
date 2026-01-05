import React from 'react';
import { motion } from 'framer-motion';
import { WeddingEvent } from '../types';

interface EventCardProps {
  event: WeddingEvent;
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  // Extract Day and Month/Year from date string roughly for the badge
  const dateParts = event.date.split(','); // "Friday", " February 6", " 2026"
  const dayName = dateParts[0];
  const dateNum = dateParts[1]?.trim().split(' ')[1]; // "6"
  const monthName = dateParts[1]?.trim().split(' ')[0].substring(0, 3).toUpperCase(); // "FEB"

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="relative w-full max-w-4xl mx-auto mb-16 px-4"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative bg-white rounded-xl shadow-xl overflow-hidden border border-[#D4AF37]/30"
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none radial-gradient-gold"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-[#8B1538]"></div>

        <div className="flex flex-col md:flex-row">
          {/* Date Column - Left */}
          <div className="md:w-1/4 bg-[#8B1538] text-[#FFF8E7] p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
            <p className="font-cinzel text-lg tracking-widest mb-2 opacity-80">{dayName}</p>
            <p className="font-cinzel text-6xl font-black leading-none mb-2">{dateNum}</p>
            <p className="font-cinzel text-2xl tracking-[0.3em] font-bold">{monthName}</p>
          </div>

          {/* Content Column - Right */}
          <div className="md:w-3/4 p-8 relative">
            {/* Golden Corner Lines */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-[#D4AF37] opacity-40"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-[#D4AF37] opacity-40"></div>

            <h3 className="font-cinzel text-3xl md:text-4xl text-[#8B1538] mb-4">{event.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-1 h-8 bg-[#D4AF37]"></div>
                <div>
                  <p className="font-cormorant text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Time</p>
                  <p className="font-cormorant text-xl text-gray-800 font-semibold">{event.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-1 h-8 bg-[#D4AF37]"></div>
                <div>
                  <p className="font-cormorant text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Venue</p>
                  <p className="font-cormorant text-xl text-gray-800 font-semibold leading-tight">{event.venue}</p>
                  {event.address && <p className="text-xs text-gray-500 mt-1 italic">{event.address}</p>}
                </div>
              </div>
            </div>

            <p className="font-cormorant text-lg text-gray-600 italic leading-relaxed mb-6 border-l-2 border-[#D4AF37]/20 pl-4">
              "{event.description}"
            </p>


            {event.dressCode && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B1538]"></span>
                <p className="font-cinzel text-xs text-[#8B1538] font-bold tracking-wider">
                  Dress Code: <span className="text-gray-600 font-normal normal-case font-cormorant text-lg ml-2">{event.dressCode}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};