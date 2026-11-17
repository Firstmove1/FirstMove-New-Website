
import React from 'react';
import { motion } from 'framer-motion';
import {
    BadgeCheck,
    ClipboardCheck,
    MapPin,
    ChartNoAxesCombined,
} from 'lucide-react';

const reasons = [
    {
        icon: <BadgeCheck size={30} strokeWidth={1.6} />,
        title: 'Expert & Verified Coaches',
        description:
            'Train with experienced, background-verified coaches who bring professional expertise and proven coaching methods. Enjoy quality training with individual attention at every session.',
    },
    {
        icon: <ClipboardCheck size={30} strokeWidth={1.6} />,
        title: 'Personalised Coaching Programmes',
        description:
            "Every session is tailored to your age, skill level, fitness goals, and learning pace. Whether you're a beginner or an advanced player, we design programmes around your goals.",
    },
    {
        icon: <MapPin size={30} strokeWidth={1.6} />,
        title: 'Flexible Timings & Locations',
        description:
            'Train at your preferred time and location, whether at home, in your community, or at a nearby sports facility. Enjoy the convenience of expert coaching without the hassle of travelling.',
    },
    {
        icon: <ChartNoAxesCombined size={30} strokeWidth={1.6} />,
        title: 'Structured Training & Progress Tracking',
        description:
            'Follow a well-defined, age-appropriate curriculum with clear learning milestones and measurable goals. Regular assessments and progress reports help track improvement and identify areas for development.',
    },
];

const WhyFirstMove: React.FC = () => {
    return (
        <section className="bg-[#F7F8FA] py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="font-poppins font-medium text-brand-orange text-sm mb-4">
                        The FirstMove Advantage
                    </p>

                    <h2 className="font-poppins font-semibold text-navy text-3xl md:text-4xl mb-5">
                        Why FirstMove?
                    </h2>

                    <p className="font-poppins text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        We bring together experienced coaches, personalised programmes
                        and structured training to make sports accessible, enjoyable
                        and rewarding for everyone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full bg-white rounded-2xl p-8 lg:p-9 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#FFF1E3] text-brand-orange flex items-center justify-center mb-6">
                                {reason.icon}
                            </div>

                            <h3 className="font-poppins font-semibold text-navy text-xl md:text-2xl mb-4">
                                {reason.title}
                            </h3>

                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-[1.8]">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyFirstMove;
