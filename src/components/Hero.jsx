import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles, SlidersHorizontal, Users, MapPin, Eye } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('rwinkelman');

  return (
    <section className="relative pt-36 pb-16 sm:pt-40 sm:pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Warm Ambient Radial Glows (Zero GPU blur overhead) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(240,101,67,0.18)_0%,_transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(244,236,225,0.06)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          <h1 className="anim-hero-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-sand leading-[1.12] sm:leading-[1.1] mb-4 sm:mb-6">
            <span className="block">
              Eerst zien,<br className="sm:hidden" /> dan pas beslissen.
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-[#FA8B60] to-brand-sand">
              Jouw website op maat.
            </span>
          </h1>

          <p className="anim-hero-2 text-sm sm:text-base md:text-lg text-brand-sandMuted leading-relaxed max-w-2xl mx-auto font-normal [text-wrap:balance]">
            Ik bouw vooraf een werkend voorstel voor jouw bedrijf en <span className="text-brand-sand font-semibold">kom het persoonlijk demonstreren</span>. Bevalt het? Dan maken we het voor <span className="text-brand-accent font-bold">€ 399,-</span> compleet af. Niet overtuigd? Dan kost het je <span className="text-brand-sand font-semibold">€ 0,-</span>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="anim-hero-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95 group"
          >
            <span>Vraag een gratis voorbeeld aan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#werkwijze"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-white/10 text-brand-sand font-medium text-sm sm:text-base transition-all duration-200 hover:border-white/20"
          >
            <span>Bekijk hoe ik werk (€ 399,-)</span>
          </a>
        </div>

        {/* Interactive Comparison Component */}
        <div className="anim-hero-4 max-w-4xl mx-auto bg-brand-surface/90 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          {/* Segmented Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-brand-sand">
                Vergelijk het risico:
              </h2>
              <p className="text-xs text-brand-sandDim">
                Waarom vooraf duizenden euro's betalen als je eerst een werkende demo kunt zien?
              </p>
            </div>

            {/* Custom Tab Selector */}
            <div className="grid grid-cols-3 p-1 rounded-xl bg-brand-dark/80 border border-white/5 w-full sm:w-auto text-center">
              <button
                type="button"
                onClick={() => setActiveTab('traditioneel')}
                className={`px-2 sm:px-3 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 ${
                  activeTab === 'traditioneel'
                    ? 'bg-brand-elevated text-white shadow-sm'
                    : 'text-brand-sandDim hover:text-brand-sand'
                }`}
              >
                <span className="hidden sm:inline">Traditioneel </span>Bureau
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('zelf')}
                className={`px-2 sm:px-3 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 ${
                  activeTab === 'zelf'
                    ? 'bg-brand-elevated text-white shadow-sm'
                    : 'text-brand-sandDim hover:text-brand-sand'
                }`}
              >
                <span className="hidden sm:inline">Zelf </span>Klungelen
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('rwinkelman')}
                className={`px-2 sm:px-3 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 ${
                  activeTab === 'rwinkelman'
                    ? 'bg-brand-accent text-white shadow-md'
                    : 'text-brand-sandDim hover:text-brand-sand'
                }`}
              >
                rwinkelman.nl
              </button>
            </div>
          </div>

          {/* Tab Content Panels */}
          <div className="pt-6">
            {activeTab === 'traditioneel' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Hoog financieel risico, trage doorlooptijd</span>
                </div>
                <h3 className="text-xl font-bold text-brand-sand">
                  Offertes van € 2.500 tot € 7.500 vooraf betalen
                </h3>
                <p className="text-sm text-brand-sandMuted leading-relaxed">
                  Je betaalt vaak 50% aanbetaling voordat je ook maar één pixel hebt gezien. Vervolgens zit je in eindeloze feedbackrondes, bureaucratische meetings en duurt het maanden voordat er iets live staat.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-brand-sandDim">
                  <div>✗ Weken wachten op een offerte</div>
                  <div>✗ Hoge aanbetaling zonder garanties</div>
                  <div>✗ Complexe CMS-systemen</div>
                  <div>✗ Extra facturen voor elke kleine wijziging</div>
                </div>
              </div>
            )}

            {activeTab === 'zelf' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Tijdrovend, frustrerend en vaak net niet professioneel</span>
                </div>
                <h3 className="text-xl font-bold text-brand-sand">
                  Uren stoeien met WordPress, Wix of Squarespace
                </h3>
                <p className="text-sm text-brand-sandMuted leading-relaxed">
                  Het lijkt goedkoop, maar je verliest kostbare avonden en weekenden aan verspringende knoppen, trage templates en mobiele weergaves die niet kloppen. Het eindresultaat straalt zelden de autoriteit uit die je bedrijf verdient.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-brand-sandDim">
                  <div>✗ Tientallen uren eigen tijd kwijt</div>
                  <div>✗ Trage laadtijden door zware pagebuilders</div>
                  <div>✗ Ziet er vaak uit als een standaard template</div>
                  <div>✗ Zelf verantwoordelijk voor beveiliging &amp; updates</div>
                </div>
              </div>
            )}

            {activeTab === 'rwinkelman' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-brand-accent text-sm font-semibold mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>De Slimste &amp; Meest Eerlijke Route</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-sand">
                    Persoonlijke demo &bull; Pas betalen bij enthousiasme
                  </h3>
                  <p className="text-sm text-brand-sandMuted leading-relaxed">
                    Ik bouw eerst een voorbeeld om je enthousiast te maken en kom persoonlijk bij je langs. Bevalt het niet? Dan betaal je niets. Ben je enthousiast? Dan betaal je € 399,- en maken we de website samen tot in de puntjes compleet af, inclusief hosting en maandelijks contentbeheer voor € 29,99/mnd.
                  </p>
                </div>
                <div className="bg-brand-elevated/90 rounded-xl p-5 border border-brand-accentBorder space-y-3">
                  <div className="text-xs text-brand-accent uppercase tracking-wider font-semibold">Jouw voordelen:</div>
                  <div className="flex items-center gap-3 text-sm text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>Persoonlijke demo op jouw kantoor of locatie</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>€ 399,- pas betalen als je enthousiast bent</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>Daarna maken we de website tot in de puntjes af</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>Volledig ontzorgd als er in de toekomst wijzigingen moeten komen op de website</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto text-center">
          <div className="hero-stat p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-accent">€ 0,- Vooraf</div>
            <div className="text-xs text-brand-sandDim mt-1">Gratis voorbeeld op locatie</div>
          </div>
          <div className="hero-stat p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-sand">€ 399,-</div>
            <div className="text-xs text-brand-sandDim mt-1">Bij enthousiaste demo</div>
          </div>
          <div className="hero-stat p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-sand">Tot in Puntjes</div>
            <div className="text-xs text-brand-sandDim mt-1">Volledig op maat afgebouwd</div>
          </div>
          <div className="hero-stat p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-mint">€ 29,99 /m</div>
            <div className="text-xs text-brand-sandDim mt-1">Hosting + 1-10 wijzigingen</div>
          </div>
        </div>

      </div>
    </section>
  );
}
