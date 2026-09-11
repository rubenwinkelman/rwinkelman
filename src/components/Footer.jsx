import React from 'react';
import { ArrowUp, Linkedin } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-surface border-t border-white/10 pt-16 pb-12 text-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-[#D44A29] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-brand-accent/20">
                R
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-sand">
                rwinkelman<span className="text-brand-accent">.nl</span>
              </span>
            </div>

            <p className="text-sm text-brand-sandMuted leading-relaxed">
              Onderscheidende websites op maat. Ik bouw eerst een gratis werkend voorbeeld om je enthousiast te maken en kom persoonlijk langs op locatie. Ben je enthousiast? Dan betaal je € 699,- en bouwen we jouw website compleet af.
            </p>

            <div className="flex items-center gap-4 text-xs text-brand-sandDim pt-2">
              <span>Persoonlijk bezoek op locatie</span>
              <span>&bull;</span>
              <span>Eerst zien, dan pas beslissen</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:min-w-[240px]">
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
                <a
                  href="https://www.linkedin.com/in/ruben-winkelman-902ba01b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn profiel</span>
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <span className="text-xs text-brand-sandDim block">
                  KvK: 86631020 &bull; Btw: NL004282307B29
                </span>
                <span className="text-xs text-brand-sandDim block">
                  Gevestigd in Drachten
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Required "powered by rwinkelman.nl" Directive */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-sandDim">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5">
            <span>&copy; {new Date().getFullYear()} rwinkelman.nl &bull; KvK: 86631020 &bull; Btw: NL004282307B29 &bull; Alle rechten voorbehouden.</span>
            <span className="hidden sm:inline">&bull;</span>
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal('voorwaarden')}
              className="hover:text-brand-sand transition-colors underline decoration-white/20 underline-offset-2 cursor-pointer"
            >
              Algemene Voorwaarden
            </button>
            <span>&bull;</span>
            <button
              type="button"
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-brand-sand transition-colors underline decoration-white/20 underline-offset-2 cursor-pointer"
            >
              Privacybeleid
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-brand-sandMuted hover:text-brand-accent transition-colors font-medium cursor-pointer"
              title="Terug naar boven"
            >
              <ArrowUp className="w-3.5 h-3.5 text-brand-accent" />
              <span>Naar boven</span>
            </button>
            <span>&bull;</span>
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

      </div>
    </footer>
  );
}
