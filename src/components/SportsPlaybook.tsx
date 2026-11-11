
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

  return (
    <section id="sports" className="bg-white py-16">

      {/* Main container */}
      <div className="max-w-[1800px] mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-12">

          <p className="font-poppins font-semibold text-brand-orange uppercase tracking-[0.25em] text-sm mb-4">
            EXPLORE OUR SPORTS
          </p>

          <h2
            className="font-oswald font-bold text-navy leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)' }}
          >
            Sports Playbook
          </h2>

        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous sports"
            className="
              absolute -left-6 top-1/2 -translate-y-1/2
              w-12 h-12
              bg-white/80 backdrop-blur-sm
              shadow-md rounded-full
              flex items-center justify-center
              hover:bg-brand-orange hover:text-white
              transition-all duration-300
              disabled:opacity-30
              disabled:cursor-not-allowed
              z-20
              border border-gray-100
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards viewport */}
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

                <motion.div
                  key={sport.id}
                  className="cursor-pointer group flex-shrink-0"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${(20 * (visibleCards - 1)) / visibleCards}px)`
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >

                  {/* Sport card */}
                  <div className="
                    relative rounded-xl overflow-hidden
                    shadow-sm hover:shadow-xl
                    transition-shadow duration-300
                  ">

                    {/* Background image */}
                    <div
                      className="relative overflow-hidden"
                      style={{ height: '260px' }}
                    >

                      <img
                        src={sport.image}
                        alt={sport.name}
                        className="
                          w-full h-full object-cover
                          group-hover:scale-110
                          transition-transform duration-500
                        "
                      />

                      {/* Dark gradient */}
                      <div className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-navy/90
                        via-navy/25
                        to-transparent
                      " />

                      {/* Card content */}
                      <div className="
                        absolute bottom-5 left-5 right-5
                      ">

                        <span className="
                          text-brand-orange
                          font-poppins font-bold
                          text-base uppercase
                          tracking-widest
                          block mb-1
                        ">
                          {sport.category}
                        </span>

                        <h3 className="
                          text-white
                          font-oswald font-bold
                          text-3xl leading-tight
                        ">
                          {sport.name}
                        </h3>

                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next sports"
            className="
              absolute -right-6 top-1/2 -translate-y-1/2
              w-12 h-12
              bg-white/80 backdrop-blur-sm
              shadow-md rounded-full
              flex items-center justify-center
              hover:bg-brand-orange hover:text-white
              transition-all duration-300
              disabled:opacity-30
              disabled:cursor-not-allowed
              z-20
              border border-gray-100
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
