
import React from 'react';
import { motion } from 'framer-motion';
import { NotebookPen, Accessibility, Users } from 'lucide-react';

const differenceCards = [
  {
    id: '01',
    title: 'Curriculum Over Guesswork',
    desc: 'No random scrimmage matches or time-filling drills. Every session follows an age-stratified, phased syllabus designed to systematically build technical mastery and athletic IQ.',
    icon: <NotebookPen size={38} strokeWidth={1.3} />,
  },
  {
    id: '02',
    title: 'Performance Tracking That Counts',
    desc: 'We eliminate vague feedback. Parents and athletes receive milestone assessments covering speed, stamina, technique retention, and in-game decision-making.',
    icon: <Accessibility size={38} strokeWidth={1.3} />,
  },
  {
    id: '03',
    title: 'Mentorship That Builds Character',
    desc: "Our coaches don't just train technique — they instill grit, focus, humility in victory, and resilience in defeat, building skills that outlast the final whistle.",
    icon: <Users size={38} strokeWidth={1.3} />,
  },
];

const StructuredDifference: React.FC = () => {
  return (
    <section className="bg-[#0B1B33] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-14">
          <p className="font-poppins font-semibold text-brand-orange uppercase tracking-[0.25em] text-sm mb-7">
            THE STRUCTURED DIFFERENCE
          </p>

          <h2 className="font-oswald font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-[1.12] mb-5">
            What Separates a Casual Player
            <br />
            from a Champion?
          </h2>

          <p className="font-roboto text-white/55 text-base md:text-lg">
            Natural talent gets you noticed. Structured training gives you the edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differenceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="relative overflow-hidden rounded-[20px] border border-brand-orange bg-[#122139] p-8 lg:p-9 min-h-[370px] group hover:bg-[#172943] transition-colors duration-300"
            >

              <div className="relative flex items-center justify-between mb-8">
                <div className="w-[74px] h-[74px] rounded-[9px] bg-[#F5F3EF] text-[#0B1B33] flex items-center justify-center">
                  {card.icon}
                </div>

                <span className="font-oswald font-bold text-[90px] leading-none text-white/[0.045] select-none">
                  {card.id}
                </span>
              </div>

              <h3 className="relative z-10 font-oswald font-semibold text-white text-2xl lg:text-[25px] leading-tight mb-4">
                {card.title}
              </h3>

              <p className="relative z-10 font-roboto font-medium text-white/55 text-base leading-[1.85]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructuredDifference;
