
import React from 'react';
import { motion } from 'framer-motion';
import { NotebookPen, ChartNoAxesCombined, Users } from 'lucide-react';

const differenceCards = [
  {
    id: '01',
    title: 'Structured Training Programmes',
    desc: 'Every session follows a planned, age-appropriate training programme. From foundational skills to advanced techniques, our structured approach helps participants improve with purpose and consistency.',
    icon: <NotebookPen size={38} strokeWidth={1.3} />,
  },
  {
    id: '02',
    title: 'Progress That You Can See',
    desc: 'We believe improvement should be measurable. Regular assessments and constructive feedback help participants and parents understand progress, recognise strengths and identify areas for development.',
    icon: <ChartNoAxesCombined size={38} strokeWidth={1.3} />,
  },
  {
    id: '03',
    title: 'More Than Just Sports Skills',
    desc: 'Our coaches encourage teamwork, discipline, confidence and resilience alongside sporting ability. We aim to develop individuals who carry these values beyond the playing field.',
    icon: <Users size={38} strokeWidth={1.3} />,
  },
];

const StructuredDifference: React.FC = () => {
  return (
    <section className="w-full bg-[#0B1B33] py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Heading */}
        <div className="w-full max-w-4xl mx-auto text-center mb-14">
          <p className="font-poppins font-medium text-brand-orange text-sm mb-5 tracking-wide">
            THE FIRSTMOVE APPROACH
          </p>

          <h2 className="font-poppins font-semibold text-white text-3xl md:text-4xl lg:text-[46px] leading-[1.35] mb-6">
            <span className="block mb-2">
              Training With Purpose.
            </span>
            <span className="block">
              Progress With Confidence.
            </span>
          </h2>

          <p className="font-poppins text-white/65 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We combine structured coaching, consistent feedback and personal
            development to make every sporting experience more meaningful.
          </p>
        </div>

        {/* Difference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {differenceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="relative w-full min-w-0 min-h-[370px] rounded-[20px] border border-white/15 bg-[#122139] p-8 lg:p-9 flex flex-col hover:border-brand-orange/70 hover:bg-[#172943] transition-all duration-300"
            >
              {/* Icon and Number */}
              <div className="flex items-center justify-between mb-9">
                <div className="w-[70px] h-[70px] flex-shrink-0 rounded-xl bg-[#F5F3EF] text-[#0B1B33] flex items-center justify-center">
                  {card.icon}
                </div>

                <span className="font-poppins font-bold text-6xl lg:text-[82px] leading-none text-white/[0.06] select-none">
                  {card.id}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1">
                <h3 className="font-poppins font-semibold text-white text-xl lg:text-[21px] leading-snug mb-4">
                  {card.title}
                </h3>

                <p className="font-poppins text-white/65 text-sm md:text-[15px] leading-[1.85]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StructuredDifference;
