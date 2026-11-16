
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
          <h2
            className="font-oswald font-semibold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          >
            Ready to Make Your First Move?
          </h2>

          <p
            className="font-roboto text-white leading-relaxed mx-auto mb-9"
            style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.5rem)',
              maxWidth: '900px',
            }}
          >
            Find the right sport, coach or programme for you and take your game to
            the next level.
          </p>

          <motion.a
            href={`${import.meta.env.BASE_URL}?page=contact`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-brand-orange font-oswald font-semibold tracking-wider px-9 py-4 rounded-md hover:bg-slate-100 transition-colors duration-300"
          >
            CONTACT US
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
