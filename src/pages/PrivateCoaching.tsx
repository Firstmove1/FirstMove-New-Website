
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyFirstMove from '../components/WhyFirstMove';
import pickelImg from '../assets/pickel.png';
import padelImg from '../assets/padel.png';
import tennisImg from '../assets/tennis.png';

const imageBase = `${import.meta.env.BASE_URL}images/private-coaching/`;

const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbweCsdBycmdy0aoPoWn1EtwchsZhn7-qdNMEFpStoDWR-kE7yjQG_P7smtqPuAq_vr_/exec';

const sports = [
    { name: 'ATHLETICS', icon: '🏃' },
    { name: 'BADMINTON', icon: '🏸' },
    { name: 'BASKETBALL', icon: '🏀' },
    { name: 'CHESS', icon: '♟️' },
    { name: 'CRICKET', icon: '🏏' },
    { name: 'FOOTBALL', icon: '⚽' },
    { name: 'GYMNASTICS', icon: '🤸' },
    { name: 'JUDO', icon: '🥋' },
    { name: 'PADEL', icon: <img src={padelImg} alt="Padel" className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110" /> },
    { name: 'PICKLEBALL', icon: <img src={pickelImg} alt="Pickleball" className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110" /> },
    { name: 'SKATING', icon: '🛼' },
    { name: 'SWIMMING', icon: '🏊' },
    { name: 'TABLE TENNIS', icon: '🏓' },
    { name: 'TAEKWONDO', icon: '🥋' },
    { name: 'TENNIS', icon: <img src={tennisImg} alt="Tennis" className="w-10 h-10 object-contain" /> },
];

const programmes = [
    {
        number: '01',
        title: 'Fitness & Weight Management',
        level: 'Recreational Programme',
        description:
            'Achieve your fitness goals with personalised training programmes designed around your lifestyle and individual needs. Our expert trainers help you build strength, improve endurance, manage weight, and develop sustainable fitness habits—all at your preferred time and location.',
        benefits: [
            'Personalised fitness and weight management plans',
            'Strength, stamina and endurance training',
            'Improved mobility, flexibility and agility',
            'Regular fitness assessments and progress tracking',
            'Flexible training schedules at your preferred location',
        ],
        button: 'EXPLORE RECREATIONAL PROGRAMME',
    },
    {
        number: '02',
        title: 'Expert Sports Coaching',
        level: 'Competitive Programme',
        description:
            'Learn, improve, and master your favourite sport with experienced coaches across multiple disciplines. Our personalised coaching programmes for kids and adults combine structured learning, flexible schedules, and regular performance assessments to help every player achieve their sporting goals.',
        benefits: [
            'Expert coaches across multiple sports',
            'Flexible timings and preferred training locations',
            'Structured, age-wise coaching curriculum',
            'Periodic assessments and individual progress report cards',
            'Tournament preparation and competitive exposure',
        ],
        button: 'EXPLORE COMPETITIVE PROGRAMME',
    },
];

function PrivateCoaching() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        age: '',
        email: '',
        sport: '',
        location: '',
        programme: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData((previous) => ({
            ...previous,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    formType: 'trial',
                    name: formData.name,
                    phone: formData.phone,
                    age: formData.age,
                    email: formData.email,
                    sport: formData.sport,
                    location: formData.location,
                    programme: formData.programme,
                }),
            });

            setSubmitted(true);
        } catch (error) {
            console.error('Free trial submission failed:', error);
            setSubmitError('Unable to submit your booking. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white text-[#09264d]">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-[#071a30] text-white">
                {/* Background image */}
                <div
                    id="coaching-hero-bg"
                    className="absolute inset-0 -z-20 bg-cover"
                    style={{
                        backgroundImage: `url(${imageBase}coaching-hero.jpg)`,
                        backgroundPosition: 'center center',
                    }}
                />

                {/* Desktop overlay */}
                <div className="absolute inset-0 -z-10 hidden md:block bg-[#06182c]/60" />

                {/* Mobile overlay — stronger so text is legible */}
                <div className="absolute inset-0 -z-10 md:hidden bg-[#06182c]/75" />

                <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pt-36 pb-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:px-10 lg:gap-14 lg:pt-36 lg:pb-16">

                    {/* LEFT SIDE CONTENT */}
                    <div className="flex min-w-0 flex-col items-start justify-center text-left">

                        <p className="mb-5 text-sm font-bold tracking-[0.25em] text-orange-500">
                            Private Coaching
                        </p>

                        <h1 className="mb-6 max-w-[850px] text-3xl font-bold leading-[1.3] text-white sm:text-4xl lg:text-[52px]">
                            Expert Sports Coaching,
                            <br /> <br />
                            Right at Your Doorstep
                        </h1>

                        <h2 className="mb-6 max-w-[850px] text-lg font-semibold leading-[1.5] text-orange-400 sm:text-xl lg:text-[25px]">
                            Personalised training for kids and adults, at your preferred location.
                        </h2>

                        <p className="max-w-[750px] text-base leading-[1.7] text-gray-200 sm:text-lg">
                            Train with experienced coaches through structured programmes
                            designed around your goals, skill level and schedule.
                        </p>

                    </div>

                    {/* FREE TRIAL FORM */}
                    <div
                        id="free-trial"
                        className="box-border w-full min-w-0 self-center scroll-mt-32 rounded-[26px] bg-[#f7f7f7] p-5 text-[#09264d] shadow-2xl sm:p-7 lg:p-8"
                    >
                        <h2 className="mb-7 text-center text-3xl font-semibold leading-tight sm:text-4xl">
                            Book your <span className="text-orange-500">FREE</span>
                            <br />
                            TRIAL SESSION today
                        </h2>

                        {submitted ? (
                            <div className="min-h-[250px] rounded-md border border-slate-200 bg-white p-5 text-sm font-normal leading-6 text-black">
                                <p className="text-orange-600">
                                    Thank you, {formData.name}!
                                </p>

                                <p className="mt-2">
                                    Our team will contact you shortly to schedule your
                                    free trial as per your convenience.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setFormData({
                                            name: '',
                                            phone: '',
                                            age: '',
                                            email: '',
                                            sport: '',
                                            location: '',
                                            programme: '',
                                        });
                                        setSubmitted(false);
                                    }}
                                    className="mt-6 font-medium text-[#09264d] underline"
                                >
                                    Submit another enquiry
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="grid w-full min-w-0 grid-cols-1 gap-x-5 gap-y-5 text-sm font-normal text-black sm:grid-cols-2"
                            >
                                {/* FULL NAME */}
                                <label className="block min-w-0">
                                    <span className="block font-medium">
                                        Full Name *
                                    </span>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter full name"
                                        className="mt-2 block h-12 w-full min-w-0 box-border rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    />
                                </label>

                                {/* CONTACT NUMBER */}
                                <label className="block min-w-0">
                                    <span className="block font-medium">
                                        Contact Number *
                                    </span>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter contact number"
                                        className="mt-2 block h-12 w-full min-w-0 box-border rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    />
                                </label>

                                {/* AGE */}
                                <label className="block min-w-0">
                                    <span className="block font-medium">
                                        Age *
                                    </span>
                                    <input
                                        required
                                        name="age"
                                        type="number"
                                        min="1"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="Enter age"
                                        className="mt-2 block h-12 w-full min-w-0 box-border rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    />
                                </label>

                                {/* EMAIL */}
                                <label className="block min-w-0">
                                    <span className="block font-medium">
                                        Email ID *
                                    </span>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        className="mt-2 block h-12 w-full min-w-0 box-border rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    />
                                </label>

                                {/* SPORT */}
                                <label className="block min-w-0">
                                    <span className="block font-medium">
                                        Sport Interested *
                                    </span>
                                    <select
                                        required
                                        name="sport"
                                        value={formData.sport}
                                        onChange={handleChange}
                                        className="mt-2 block h-12 w-full min-w-0 box-border rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    >
                                        <option value="">
                                            —Select the sport
                                        </option>
                                        {sports.map((sport) => (
                                            <option key={sport.name} value={sport.name}>
                                                {sport.name}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                {/* LOCATION */}
                                <label className="block min-w-0">
                                    <span className="block font-medium">
                                        Location *
                                    </span>
                                    <input
                                        required
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Enter Location, Society Name or Venue Name"
                                        className="mt-2 block h-12 w-full min-w-0 box-border rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    />
                                </label>

                                {/* PROGRAMME */}
                                <label className="block min-w-0 sm:col-span-2">
                                    <span className="block font-medium">
                                        Programme Interested *
                                    </span>
                                    <select
                                        required
                                        name="programme"
                                        value={formData.programme}
                                        onChange={handleChange}
                                        className="mt-2 block h-12 w-full min-w-0 box-border rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    >
                                        <option value="">
                                            —Select the programme
                                        </option>
                                        {programmes.map((programme) => (
                                            <option
                                                key={programme.number}
                                                value={programme.title}
                                            >
                                                {programme.title}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                {submitError && (
                                    <p className="text-center text-sm text-red-500 sm:col-span-2">
                                        {submitError}
                                    </p>
                                )}

                                {/* SUBMIT BUTTON */}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand-orange px-8 py-4 font-poppins text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange-dark hover:shadow-lg disabled:opacity-60 sm:col-span-2"
                                >
                                    {isSubmitting ? 'SUBMITTING...' : 'BOOK MY FREE TRIAL'}
                                    {!isSubmitting && <ArrowRight size={18} />}
                                </button>

                            </form>
                        )}
                    </div>
                </div>
            </section>


            {/* EXPLORE OUR SPORTS */}
            <section className="bg-[#ff8900] px-5 py-12 text-white">
                <div className="mx-auto max-w-[1320px]">
                    <p className="text-center text-xs font-extrabold tracking-[0.35em]">
                        Find Your Passion
                    </p>

                    <h2 className="mt-3 text-center font-oswald text-4xl font-bold">
                        Choose Your Sport
                    </h2>

                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
                        {sports.map((sport) => (
                            <div
                                key={sport.name}
                                className="group flex min-h-[130px] flex-col items-center justify-center rounded-lg bg-white px-3 py-4 text-[#09264d] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <span className="text-[44px] leading-none transition-transform duration-300 group-hover:scale-110">
                                    {sport.icon}
                                </span>

                                <p className="mt-4 text-center text-xs font-bold tracking-wider">
                                    {sport.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROGRAMME INTRODUCTION */}
            <section className="bg-white px-6 py-10 md:py-14">
                <div className="mx-auto max-w-[1320px]">
                    <p className="text-center text-xs font-semibold tracking-[0.35em] text-orange-500">
                        Our Programme
                    </p>

                    <h2 className="mt-4 text-center font-oswald text-4xl font-bold">
                        Coaching Designed Around Your Schedule
                    </h2>

                    <p className="mx-auto mt-7 max-w-6xl text-center text-base font-normal leading-8 text-slate-700">
                        Finding time for sports and fitness can be challenging with
                        busy work schedules, school commitments, and everyday
                        responsibilities. Our personalised coaching programmes for
                        kids and adults bring expert coaches across multiple sports
                        to your preferred location, at a time that works for you.
                        Skip the hassle of travelling, enjoy training tailored to
                        your goals and skill level, and stay active, healthy, and
                        fit—on your own terms.
                    </p>
                </div>
            </section>

            {/* TWO PROGRAMMES */}
            <section className="bg-[#f7f8fa] px-6 pb-12 md:pb-16">
                <div className="mx-auto grid max-w-[1320px] gap-7 lg:grid-cols-2">
                    {programmes.map((programme) => (
                        <article
                            key={programme.number}
                            className="flex flex-col border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <span className="font-oswald text-4xl font-bold text-orange-500">
                                {programme.number}
                            </span>

                            <h3 className="mt-4 font-oswald text-2xl font-bold leading-tight text-[#09264d]">
                                {programme.title}
                            </h3>

                            <p className="mt-2 text-sm font-extrabold uppercase tracking-wider text-orange-500">
                                {programme.level}
                            </p>

                            <p className="mt-5 flex-1 text-sm font-normal leading-6 text-slate-700">
                                {programme.description}
                            </p>

                            <ul className="mt-7 space-y-4">
                                {programme.benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700"
                                    >
                                        <span className="font-bold text-orange-500">
                                            ✓
                                        </span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                        </article>
                    ))}
                </div>
            </section>
            {/* WHY FIRSTMOVE */}
            <WhyFirstMove />

            {/* BOOKING PROCESS */}
            <section className="bg-white px-6 py-10 md:py-14">
                <div className="mx-auto max-w-6xl">
                    <p className="text-center text-xs font-normal tracking-[0.35em] text-orange-500">
                        Get Started
                    </p>

                    <h2 className="mt-3 text-center font-oswald text-4xl font-bold text-[#09264d]">
                        Booking Process
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                number: '01',
                                title: 'Choose Your Programme',
                                description:
                                    'Explore the sports and programmes and select the option that matches your interests and goals.',
                            },
                            {
                                number: '02',
                                title: 'Submit Your Details',
                                description:
                                    'Fill in the free trial form with your contact details, preferred sport and location.',
                            },
                            {
                                number: '03',
                                title: 'Schedule Your Trial',
                                description:
                                    'Our team will contact you shortly to coordinate your trial session as per your convenience.',
                            },
                        ].map((step) => (
                            <div key={step.number} className="text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 font-oswald text-2xl font-bold text-white">
                                    {step.number}
                                </div>

                                <h3 className="mt-5 text-lg font-normal text-[#09264d]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* FINAL CTA */}
            <section className="bg-orange-500 px-6 py-16 text-center text-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-oswald text-4xl font-bold  md:text-5xl">
                        Ready to Make Your First Move?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7">
                        Find the right sport, coach or programme for you and take
                        your game to the next level.
                    </p>

                    <div className="mt-8 flex justify-center">

                        <a
                            href="#free-trial"
                            className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 font-poppins text-sm font-semibold text-brand-orange transition-all duration-300 hover:-translate-y-1 hover:bg-[#09264d] hover:text-white hover:shadow-lg"
                        >
                            Book a Free Trial
                            <ArrowRight size={18} />
                        </a>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default PrivateCoaching;
