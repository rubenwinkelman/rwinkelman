import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Werkwijze', href: '#werkwijze' },
    { name: 'Tarieven', href: '#tarieven' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? 'pt-3 px-4 sm:px-6 md:px-8' : 'pt-5 px-4 sm:px-6 md:px-8'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ease-out border rounded-2xl px-5 sm:px-7 ${
          isScrolled
            ? 'bg-[#121620]/95 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/70 py-3'
            : 'bg-[#121620]/60 backdrop-blur-xl border-white/10 py-4 shadow-lg shadow-black/20'
        }`}
      >
        {/* Brand identity */}
        <a
          href="#"
          className="group flex items-center gap-3 text-brand-sand tracking-tight transition-colors py-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accent to-[#D44A29] flex items-center justify-center shadow-lg shadow-brand-accent/25 group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
            <span className="text-white font-bold text-base tracking-wider">R</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-lg leading-tight tracking-tight text-brand-sand group-hover:text-white transition-colors">
              rwinkelman<span className="text-brand-accent">.nl</span>
            </span>
            <span className="text-[11px] text-brand-sandDim font-medium tracking-wide leading-tight mt-0.5">
              Websites &bull; Persoonlijk op Locatie
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-sandMuted">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-brand-sand transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right action area */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95"
          >
            <span>Vraag voorbeeld aan</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-lg bg-brand-accent text-white text-xs font-semibold"
          >
            Voorbeeld
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu openen"
            className="p-2 rounded-lg bg-brand-elevated border border-white/10 text-brand-sand hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-5 bg-brand-surface/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-brand-sand font-medium hover:bg-brand-elevated hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-accent text-white text-sm font-semibold"
              >
                <span>Vraag gratis voorbeeld aan</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
