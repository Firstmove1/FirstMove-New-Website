
import React from 'react';
import { motion } from 'framer-motion';
import { School, User, Dumbbell, Trophy, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  School: <School size={34} strokeWidth={1.6} />,
  User: <User size={34} strokeWidth={1.6} />,
  Dumbbell: <Dumbbell size={34} strokeWidth={1.6} />,
  Trophy: <Trophy size={34} strokeWidth={1.6} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#F7F8FA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-poppins font-semibold text-brand-orange uppercase tracking-[0.25em] text-sm mb-6">
            WHAT WE OFFER
          </p>

          <h2 className="font-oswald font-semibold text-navy text-5xl">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              className="relative bg-white rounded-[20px] p-9 min-h-[440px] flex flex-col overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >

              {/* Service Number */}
              <span className="absolute top-10 right-8 font-oswald font-semibold text-[56px] text-[#F0F2F4] leading-none select-none">
                {String(service.id).padStart(2, '0')}
              </span>

              {/* Icon Box */}
              <div className="w-16 h-16 border-2 border-[#F0F2F4] flex items-center justify-center mb-8 text-black">
                {iconMap[service.icon]}
              </div>

              {/* Service Title */}
              <h3 className="font-oswald font-semibold text-navy text-[23px] leading-tight mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-roboto text-[17px] text-gray-800 leading-[1.7] mb-7">
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 text-brand-orange font-poppins font-semibold text-sm uppercase group-hover:gap-4 transition-all duration-300"
              >
                LEARN MORE
                <ArrowRight size={16} />
              </a>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
