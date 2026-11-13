import React from 'react';
import { LinkedInIcon, InstagramIcon, FacebookIcon, TwitterXIcon } from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          <div>
            <h3 className="font-poppins font-bold text-xl mb-3">
              First<span className="text-brand-orange italic">Move</span>
            </h3>
            <p className="font-roboto text-white/50 text-sm leading-relaxed">
              Premium sports coaching for schools, individuals, and communities. Building champions through structured training.
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
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider mb-3 text-brand-orange">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Schools', 'Private Coaching', 'Sports', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="font-roboto text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider mb-3 text-brand-orange">Sports</h4>
            <ul className="space-y-2">
              {['Basketball', 'Cricket', 'Football', 'Badminton', 'Padel', 'Tennis', 'Chess', 'Skating'].map(sport => (
                <li key={sport}>
                  <a href="#" className="font-roboto text-white/50 text-sm hover:text-white transition-colors">{sport}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider mb-3 text-brand-orange">Contact</h4>
            <ul className="space-y-2 font-roboto text-white/50 text-sm">
              <li>+91 98765 43210</li>
              <li>hello@firstmove.in</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center">
          <p className="font-roboto text-white/30 text-xs">
            © 2024 FirstMove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
