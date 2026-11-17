
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Navbar />

            <main className="bg-[#F7F8FA] min-h-screen pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="font-poppins text-brand-orange font-medium text-sm mb-3">
                        Your Privacy Matters
                    </p>

                    <h1 className="font-poppins font-semibold text-navy text-3xl md:text-5xl mb-5">
                        Privacy Policy
                    </h1>

                    <p className="font-poppins text-gray-500 text-sm mb-10">
                        Last updated: November 2026
                    </p>

                    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm space-y-8">

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                1. Introduction
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                FirstMove respects your privacy and is committed to protecting
                                the personal information you share with us through our website
                                and enquiry forms. This policy explains how information may be
                                collected, used and protected when you interact with us.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                2. Information We Collect
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                Depending on the enquiry or service you request, we may collect
                                information such as your name, phone number, email address,
                                location, age, sports interests and details you choose to share
                                in your message.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                3. How We Use Your Information
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                Information may be used to respond to enquiries, arrange
                                appointments or trial sessions, understand your coaching
                                requirements, provide information about our programmes and
                                improve our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                4. Sharing of Information
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                We do not intend to sell your personal information. Information
                                may be shared with authorised team members, coaches or service
                                providers when reasonably necessary to respond to your enquiry
                                or deliver a requested service.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                5. Data Security and Retention
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                We take reasonable steps to protect the information shared with
                                us. Personal information should only be retained for as long as
                                necessary for the purpose for which it was collected or as
                                required by applicable law.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                6. Cookies and Website Usage
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                Our website or third-party services used on it may use cookies
                                or similar technologies to support functionality and understand
                                website usage. You can manage cookies through your browser
                                settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                7. Your Choices
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                You may contact us to ask about the personal information you
                                have shared, request corrections or raise concerns about how
                                your information is handled, subject to applicable law.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-poppins font-semibold text-navy text-xl mb-3">
                                8. Contact Us
                            </h2>
                            <p className="font-poppins text-gray-600 text-sm md:text-base leading-8">
                                If you have questions about this Privacy Policy or the handling
                                of your information, contact FirstMove:
                            </p>

                            <div className="mt-4 font-poppins text-sm md:text-base text-gray-600 space-y-2">
                                <p>Email: info@firstmove.co.in</p>
                                <p>Phone: +91 91362 44036</p>
                                <p>Location: Mumbai, India</p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
