
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const afterSchoolFeatures = [
  'Strict Child-Safe Standards',
  'Multi-Sport Exposure',
  'Pathway to Tournaments',
  'Tracked Development',
];

const privateFeatures = [
  'Your Location, Your Time',
  'For Kids & Adults Alike',
  'Verified & Safe Professionals',
  'Personalized Pace & Focus',
  'Measurable Milestones',
];

const CoachingCard: React.FC<{
  image: string;
  title: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  delay?: number;
}> = ({ image, title, features, ctaLabel, ctaHref, delay = 0 }) => (

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}

    className="
      bg-white
      rounded-[28px]
      overflow-hidden
      shadow-lg
      flex flex-col
      flex-1
      min-w-0
    "
  >

    {/* Image section */}
    <div className="relative h-[302px] overflow-hidden shrink-0">

      <img
        src={image}
        alt={title}
        className="
          w-full h-full object-cover
          transition-transform duration-500
          hover:scale-105
        "
      />

      {/* Image title label */}
      <div className="
        absolute bottom-[18px] left-[36px]
        bg-navy
        px-7 py-3
        rounded-md
        z-10
      ">
        <h3 className="
          font-poppins
          font-bold
          text-brand-orange
          text-sm
          uppercase
          tracking-wider
        ">
          {title}
        </h3>
      </div>

    </div>

    {/* Card content */}
    <div className="
      p-9
      flex flex-col
      flex-grow
      min-h-[427px]
    ">

      {/* Features list */}
      <ul className="space-y-5 mb-8">

        {features.map((feature) => (

          <li
            key={feature}
            className="flex items-center gap-5"
          >

            {/* Circular check icon */}
            <span className="
              w-[30px] h-[30px]
              rounded-full
              border-2 border-navy
              flex items-center justify-center
              shrink-0
            ">
              <Check
                size={19}
                strokeWidth={2}
                className="text-navy"
              />
            </span>

            {/* Feature text */}
            <span className="
              font-roboto
              font-bold
              text-navy
              text-lg
              leading-snug
            ">
              {feature}
            </span>

          </li>

        ))}

      </ul>

      {/* CTA button */}
      <div className="mt-auto pt-3">

        <a
          href={ctaHref}
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            bg-brand-orange
            hover:bg-brand-orange-dark
            text-white
            font-poppins
            font-bold
            uppercase
            text-sm
            px-12
            py-4
            rounded-[9px]
            transition-all duration-300
          "
        >
          {ctaLabel}

          <ArrowRight size={18} />

        </a>

      </div>

    </div>

  </motion.div>
);


const CoachingCards: React.FC = () => {

  return (

    <section
      id="coaching"
      className="bg-navy py-16 md:py-20"
    >

      <div className="max-w-[1440px] mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-14">

          <p className="
            font-poppins
            font-semibold
            text-brand-orange
            uppercase
            tracking-[0.3em]
            text-sm
            mb-5
          ">
            TRAINING PATHWAYS
          </p>

          <h2
            className="
              font-oswald
              font-medium
              text-white
              leading-tight
            "
            style={{
              fontSize: 'clamp(2.8rem, 4vw, 4.25rem)'
            }}
          >
            How We Coach
          </h2>

        </div>

        {/* Coaching cards */}
        <div className="
          flex
          flex-col
          lg:flex-row
          gap-8 lg:gap-12
          items-stretch
        ">

          <CoachingCard
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=85"
            title="AFTER-SCHOOL SPORTS PROGRAM"
            features={afterSchoolFeatures}
            ctaLabel="EXPLORE AFTER-SCHOOL COACHING"
            ctaHref="#schools"
            delay={0}
          />

          <CoachingCard
            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=85"
            title="PRIVATE & SOCIETY COACHING"
            features={privateFeatures}
            ctaLabel="BOOK A TRIAL CLASS"
            ctaHref="#contact"
            delay={0.15}
          />

        </div>

      </div>

    </section>

  );
};

export default CoachingCards;
