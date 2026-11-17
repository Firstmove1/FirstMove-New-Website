
import React from 'react';

const sportsCategories = [
  {
    title: 'Core Sports',
    sports: 'Swimming, Gymnastics, Athletics',
  },
  {
    title: 'Team Sports',
    sports: 'Basketball, Cricket, Football',
  },
  {
    title: 'Racquet Sports',
    sports: 'Badminton, Padel, Pickleball, Squash, Table Tennis, Tennis',
  },
  {
    title: 'Chess & Skating',
    sports: 'Chess, Skating',
  },
];

const SportsStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#0D1E35] text-white">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 py-10">

        <h3 className="font-poppins font-bold text-[#FF9000] text-base mb-8">
          Expert-led coaching for
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">

          {sportsCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3 min-w-0">

              <h4 className="font-poppins font-semibold text-[#FF9000] text-base">
                {category.title}
              </h4>

              <p className="font-poppins font-normal text-[#929BAA] text-base leading-relaxed">
                {category.sports}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SportsStrip;
