
import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy, Users, Medal, ChartNoAxesColumnIncreasing,
    Target, Lightbulb, Compass, Award, ArrowRight,
    GraduationCap
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const benefits = [
    {
        icon: Medal,
        title: 'Expert Coaches',
        description: 'Trained coaches who provide structured sports training.'
    },
    {
        icon: Users,
        title: 'Build a Team',
        description: 'Help students develop together and create stronger school teams.'
    },
    {
        icon: Trophy,
        title: 'Tournaments',
        description: 'Support students through competitive sporting opportunities.'
    },
    {
        icon: ChartNoAxesColumnIncreasing,
        title: 'Evaluation',
        description: 'Track student development and identify areas for improvement.'
    },
    {
        icon: Target,
        title: 'Results',
        description: 'Monitor progress and create a clear development journey.'
    }
];

const sports = [
    { name: 'Badminton', icon: '🏸' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Chess', icon: '♟' },
    { name: 'Cricket', icon: '🏏' },
    { name: 'Football', icon: '⚽' },
    { name: 'Swimming', icon: '🏊' },
    { name: 'Table Tennis', icon: '🏓' },
    { name: 'Tennis', icon: '🎾' }
];

const guidance = [
    {
        icon: Lightbulb,
        title: 'Understanding Student Interests',
        description: 'Discover individual interests and encourage students to explore sports they genuinely enjoy.'
    },
    {
        icon: Compass,
        title: 'Identifying Suitable Sports',
        description: 'Explore different sporting disciplines and find the right opportunities for every student.'
    },
    {
        icon: Target,
        title: 'Guidance Based on Strengths',
        description: 'Understand student abilities and create personalised sporting development pathways.'
    },
    {
        icon: Award,
        title: 'Exploring Sporting Opportunities',
        description: 'Connect students with opportunities to develop, participate and compete.'
    }
];

const SchoolSectionHeading = ({
    label,
    title,
    light = false
}: {
    label: string;
    title: string;
    light?: boolean;
}) => (
    <div className="text-center mb-12">
        <span className="section-label">{label}</span>
        <h2
            className={`font-oswald ${light ? 'text-white' : 'text-navy'
                } text-3xl sm:text-4xl md:text-5xl`}
        >
            {title}
        </h2>
    </div>
);

const Schools: React.FC = () => {
    return (
        <>
            <Navbar />

            <main className="pt-14 md:pt-24">

                {/* HERO */}
                <section className="relative min-h-[580px] md:min-h-[620px] flex items-center overflow-hidden bg-navy">

                    <img
                        src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2000&q=85"
                        alt="Students participating in school sports"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/25" />

                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl"
                        >
                            <span className="font-poppins text-brand-orange text-xs font-bold tracking-[0.3em] uppercase">
                                For Schools
                            </span>

                            <h1 className="font-oswald text-white text-5xl sm:text-6xl md:text-7xl leading-[1.12] mt-5 mb-6">
                                Make The Next
                                <br />
                                Sports Star
                                <br />
                                <span className="text-brand-orange">
                                    From Your School.
                                </span>
                            </h1>

                            <p className="text-white/85 font-roboto text-base md:text-lg leading-relaxed max-w-xl mb-9">
                                Partner with FirstMove to provide professional sports coaching,
                                structured curriculums, and a clear development pathway for
                                your students.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#school-demo" className="btn-orange">
                                    Book a Free Demo <ArrowRight className="inline ml-2" size={16} />
                                </a>

                                <a
                                    href={`${import.meta.env.BASE_URL}?page=coaching`}
                                    className="btn-ghost"
                                >
                                    For Private Coaching
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* EXPERT SPORTS STRIP */}
                <section className="bg-navy text-white py-8 border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="section-label mb-5">Expert-led coaching for</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
                            <p>
                                <span className="text-brand-orange font-bold">TEAM SPORTS:</span>
                                <span className="text-white/75 ml-2">Basketball, Cricket, Football</span>
                            </p>
                            <p>
                                <span className="text-brand-orange font-bold">RACQUET SPORTS:</span>
                                <span className="text-white/75 ml-2">Badminton, Padel, Pickleball, Squash, Table Tennis, Tennis</span>
                            </p>
                            <p>
                                <span className="text-brand-orange font-bold">CHESS & SKATING</span>
                            </p>
                        </div>

                        <p className="text-white/55 text-[10px] sm:text-xs uppercase tracking-widest mt-8 leading-relaxed">
                            Certified on-campus coaches · Structured safety standards · Background-checked professionals
                        </p>
                    </div>
                </section>

                {/* WHY FIRSTMOVE */}
                <section className="bg-[#F8F8F9] py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Why FirstMove"
                            title="School Sports Program"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {benefits.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-orange-50 text-brand-orange flex items-center justify-center mx-auto mb-5">
                                            <Icon size={24} />
                                        </div>

                                        <h3 className="font-oswald text-xl text-navy mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="font-roboto text-gray-500 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SPORTS WE OFFER */}
                <section className="bg-navy py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Explore Our Sports"
                            title="Sports We Offer"
                            light
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                            {sports.map((sport, index) => (
                                <motion.div
                                    key={sport.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    className="bg-white rounded-xl p-4 flex flex-col items-center justify-center min-h-[125px] hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <span className="font-poppins text-[9px] sm:text-[10px] font-bold text-brand-orange tracking-wider uppercase text-center mb-4">
                                        {sport.name}
                                    </span>

                                    <span className="text-4xl" role="img" aria-label={sport.name}>
                                        {sport.icon}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SPORTS COUNSELLING */}
                <section className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        <div>
                            <span className="section-label">Guidance & Development</span>

                            <h2 className="font-oswald text-navy text-4xl md:text-5xl mb-5">
                                Sports Counselling
                            </h2>

                            <p className="font-roboto text-gray-600 leading-relaxed mb-9">
                                We help schools and students identify suitable sporting
                                pathways. By understanding student interests and evaluating
                                their strengths, our experts provide tailored guidance to
                                support a long-term, fulfilling sports journey.
                            </p>

                            <div className="space-y-7">
                                {guidance.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.title} className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-orange-50 text-brand-orange flex-shrink-0 flex items-center justify-center">
                                                <Icon size={19} />
                                            </div>

                                            <div>
                                                <h3 className="font-poppins font-bold text-navy text-xs uppercase mb-2">
                                                    {item.title}
                                                </h3>

                                                <p className="text-gray-500 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85"
                                alt="Sports training and coaching"
                                className="w-full h-[380px] md:h-[540px] object-cover rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-5 -left-5 bg-brand-orange text-white p-5 rounded-xl hidden md:block">
                                <GraduationCap size={30} />
                                <p className="font-oswald text-xl mt-2">Growing Through Sport</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COACH TESTIMONIAL */}
                <section className="bg-[#F8F8F9] py-20">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <img
                            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85"
                            alt="Sports coach portrait"
                            className="w-full h-[330px] md:h-[390px] object-cover rounded-xl"
                        />

                        <div>
                            <span className="section-label">Coach Experience</span>

                            <h2 className="font-oswald text-brand-orange text-4xl mb-2">
                                Dipti Singh
                            </h2>

                            <p className="text-gray-500 font-roboto mb-7">
                                Sr. Padel Coach, JBCN - Oshiwara
                            </p>

                            <div className="text-5xl text-navy font-oswald leading-none">“</div>

                            <p className="font-roboto text-gray-600 leading-relaxed">
                                A dedicated coaching environment helps students develop
                                confidence, discipline and a lifelong connection with sports.
                                Every student deserves the opportunity to discover and grow
                                through the right sporting pathway.
                            </p>

                            <p className="text-xs text-gray-400 mt-4">
                                Sample testimonial text – replace with Dipti Singh's approved
                                original testimonial before publishing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SCHOOL PARTNERS */}
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Our School Partners"
                            title="Growing Together"
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {['Parel', 'Chembur', 'Oshiwara', 'Parel', 'Chembur', 'Oshiwara'].map((place, index) => (
                                <div
                                    key={`${place}-${index}`}
                                    className="bg-gray-50 border border-gray-100 rounded-xl min-h-[110px] flex flex-col items-center justify-center"
                                >
                                    <GraduationCap size={28} className="text-brand-orange mb-2" />
                                    <span className="font-oswald text-navy text-lg">FirstMove</span>
                                    <span className="font-poppins text-gray-400 text-[10px] uppercase tracking-widest">
                                        {place}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-xs text-gray-400 mt-5">
                            Replace these placeholders with approved school partner logos.
                        </p>
                    </div>
                </section>

                {/* FREE DEMO CTA */}
                <section id="school-demo" className="bg-brand-orange py-20 text-center">
                    <div className="max-w-3xl mx-auto px-6">

                        <span className="text-white/80 font-poppins text-xs uppercase tracking-[0.3em]">
                            Let's Build Champions
                        </span>

                        <h2 className="font-oswald text-white text-4xl sm:text-5xl mt-4 mb-5">
                            Book a Free Demo for Your School
                        </h2>

                        <p className="text-white/90 font-roboto leading-relaxed mb-9">
                            Experience the FirstMove coaching model firsthand. Let us show
                            you how we can elevate your school's sports program.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:hello@firstmove.in?subject=Free%20School%20Demo"
                                className="bg-white text-navy px-7 py-3 rounded-md font-poppins font-bold text-xs uppercase tracking-wider hover:bg-navy hover:text-white transition-all"
                            >
                                Book a Free Demo
                            </a>

                            <a
                                href="mailto:hello@firstmove.in"
                                className="border border-white text-white px-7 py-3 rounded-md font-poppins font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-navy transition-all"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
};

export default Schools;
