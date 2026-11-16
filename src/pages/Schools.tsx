
import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy,
    Users,
    Medal,
    ChartNoAxesColumnIncreasing,
    Target,
    Lightbulb,
    Compass,
    Award,
    GraduationCap,
    BookOpen,
    HeartHandshake,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const benefits = [
    {
        icon: Medal,
        title: 'Expert Sports Coaches',
        description:
            'Experienced and verified coaches bring professional knowledge, structured methods and individual attention to every training session.',
    },
    {
        icon: BookOpen,
        title: 'Structured Curriculum',
        description:
            'Age-appropriate training programmes help students build sporting fundamentals, develop techniques and progress with confidence.',
    },
    {
        icon: Users,
        title: 'Teamwork & Character',
        description:
            'Sports encourage collaboration, discipline, leadership and respect while helping students develop stronger connections with peers.',
    },
    {
        icon: ChartNoAxesColumnIncreasing,
        title: 'Progress Tracking',
        description:
            'Regular assessments and clear learning milestones help schools understand student development and identify areas for improvement.',
    },
    {
        icon: Trophy,
        title: 'Competitive Exposure',
        description:
            'Students get opportunities to participate, challenge themselves and experience the values of healthy competition.',
    },
];

const sports = [
    { name: 'ATHLETICS', icon: '🏃' },
    { name: 'BADMINTON', icon: '🏸' },
    { name: 'BASKETBALL', icon: '🏀' },
    { name: 'CHESS', icon: '♟️' },
    { name: 'CRICKET', icon: '🏏' },
    { name: 'FOOTBALL', icon: '⚽' },
    { name: 'GYMNASTICS', icon: '🤸' },
    { name: 'JUDO', icon: '🥋' },
    { name: 'PADEL', icon: '🎾' },
    { name: 'PICKLEBALL', icon: '🏓' },
    { name: 'SKATING', icon: '⛸️' },
    { name: 'SWIMMING', icon: '🏊' },
    { name: 'TABLE TENNIS', icon: '🏓' },
    { name: 'TAEKWONDO', icon: '🥋' },
    { name: 'TENNIS', icon: '🎾' },
];

const approach = [
    {
        icon: Lightbulb,
        title: 'Understand the School',
        description:
            'We begin by understanding the school’s requirements, student demographics, available facilities and sporting objectives.',
    },
    {
        icon: Compass,
        title: 'Design the Programme',
        description:
            'We develop an age-appropriate sports programme based on the school’s needs, available infrastructure and student interests.',
    },
    {
        icon: Target,
        title: 'Train with Purpose',
        description:
            'Our coaches conduct structured sessions focused on skill development, participation, fitness and sporting fundamentals.',
    },
    {
        icon: Award,
        title: 'Evaluate & Improve',
        description:
            'Regular assessments and feedback help monitor progress, recognise achievements and continuously improve the programme.',
    },
];

const partnershipCards = [
    {
        icon: GraduationCap,
        title: 'Schools & Institutions',
        description:
            'Working alongside educational institutions to make structured sports programmes an integral part of student development.',
    },
    {
        icon: Users,
        title: 'Coaches & Sports Professionals',
        description:
            'Building strong coaching teams that bring experience, commitment and professional guidance to every programme.',
    },
    {
        icon: HeartHandshake,
        title: 'Students & Communities',
        description:
            'Encouraging participation, building sporting connections and introducing more people to the world of sports.',
    },
];

const SchoolSectionHeading = ({
    label,
    title,
    light = false,
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

                            <a
                                href="mailto:info@firstmove.co.in?subject=School%20Sports%20Enquiry"
                                className="btn-orange inline-flex items-center"
                            >
                                Contact Us
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* WHY FIRSTMOVE */}
                <section className="bg-[#F8F8F9] py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Why FirstMove"
                            title="A Better Approach to School Sports"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {benefits.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white border border-gray-100 rounded-xl p-7 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
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
                <section className="bg-navy py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Explore Our Sports"
                            title="Sports We Offer"
                            light
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                            {sports.map((sport, index) => (
                                <motion.div
                                    key={sport.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.04 }}
                                    className="bg-white rounded-xl px-3 py-5 flex flex-col items-center justify-center min-h-[120px] md:min-h-[130px] hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                                >
                                    <span className="font-poppins text-[10px] sm:text-xs font-bold text-brand-orange tracking-wider uppercase text-center mb-3">
                                        {sport.name}
                                    </span>

                                    <span
                                        className="text-2xl md:text-3xl"
                                        role="img"
                                        aria-label={sport.name}
                                    >
                                        {sport.icon}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR APPROACH */}
                <section className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        <div>
                            <span className="section-label">Our Approach</span>

                            <h2 className="font-oswald text-navy text-4xl md:text-5xl mb-5">
                                Building a Stronger Sporting Foundation
                            </h2>

                            <p className="font-roboto text-gray-600 leading-relaxed mb-9">
                                Every school has different needs, students and sporting
                                aspirations. Our approach focuses on understanding those needs
                                and delivering structured sports programmes that encourage
                                participation, skill development and long-term growth.
                            </p>

                            <div className="space-y-7">
                                {approach.map((item) => {
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

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85"
                                alt="Sports training and coaching"
                                className="w-full h-[380px] md:h-[540px] object-cover rounded-2xl shadow-xl"
                            />

                            <div className="absolute -bottom-5 -left-5 bg-brand-orange text-white p-5 rounded-xl hidden md:block">
                                <GraduationCap size={30} />
                                <p className="font-oswald text-xl mt-2">
                                    Growing Through Sport
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* OUR PARTNERS */}
                <section className="bg-[#F8F8F9] py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Our Partners"
                            title="Growing Together"
                        />

                        <p className="font-roboto text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
                            Strong partnerships make meaningful sporting experiences
                            possible. We work together with schools, coaches and communities
                            to bring structured sports programmes closer to students and
                            encourage a lasting connection with sports.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {partnershipCards.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12 }}
                                        className="bg-white border border-gray-100 rounded-xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-full bg-orange-50 text-brand-orange flex items-center justify-center mx-auto mb-5">
                                            <Icon size={27} />
                                        </div>

                                        <h3 className="font-oswald text-navy text-2xl mb-3">
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

                {/* CONTACT CTA */}
                <section className="bg-brand-orange py-20 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <span className="text-white/80 font-poppins text-xs uppercase tracking-[0.3em]">
                            Let's Build Champions
                        </span>

                        <h2 className="font-oswald text-white text-4xl sm:text-5xl mt-4 mb-5">
                            Bring FirstMove to Your School
                        </h2>

                        <p className="text-white/90 font-roboto leading-relaxed mb-9">
                            Let's discuss how structured sports coaching can become part
                            of your school's sporting journey.
                        </p>

                        <a
                            href={`${import.meta.env.BASE_URL}?page=contact`}
                            className="inline-flex items-center justify-center bg-white text-navy px-8 py-4 rounded-md font-poppins font-bold text-xs uppercase tracking-wider hover:bg-navy hover:text-white transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
};

export default Schools;
