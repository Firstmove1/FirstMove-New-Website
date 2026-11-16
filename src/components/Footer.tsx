
import React from 'react';
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterXIcon,
} from './SocialIcons';

const quickLinks = [
  { label: 'Home', href: `${import.meta.env.BASE_URL}#home` },
  { label: 'Schools', href: `${import.meta.env.BASE_URL}?page=schools` },
  { label: 'Private Coaching', href: `${import.meta.env.BASE_URL}?page=coaching` },
  { label: 'Contact Us', href: `${import.meta.env.BASE_URL}?page=contact` },
];



const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">

          {/* Brand */}
          <div>
            <h3 className="font-poppins font-bold text-2xl mb-3">
              First<span className="text-brand-orange italic">Move</span>
            </h3>

            <p className="font-roboto text-white/50 text-sm leading-relaxed">
              Expert-led sports coaching, venue management and community experiences.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-brand-orange transition-colors">
                <LinkedInIcon size={16} />
              </a>

              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-brand-orange transition-colors">
                <InstagramIcon size={16} />
              </a>

              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-brand-orange transition-colors">
                <FacebookIcon size={16} />
              </a>

              <a href="#" aria-label="Twitter / X" className="text-white/50 hover:text-brand-orange transition-colors">
                <TwitterXIcon size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider mb-3 text-brand-orange">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-roboto text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>




          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider mb-3 text-brand-orange">
              Contact
            </h4>

            <ul className="space-y-2 font-roboto text-white/50 text-sm">
              <li>+91 91362 44036</li>
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
        <div className="pt-6 text-center">
          <p className="font-roboto text-white/40 text-xs">
            © All Rights Reserved 2026. Made for the ❤️ of Sports
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
