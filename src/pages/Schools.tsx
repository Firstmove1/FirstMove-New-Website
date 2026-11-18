
import React from 'react';
import { motion } from 'framer-motion';
import {
    Trophy,
    Users,
    GraduationCap,
    BookOpen,
    HeartHandshake,
    ShieldCheck,
    ClipboardList,
    Flag,
    Dumbbell,
    Tent,
    MapPin,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pickelImg from '../assets/pickel.png';

const schoolServices = [
    {
        number: '01',
        category: 'PEOPLE',
        icon: Users,
        title: 'Expert Sports Coaching',
        description:
            'Qualified, sport-specific coaches with background verification, planned session delivery and a student-first approach to safety and learning.',
    },
    {
        number: '02',
        category: 'LEARNING',
        icon: BookOpen,
        title: 'Age-wise, Curriculum-led Training',
        description:
            'Progressive, age-appropriate lesson plans with clear skills, learning objectives and milestones—designed for every stage of development.',
    },
    {
        number: '03',
        category: 'ACCOUNTABILITY',
        icon: ClipboardList,
        title: 'Quarterly Assessments & Report Cards',
        description:
            'Structured evaluations that document skill development, participation, strengths and focus areas—giving schools and parents meaningful visibility.',
    },
    {
        number: '04',
        category: 'QUALITY',
        icon: ShieldCheck,
        title: 'Quality Session Checks',
        description:
            'Periodic on-ground observations of coaching quality, student engagement and curriculum delivery, followed by actionable feedback and improvement.',
    },
    {
        number: '05',
        category: 'PERFORMANCE',
        icon: Trophy,
        title: 'School Team Training',
        description:
            'Trials, team selection, advanced coaching and competition preparation for inter-school, district, state and national-level opportunities.',
    },
    {
        number: '06',
        category: 'EXPERIENCES',
        icon: Flag,
        title: 'Sports Days & School Events',
        description:
            'Creative concepts, age-wise games, competition formats, officials, operations and on-ground execution—managed from the first brief to the final medal.',
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
    { name: 'PICKLEBALL', icon: <img src={pickelImg} alt="Pickleball" className="w-8 h-8 object-contain" /> },
    { name: 'SKATING', icon: '🛼' },
    { name: 'SWIMMING', icon: '🏊' },
    { name: 'TABLE TENNIS', icon: '🏓' },
    { name: 'TAEKWONDO', icon: '🥋' },
    { name: 'TENNIS', icon: '🎾' },
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
            className={`font-poppins ${light ? 'text-white' : 'text-navy'
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
                        src={`${import.meta.env.BASE_URL}images/schools/school-sports.jpg`}
                        alt="Students playing football on a school sports ground"
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

                            <h1 className="font-poppins text-white text-5xl sm:text-6xl md:text-7xl leading-[1.12] mt-5 mb-6">
                                Make The Next
                                <br />
                                Sports Star
                                <br />
                                <span className="text-brand-orange">
                                    From Your School.
                                </span>
                            </h1>

                            <p className="text-white/85 font-poppins text-base md:text-lg leading-relaxed max-w-xl mb-9">
                                Partner with FirstMove to provide professional sports coaching,
                                structured curriculums, and a clear development pathway for
                                your students.
                            </p>

                            <a
                                href={`${import.meta.env.BASE_URL}?page=contact`}
                                className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-poppins font-semibold text-sm px-8 py-4 rounded-md transition-all duration-300"
                            >
                                Book an Appointment
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* OUR SERVICES */}
                <section className="bg-[#F8F8F9] py-20 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Our Services"
                            title="What We Bring to Your School"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {schoolServices.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={service.number}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white border border-gray-100 rounded-xl p-7 flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                                    >
                                        {/* Number + category */}
                                        <p className="font-poppins text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-5">
                                            {service.number} / {service.category}
                                        </p>

                                        {/* Icon */}
                                        <div className="w-11 h-11 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center mb-5">
                                            <Icon size={22} strokeWidth={1.7} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-poppins font-bold text-navy text-lg mb-3">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                                            {service.description}
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
                <section className="bg-white py-20 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Left — image + orange callout card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}images/schools/approach.jpg`}
                                    alt="Students cycling in a school sports event"
                                    className="w-full h-[380px] md:h-[500px] object-cover object-center rounded-2xl shadow-xl"
                                />

                                {/* Orange callout card */}
                                <div className="absolute bottom-6 left-6 bg-brand-orange text-white rounded-xl px-6 py-5 max-w-[220px] shadow-xl">
                                    <p className="font-poppins font-bold text-xl leading-snug mb-1">
                                        Every child.
                                    </p>
                                    <p className="font-poppins text-white/90 text-sm leading-relaxed">
                                        A starting point, a pathway and a chance to progress.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right — heading + numbered steps */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="section-label">Our Approach</span>

                                <h2 className="font-poppins font-bold text-navy text-3xl md:text-4xl lg:text-[2.6rem] leading-tight mb-5">
                                    A thoughtful approach to every stage of learning.
                                </h2>

                                <p className="font-poppins text-gray-500 text-sm md:text-base leading-relaxed mb-10">
                                    Sports education works best when the right people, the right
                                    plan and regular feedback come together. Our delivery model
                                    is built around all three.
                                </p>

                                {/* Numbered steps */}
                                <div className="space-y-6">
                                    {[
                                        {
                                            num: '01',
                                            title: 'Discover & plan',
                                            desc: 'Understand school infrastructure, age groups, schedules and sporting objectives.',
                                        },
                                        {
                                            num: '02',
                                            title: 'Coach with purpose',
                                            desc: 'Deploy suitable coaches and deliver planned sessions with progressive learning outcomes.',
                                        },
                                        {
                                            num: '03',
                                            title: 'Observe & assess',
                                            desc: 'Conduct quality checks, maintain programme oversight and assess students quarterly.',
                                        },
                                        {
                                            num: '04',
                                            title: 'Celebrate & advance',
                                            desc: 'Share report cards, recognise improvement and identify students ready for higher-level training.',
                                        },
                                    ].map((step, i) => (
                                        <motion.div
                                            key={step.num}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-5 items-start"
                                        >
                                            {/* Step number bubble */}
                                            <span className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center font-poppins font-semibold text-xs text-gray-400">
                                                {step.num}
                                            </span>

                                            <div>
                                                <h3 className="font-poppins font-bold text-navy text-base mb-1">
                                                    {step.title}
                                                </h3>
                                                <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* MORE WAYS TO PARTNER */}
                <section className="bg-white py-20 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <p className="font-poppins font-semibold text-brand-orange text-xs tracking-widest uppercase mb-5">
                                More ways to partner
                            </p>

                            <h2 className="font-poppins font-bold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
                                Support that goes beyond<br className="hidden sm:block" /> the timetable.
                            </h2>

                            <p className="font-poppins text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                                Flexible formats to help schools strengthen participation, identify talent and make better use of their sporting infrastructure.
                            </p>
                        </div>

                        {/* Three cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Dumbbell,
                                    title: 'After-school Sports Academies',
                                    desc: 'Optional beginner-to-advanced programmes for students seeking more practice and specialised coaching.',
                                },
                                {
                                    icon: Tent,
                                    title: 'Camps, Clinics & Workshops',
                                    desc: 'Seasonal sports camps, focused skill clinics, introductory sessions and special-interest workshops.',
                                },
                                {
                                    icon: MapPin,
                                    title: 'Sports Pathway & Facility Advisory',
                                    desc: 'Guidance on sporting choices, talent pathways, programme design and better use of existing school sports spaces.',
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12 }}
                                        className="bg-[#EEF0F5] rounded-2xl p-8 flex flex-col hover:-translate-y-1.5 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-white/70 flex items-center justify-center text-navy mb-6">
                                            <Icon size={20} strokeWidth={1.7} />
                                        </div>

                                        <h3 className="font-poppins font-bold text-navy text-base mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* OUR PARTNERS */}
                <section className="bg-[#F8F8F9] py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <SchoolSectionHeading
                            label="Our Partners"
                            title="Growing Together"
                        />

                        <p className="font-poppins text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
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

                                        <h3 className="font-poppins text-navy text-2xl mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="font-poppins text-gray-500 text-sm leading-relaxed">
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

                        <h2 className="font-poppins text-white font-semibold text-2xl sm:text-4xl md:text-5xl mt-4 mb-5">
                            Bring FirstMove to Your School
                        </h2>

                        <p className="text-white/90 font-poppins leading-relaxed mb-9">
                            Let's discuss how structured sports coaching can become part
                            of your school's sporting journey.
                        </p>

                        <a
                            href={`${import.meta.env.BASE_URL}?page=contact`}
                            className="inline-flex items-center justify-center bg-white text-navy px-8 py-4 rounded-md font-poppins font-bold text-xs uppercase tracking-wider hover:bg-navy hover:text-white transition-all"
                        >
                            Book an Appointment
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
};

export default Schools;
