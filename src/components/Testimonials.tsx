
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-light py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-5">
            USER TESTIMONIALS
          </p>

          <h2 className="font-oswald font-bold text-navy text-5xl">
            What They Speak About Us
          </h2>
        </div>

        {/* Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14">

          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex items-center gap-8 lg:gap-10 ${index === 0
                  ? 'md:border-r md:border-gray-400 md:pr-10'
                  : ''
                }`}
            >

              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-36 h-36 lg:w-64 lg:h-64 rounded-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 min-w-0">

                {/* Name */}
                <h3 className="font-oswald font-semibold text-brand-orange text-3xl lg:text-4xl mb-1">
                  {t.name}
                </h3>

                {/* Time */}
                <p className="font-roboto text-gray-400 text-base lg:text-lg mb-5">
                  {t.timeAgo}
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-2 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={34}
                      strokeWidth={0}
                      fill={i < t.rating ? '#FF9000' : '#999999'}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="font-roboto text-black text-base lg:text-lg leading-relaxed">
                  "{t.review}"
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
