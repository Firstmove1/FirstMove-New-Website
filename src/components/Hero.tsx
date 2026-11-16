
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1800&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        minHeight: '520px',
        height: '72vh',
        maxHeight: '700px',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(9,26,51,0.90) 0%, rgba(9,26,51,0.75) 45%, rgba(9,26,51,0.38) 75%, rgba(9,26,51,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-8"
        style={{ paddingTop: '90px' }}
      >
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-oswald font-normal text-white leading-[0.95] mb-5"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          Don't Just Watch<br />
          Champions.<br />
          <span className="text-brand-orange">Become One.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-roboto font-light text-white/90 text-sm leading-relaxed max-w-md mb-7"
        >
          Raw passion needs structured discipline. Whether your child is discovering their first
          sport in school or you're mastering your technique — our structured curriculum and
          passionate coaches turn practice into the best hour of your week.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {/* For Schools */}
          <a
            href={`${import.meta.env.BASE_URL}?page=schools`}
            className="inline-flex items-center gap-3 font-poppins font-bold uppercase tracking-wider text-xs text-white px-6 py-3 transition-all duration-200"
            style={{
              background: '#FF9000',
              borderRadius: '6px',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#e07d00')}
            onMouseLeave={e => (e.currentTarget.style.background = '#FF9000')}
          >
            FOR SCHOOLS
            <ArrowRight size={18} strokeWidth={2} />
          </a>

          {/* For Private Coaching */}
          <a
            href={`${import.meta.env.BASE_URL}?page=coaching`}
            className="font-poppins font-bold uppercase tracking-wider text-xs text-white px-6 py-3 transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.45)',
              borderRadius: '6px',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')
            }
          >
            FOR PRIVATE COACHING
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
