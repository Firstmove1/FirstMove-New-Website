
import React from 'react';
import { motion } from 'framer-motion';
import {
    Lightbulb,
    Building2,
    Settings,
    Megaphone,
} from 'lucide-react';

const sportMngtImage =
    'https://images.unsplash.com/photo-1686067388146-6fe2371f8eaa?auto=format&fit=crop&w=1800&q=85';

const pillars = [
    {
        number: '01',
        title: 'Conceptualise',
        description:
            'Turning ideas into actionable plans through strategic planning, feasibility assessment and business development.',
        icon: Lightbulb,
    },
    {
        number: '02',
        title: 'Build',
        description:
            'Developing and creating modern sports facilities with the right infrastructure, design and resources.',
        icon: Building2,
    },
    {
        number: '03',
        title: 'Operate',
        description:
            'Overseeing facility management, daily operations, staffing and services to ensure efficient performance.',
        icon: Settings,
    },
    {
        number: '04',
        title: 'Market',
        description:
            'Strengthening brand presence, promoting facilities, attracting customers and building lasting community engagement.',
        icon: Megaphone,
    },
];

const SportsVenueManagement: React.FC = () => {
    return (
        <section className="bg-[#172B4D] py-16 md:py-20 overflow-hidden">
            <div className="max-w-[1380px] mx-auto px-6">

                {/* SECTION HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="font-poppins font-medium text-brand-orange text-sm mb-5">
                        Beyond the game
                    </p>

                    <h2 className="font-poppins font-semibold text-white text-3xl md:text-4xl mb-5">
                        Sports Facility Management
                    </h2>

                    <p className="font-poppins text-white/75 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        We provide end-to-end sports venue management solutions,
                        helping transform concepts into successful sporting
                        destinations. From strategic planning and facility
                        development to operations and marketing, we support
                        every stage of a venue's journey.
                    </p>
                </motion.div>

                {/* IMAGE AND FOUR PILLARS */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-8 lg:gap-10 items-stretch">

                    {/* LARGER VENUE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative h-[360px] sm:h-[420px] lg:h-[484px] w-full"
                    >
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={sportMngtImage}
                                alt="People playing tennis at a sports facility"
                                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                            />
                        </div>

                        {/* VENUE SOLUTIONS BADGE */}
                        <div className="absolute -bottom-4 right-4 md:-right-4 z-10 bg-brand-orange text-white rounded-xl px-6 py-5 shadow-xl">
                            <p className="font-poppins text-3xl font-semibold">
                                360°
                            </p>
                            <p className="font-poppins text-xs">
                                Venue solutions
                            </p>
                        </div>
                    </motion.div>

                    {/* FOUR PILLARS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:h-[484px] lg:grid-rows-2">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;

                            return (
                                <motion.div
                                    key={pillar.number}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 min-h-[220px] h-full flex flex-col hover:bg-white/10 hover:border-brand-orange/40 transition duration-300"
                                >
                                    <div className="flex items-center justify-between mb-5">
                                        <Icon
                                            size={30}
                                            strokeWidth={1.6}
                                            className="text-brand-orange"
                                        />

                                        <span className="font-poppins text-3xl font-medium text-white/20">
                                            {pillar.number}
                                        </span>
                                    </div>

                                    <h3 className="font-poppins text-white text-lg font-semibold mb-3">
                                        {pillar.title}
                                    </h3>

                                    <p className="font-poppins text-white/65 text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SportsVenueManagement;
