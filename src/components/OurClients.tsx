
import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    {
        name: 'JBCN',
        detail: '3 Locations',
    },
    {
        name: 'Bombay Orthopaedic Society',
        detail: '',
    },
    {
        name: 'Systematix Group',
        detail: '',
    },
];

const OurClients: React.FC = () => {
    return (
        <section className="bg-white py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <p className="section-label mb-5">
                        OUR ASSOCIATIONS
                    </p>

                    <h2 className="font-oswald font-bold text-navy text-5xl">
                        Our Clients
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="min-h-[150px] flex flex-col items-center justify-center text-center px-6 py-8 border border-gray-100 rounded-xl bg-[#FAFAFA]"
                        >
                            <h3 className="font-oswald font-semibold text-navy text-2xl md:text-3xl">
                                {client.name}
                            </h3>

                            {client.detail && (
                                <p className="font-roboto text-gray-500 text-sm mt-2">
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
