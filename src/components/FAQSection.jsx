import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const containerRef = useScrollReveal();

  const faqs = [
    {
      q: 'Kom je echt persoonlijk bij mij langs om het voorbeeld te laten zien?',
      a: 'Jazeker! Zodra je een aanvraag doet, bouw ik alvast een werkende, interactieve voorbeeldwebsite. Vervolgens kom ik persoonlijk bij je langs op kantoor of locatie om de website live op mijn laptop te demonstreren. Zo kunnen we direct sparren en jouw wensen bespreken.'
    },
    {
      q: 'Wanneer betaal ik de eenmalige € 699,-?',
      a: 'Tijdens het persoonlijke bezoek demonstreer ik het werkende voorbeeld. Ben je enthousiast over het concept en wil je dat we jouw website definitief gaan bouwen? Dan betaal je € 699,-. Vanaf dat moment ga ik direct aan de slag om de website compleet af te bouwen: alle pagina’s, afbeeldingen, teksten en functionaliteiten worden tot in detail ingericht.'
    },
    {
      q: 'Neem je ook bestaande websites van derden in beheer?',
      a: 'Nee. Het hosting- en beheerpakket van € 29,99 per maand is exclusief voorbehouden aan websites die ik zelf heb ontworpen en gebouwd. Omdat ik mijn eigen websites van de grond af in zuivere code opzet zonder trage systemen of overbodige toevoegingen, kan ik garanderen dat jouw website altijd razendsnel en veilig blijft, en kan ik jouw 1-10 maandelijkse wijzigingen direct foutloos uitvoeren.'
    },
    {
      q: 'Wat valt er onder de € 29,99/maand en de 1 tot 10 wijzigingen?',
      a: 'In dit all-in beheerpakket zit supersnelle, veilige webhosting, een SSL-certificaat en dagelijkse back-ups. Daarnaast hoef je nooit meer zelf te stoeien met content: je mag 1 tot 10 keer per maand wijzigingen doorgeven (bijvoorbeeld teksten aanpassen, foto’s toevoegen, openingstijden bijwerken of een actie plaatsen). Eén appje naar Ruben en het is geregeld.'
    },
    {
      q: 'Wat gebeurt er als het voorbeeld me bij de demonstratie niet bevalt?',
      a: 'Dan betaal je helemaal niets. Geen opstartkosten, geen voorrijkosten en geen verplichtingen. Ik neem het volledige risico op me omdat ik overtuigd ben dat een tastbaar werkend voorbeeld veel meer zegt dan een papieren offerte.'
    },
    {
      q: 'Zit ik vast aan een langdurig contract?',
      a: 'Nee. Het beheerpakket van € 29,99 per maand is altijd maandelijks opzegbaar. Ik geloof in een duurzame samenwerking op basis van kwaliteit, uitstekende service en wederzijds vertrouwen.'
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-brand-surface/30 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="faq-header reveal-item text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Veelgestelde Vragen
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-sand tracking-tight">
            Eerlijk, helder en zonder geheimen.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-sandMuted">
            Alles wat je moet weten over de voorbeeldwebsite, het persoonlijke bezoek en het exclusieve beheerpakket.
          </p>
        </div>

        <div className="faq-list space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const delayClass = idx < 2 ? 'delay-1' : idx < 4 ? 'delay-2' : 'delay-3';
            return (
              <div
                key={idx}
                className={`faq-item reveal-item ${delayClass} rounded-xl bg-brand-surface border border-white/10 overflow-hidden transition-all duration-200`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-brand-elevated/50 transition-colors"
                >
                  <span className="font-bold text-base text-brand-sand">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-accent flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="px-5 pb-5 pt-1 text-sm text-brand-sandMuted leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
