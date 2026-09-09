import React from 'react';
import { Check, ShieldCheck, Sparkles, Server, MessageSquare, ArrowRight, Clock, HelpCircle, RefreshCw, Lock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PricingSection() {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} id="tarieven" className="py-24 md:py-32 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="pricing-header reveal-item max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Tarieven &amp; Investering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Eerst zien, pas betalen als je enthousiast bent.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Geen torenhoge offertes vooraf. Ik maak eerst een werkend voorbeeld om je enthousiast te maken en kom persoonlijk langs. Ben je enthousiast? Dan betaal je € 399,- en bouwen we jouw website compleet af.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Eenmalige Oplevering */}
          <div className="pricing-card reveal-item delay-1 bg-brand-surface border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative shadow-xl hover:-translate-y-1">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-sandDim mb-2">
                Stap 1: Demonstratie &amp; Bouw
              </div>

              <h3 className="text-2xl font-bold text-brand-sand">
                Website Bouw &amp; Afronding
              </h3>
              <p className="text-xs text-brand-sandMuted mt-1 mb-6 leading-relaxed">
                Een professionele, onderscheidende website die jouw merk direct autoriteit geeft.
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold text-brand-sand">€ 399</span>
                <span className="text-xs text-brand-sandDim uppercase tracking-wider font-semibold">eenmalig</span>
              </div>
              <div className="text-xs text-emerald-400 font-semibold mb-6 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Te betalen als je enthousiast bent bij de demonstratie op locatie</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Vrijblijvende voorbeeldwebsite vooraf gebouwd</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Persoonlijke presentatie &amp; demonstratie op jouw locatie</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand font-semibold text-brand-accent">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Bij akkoord direct compleet voor jou ingericht en opgeleverd</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Alle pagina's, teksten, afbeeldingen en formulieren ingericht</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Bliksemsnel ladend &amp; perfect op ieder beeldscherm</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href="#contact"
                className="w-full py-3.5 rounded-xl bg-brand-elevated hover:bg-brand-card border border-white/15 text-brand-sand font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:text-white"
              >
                <span>Vraag gratis voorbeeld aan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Zorgeloos Hosting & Contentbeheer */}
          <div className="pricing-card reveal-item delay-2 bg-brand-surface border-2 border-brand-accent/60 rounded-2xl p-8 flex flex-col justify-between hover:border-brand-accent transition-all duration-300 relative shadow-2xl shadow-brand-accent/10 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  Stap 2: Beheer &amp; Onderhoud
                </div>
                <span className="text-[11px] font-semibold text-brand-accent">
                  100% Ontzorgd
                </span>
              </div>

              <h3 className="text-2xl font-bold text-brand-sand">
                Hosting &amp; Actief Contentbeheer
              </h3>
              
              <div className="text-xs text-brand-accent font-medium mt-1 mb-4 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-accent" />
                <span>Exclusief voor door mijzelf gebouwde websites</span>
              </div>

              <p className="text-xs text-brand-sandMuted mb-6 leading-relaxed">
                Omdat ik jouw website zelf van de grond af opbouw in zuivere code, kan ik feilloze laadtijden, topbeveiliging en directe verwerking van al je wijzigingen garanderen.
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold text-brand-sand">€ 29<span className="text-3xl">,99</span></span>
                <span className="text-xs text-brand-sandDim uppercase tracking-wider font-semibold">per maand</span>
              </div>
              <div className="text-xs text-brand-sandDim mb-6 flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-brand-accent" />
                <span>Volledige flexibiliteit &bull; Maandelijks opzegbaar</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-brand-accent">
                    Inclusief 1 tot 10 contentwijzigingen per maand
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Teksten wijzigen, foto's toevoegen, acties &amp; openingstijden updaten</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Eenvoudig doorgeven via één appje of mailtje</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Supersnelle premium webhosting &amp; SSL-beveiliging</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-brand-sand">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Dagelijkse back-ups, uptime-monitoring &amp; technisch onderhoud</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href="#contact"
                className="w-full py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-sm transition-all shadow-lg shadow-brand-accent/25 flex items-center justify-center gap-2"
              >
                <span>Plan een vrijblijvende kennismaking</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="pricing-reassurance reveal-item delay-1 max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-brand-surface/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-accentLight border border-brand-accentBorder flex items-center justify-center text-brand-accent flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-sand">
                Niet enthousiast na de demonstratie?
              </h4>
              <p className="text-xs text-brand-sandMuted mt-0.5">
                Dan betaal je helemaal niets. Geen factuur, geen verplichtingen. Alle risico ligt bij mij.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-white/15 text-brand-sand font-semibold text-xs transition-colors"
          >
            Vraag je voorbeeld aan
          </a>
        </div>

      </div>
    </section>
  );
}
