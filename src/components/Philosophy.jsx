import React from 'react';
import { Palette, Check, Code2, Zap, Layout, ShieldCheck, ExternalLink, Gauge, Search, Sparkles } from 'lucide-react';
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
    <section ref={containerRef} id="visie" className="py-24 md:py-32 relative bg-brand-dark overflow-hidden isolate">
      {/* Warm Ambient Breathing Glow */}
      <div className="anim-ambient-glow-1 absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(240,101,67,0.18)_0%,_rgba(240,101,67,0.04)_50%,_transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="philosophy-header reveal-item max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Onze visie
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Waarom techniek en creativiteit onafscheidelijk zijn.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Veel websites zijn ofwel technisch sterk maar saai en zielloos, óf visueel opvallend maar traag en gebruiksonvriendelijk. Bij rwinkelman.nl komen beide werelden samen.
          </p>
        </div>

        {/* The Two Halves: Technical Precision vs Creative Mastery */}
        <div className="philosophy-grid grid lg:grid-cols-2 gap-8 mb-12">
          
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

        {/* Feature Spotlight: 100/100 Google PageSpeed & SEO Proof */}
        <div className="philosophy-proof reveal-item delay-3 bg-brand-surface/95 border border-emerald-500/25 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle green ambient accent behind the card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left: Text, metrics & value */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                Bewezen Google PageSpeed &amp; SEO
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-sand tracking-tight leading-tight">
                  Niet alleen mooie beloftes. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-brand-sand">
                    Zwart-op-wit maximale performance.
                  </span>
                </h3>
                <p className="mt-4 text-sm sm:text-base text-brand-sandMuted leading-relaxed">
                  Veel bureaus leveren trage sjablonen af die 4 tot 6 seconden nodig hebben om te laden. Wij ontwikkelen elke website volledig op maat met moderne frameworks en ultra-lichte code. Het resultaat? Een perfecte score op <span className="text-brand-sand font-semibold">Google PageSpeed</span> en <span className="text-brand-sand font-semibold">SEO-vindbaarheid</span>.
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">0,6s</div>
                  <div className="text-[11px] text-brand-sandDim font-medium mt-0.5">Laadtijd (FCP)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100</div>
                  <div className="text-[11px] text-brand-sandDim font-medium mt-0.5">Google SEO</div>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">0 ms</div>
                  <div className="text-[11px] text-brand-sandDim font-medium mt-0.5">Wachttijd (TBT)</div>
                </div>
              </div>

              {/* Direct Live Test Link */}
              <div className="pt-2">
                <a
                  href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.rwinkelman.nl%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
                >
                  <span>Test onze live score zelf op Google PageSpeed</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right: Clean Image Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group/img bg-brand-dark/60">
                <img
                  src="/pagespeed-score.png"
                  alt="Officiële Google PageSpeed 100/100 score van rwinkelman.nl"
                  className="w-full h-auto block brightness-[0.84] contrast-[0.98] saturate-[0.92] group-hover/img:brightness-[0.95] transition-all duration-300"
                  loading="lazy"
                  width="750"
                  height="585"
                />
                {/* Soft atmospheric dark tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/40 via-transparent to-[#0A0C10]/20 pointer-events-none rounded-2xl" />
                {/* Subtle warm accent border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
