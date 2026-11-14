
import React from 'react';

const SportsStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#0D1E35] text-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 py-8">

        <h3 className="font-poppins font-bold text-[#FF9000]
          uppercase tracking-[0.22em] text-base mb-8">
          EXPERT-LED COACHING FOR
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Core Sports */}
          <div className="flex flex-col gap-3 min-w-0">
            <span className="font-poppins font-extrabold text-[#FF9000]
              uppercase tracking-wide text-base">
              CORE SPORTS
            </span>

            <div className="overflow-hidden whitespace-nowrap">
              <span className="sports-marquee inline-block font-poppins
                font-light text-[#929BAA] text-base">
                Swimming, Gymnastics, Athletics
              </span>
            </div>
          </div>

          {/* Team Sports */}
          <div className="flex flex-col gap-3 min-w-0">
            <span className="font-poppins font-extrabold text-[#FF9000]
              uppercase tracking-wide text-base">
              TEAM SPORTS
            </span>

            <div className="overflow-hidden whitespace-nowrap">
              <span className="sports-marquee inline-block font-poppins
                font-light text-[#929BAA] text-base">
                Basketball, Cricket, Football
              </span>
            </div>
          </div>

          {/* Racquet Sports */}
          <div className="flex flex-col gap-3 min-w-0">
            <span className="font-poppins font-extrabold text-[#FF9000]
              uppercase tracking-wide text-base">
              RACQUET SPORTS
            </span>

            <div className="overflow-hidden whitespace-nowrap">
              <span className="sports-marquee inline-block font-poppins
                font-light text-[#929BAA] text-base">
                Badminton, Padel, Pickleball, Squash, Table Tennis, Tennis
              </span>
            </div>
          </div>

          {/* Chess and Skating */}
          <div className="flex flex-col gap-3 min-w-0">
            <span className="font-poppins font-extrabold text-[#FF9000]
              uppercase tracking-wide text-base">
              CHESS &amp; SKATING
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SportsStrip;
