import React, { useRef } from 'react';
import { MessageSquare, Laptop, Sparkles, Rocket, Clock, CheckCircle, MapPin, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Workflow() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Header entrance
    gsap.fromTo(
      '.workflow-header',
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.workflow-header',
          start: 'top 92%',
          once: true
        },
        clearProps: 'all'
      }
    );

    // Staggered step cards entrance
    gsap.fromTo(
      '.workflow-card',
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.workflow-grid',
          start: 'top 90%',
          once: true
        },
        clearProps: 'all'
      }
    );

    // Guarantee banner entrance
    gsap.fromTo(
      '.workflow-banner',
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.workflow-banner',
          start: 'top 92%',
          once: true
        },
        clearProps: 'all'
      }
    );
  }, { scope: containerRef });

  const steps = [
    {
      step: '01',
      title: 'Vrijblijvende Aanvraag',
      subtitle: 'Geen verplichtingen, direct contact',
      icon: MessageSquare,
      leadTime: 'Stap 1',
      description: 'Stuur een korte aanvraag via de website of WhatsApp. Vertel wie je bent, wat je bedrijf doet en welke uitstraling je zoekt. Dit kost je nog helemaal niets.',
      highlights: ['Direct persoonlijk contact', 'Korte inventarisatie van je wensen', 'Geen vooruitbetaling nodig']
    },
    {
      step: '02',
      title: 'Voorbeeld & Persoonlijke Demo',
      subtitle: 'Ruben komt persoonlijk langs op locatie',
      icon: Laptop,
      leadTime: 'Stap 2',
      description: 'Ik bouw alvast een werkende voorbeeldwebsite om je enthousiast te maken. Vervolgens kom ik persoonlijk bij je langs op locatie om het interactieve concept live op mijn laptop te laten zien.',
      highlights: ['Werkend prototype op maat', 'Persoonlijk gesprek op jouw locatie', 'Eerst zien, dan pas beslissen']
    },
    {
      step: '03',
      title: 'Enthousiast? Betalen & Tot in de Puntjes Afmaken',
      subtitle: 'Bij € 399,- perfectioneren we alles',
      icon: Sparkles,
      leadTime: 'Stap 3',
      description: 'Ben je enthousiast tijdens de demonstratie en wil je doorgaan? Dan betaal je eenmalig € 399,-. Vanaf dat moment werk ik de website tot in de puntjes compleet af: alle pagina’s, afbeeldingen, teksten en formulieren worden perfect ingericht.',
      highlights: ['Betaling pas bij enthousiasme op locatie', 'Website tot in het kleinste detail afgewerkt', 'Niet overtuigd? Dan betaal je € 0,-']
    },
    {
      step: '04',
      title: 'Exclusief Beheer & Hosting (€ 29,99/mnd)',
      subtitle: 'Inclusief 1 tot 10 wijzigingen per maand',
      icon: RefreshCw,
      leadTime: 'Stap 4',
      description: 'Omdat ik jouw website zelf in zuivere code heb gebouwd, beheer ik hem met de hoogste zorg. Wil je teksten aanpassen, foto’s toevoegen of een actie updaten? Je hebt 1 tot 10 wijzigingen per maand inbegrepen. Eén appje naar Ruben en het is gefixt.',
      highlights: ['Exclusief voor eigen gebouwde sites', 'Premium hosting & 1-10 wijzigingen/mnd', 'Altijd direct contact met Ruben']
    }
  ];

  return (
    <section ref={containerRef} id="werkwijze" className="py-24 md:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="workflow-header max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Hoe Ik Werk
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Van vrijblijvend voorbeeld tot afgeronde website in 4 stappen.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Geen ingewikkelde offertetrajecten of administratieve rompslomp. Zo eenvoudig en transparant verloopt onze samenwerking.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="workflow-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="workflow-card p-6 rounded-2xl bg-brand-surface/70 border border-white/10 hover:border-brand-accent/40 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
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
        <div className="workflow-banner mt-12 p-6 rounded-xl bg-brand-surface border border-brand-accentBorder flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
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
