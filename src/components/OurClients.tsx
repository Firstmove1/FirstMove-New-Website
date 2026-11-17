
import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    {
        name: 'JBCN',
        detail: '3 Locations',
        type: 'logo',
    },
    {
        name: 'Bombay Orthopaedic Society',
        detail: 'Institutional Association',
        type: 'text',
    },
    {
        name: 'Systematix Group',
        detail: 'Corporate Association',
        type: 'text',
    },
];

const OurClients: React.FC = () => {
    return (
        <section className="bg-white py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="font-poppins font-medium text-brand-orange text-sm mb-5">
                        Our associations
                    </p>

                    <h2 className="font-poppins font-semibold text-navy text-3xl md:text-4xl lg:text-5xl">
                        Trusted by Our Partners
                    </h2>

                    <p className="font-poppins text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-5 leading-relaxed">
                        Building meaningful relationships with organisations
                        that share our commitment to sports, development and community.
                    </p>
                </div>

                {/* Client Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">

                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12,
                            }}
                            className="min-h-[200px] flex flex-col items-center justify-center text-center px-7 py-9 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover:shadow-md hover:bg-white transition-all duration-300"
                        >
                            {client.type === 'logo' ? (
                                <img
                                    src={`${import.meta.env.BASE_URL}images/clients/jbcn.webp`}
                                    alt="JBCN International School"
                                    className="w-full max-w-[260px] h-[90px] object-contain"
                                />
                            ) : (
                                <h3 className="font-poppins font-semibold text-navy text-xl md:text-2xl leading-snug max-w-[260px]">
                                    {client.name}
                                </h3>
                            )}

                            {client.detail && (
                                <p className="font-poppins text-gray-500 text-xs md:text-sm mt-4 tracking-wide">
                                    {client.detail}
                                </p>
                            )}
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default OurClients;
