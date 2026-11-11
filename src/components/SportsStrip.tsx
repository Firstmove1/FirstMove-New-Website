
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const SportsStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#0D1E35] text-white">

      {/* Main sports information */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 py-8">

        <div className="flex flex-col gap-5">

          {/* Main heading */}
          <h3 className="font-poppins font-bold text-[#FF9000]
            uppercase tracking-[0.22em] text-base">
            EXPERT-LED COACHING FOR
          </h3>

          {/* Sports categories */}
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">

            {/* Team Sports */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-poppins font-extrabold
                text-[#FF9000] uppercase tracking-wide text-base">
                TEAM SPORTS:
              </span>

              <span className="font-poppins font-bold
                text-[#929BAA] text-base">
                Basketball, Cricket, Football
              </span>
            </div>

            {/* Racquet Sports */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-poppins font-extrabold
                text-[#FF9000] uppercase tracking-wide text-base">
                RACQUET SPORTS:
              </span>

              <span className="font-poppins font-bold
                text-[#929BAA] text-base">
                Badminton, Padel, Pickleball, Squash,
                Table Tennis, Tennis
              </span>
            </div>

            {/* Chess and Skating */}
            <div>
              <span className="font-poppins font-extrabold
                text-[#FF9000] uppercase tracking-wide text-base">
                CHESS &amp; SKATING
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/25" />

      {/* Safety and trust indicators */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 py-5">

        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">

          <ShieldCheck
            size={21}
            strokeWidth={1.7}
            className="text-[#FF9000] flex-shrink-0"
          />

          <span className="font-poppins text-[#929BAA]
            uppercase tracking-[0.12em] text-sm">
            CERTIFIED ON-CAMPUS COACHES
          </span>

          <span className="text-[#929BAA]">·</span>

          <span className="font-poppins text-[#929BAA]
            uppercase tracking-[0.12em] text-sm">
            STRUCTURED SAFETY STANDARDS
          </span>

          <span className="text-[#929BAA]">·</span>

          <span className="font-poppins text-[#929BAA]
            uppercase tracking-[0.12em] text-sm">
            BACKGROUND-CHECKED PROFESSIONALS
          </span>

        </div>
      </div>

    </section>
  );
};

export default SportsStrip;
