
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Heart size={28} strokeWidth={1.5} className="text-brand-orange" />,
    title: 'PHYSICAL VITALITY',
    desc: 'Build real strength, lasting endurance, and a cardiovascular system that works for you every day.',
  },
  {
    icon: <Brain size={28} strokeWidth={1.5} className="text-brand-orange" />,
    title: 'MENTAL CLARITY',
    desc: 'Step onto the field and leave stress behind. Sports sharpen your focus and brighten your outlook.',
  },
  {
    icon: <Users size={28} strokeWidth={1.5} className="text-brand-orange" />,
    title: 'BELONGING & CAMARADERIE',
    desc: 'Find your people. Sport creates bonds that go beyond the game — friendships forged through effort and shared goals.',
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} className="text-brand-orange" />,
    title: 'RESILIENCE & GROWTH',
    desc: 'Every loss is a lesson. Every win builds confidence. Sport teaches you how to keep moving forward.',
  },
];

const SportsBenefits: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-5">
              WHY SPORT MATTERS
            </p>

            <h2 className="font-oswald font-bold text-navy text-4xl lg:text-[40px] leading-tight mb-5">
              The Benefits of Playing Sports.
            </h2>

            <p className="font-roboto text-black text-base lg:text-[17px] leading-relaxed mb-10 max-w-[620px]">
              Sport is not just physical — it is one of the most powerful tools for
              building a better version of yourself. At FirstMove, we create the
              environment where those benefits become inevitable.
            </p>

            {/* BENEFITS LIST */}
            <div className="space-y-7">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* CIRCULAR ICON */}
                  <div
                    className="flex-shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(255,144,0,0.09)',
                    }}
                  >
                    {benefit.icon}
                  </div>

                  {/* BENEFIT TEXT */}
                  <div className="pt-0.5">
                    <h4 className="font-poppins font-bold text-black text-sm uppercase mb-2">
                      {benefit.title}
                    </h4>

                    <p className="font-roboto text-gray-700 text-sm lg:text-[15px] leading-relaxed max-w-[530px]">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full h-[420px] lg:h-[560px] xl:h-[672px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=85"
              alt="Athletes playing sports"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SportsBenefits;
