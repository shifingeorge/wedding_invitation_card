import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Envelope } from './components/Envelope';
import { MehrabFrame } from './components/MehrabFrame';
import { EventCard } from './components/EventCard';
import { Countdown } from './components/Countdown';
import { RoyalPortrait } from './components/RoyalPortrait';
import { FloralDivider } from './components/FloralDivider';
import { Lantern } from './components/Lantern';
import { WEDDING_EVENTS, BISMILLAH, BRIDE_NAME, GROOM_NAME, HASHTAG } from './constants';

const AtmosphereEffect = () => {
  const particles = Array.from({ length: 25 });
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[60]">
      {particles.map((_, i) => (
        <div 
          key={i}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 8 + 10}s`,
            animationDelay: `${Math.random() * 15}s`,
            width: i % 3 === 0 ? '4px' : '10px',
            height: i % 3 === 0 ? '4px' : '8px',
            background: i % 2 === 0 ? '#D4AF37' : '#FFF8E7',
            borderRadius: i % 3 === 0 ? '50%' : '50% 0 50% 0',
            filter: i % 3 === 0 ? 'blur(1px)' : 'none',
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

const BackgroundPatternLayer = () => (
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
    className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] islamic-pattern opacity-10 pointer-events-none z-0"
  />
);

const BouquetDecoration = ({ className = "", opacity = 0.4 }) => (
  <div className={`pointer-events-none ${className}`}>
    <svg width="150" height="150" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }} className="filter drop-shadow-2xl animate-sway">
      <path d="M60 100C60 100 40 80 40 60C40 40 60 20 60 20C60 20 80 40 80 60C80 80 60 100 60 100Z" fill="#8B1538" stroke="#D4AF37" strokeWidth="2"/>
      <circle cx="45" cy="50" r="15" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37"/>
      <circle cx="75" cy="50" r="15" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37"/>
      <path d="M50 80C50 80 30 70 30 50M70 80C70 80 90 70 90 50" stroke="#D4AF37" strokeWidth="1"/>
      <path d="M60 110V90" stroke="#D4AF37" strokeWidth="2"/>
      <path d="M40 90 Q 60 110 80 90" stroke="#D4AF37" strokeWidth="1" fill="none" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-cormorant text-gray-800 selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {!isOpened && (
          <Envelope onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0 }}
        className={`bg-[#8B1538] transition-opacity duration-1000 relative ${!isOpened ? 'h-screen overflow-hidden' : 'min-h-screen'}`}
      >
        <AtmosphereEffect />
        <BackgroundPatternLayer />
        
        {/* Hero Decorative Lanterns - Optimized for mobile */}
        <div className="fixed top-0 left-2 md:left-8 z-10 opacity-60 pointer-events-none">
          <Lantern className="scale-75 md:scale-100" />
        </div>
        <div className="fixed top-0 right-2 md:right-8 z-10 opacity-60 pointer-events-none">
          <Lantern className="scale-75 md:scale-100" />
        </div>

        {/* Section 1: Hero Invitation */}
        <section className="relative min-h-screen flex items-center justify-center py-16 px-4 md:px-8 overflow-hidden">
          {/* Corner Floral Motifs */}
          <BouquetDecoration className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 rotate-45 scale-[1.5] md:scale-[2]" opacity={0.6} />
          <BouquetDecoration className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 -rotate-45 scale-[1.5] md:scale-[2]" opacity={0.6} />
          <BouquetDecoration className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 -rotate-45 scale-[1.5] md:scale-[2]" opacity={0.6} />
          <BouquetDecoration className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 rotate-45 scale-[1.5] md:scale-[2]" opacity={0.6} />

          <MehrabFrame className="w-full max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col items-center"
            >
              <p className="font-amiri text-[#8B1538] text-xl md:text-2xl mb-6 md:mb-8 gold-shimmer leading-relaxed">{BISMILLAH}</p>
              
              <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs text-gray-500 mb-6 md:mb-8 font-cinzel">
                Together with their families
              </p>
              
              <div className="relative mb-4">
                <h1 className="font-cinzel text-3xl md:text-5xl lg:text-7xl text-[#8B1538] drop-shadow-xl text-center leading-[1.2] md:leading-tight">
                  {BRIDE_NAME}
                </h1>
              </div>

              <div className="font-vibes text-4xl md:text-5xl text-[#D4AF37] my-3 md:my-4">&</div>

              <div className="relative mb-8 md:mb-12">
                <h1 className="font-cinzel text-3xl md:text-5xl lg:text-7xl text-[#8B1538] drop-shadow-xl text-center leading-[1.2] md:leading-tight">
                  {GROOM_NAME}
                </h1>
              </div>
              
              <p className="italic text-base md:text-xl text-gray-700 max-w-md mb-8 md:mb-10 leading-relaxed text-center font-cormorant px-4">
                cordially invite you to join the occasion of their joyous commitment on
              </p>
              
              <div className="flex items-center gap-2 md:gap-8 mb-8 md:mb-10 scale-[0.85] md:scale-110 origin-center">
                <div className="text-right">
                  <p className="font-cinzel text-base md:text-lg font-bold text-gray-600">SUNDAY</p>
                </div>
                <div className="border-x-2 border-[#D4AF37] px-6 md:px-10 py-1 md:py-2 bg-white/50 rounded-lg shadow-inner">
                  <p className="font-cinzel text-4xl md:text-6xl font-black text-[#8B1538]">08</p>
                  <p className="font-cinzel text-lg md:text-xl font-bold tracking-widest">FEB</p>
                  <p className="font-cinzel text-xs text-gray-500 mt-1">2026</p>
                </div>
                <div className="text-left">
                  <p className="font-cinzel text-base md:text-lg font-bold text-gray-600">AT NOON</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 w-full justify-center mb-6 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                <div className="w-3 h-3 rotate-45 border border-[#D4AF37] twinkle"></div>
                <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
              </div>
              
              <p className="italic text-[10px] md:text-sm text-gray-400 mb-2 uppercase tracking-[0.2em] font-cinzel">The Venue</p>
              <p className="font-bold text-lg md:text-xl mb-10 md:mb-12 max-w-sm text-center text-[#8B1538] tracking-tight uppercase leading-snug px-2">
                THE GRAND MOSQUE CENTRAL<br/>& PALACE HALL
              </p>
              
              <div className="p-3 md:p-4 bg-white/40 border border-[#D4AF37]/30 rounded-full px-8 md:px-12">
                <p className="font-cormorant italic text-sm text-[#8B1538] text-center tracking-[0.2em] font-bold">
                  Save the Date
                </p>
              </div>
            </motion.div>
          </MehrabFrame>
        </section>

        <FloralDivider />

        {/* Section 2: Blessings */}
        <section className="py-20 md:py-24 bg-[#FFF8E7] text-center px-4 relative overflow-hidden">
          <BouquetDecoration className="absolute -top-10 -right-10 opacity-30 scale-125 md:scale-150 rotate-180" />
          <BouquetDecoration className="absolute -bottom-10 -left-10 opacity-30 scale-125 md:scale-150" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="bg-white/30 p-8 md:p-12 rounded-[40px] md:rounded-[50px] border border-[#D4AF37]/20 backdrop-blur-sm"
            >
              <h2 className="font-cinzel text-2xl md:text-3xl mb-8 md:mb-10 text-[#8B1538] tracking-[0.2em]">A Sacred Covenant</h2>
              <div className="font-amiri text-2xl md:text-3xl text-gray-800 mb-6 md:mb-8 italic leading-relaxed px-2 md:px-12 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-[#D4AF37]/30">
                "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
              </div>
              <p className="font-cormorant text-gray-500 uppercase tracking-widest text-[10px] md:text-sm">— Surah Ar-Rum 30:21</p>
            </motion.div>
          </div>
        </section>

        <FloralDivider />

        {/* Section 3: Royal Portrait Section */}
        <section className="py-20 md:py-24 bg-[#FFF8E7] flex flex-col items-center relative overflow-hidden">
          <BouquetDecoration className="absolute top-1/4 left-0 opacity-10 scale-150 md:scale-[2]" />
          <BouquetDecoration className="absolute top-1/4 right-0 opacity-10 scale-150 md:scale-[2] rotate-180" />

          <div className="max-w-4xl w-full px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-cinzel text-2xl md:text-4xl text-[#8B1538] mb-4 tracking-tighter"
            >
              The Union of Souls
            </motion.h2>
            <div className="w-20 md:w-32 h-px bg-[#D4AF37] mx-auto mb-10 md:mb-16"></div>
            
            <div className="relative">
              <div className="absolute -top-10 -left-10 hidden lg:block scale-125 opacity-40">
                <BouquetDecoration opacity={0.6} />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden lg:block scale-125 opacity-40 rotate-180">
                <BouquetDecoration opacity={0.6} />
              </div>
              <RoyalPortrait />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-16 md:mt-20 text-center max-w-2xl mx-auto px-4"
            >
              <div className="p-6 md:p-8 bg-white/50 rounded-2xl md:rounded-3xl border border-[#D4AF37]/10 shadow-inner">
                <p className="text-lg md:text-2xl italic text-gray-700 leading-relaxed font-cormorant">
                  From different paths to a shared horizon, Nizma and Rafsal invite you to witness the beginning of their forever. 
                  A journey of love, faith, and barakah.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-[#8B1538]">
          <FloralDivider />
        </section>

        {/* Section 4: Timeline */}
        <section className="py-20 md:py-24 px-4 bg-[#8B1538] relative overflow-hidden">
          <BouquetDecoration className="absolute top-0 left-[-80px] opacity-20 scale-[2] md:scale-[3]" />
          <BouquetDecoration className="absolute bottom-0 right-[-80px] opacity-20 scale-[2] md:scale-[3] rotate-180" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col items-center mb-16 md:mb-20">
              <h2 className="font-cinzel text-3xl md:text-5xl text-[#FFF8E7] mb-6 tracking-wide text-center uppercase">The Celebration</h2>
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              <p className="text-[#D4AF37] mt-4 tracking-[0.2em] md:tracking-[0.4em] font-cinzel uppercase text-[10px] md:text-xs font-bold">Timeline of Grace</p>
            </div>

            <div className="relative">
              {WEDDING_EVENTS.map((event, index) => (
                <div key={event.id} className="relative">
                  <EventCard event={event} index={index} />
                  {index < WEDDING_EVENTS.length - 1 && (
                    <div className="flex justify-center my-6 md:hidden">
                      <div className="w-px h-8 bg-[#D4AF37]/40"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-[#8B1538]">
          <FloralDivider />
        </section>

        {/* Section 5: Countdown Section */}
        <section className="py-20 md:py-24 bg-[#8B1538] relative overflow-hidden">
          <BouquetDecoration className="absolute top-0 left-0 opacity-10 scale-[2]" />
          <BouquetDecoration className="absolute bottom-0 right-0 opacity-10 scale-[2] rotate-180" />
          
          <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
            <div className="flex flex-col items-center mb-12 md:mb-16">
              <h2 className="font-cinzel text-2xl md:text-4xl text-[#FFF8E7] mb-8 uppercase tracking-[0.2em]">The Final Countdown</h2>
              <div className="p-6 md:p-10 bg-white/5 rounded-[30px] md:rounded-[40px] border border-[#D4AF37]/30 backdrop-blur-md shadow-2xl w-full">
                <Countdown />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-10 md:mt-12 text-[#FFF8E7]/80 italic font-cormorant text-xl md:text-2xl px-4"
            >
              "We cannot wait to celebrate this special day with our loved ones."
            </motion.div>
          </div>
        </section>

        {/* Footer: Closing Prayer */}
        <footer className="py-24 md:py-32 bg-[#1a0505] text-[#D4AF37] text-center px-4 relative overflow-hidden">
          <BouquetDecoration className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 scale-[2] md:scale-[3]" />
          <BouquetDecoration className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 scale-[2] md:scale-[3] rotate-180" />
          
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="font-amiri text-2xl md:text-4xl mb-10 md:mb-12 leading-relaxed gold-shimmer">
              بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>
            <p className="font-cormorant text-xl md:text-2xl italic mb-12 md:mb-16 text-[#FFF8E7]/80 leading-relaxed px-4">
              "May Allah bless you both and shower His blessings upon you and bring you together in goodness"
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 md:gap-8">
                 <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                 <div className="w-2 md:w-3 h-2 md:h-3 rotate-45 border border-[#D4AF37] twinkle"></div>
                 <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
              </div>
              <p className="font-cinzel text-[10px] md:text-sm uppercase tracking-[0.4em] opacity-40 mt-6">With Eternal Love & Gratitude</p>
              <p className="font-cinzel text-base md:text-lg tracking-[0.1em] text-[#FFF8E7]/60 uppercase">The Families of<br/>Nizma & Rafsal</p>
            </div>
          </div>
        </footer>
      </motion.main>
    </div>
  );
};

export default App;
