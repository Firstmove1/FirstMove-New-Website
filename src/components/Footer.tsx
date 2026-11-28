
import React from 'react';

const quickLinks = [
  { label: 'Home', href: `${import.meta.env.BASE_URL}#home` },
  { label: 'Schools', href: `${import.meta.env.BASE_URL}?page=schools` },
  { label: 'Private Coaching', href: `${import.meta.env.BASE_URL}?page=coaching` },
  { label: 'Contact Us', href: `${import.meta.env.BASE_URL}?page=contact` },
  { label: 'Privacy Policy', href: `${import.meta.env.BASE_URL}?page=privacy` },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <a
              href={`${import.meta.env.BASE_URL}#home`}
              className="inline-block font-poppins font-extrabold text-2xl md:text-3xl tracking-tight mb-4"
              aria-label="FirstMove Home"
            >
              First<span className="text-brand-orange italic">Move</span>
            </a>

            <p className="font-poppins text-white/60 text-sm leading-[1.9] max-w-sm">
              Creating opportunities through sport with expert coaching,
              structured programmes and experiences that inspire confidence,
              teamwork and lifelong participation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider mb-5 text-brand-orange">
              Explore
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-poppins text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider mb-5 text-brand-orange">
              Get in Touch
            </h4>

            <ul className="space-y-4 font-poppins text-white/60 text-sm">
              <li>
                <a
                  href="tel:+919136244036"
                  className="hover:text-white transition-colors"
                >
                  +91 91362 44036
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@firstmove.co.in"
                  className="hover:text-white transition-colors"
                >
                  info@firstmove.co.in
                </a>
              </li>

              <li>Mumbai, India</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-white/40 text-xs text-center">
            © {new Date().getFullYear()} FirstMove. All Rights Reserved.
          </p>

          <p className="font-poppins text-white/40 text-xs">
            Made for the ❤️ of Sports
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
