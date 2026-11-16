
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: `${import.meta.env.BASE_URL}#home` },
  {
    label: 'SCHOOLS',
    href: `${import.meta.env.BASE_URL}?page=schools`,
  },
  {
    label: 'PRIVATE COACHING',
    href: `${import.meta.env.BASE_URL}?page=coaching`,
  },
  {
    label: 'CONTACT US',
    href: `${import.meta.env.BASE_URL}?page=contact`,
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState(() => {
    const page = new URLSearchParams(window.location.search).get('page');

    if (page === 'schools') return 'SCHOOLS';
    if (page === 'coaching') return 'PRIVATE COACHING';
    if (page === 'contact') return 'CONTACT US';

    return 'HOME';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Main navbar */}
      <nav
        className={`bg-[#F2F2F2] transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href={`${import.meta.env.BASE_URL}#home`}
            className="font-poppins font-bold text-2xl md:text-3xl text-navy tracking-tight flex-shrink-0"
          >
            First<span className="text-brand-orange italic">Move</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`font-poppins font-medium text-xs uppercase tracking-wide transition-colors duration-200 whitespace-nowrap ${active === link.label
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
            aria-expanded={isOpen}
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
              className="lg:hidden bg-[#F2F2F2] border-t border-gray-200 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActive(link.label);
                      setIsOpen(false);
                    }}
                    className={`font-poppins font-medium text-sm uppercase tracking-wide ${active === link.label
                        ? 'text-brand-orange'
                        : 'text-gray-700'
                      }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
