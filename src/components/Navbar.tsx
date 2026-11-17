
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: `${import.meta.env.BASE_URL}#home` },
  { label: 'Schools', href: `${import.meta.env.BASE_URL}?page=schools` },
  { label: 'Private Coaching', href: `${import.meta.env.BASE_URL}?page=coaching` },
  { label: 'Contact Us', href: `${import.meta.env.BASE_URL}?page=contact` },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState(() => {
    const page = new URLSearchParams(window.location.search).get('page');

    if (page === 'schools') return 'Schools';
    if (page === 'coaching') return 'Private Coaching';
    if (page === 'contact') return 'Contact Us';

    return 'Home';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`bg-[#F5F5F5] transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-6 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a
            href={`${import.meta.env.BASE_URL}#home`}
            onClick={() => {
              setActive('Home');
              setIsOpen(false);
            }}
            className="flex items-center flex-shrink-0"
            aria-label="FirstMove Home"
          >
            <span className="font-poppins font-bold text-[27px] md:text-[30px] text-[#0D1E35] tracking-[-1.5px] leading-none">
              First<span className="text-brand-orange italic">Move</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative font-poppins font-medium text-[14px] transition-colors duration-200 whitespace-nowrap py-2 ${active === link.label
                  ? 'text-brand-orange'
                  : 'text-[#384454] hover:text-brand-orange'
                  }`}
              >
                {link.label}

                {active === link.label && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-brand-orange rounded-full"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-[#0D1E35] p-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#F5F5F5] border-t border-gray-200 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActive(link.label);
                      setIsOpen(false);
                    }}
                    className={`font-poppins font-medium text-base transition-colors ${active === link.label
                      ? 'text-brand-orange'
                      : 'text-[#384454] hover:text-brand-orange'
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
