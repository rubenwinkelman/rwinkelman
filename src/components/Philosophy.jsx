import React from 'react';
import { Palette, Check, Eye, Code2, Zap, Layout, ShieldCheck, Linkedin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Philosophy() {
  const containerRef = useScrollReveal();

  const technicalPoints = [
    {
      title: 'Schone & solide bouw',
      description: 'Volledig met de hand gebouwd in heldere code. Geen knip-en-plakwerk, maar een website die jarenlang snel, stabiel en veilig blijft.'
    },
    {
      title: 'Directe laadsnelheid',
      description: 'Elke pagina verschijnt in een oogwenk op het scherm. Bezoekers hoeven nooit te wachten en vinden meteen wat ze zoeken.'
    },
    {
      title: 'Perfect op elk scherm',
      description: 'Van smartphone en tablet tot laptop en breedbeeldmonitor: overal haarscherp, overzichtelijk en gemakkelijk te bedienen.'
    }
  ];

  const creativePoints = [
    {
      title: 'Uniek maatwerk',
      description: 'Geen standaard sjablonen die iedereen al heeft, maar een eigen stijl met passende kleuren, een rustige indeling en een herkenbaar gezicht.'
    },
    {
      title: 'Duidelijk voor de bezoeker',
      description: 'We nemen twijfels bij je bezoeker meteen weg. Heldere informatie en logische stappen zorgen dat klanten sneller contact opnemen.'
    },
    {
      title: 'Heldere en eerlijke taal',
      description: 'Geen ingewikkelde vaktermen of loze kreten, maar begrijpelijke taal die jouw klanten direct aanspreekt en overtuigt.'
    }
  ];

  return (
    <section ref={containerRef} id="filosofie" className="py-24 md:py-32 relative bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="philosophy-header reveal-item max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            De Filosofie
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Waarom techniek en creativiteit onafscheidelijk zijn.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Veel websites zijn ofwel technisch sterk maar saai en zielloos, óf visueel opvallend maar traag en gebruiksonvriendelijk. Bij rwinkelman.nl komen beide werelden samen.
          </p>
        </div>

        {/* The Two Halves: Technical Precision vs Creative Mastery */}
        <div className="philosophy-grid grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Technical Precision */}
          <div className="philosophy-card-tech reveal-item delay-1 bg-brand-surface/90 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-white/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-brand-sand" />
                </div>
                <span className="text-xs font-semibold text-brand-sandDim uppercase tracking-wider">
                  Fundament &amp; snelheid
                </span>
              </div>

              <h3 className="text-2xl font-bold text-brand-sand mb-3">
                1. Doordachte techniek
              </h3>
              <p className="text-sm text-brand-sandMuted mb-6 leading-relaxed">
                De motor onder de motorkap. Jouw website wordt van de grond af opgebouwd in zuivere code, zonder trage systemen of overbodige toevoegingen die je website vertragen.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                {technicalPoints.map((point, idx) => (
                  <div key={idx} className="philosophy-point flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-md bg-brand-dark border border-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-brand-sand">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-sand">{point.title}</h4>
                      <p className="text-xs text-brand-sandMuted leading-relaxed mt-0.5">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-brand-sandDim">
              Resultaat: Razendsnel, veilig en betrouwbaar op elk apparaat.
            </div>
          </div>

          {/* Card 2: Creative Mastery */}
          <div className="philosophy-card-creative reveal-item delay-2 bg-brand-surface/90 border border-brand-accent/30 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-accent/60 transition-all duration-300 relative shadow-xl shadow-brand-accent/5 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-accentLight border border-brand-accentBorder flex items-center justify-center">
                  <Palette className="w-6 h-6 text-brand-accent" />
                </div>
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                  Uitstraling &amp; vertrouwen
                </span>
              </div>

              <h3 className="text-2xl font-bold text-brand-sand mb-3">
                2. Karakter &amp; overtuiging
              </h3>
              <p className="text-sm text-brand-sandMuted mb-6 leading-relaxed">
                Een sterke website begint met een scherp oog voor stijl. We vertalen jouw bedrijf naar een uitstraling die direct autoriteit uitstraalt en vertrouwen wekt.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                {creativePoints.map((point, idx) => (
                  <div key={idx} className="philosophy-point flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-md bg-brand-accentLight border border-brand-accentBorder flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-sand">{point.title}</h4>
                      <p className="text-xs text-brand-sandMuted leading-relaxed mt-0.5">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-brand-accent font-medium">
              Resultaat: Een herkenbaar merk dat vertrouwen wekt en klanten oplevert.
            </div>
          </div>

        </div>

        {/* Manifesto / Quote Box */}
        <div className="philosophy-quote reveal-item delay-1 rounded-2xl p-8 md:p-10 bg-gradient-to-r from-brand-surface via-brand-elevated to-brand-surface border border-white/10 shadow-xl">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-accent/15 border border-brand-accentBorder flex items-center justify-center flex-shrink-0">
              <Eye className="w-8 h-8 text-brand-accent" />
            </div>
            <div>
              <blockquote className="text-lg md:text-xl font-medium text-brand-sand leading-relaxed">
                &ldquo;Een goede website is geen technisch trucje en ook geen hol sjabloon. Het is de balans tussen zuivere code die direct laadt, en een uitstraling die jouw bezoeker raakt en overtuigt.&rdquo;
              </blockquote>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="font-bold text-brand-sand">Ruben Winkelman</span>
                <span className="text-brand-sandDim">&bull;</span>
                <span className="text-brand-sandMuted">Oprichter &amp; Webmaker</span>
                <span className="text-brand-sandDim">&bull;</span>
                <a
                  href="https://www.linkedin.com/in/ruben-winkelman-902ba01b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-sandDim hover:text-[#0A66C2] transition-colors"
                  aria-label="LinkedIn profiel van Ruben Winkelman"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
