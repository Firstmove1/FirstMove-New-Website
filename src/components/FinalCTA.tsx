
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section
      className="bg-brand-orange flex items-center justify-center text-center"
      style={{ minHeight: '400px', padding: '80px 24px' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-poppins font-semibold text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] mb-5">
            Your Sporting Journey Starts Here
          </p>

          <h2
            className="font-poppins font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.7rem)' }}
          >
            Ready to Make Your First Move?
          </h2>

          <p
            className="font-poppins text-white/90 leading-relaxed mx-auto mb-9"
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
              maxWidth: '700px',
            }}
          >
            Whether you're looking for a school sports programme or
            personalised coaching, we're here to help you get started.
          </p>

          <motion.a
            href={`${import.meta.env.BASE_URL}?page=contact`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-brand-orange font-poppins font-semibold text-sm px-9 py-4 rounded-md hover:bg-slate-100 transition-colors duration-300"
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
