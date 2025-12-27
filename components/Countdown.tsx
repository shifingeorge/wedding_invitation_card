
import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Updated wedding date to Feb 8, 2026
    const weddingDate = new Date('February 8, 2026 12:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#8B1538] text-[#D4AF37] rounded-lg border border-[#D4AF37] shadow-inner mb-2">
        <span className="font-cinzel text-2xl md:text-3xl font-bold">{value < 0 ? 0 : value}</span>
      </div>
      {/* Changed label text color to ivory for better readability */}
      <span className="font-cormorant text-[10px] md:text-xs uppercase tracking-widest text-[#FFF8E7] font-bold">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-8">
      <Item value={timeLeft.days} label="Days" />
      <Item value={timeLeft.hours} label="Hours" />
      <Item value={timeLeft.minutes} label="Mins" />
      <Item value={timeLeft.seconds} label="Secs" />
    </div>
  );
};
