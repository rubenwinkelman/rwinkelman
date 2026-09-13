import React from 'react';
import { MessageSquare, Laptop, Sparkles, Rocket, Clock, CheckCircle, MapPin, RefreshCw } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Workflow() {
  const containerRef = useScrollReveal();

  const steps = [
    {
      step: '01',
      title: 'Vrijblijvende aanvraag',
      subtitle: 'Geen verplichtingen, direct contact',
      icon: MessageSquare,
      leadTime: 'Stap 1',
      description: 'Vraag jouw persoonlijke voorbeeldwebsite eenvoudig aan via het formulier of WhatsApp. Vertel kort wie je bent en wat je zoekt. Dit kost je nog helemaal niets.',
      highlights: ['Direct persoonlijk contact', 'Korte inventarisatie van je wensen', 'Geen vooruitbetaling nodig']
    },
    {
      step: '02',
      title: 'Voorbeeldwebsite op maat',
      subtitle: 'Persoonlijke demo op jouw locatie',
      icon: Laptop,
      leadTime: 'Stap 2',
      description: 'Wij maken eerst een professionele voorbeeldwebsite die volledig is afgestemd op jouw bedrijf. Ik kom persoonlijk bij je langs om het interactieve concept live te laten zien.',
      highlights: ['Volledig afgestemd op jouw bedrijf', 'Persoonlijke demo op locatie', 'Eerst zien. Dan beslissen.']
    },
    {
      step: '03',
      title: 'Bevalt het? Afbouwen voor € 699,-',
      subtitle: 'No cure, no pay garantie',
      icon: Sparkles,
      leadTime: 'Stap 3',
      description: 'Bevalt het ontwerp? Dan bouwen we hem compleet af voor € 699,- (excl. btw): alle pagina’s, afbeeldingen, teksten en formulieren tot in detail ingericht. Niet overtuigd van de website of onze aanpak? No cure, no pay.',
      highlights: ['Afbouwen voor € 699,- excl. btw', 'No cure, no pay (€ 0,-)', 'Pas betalen bij akkoord']
    },
    {
      step: '04',
      title: 'Onderhoud & aanpassingen uit handen',
      subtitle: 'Zorgeloos beheer & hosting (€ 29,99/mnd)',
      icon: RefreshCw,
      leadTime: 'Stap 4',
      description: 'We nemen ook al het onderhoud en de aanpassingen volledig uit handen. Wil je teksten updaten, foto’s wijzigen of een actie plaatsen? Je hebt 1 tot 10 wijzigingen per maand inbegrepen. Eén appje en het is gefixt.',
      highlights: ['Onderhoud volledig uit handen', '1 tot 10 wijzigingen per maand', 'Altijd direct contact via WhatsApp']
    }
  ];

  return (
    <section ref={containerRef} id="werkwijze" className="py-24 md:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="workflow-header reveal-item max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Eerst Zien. Dan Beslissen.
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Wij maken eerst een professionele voorbeeldwebsite.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Volledig afgestemd op jouw bedrijf, zodat je precies ziet wat je krijgt vóór je ergens aan vastzit. In 4 transparante stappen naar een converterende website:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="workflow-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const delayClass = idx === 0 ? 'delay-1' : idx === 1 ? 'delay-2' : idx === 2 ? 'delay-3' : 'delay-4';
            return (
              <div
                key={idx}
                className={`workflow-card reveal-item ${delayClass} p-6 rounded-2xl bg-brand-surface/70 border border-white/10 hover:border-brand-accent/40 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-brand-sandDim group-hover:text-brand-accent transition-colors">
                      {item.step}
                    </span>
                    <div className="text-xs font-semibold text-brand-sandDim flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-accent" />
                      <span>{item.leadTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-brand-sand mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs text-brand-accent font-medium mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-brand-sandMuted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-brand-sandDim">
                      <CheckCircle className="w-3 h-3 text-brand-accent flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="workflow-banner reveal-item delay-2 mt-12 p-6 rounded-xl bg-brand-surface border border-brand-accentBorder flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-sand">
                Benieuwd naar een voorbeeld voor jouw bedrijf?
              </h4>
              <p className="text-xs text-brand-sandMuted">
                Ik ontwerp vooraf vrijblijvend een concept en kom het je persoonlijk laten zien. Zonder kosten of verplichtingen.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accentHover text-white text-xs font-semibold transition-colors"
          >
            Vraag je gratis voorbeeld aan
          </a>
        </div>

      </div>
    </section>
  );
}
