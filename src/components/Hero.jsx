import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles, SlidersHorizontal, Users, MapPin, Eye } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('rwinkelman');

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-br from-brand-accent/20 via-brand-accent/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-brand-sand/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Headline (Clean, no floating pill badge) */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-sand leading-[1.08] mb-6">
            Eerst zien, dan pas beslissen.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-[#FA8B60] to-brand-sand">
              Jouw website op maat.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-brand-sandMuted leading-relaxed max-w-2xl mx-auto font-normal">
            Vraag vrijblijvend een offerte aan. Ik bouw een werkende voorbeeldwebsite om je enthousiast te maken en <span className="text-brand-sand font-semibold">kom persoonlijk bij je langs</span> om het te laten zien. Ben je enthousiast? Dan betaal je <span className="text-brand-accent font-bold">€ 299,-</span> en maken we de website samen <span className="text-brand-sand font-semibold">tot in de puntjes compleet af</span>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95 group"
          >
            <span>Vraag een gratis voorbeeld aan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#werkwijze"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-white/10 text-brand-sand font-medium text-base transition-all duration-200 hover:border-white/20"
          >
            <span>Bekijk hoe ik werk (€ 299,-)</span>
          </a>
        </div>

        {/* Interactive Comparison Component */}
        <div className="max-w-4xl mx-auto bg-brand-surface/90 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          {/* Segmented Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-lg font-bold text-brand-sand">
                Vergelijk het risico:
              </h2>
              <p className="text-xs text-brand-sandDim">
                Waarom vooraf duizenden euro's betalen als je eerst een werkende demo kunt zien?
              </p>
            </div>

            {/* Custom Tab Selector */}
            <div className="grid grid-cols-3 p-1.5 rounded-xl bg-brand-dark/80 border border-white/5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('bureau')}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'bureau'
                    ? 'bg-brand-card text-brand-sand shadow-sm border border-white/10'
                    : 'text-brand-sandDim hover:text-brand-sand'
                }`}
              >
                1. Traditioneel Bureau
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('template')}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'template'
                    ? 'bg-brand-card text-brand-sand shadow-sm border border-white/10'
                    : 'text-brand-sandDim hover:text-brand-sand'
                }`}
              >
                2. Zelf Klungelen
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('rwinkelman')}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'rwinkelman'
                    ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25'
                    : 'text-brand-sandDim hover:text-brand-sand'
                }`}
              >
                3. rwinkelman.nl
              </button>
            </div>
          </div>

          {/* Dynamic Content Display */}
          <div className="pt-6">
            {activeTab === 'bureau' && (
              <div className="grid md:grid-cols-2 gap-6 items-center animate-in fade-in duration-200">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Traditioneel Reclamebureau
                  </div>
                  <h3 className="text-xl font-bold text-brand-sand">
                    Grote beloftes, maar vooraf betalen
                  </h3>
                  <p className="text-sm text-brand-sandMuted leading-relaxed">
                    Een bureau vraagt je vaak direct duizenden euro's aan te betalen voordat je ook maar één pixel hebt gezien. Vervolgens wacht je wekenlang, spreek je alleen accountmanagers en betaal je de hoofdprijs voor elke kleine wijziging.
                  </p>
                </div>
                <div className="bg-brand-dark/70 rounded-xl p-5 border border-white/5 space-y-3">
                  <div className="text-xs text-brand-sandDim uppercase tracking-wider font-semibold">Het risico voor jou:</div>
                  <div className="flex items-center gap-3 text-sm text-amber-400/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
                    <span>Vooraf duizenden euro's aanbetalen</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-amber-400/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
                    <span>Geen garantie dat het resultaat bevalt</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-amber-400/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
                    <span>Dure uurtarieven voor elk stukje onderhoud</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'template' && (
              <div className="grid md:grid-cols-2 gap-6 items-center animate-in fade-in duration-200">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Zelfbouw &amp; WordPress Plugins
                  </div>
                  <h3 className="text-xl font-bold text-brand-sand">
                    Eindeloze uren frustratie
                  </h3>
                  <p className="text-sm text-brand-sandMuted leading-relaxed">
                    Zelf aan de slag met pagebuilders klinkt voordelig, maar kost je tientallen kostbare ondernemersuren. De lay-out breekt op telefoons, plugins botsen met elkaar en bij elke gewenste wijziging moet je zelf weer puzzelen.
                  </p>
                </div>
                <div className="bg-brand-dark/70 rounded-xl p-5 border border-white/5 space-y-3">
                  <div className="text-xs text-brand-sandDim uppercase tracking-wider font-semibold">De frustratie:</div>
                  <div className="flex items-center gap-3 text-sm text-amber-400/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
                    <span>Urenlang zelf knutselen aan instellingen</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-amber-400/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
                    <span>Trage website en kapotte updates</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-amber-400/90">
                    <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
                    <span>Geen professionele uitstraling die autoriteit wekt</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rwinkelman' && (
              <div className="grid md:grid-cols-2 gap-6 items-center animate-in fade-in duration-200">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                    Het Model van rwinkelman.nl
                  </div>
                  <h3 className="text-xl font-bold text-brand-sand">
                    Persoonlijke demo &bull; Pas betalen bij enthousiasme
                  </h3>
                  <p className="text-sm text-brand-sandMuted leading-relaxed">
                    Ik bouw eerst een voorbeeld om je enthousiast te maken en kom persoonlijk bij je langs. Bevalt het niet? Dan betaal je niets. Ben je enthousiast? Dan betaal je € 299,- en maken we de website samen tot in de puntjes compleet af, inclusief hosting en maandelijks contentbeheer voor € 29,99/mnd.
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
                    <span>€ 299,- pas betalen als je enthousiast bent</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>Daarna maken we de website tot in de puntjes af</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-accent">€ 0,- Vooraf</div>
            <div className="text-xs text-brand-sandDim mt-1">Gratis voorbeeld op locatie</div>
          </div>
          <div className="p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-sand">€ 299,-</div>
            <div className="text-xs text-brand-sandDim mt-1">Bij enthousiaste demo</div>
          </div>
          <div className="p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-sand">Tot in Puntjes</div>
            <div className="text-xs text-brand-sandDim mt-1">Volledig op maat afgebouwd</div>
          </div>
          <div className="p-4 rounded-xl bg-brand-surface/60 border border-white/5">
            <div className="text-2xl lg:text-3xl font-bold text-brand-mint">€ 29,99 /m</div>
            <div className="text-xs text-brand-sandDim mt-1">Hosting + 1-10 wijzigingen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
