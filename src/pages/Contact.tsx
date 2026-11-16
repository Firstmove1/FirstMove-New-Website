
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        enquiryType: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#F5F6F7]">
            <Navbar />

            <main>
                {/* Hero */}
                <section className="bg-[#F2F2F2] px-6 py-20 md:py-28 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-[#F47B20] font-semibold tracking-[0.2em] text-sm mb-5">
                            WE'D LOVE TO HEAR FROM YOU
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold text-[#172B4D] mb-6">
                            Let's Start a Conversation.
                        </h1>

                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Whether you're a parent, player, school or sports venue owner,
                            we're here to help you take your next move in sports.
                        </p>
                    </motion.div>
                </section>

                {/* Contact Form */}
                <section className="px-5 py-16 md:py-24">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                        {/* Left Content */}
                        <div className="pt-4">
                            <p className="text-[#F47B20] font-semibold tracking-widest text-sm mb-4">
                                GET IN TOUCH
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#172B4D] mb-6 leading-tight">
                                Every great sporting journey starts with a conversation.
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                Tell us a little about what you're looking for. Our team will
                                help you explore the right coaching, school programme or
                                sports solution.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-[#F47B20] text-xl">
                                        ✉
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#172B4D]">Email Us</h3>
                                        <a
                                            href="mailto:info@firstmove.co.in"
                                            className="text-gray-600 hover:text-[#F47B20] transition"
                                        >
                                            info@firstmove.co.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10"
                        >
                            {submitted ? (
                                <div className="py-12 text-center">
                                    <div className="text-5xl mb-5">🎉</div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-[#172B4D] mb-4">
                                        Thank you, {formData.name}!
                                    </h2>

                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        Your enquiry has been recorded on this page. Thank you
                                        for reaching out to FirstMove.
                                    </p>

                                    <button
                                        onClick={() => {
                                            setFormData({
                                                name: '',
                                                phone: '',
                                                email: '',
                                                location: '',
                                                enquiryType: '',
                                                message: '',
                                            });
                                            setSubmitted(false);
                                        }}
                                        className="text-[#F47B20] font-semibold hover:underline"
                                    >
                                        Send another enquiry
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-[#172B4D] mb-2">
                                        Send Us an Enquiry
                                    </h2>

                                    <p className="text-gray-500 text-sm mb-8">
                                        Fill in the details below and tell us how we can help.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                required
                                                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F47B20] transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your phone number"
                                                required
                                                pattern="[0-9+\-\s()]{7,20}"
                                                title="Please enter a valid phone number."
                                                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F47B20] transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email address"
                                                required
                                                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F47B20] transition"
                                            />
                                        </div>

                                        {/* Location Field */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Location *
                                            </label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                placeholder="Enter your city, area or locality"
                                                required
                                                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F47B20] transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                I am enquiring as a *
                                            </label>
                                            <select
                                                name="enquiryType"
                                                value={formData.enquiryType}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F47B20] transition bg-white text-gray-600"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Parent">Parent</option>
                                                <option value="Player">Player</option>
                                                <option value="Coach">Coach</option>
                                                <option value="School Representative">School Representative</option>
                                                <option value="Sports Venue Owner">Sports Venue Owner</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us a little about your enquiry..."
                                                rows={4}
                                                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F47B20] transition resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-[#F47B20] hover:bg-[#E66C12] text-white font-semibold py-4 rounded-lg transition duration-300"
                                        >
                                            Submit Enquiry →
                                        </button>

                                        <p className="text-xs text-gray-400 text-center">
                                            * Required fields
                                        </p>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
