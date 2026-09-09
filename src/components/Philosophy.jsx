import React from 'react';
import { Palette, Check, Eye, Code2, Zap, Layout, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Philosophy() {
  const containerRef = useScrollReveal();

  const technicalPoints = [
    {
      title: 'Vlijmscherpe Code-architectuur',
      description: 'Handgeschreven, moderne Tailwind-componenten zonder overtollige plugins of trage bibliotheken. Schone markup die jarenlang meegaat.'
    },
    {
      title: 'Extreme Laadsnelheid (Lighthouse 95+)',
      description: 'Directe optimalisatie voor Core Web Vitals. Bezoekers hebben geen geduld; een snelle website converteert direct beter.'
    },
    {
      title: 'Feilloze Responsiviteit & Toegankelijkheid',
      description: 'Elk schermformaat &mdash; van smartphone tot ultrawide monitor &mdash; wordt met pixelprecisie getest en geoptimaliseerd.'
    }
  ];

  const creativePoints = [
    {
      title: 'Bespoke Art Direction & Kleurengevoel',
      description: 'Een website moet je merk ademen. Geen voorgebakken sjablonen, maar doordachte typografie, witruimte en visuele hiërarchie.'
    },
    {
      title: 'Conversiepsychologie & Empathie',
      description: 'Begrijpen wat jouw klanten beweegt en twijfels wegnemen. Een bezoeker koopt niet van functies, maar van helderheid en vertrouwen.'
    },
    {
      title: 'Tekst & Toon die Raakt',
      description: 'Geen holle marketingspreuken of containerbegrippen, maar krachtige, heldere teksten die meteen duidelijk maken wat je waard bent.'
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
                  Fundament &amp; Snelheid
                </span>
              </div>

              <h3 className="text-2xl font-bold text-brand-sand mb-3">
                1. Vlijmscherpe Techniek
              </h3>
              <p className="text-sm text-brand-sandMuted mb-6 leading-relaxed">
                De motor onder de motorkap. We bouwen met de modernste frontend-standaarden, zonder de ballast van logge pagebuilders of honderden plugins.
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
              Focus: Bliksemsnel, veilig, schaalbaar en feilloos op ieder apparaat.
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
                  Smaak, Emotie &amp; Strategie
                </span>
              </div>

              <h3 className="text-2xl font-bold text-brand-sand mb-3">
                2. Menselijk Meesterschap
              </h3>
              <p className="text-sm text-brand-sandMuted mb-6 leading-relaxed">
                Het oog van de ontwerper bepaalt wat stijlvol is. We vertalen jouw ambities naar een uitstraling die autoriteit uitstraalt en direct vertrouwen wekt.
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
              Focus: Onderscheidend vermogen, merkbeleving en maximale conversie.
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
                &ldquo;Een goede website is geen wiskundig trucje en ook geen holle template. Het is de harmonie tussen vlijmscherpe code die direct laadt, en een uitstraling die jouw bezoeker raakt en overtuigt.&rdquo;
              </blockquote>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <span className="font-bold text-brand-sand">Ruben Winkelman</span>
                <span className="text-brand-sandDim">&bull;</span>
                <span className="text-brand-sandMuted">Oprichter &amp; Webmaker</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
