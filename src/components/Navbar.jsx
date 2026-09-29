import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#181816]/8 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]'
            : 'bg-[#FBFBF9]/70 backdrop-blur-xs border-b border-[#181816]/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark (Inspo Inline Archetype) */}
          <Link
            to="/"
            className="group flex flex-col tracking-wider focus:outline-hidden"
          >
            <div className="flex items-center space-x-2.5">
              <span className="font-serif text-2xl sm:text-2xl font-light tracking-[0.24em] uppercase text-[#181816]">
                VERRA
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B37D4E] font-medium border-l border-[#181816]/15 pl-2.5">
                STUDIO
              </span>
            </div>
            <span className="text-[8.5px] font-mono tracking-[0.3em] uppercase text-[#736E66] transition-colors mt-0.5">
              Architecture & Interiors • Coimbatore
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#181816] font-semibold'
                      : 'text-[#736E66] hover:text-[#181816]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B37D4E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Utility Cluster */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-[11px] font-mono uppercase tracking-[0.2em] bg-[#181816] text-white hover:bg-[#B37D4E] transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#181816] hover:text-[#B37D4E] transition-colors focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#151412] text-white flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col"
          >
            <span className="font-serif text-xl tracking-[0.25em] text-white uppercase font-light">
              VERRA STUDIO
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-stone-400">
              Coimbatore • Tamil Nadu
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
            className="p-2 text-stone-300 hover:text-white"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Navigation List */}
        <div className="flex flex-col space-y-5 my-auto py-8">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline justify-between border-b border-white/5 pb-3"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-xs font-mono text-[#B37D4E]">0{idx + 1}</span>
                  <span
                    className={`font-serif text-3xl sm:text-4xl tracking-wide transition-colors ${
                      isActive ? 'text-white font-medium pl-2' : 'text-stone-300 group-hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone-500 group-hover:text-[#B37D4E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            );
          })}
        </div>

        {/* Mobile Footer Info & Quick CTA */}
        <div className="border-t border-white/10 pt-6 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3.5 bg-[#B37D4E] text-white text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center space-x-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-xs text-stone-400 pt-2">
            <span>Coimbatore, Tamil Nadu</span>
            <a
              href="https://wa.me/919000000000?text=Hi%20Verra%20Interiors%2C%20I'd%20like%20to%20discuss%20an%20interior%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-stone-300 hover:text-white"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Studio</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
