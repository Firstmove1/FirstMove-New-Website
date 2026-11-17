
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: '560px',
        height: '78vh',
        maxHeight: '760px',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(9,26,51,0.90) 0%, rgba(9,26,51,0.76) 45%, rgba(9,26,51,0.38) 75%, rgba(9,26,51,0.16) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-6 pt-24 pb-10">

        {/* Intro label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-poppins font-medium text-brand-orange text-sm md:text-base tracking-wide mb-5"
        >
          Inspiring movement. Building confidence.
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-poppins font-medium text-white leading-[1.25] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3.1rem)' }}
        >
          Find Your Game.
          <br />
          Build Your Future.
          <br />
          <span className="text-brand-orange font-semibold">
            Make Your First Move.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-poppins font-normal text-white/90 text-sm md:text-base leading-[1.85] max-w-xl mb-9"
        >
          Discover opportunities to learn, train and grow through sport.
          From structured school programmes to personalised coaching,
          FirstMove helps children and adults build skills, confidence
          and a lifelong love for an active lifestyle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          {/* Schools */}
          <a
            href={`${import.meta.env.BASE_URL}?page=schools`}
            className="inline-flex items-center gap-3 font-poppins font-semibold text-sm text-white px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: '#FF9000',
              borderRadius: '6px',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = '#e07d00')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = '#FF9000')
            }
          >
            For Schools
            <ArrowRight size={18} />
          </a>

          {/* Private Coaching */}
          <a
            href={`${import.meta.env.BASE_URL}?page=coaching`}
            className="inline-flex items-center gap-3 font-poppins font-semibold text-sm text-white px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              borderRadius: '6px',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')
            }
          >
            Private Coaching
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
