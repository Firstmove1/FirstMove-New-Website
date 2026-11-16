
import React from 'react';
import { motion } from 'framer-motion';
import {
    Lightbulb,
    Building2,
    Settings,
    Megaphone,
} from 'lucide-react';

const pillars = [
    {
        number: '01',
        title: 'CONCEPTUALISE',
        description:
            'Developing the vision, strategy and planning for successful sports venues.',
        icon: Lightbulb,
    },
    {
        number: '02',
        title: 'BUILD',
        description:
            'Creating functional, modern sporting spaces designed around their users.',
        icon: Building2,
    },
    {
        number: '03',
        title: 'OPERATE',
        description:
            'Managing daily operations to deliver smooth and efficient venue experiences.',
        icon: Settings,
    },
    {
        number: '04',
        title: 'MARKET',
        description:
            'Building visibility, attracting audiences and growing venue engagement.',
        icon: Megaphone,
    },
];

const SportsVenueManagement: React.FC = () => {
    return (
        <section className="bg-[#172B4D] py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="font-poppins font-semibold text-brand-orange uppercase tracking-[0.25em] text-sm mb-5">
                        BEYOND THE GAME
                    </p>

                    <h2 className="font-oswald font-semibold text-white text-4xl md:text-5xl mb-5">
                        Sports Venue Management
                    </h2>

                    <p className="font-roboto text-white/75 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        From conceptualisation to operations, we create and grow
                        sporting destinations through end-to-end venue solutions.
                    </p>
                </motion.div>

                {/* Image and Content */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* Venue Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden h-[300px] md:h-[430px]">
                            <img
                                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=85"
                                alt="Modern sports stadium and playing field"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="absolute -bottom-5 -right-3 md:-right-5 bg-brand-orange text-white rounded-xl px-6 py-5 shadow-xl">
                            <p className="font-oswald text-3xl font-semibold">
                                360°
                            </p>
                            <p className="font-poppins text-xs uppercase tracking-wider">
                                Venue Solutions
                            </p>
                        </div>
                    </motion.div>

                    {/* Four Pillars */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-5 lg:mt-0">
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
                                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <Icon
                                            size={30}
                                            strokeWidth={1.6}
                                            className="text-brand-orange"
                                        />

                                        <span className="font-oswald text-3xl text-white/20">
                                            {pillar.number}
                                        </span>
                                    </div>

                                    <h3 className="font-oswald text-white text-xl font-semibold mb-3">
                                        {pillar.title}
                                    </h3>

                                    <p className="font-roboto text-white/65 text-sm leading-relaxed">
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
