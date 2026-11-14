
import { useState, type ChangeEvent, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const imageBase = `${import.meta.env.BASE_URL}images/private-coaching/`;

const sports = [
    'BADMINTON',
    'BASKETBALL',
    'CHESS',
    'CRICKET',
    'FOOTBALL',
    'SWIMMING',
    'TABLE TENNIS',
    'TENNIS',
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
    {
        number: '03',
        title: 'Sports Events for Communities',
        level: 'Elite Programme',
        description:
            'Transform your community into a vibrant sporting destination with professionally organised leagues, tournaments, and sports festivals. From player registrations to grand finales, FirstMove manages every detail to deliver exciting, competitive, and memorable sporting experiences for residents.',
        benefits: [
            'Community leagues, tournaments and sports festivals',
            'Player registrations, team formations and exciting auctions',
            'Opening ceremonies, event hosts and live announcements',
            'Professional referees, umpires and live scoring',
            'Customised jerseys, medals, trophies and prize ceremonies',
        ],
        button: 'EXPLORE ELITE PROGRAMME',
    },
];

const testimonials = [
    {
        name: 'Dev Tendulkar',
        category: 'Adult’s Tennis',
        quote:
            'Finding a coach who understands my schedule was impossible until FirstMove. My tennis game has improved massively in just three months.',
    },
    {
        name: 'Sakshi Tendulkar',
        category: 'Kid’s Badminton',
        quote:
            'The coaching is incredibly structured. My daughter looks forward to her badminton sessions every week, and her footwork is visibly better.',
    },
    {
        name: 'Priyesh Gupta',
        category: 'Adult’s Swimming',
        quote:
            'I wanted to relearn swimming after a 10-year break. The coach was patient, verified, and made the whole process convenient.',
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

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData((previous) => ({
            ...previous,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-white text-[#09264d]">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-[#071a30] pt-24 pb-16 text-white md:pt-28 md:pb-20">

                {/* BACKGROUND IMAGE */}
                <div
                    className="absolute inset-0 -z-20 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${imageBase}hero-coaching.jpg)`,
                    }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 -z-10 bg-[#06182c]/65" />

                {/* HERO GRID */}
                <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-10 lg:gap-14">

                    {/* LEFT SIDE CONTENT */}
                    <div className="flex flex-col justify-center py-4 md:py-8">

                        <p className="mb-8 text-xs font-bold tracking-[0.28em] text-orange-500 sm:text-sm">
                            PRIVATE COACHING
                        </p>

                        <h1 className="max-w-3xl text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[42px]">
                            Expert Sports Coaching, Right at Your Doorstep
                        </h1>

                        <p className="mt-6 max-w-3xl text-base font-normal leading-[1.7] text-gray-200 sm:text-lg lg:text-[21px]">
                            Experience the joy of learning and playing sports within your
                            community, with expert coaches, structured programmes, and
                            personalised training for kids and adults of all skill
                            levels—all while skipping the hassle of travelling.
                        </p>
                    </div>

                    {/* FREE TRIAL FORM */}
                    <div
                        id="free-trial"
                        className="w-full self-center scroll-mt-28 rounded-[26px] bg-[#f7f7f7] p-6 text-[#09264d] shadow-2xl sm:p-8 lg:p-9"
                    >
                        <h2 className="mb-7 text-center text-3xl font-semibold leading-tight sm:text-4xl">
                            Book your <span className="text-orange-500">FREE</span>
                            <br />
                            TRIAL SESSION today
                        </h2>

                        {submitted ? (
                            <div className="min-h-[300px] rounded-md border border-slate-200 bg-white p-5 text-sm leading-6 text-black">
                                <p className="font-normal text-orange-600">
                                    Thank you for showing interest.
                                </p>

                                <p className="mt-2 font-normal">
                                    Our team will contact you shortly, and schedule your trial
                                    for ({formData.phone}) as per your convenience.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 font-medium text-[#09264d] underline"
                                >
                                    Submit another enquiry
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5 text-sm font-normal text-black"
                            >
                                {/* NAME + CONTACT */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <label className="block font-medium">
                                        Full Name *
                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter full name"
                                            className="mt-2 h-12 w-full rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500"
                                        />
                                    </label>

                                    <label className="block font-medium">
                                        Contact Number *
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter contact number"
                                            className="mt-2 h-12 w-full rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500"
                                        />
                                    </label>
                                </div>

                                {/* AGE + EMAIL */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-[0.7fr_1.8fr]">
                                    <label className="block font-medium">
                                        Age *
                                        <input
                                            required
                                            name="age"
                                            type="number"
                                            min="1"
                                            value={formData.age}
                                            onChange={handleChange}
                                            className="mt-2 h-12 w-full rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500"
                                        />
                                    </label>

                                    <label className="block font-medium">
                                        Email ID
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="(Optional)"
                                            className="mt-2 h-12 w-full rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500"
                                        />
                                    </label>
                                </div>

                                {/* SPORT + LOCATION */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <label className="block font-medium">
                                        Sport Interested *
                                        <select
                                            required
                                            name="sport"
                                            value={formData.sport}
                                            onChange={handleChange}
                                            className="mt-2 h-12 w-full rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500"
                                        >
                                            <option value="">—Select the sport</option>
                                            {sports.map((sport) => (
                                                <option key={sport} value={sport}>
                                                    {sport}
                                                </option>
                                            ))}
                                        </select>
                                    </label>

                                    <label className="block font-medium">
                                        Location *
                                        <input
                                            required
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Enter your location"
                                            className="mt-2 h-12 w-full rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500"
                                        />
                                    </label>
                                </div>

                                {/* PROGRAMME */}
                                <label className="block font-medium">
                                    Programme Interested *
                                    <select
                                        required
                                        name="programme"
                                        value={formData.programme}
                                        onChange={handleChange}
                                        className="mt-2 h-12 w-full rounded-md border border-gray-300 bg-white px-3 font-normal text-gray-800 outline-none focus:border-orange-500"
                                    >
                                        <option value="">—Select the programme</option>
                                        {programmes.map((programme) => (
                                            <option key={programme.number} value={programme.title}>
                                                {programme.title}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-[#06234b] py-3.5 font-semibold text-white transition hover:bg-orange-500"
                                >
                                    Send
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* EXPLORE OUR SPORTS */}
            <section className="bg-[#ff8900] px-5 py-12 text-white">
                <div className="mx-auto max-w-[1320px]">
                    <p className="text-center text-xs font-bold tracking-[0.35em]">
                        EXPLORE OUR SPORTS
                    </p>

                    <h2 className="mt-3 text-center font-oswald text-4xl font-bold">
                        Sports Coached
                    </h2>

                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
                        {sports.map((sport, index) => (
                            <div
                                key={sport}
                                className="flex min-h-[130px] flex-col items-center justify-center rounded-lg bg-white px-3 py-4 text-[#09264d]"
                            >
                                <span className="font-oswald text-3xl font-bold text-orange-500">
                                    0{index + 1}
                                </span>

                                <p className="mt-3 text-center text-xs font-bold tracking-wider">
                                    {sport}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROGRAMME INTRODUCTION */}
            <section className="bg-white px-6 py-16">
                <div className="mx-auto max-w-[1320px]">
                    <p className="text-center text-xs font-semibold tracking-[0.35em] text-orange-500">
                        OUR PROGRAMME
                    </p>

                    <h2 className="mt-4 text-center font-oswald text-4xl font-bold uppercase">
                        Coaching Designed Around Your Schedule
                    </h2>

                    <p className="mx-auto mt-7 max-w-6xl text-center text-base font-normal leading-8 text-slate-700">
                        Finding time for sports and fitness can be challenging with busy
                        work schedules, school commitments, and everyday
                        responsibilities. Our personalised coaching programmes for kids
                        and adults bring expert coaches across multiple sports to your
                        preferred location, at a time that works for you. Skip the hassle
                        of travelling, enjoy training tailored to your goals and skill
                        level, and stay active, healthy, and fit—on your own terms.
                    </p>
                </div>
            </section>

            {/* THREE PROGRAMMES */}
            <section className="bg-[#f7f8fa] px-6 pb-20">
                <div className="mx-auto grid max-w-[1320px] gap-7 lg:grid-cols-3">
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

                            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
                                {programme.level}
                            </p>

                            <p className="mt-5 flex-1 text-sm font-normal leading-7 text-slate-600">
                                {programme.description}
                            </p>

                            <ul className="mt-7 space-y-4">
                                {programme.benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-start gap-3 text-sm font-normal leading-6 text-slate-700"
                                    >
                                        <span className="font-bold text-orange-500">✓</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#free-trial"
                                className="mt-8 bg-[#09264d] px-4 py-3 text-center text-xs font-bold tracking-wider text-white transition hover:bg-orange-500"
                            >
                                {programme.button}
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            {/* BOOKING PROCESS */}
            <section className="bg-white px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    <p className="text-center text-xs font-bold tracking-[0.35em] text-orange-500">
                        GET STARTED
                    </p>

                    <h2 className="mt-3 text-center font-oswald text-4xl font-bold uppercase text-[#09264d]">
                        Booking Process
                    </h2>

                    <div className="mt-12 grid gap-10 md:grid-cols-3">
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

                                <h3 className="mt-5 text-lg font-bold text-[#09264d]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm font-normal leading-7 text-slate-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE FIRSTMOVE */}
            <section className="bg-[#09264d] px-6 py-16 text-white">
                <div className="mx-auto max-w-[1320px]">
                    <p className="text-center text-xs font-bold tracking-[0.35em] text-orange-400">
                        WHY CHOOSE FIRSTMOVE
                    </p>

                    <h2 className="mt-4 text-center font-oswald text-4xl font-bold uppercase">
                        The FirstMove Difference
                    </h2>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Expert and verified coaches',
                            'Personalised coaching programmes',
                            'Flexible timings and locations',
                            'Structured training and progress tracking',
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="border border-white/20 bg-white/5 p-7"
                            >
                                <span className="font-oswald text-4xl font-bold text-orange-400">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-5 text-lg font-semibold leading-7">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-white px-6 py-20">
                <div className="mx-auto max-w-[1320px]">
                    <p className="text-center text-xs font-bold tracking-[0.35em] text-orange-500">
                        SUCCESS STORIES
                    </p>

                    <h2 className="mt-3 text-center font-oswald text-4xl font-bold uppercase text-[#09264d]">
                        Testimonials
                    </h2>

                    <div className="mt-12 grid gap-7 md:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <article
                                key={testimonial.name}
                                className="flex flex-col border border-slate-200 bg-[#f8f9fb] p-8"
                            >
                                <span className="font-serif text-5xl font-bold text-orange-500">
                                    “
                                </span>

                                <p className="flex-1 text-base font-normal leading-8 text-slate-700">
                                    {testimonial.quote}
                                </p>

                                <div className="mt-7 border-t border-slate-200 pt-5">
                                    <h3 className="font-bold text-[#09264d]">
                                        {testimonial.name}
                                    </h3>

                                    <p className="mt-1 text-sm font-medium text-orange-500">
                                        {testimonial.category}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-orange-500 px-6 py-16 text-center text-white">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-oswald text-4xl font-bold uppercase md:text-5xl">
                        Ready to Make Your First Move?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7">
                        Find the right sport, coach or programme for you and take your
                        game to the next level.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="#free-trial"
                            className="bg-[#09264d] px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#09264d]"
                        >
                            GET STARTED
                        </a>

                        <a
                            href="#free-trial"
                            className="border-2 border-white px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#09264d]"
                        >
                            CONTACT US
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default PrivateCoaching;
