import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Globe } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, PinterestIcon } from './SocialIcons';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="bg-[#141412] text-[#EFECE6] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] uppercase font-light text-white">
                VERRA INTERIORS
              </span>
            </Link>
            <p className="font-serif italic text-lg sm:text-xl text-stone-300 max-w-sm">
              "Spaces Designed Around You."
            </p>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-md">
              A bespoke architectural interior studio based in Coimbatore, crafting refined residential villas, luxury sky-apartments, and character-driven commercial environments across South India.
            </p>
            
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                <span>Initiate A Commission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-mono">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Studio', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Selected Projects', path: '/projects' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs uppercase tracking-[0.16em] text-stone-300 hover:text-white transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-mono">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>Residential Interiors</li>
              <li>Villa Architecture</li>
              <li>Modern Apartments</li>
              <li>Commercial Spaces</li>
              <li>Turnkey Execution</li>
              <li>Modular Kitchens</li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-mono">
              Studio & Atelier
            </h4>
            <div className="space-y-2 text-xs text-stone-300 leading-relaxed font-light">
              <p>Race Course Road, Gopalapuram</p>
              <p>Coimbatore, Tamil Nadu 641018</p>
              <p className="text-stone-400">India</p>
            </div>

            <div className="pt-2 space-y-1.5 text-xs">
              <p>
                <a
                  href="mailto:hello@verrainteriors.demo"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  hello@verrainteriors.demo
                </a>
              </p>
              <p>
                <a
                  href="tel:+919000000000"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  +91 90000 00000
                </a>
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-4 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/30 transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/30 transition-all"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/30 transition-all"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/919000000000?text=Hi%20Verra%20Interiors%2C%20I'd%20like%20to%20discuss%20an%20interior%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-emerald-400 hover:border-emerald-400/40 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with subtle Webora Studio Concept Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-mono tracking-wider gap-4">
          <div>
            © 2026 Verra Interiors. All rights reserved.
          </div>

          {/* Concept Demo Indicator - discreet and elegant */}
          <div className="flex items-center space-x-2 text-stone-400 border border-white/10 px-3 py-1 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans">
              CONCEPT WEBSITE • WEBORA STUDIO
            </span>
          </div>

          <div className="flex items-center space-x-6 text-stone-400">
            <span>Coimbatore • Chennai • Bangalore</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
