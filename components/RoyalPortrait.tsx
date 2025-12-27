
import React from 'react';
import { motion } from 'framer-motion';

export const RoyalPortrait: React.FC = () => {
  /**
   * We are now using the static image provided by the user.
   * Assuming the uploaded image is named 'portrait.png' and placed in the project root.
   */
  const imageUrl = './portrait.png';

  return (
    <div className="relative w-full max-w-sm md:max-w-lg mx-auto p-2 md:p-4">
      {/* Decorative Glow Ornaments behind the frame */}
      <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-32 h-24 md:h-32 bg-[#D4AF37] opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-24 md:w-32 h-24 md:h-32 bg-[#D4AF37] opacity-10 rounded-full blur-2xl"></div>

      {/* The Main Royal Frame */}
      <div className="relative aspect-[3/4] rounded-[80px_80px_30px_30px] md:rounded-[120px_120px_40px_40px] overflow-hidden border-[6px] md:border-[10px] border-[#D4AF37] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] bg-[#FFF8E7] flex items-center justify-center">
        <div className="relative w-full h-full">
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={imageUrl} 
            alt="Nizma and Rafsal Wedding Portrait" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a high-quality thematic placeholder if portrait.png is not found
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop';
            }}
          />
          
          {/* 
            Subtle gradient overlay to ground the image. 
            The UI text overlay is removed because the provided image already 
            contains the 'Nizma & Rafsal' and 'Wedding Invitation' text.
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        {/* Elegant shimmer effect to add a touch of luxury to the portrait */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/5"></div>
      </div>
      
      {/* Decorative Label Frame Underneath */}
      <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="relative bg-[#8B1538] border-2 border-[#D4AF37] px-8 md:px-12 py-2 md:py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] min-w-[220px] md:min-w-[280px]">
          <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-1.5 md:w-2 h-1.5 md:h-2 bg-[#D4AF37] rotate-45"></div>
          <span className="font-cinzel text-[#FFD700] text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] whitespace-nowrap uppercase block text-center">In Pure Harmony</span>
          <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-1.5 md:w-2 h-1.5 md:h-2 bg-[#D4AF37] rotate-45"></div>
        </div>
      </div>
    </div>
  );
};
