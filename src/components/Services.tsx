
import React from 'react';
import { motion } from 'framer-motion';
import { School, User, CalendarDays } from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  School: <School size={34} strokeWidth={1.6} />,
  User: <User size={34} strokeWidth={1.6} />,
  Calendar: <CalendarDays size={34} strokeWidth={1.6} />,
};

const Services: React.FC = () => {
  return (
    <>
      <section id="services" className="bg-[#F7F8FA] py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="font-poppins font-medium text-brand-orange text-sm mb-4">
              What We Do
            </p>

            <h2 className="font-poppins font-semibold text-navy text-3xl md:text-4xl">
              Our Expertise
            </h2>

            <p className="font-poppins text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-relaxed">
              From school programmes to personal coaching and community events,
              we create opportunities for everyone to experience the benefits of sport.
            </p>
          </div>

          {/* All three service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-[20px] p-8 md:p-9 min-h-[350px] flex flex-col overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="absolute top-8 right-8 font-poppins font-semibold text-5xl text-[#F0F2F4] leading-none select-none">
                  {service.id}
                </span>

                <div className="w-16 h-16 rounded-xl bg-[#F7F8FA] flex items-center justify-center mb-8 text-navy">
                  {iconMap[service.icon]}
                </div>

                <h3 className="font-poppins font-semibold text-navy text-xl leading-snug mb-4">
                  {service.title}
                </h3>

                <p className="font-poppins text-sm md:text-base text-gray-600 leading-[1.8]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
