
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="w-full min-h-[400px] bg-brand-orange flex items-center justify-center text-center px-6 py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center text-center"
        >
          {/* Eyebrow Text */}
          <p className="w-full font-poppins font-normal text-white/80 text-xs md:text-sm uppercase tracking-[normal] [word-spacing:normal] mb-5 text-center">
            Your Sporting Journey Starts Here
          </p>

          {/* Main Heading */}
          <h2
            className="w-full font-poppins font-bold text-white leading-tight mb-6 text-center"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.7rem)' }}
          >
            Ready to Make Your First Move?
          </h2>

          {/* Description */}
          <p
            className="w-full font-poppins text-white/90 leading-relaxed mb-9 text-center mx-auto"
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
              maxWidth: '700px',
            }}
          >
            Whether you're looking for a school sports programme or
            personalised coaching, we're here to help you get started.
          </p>

          {/* CTA Button */}
          <motion.a
            href={`${import.meta.env.BASE_URL}?page=contact`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 bg-white text-navy hover:bg-navy hover:text-white font-poppins font-semibold text-sm px-9 py-4 rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
