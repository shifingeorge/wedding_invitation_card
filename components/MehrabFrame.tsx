
import React from 'react';

interface MehrabFrameProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const MehrabFrame: React.FC<MehrabFrameProps> = ({ children, variant = 'primary', className = '' }) => {
  return (
    <div className={`relative p-4 md:p-12 ${className} group`}>
      {/* Outer Glow & Shadow Layer */}
      <div className="absolute inset-2 md:inset-4 border-[1px] border-[#D4AF37]/30 rounded-[40px] md:rounded-[60px] shadow-[0_0_30px_rgba(212,175,55,0.1)] pointer-events-none"></div>
      
      {/* The Mehrab Arch Container */}
      <div 
        className={`relative w-full h-full min-h-[550px] md:min-h-[600px] border-[4px] md:border-[6px] border-[#D4AF37] overflow-hidden bg-[#FFF8E7] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-transform duration-700`}
        style={{
          clipPath: 'polygon(50% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)',
          borderRadius: '0 0 20px md:20px 30px'
        }}
      >
        {/* Layered Inner Borders for Depth */}
        <div className="absolute inset-1.5 md:inset-2 border-[1px] border-[#D4AF37]/20 pointer-events-none" style={{ clipPath: 'polygon(50% 1%, 98% 11%, 98% 99%, 2% 99%, 2% 11%)' }}></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04] islamic-pattern pointer-events-none scale-[1.2] md:scale-150"></div>
        
        {/* Content */}
        <div className="relative z-10 p-4 md:p-16 flex flex-col items-center text-center h-full">
          {children}
        </div>
      </div>
      
      {/* Corner Ornaments */}
      <div className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 border-t-2 md:border-t-3 border-l-2 md:border-l-3 border-[#D4AF37] rounded-tl-[40px] md:rounded-tl-[60px] opacity-40"></div>
      <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 border-t-2 md:border-t-3 border-r-2 md:border-r-3 border-[#D4AF37] rounded-tr-[40px] md:rounded-tr-[60px] opacity-40"></div>
      
      {/* Corner "Jewels" */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 bg-[#D4AF37] rotate-45 shadow-[0_0_8px_#D4AF37]"></div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 bg-[#D4AF37] rotate-45 shadow-[0_0_8px_#D4AF37]"></div>
    </div>
  );
};
