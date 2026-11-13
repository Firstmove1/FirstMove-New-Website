
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sports } from '../data/sports';

const SportsPlaybook: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;
  const maxIndex = Math.max(0, sports.length - visibleCards);

  const handlePrev = () =>
    setCurrentIndex(prev => Math.max(0, prev - 1));

  const handleNext = () =>
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));

  // Reusable sport card
  const renderCard = (sport: typeof sports[number]) => (
    <motion.div
      key={sport.id}
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">

        <div className="relative h-[300px] sm:h-[320px] md:h-[260px] overflow-hidden">

          <img
            src={sport.image}
            alt={sport.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />

          <div className="absolute bottom-5 left-4 right-3">

            <span className="text-brand-orange font-poppins font-bold text-sm sm:text-base uppercase tracking-widest block mb-2">
              {sport.category}
            </span>

            <h3 className="text-white font-oswald font-bold text-3xl sm:text-4xl leading-tight">
              {sport.name}
            </h3>

          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="sports" className="bg-white py-16 md:py-20">

      <div className="max-w-[1800px] mx-auto px-5 sm:px-6">

        {/* Section heading */}
        <div className="text-center mb-10 md:mb-12">

          <p className="font-poppins font-semibold text-brand-orange uppercase tracking-[0.2em] md:tracking-[0.25em] text-xs sm:text-sm mb-4">
            EXPLORE OUR SPORTS
          </p>

          <h2
            className="font-oswald font-bold text-navy leading-tight"
            style={{ fontSize: 'clamp(2.3rem, 5vw, 3.5rem)' }}
          >
            Sports Playbook
          </h2>

        </div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden -mx-5">

          <div
            className="
              flex gap-4
              overflow-x-auto
              overflow-y-hidden
              px-5 pb-4
              snap-x snap-mandatory
              touch-pan-x
              overscroll-x-contain
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {sports.map((sport) => (
              <div
                key={sport.id}
                className="
                  flex-none
                  w-[76%]
                  max-w-[300px]
                  snap-start
                "
              >
                {renderCard(sport)}
              </div>
            ))}

          </div>

          <p className="text-center text-gray-400 text-xs font-poppins mt-2">
            SWIPE TO EXPLORE MORE SPORTS →
          </p>

        </div>

        {/* DESKTOP CAROUSEL */}
        <div className="hidden md:block relative">

          {/* Previous arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous sports"
            className="
              absolute -left-6 top-1/2 -translate-y-1/2
              w-12 h-12 bg-white/80 backdrop-blur-sm
              shadow-md rounded-full
              flex items-center justify-center
              hover:bg-brand-orange hover:text-white
              transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed
              z-20 border border-gray-100
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Desktop viewport */}
          <div className="overflow-hidden">

            <motion.div
              className="flex gap-5"
              animate={{
                x: `-${currentIndex * (100 / visibleCards + 5 / visibleCards)}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
            >

              {sports.map((sport) => (
                <div
                  key={sport.id}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${(20 * (visibleCards - 1)) / visibleCards}px)`
                  }}
                >
                  {renderCard(sport)}
                </div>
              ))}

            </motion.div>

          </div>

          {/* Next arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next sports"
            className="
              absolute -right-6 top-1/2 -translate-y-1/2
              w-12 h-12 bg-white/80 backdrop-blur-sm
              shadow-md rounded-full
              flex items-center justify-center
              hover:bg-brand-orange hover:text-white
              transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed
              z-20 border border-gray-100
            "
          >
            <ChevronRight size={24} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default SportsPlaybook;
