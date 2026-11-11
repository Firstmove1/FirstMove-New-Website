import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, FacebookIcon, TwitterXIcon } from './SocialIcons';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'SCHOOLS', href: '#schools' },
  { label: 'PRIVATE COACHING', href: '#coaching' },
  { label: 'SPORTS', href: '#sports' },
  { label: 'LOCKER ROOM', href: '#locker' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'CONTACT US', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top info bar ── */}
      <div className="bg-navy text-white py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* Left: phone + email */}
          <div className="flex items-center gap-5 text-xs text-white/80">
            <div className="flex items-center gap-1.5">
              <Phone size={10} className="text-brand-orange flex-shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={10} className="text-brand-orange flex-shrink-0" />
              <span>hello@firstmove.in</span>
            </div>
          </div>

          {/* Right: social icons + divider + location */}
          <div className="flex items-center gap-3 text-xs text-white/80">

            {/* Social icons: LinkedIn, Instagram, Facebook, X */}
            <a href="#" aria-label="LinkedIn"  className="text-white/70 hover:text-brand-orange transition-colors duration-150">
              <LinkedInIcon size={13} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-brand-orange transition-colors duration-150">
              <InstagramIcon size={13} />
            </a>
            <a href="#" aria-label="Facebook"  className="text-white/70 hover:text-brand-orange transition-colors duration-150">
              <FacebookIcon size={13} />
            </a>
            <a href="#" aria-label="Twitter / X" className="text-white/70 hover:text-brand-orange transition-colors duration-150">
              <TwitterXIcon size={12} />
            </a>

            {/* Thin divider */}
            <span className="w-px h-3 bg-white/20 mx-1" />

            {/* Location */}
            <div className="flex items-center gap-1 text-white/70">
              <MapPin size={11} className="text-brand-orange flex-shrink-0" />
              <span className="font-poppins text-xs">Mumbai</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">

          {/* Logo */}
          <a href="#home" className="font-poppins font-bold text-xl text-navy tracking-tight flex-shrink-0">
            First<span className="text-brand-orange">Move</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`font-poppins font-medium text-xs uppercase tracking-wide transition-colors duration-200 whitespace-nowrap ${
                  active === link.label
                    ? 'text-brand-orange'
                    : 'text-gray-700 hover:text-brand-orange'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => { setActive(link.label); setIsOpen(false); }}
                    className={`font-poppins font-medium text-sm uppercase tracking-wide ${
                      active === link.label ? 'text-brand-orange' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile: social + location row */}
                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <a href="#" aria-label="LinkedIn"    className="text-gray-500 hover:text-brand-orange transition-colors"><LinkedInIcon size={16} /></a>
                  <a href="#" aria-label="Instagram"   className="text-gray-500 hover:text-brand-orange transition-colors"><InstagramIcon size={16} /></a>
                  <a href="#" aria-label="Facebook"    className="text-gray-500 hover:text-brand-orange transition-colors"><FacebookIcon size={16} /></a>
                  <a href="#" aria-label="Twitter / X" className="text-gray-500 hover:text-brand-orange transition-colors"><TwitterXIcon size={15} /></a>
                  <span className="w-px h-4 bg-gray-200 mx-1" />
                  <div className="flex items-center gap-1 text-gray-500 text-xs font-poppins">
                    <MapPin size={12} className="text-brand-orange" />
                    Mumbai
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
