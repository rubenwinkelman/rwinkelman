import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-surface border-t border-white/10 pt-16 pb-12 text-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-[#D44A29] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-brand-accent/20">
                R
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-sand">
                rwinkelman<span className="text-brand-accent">.nl</span>
              </span>
            </div>

            <p className="text-sm text-brand-sandMuted max-w-md leading-relaxed">
              Onderscheidende websites op maat. Ik bouw eerst een gratis werkend voorbeeld om je enthousiast te maken en kom persoonlijk langs op locatie. Ben je enthousiast? Dan betaal je € 399,- en bouwen we jouw website compleet af.
            </p>

            <div className="flex items-center gap-4 text-xs text-brand-sandDim pt-2">
              <span>Persoonlijk bezoek op locatie</span>
              <span>&bull;</span>
              <span>Eerst zien, dan pas beslissen</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-sand mb-4">
              Navigatie
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-sandMuted">
              <li>
                <a href="#werkwijze" className="hover:text-brand-sand transition-colors">
                  Werkwijze (Persoonlijk Bezoek)
                </a>
              </li>
              <li>
                <a href="#tarieven" className="hover:text-brand-sand transition-colors">
                  Tarieven (€ 399,- &amp; Beheer)
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-brand-sand transition-colors">
                  Showcase &amp; Voorbeelden
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-sand transition-colors">
                  Direct Contact Opnemen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-sand mb-4">
              Contact &amp; Kennismaking
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-sandMuted">
              <li>
                <a href="mailto:ruben.winkelman@outlook.com" className="hover:text-brand-accent transition-colors">
                  ruben.winkelman@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31683589410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +31 6 83589410
                </a>
              </li>
              <li>
                <span className="text-xs text-brand-sandDim block mt-1">
                  KvK-nummer: 86631020
                </span>
              </li>
              <li>
                <span className="text-xs text-brand-sandDim block">
                  Maandag t/m Vrijdag: 09:00 &ndash; 18:00
                </span>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-xs text-brand-sand hover:text-brand-accent transition-colors font-medium"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Terug naar boven</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Required "powered by rwinkelman.nl" Directive */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-sandDim">
          <div>
            &copy; {new Date().getFullYear()} rwinkelman.nl &bull; KvK: 86631020 &bull; Alle rechten voorbehouden.
          </div>

          {/* Mandatory rule implementation: Powered by rwinkelman.nl with bold highlighted clickable link */}
          <div className="flex items-center gap-1.5">
            <span>Powered by</span>
            <a
              href="https://rwinkelman.nl"
              className="font-bold text-brand-accent hover:text-brand-accentHover transition-colors underline decoration-brand-accent/40 underline-offset-4"
            >
              rwinkelman.nl
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
