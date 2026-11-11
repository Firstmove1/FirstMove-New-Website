
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section
      className="bg-brand-orange flex items-center justify-center text-center"
      style={{ minHeight: '420px', padding: '80px 24px' }}
    >
      <div className="w-full max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Main Heading */}
          <h2
            className="font-oswald font-semibold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          >
            Ready to Make Your First Move?
          </h2>

          {/* Description */}
          <p
            className="font-roboto text-white leading-relaxed mx-auto mb-12"
            style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.5rem)',
              maxWidth: '900px',
            }}
          >
            Find the right sport, coach or programme for you and take your game to
            the next level.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-8">

            <a
              href="#schools"
              className="flex items-center justify-center bg-white text-black font-poppins font-bold uppercase text-sm hover:bg-gray-100 transition-all duration-300"
              style={{
                width: '270px',
                height: '72px',
                borderRadius: '11px',
              }}
            >
              GET STARTED
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center bg-transparent text-white font-poppins font-bold uppercase text-sm border border-white/80 hover:bg-white/10 transition-all duration-300"
              style={{
                width: '270px',
                height: '72px',
                borderRadius: '11px',
              }}
            >
              CONTACT US
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
