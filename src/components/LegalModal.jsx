import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, ExternalLink, Printer } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, activeTab, setActiveTab }) {
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#121620] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-surface/80">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('voorwaarden')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'voorwaarden'
                  ? 'bg-brand-accent text-white shadow-md'
                  : 'text-brand-sandMuted hover:text-brand-sand hover:bg-white/5'
              }`}
            >
              Algemene Voorwaarden
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('privacy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'privacy'
                  ? 'bg-brand-accent text-white shadow-md'
                  : 'text-brand-sandMuted hover:text-brand-sand hover:bg-white/5'
              }`}
            >
              Privacybeleid (AVG)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="p-2 text-brand-sandMuted hover:text-brand-sand rounded-lg hover:bg-white/5 transition-colors hidden sm:inline-flex"
              title="Afdrukken"
              aria-label="Afdrukken"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-brand-sandMuted hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-brand-sandMuted leading-relaxed">
          
          {/* TAB 1: ALGEMENE VOORWAARDEN */}
          {activeTab === 'voorwaarden' && (
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-accent font-bold mb-1">
                  rwinkelman.nl &bull; Versie september 2026
                </div>
                <h2 className="text-2xl font-extrabold text-brand-sand tracking-tight">
                  Algemene Voorwaarden
                </h2>
                <p className="text-xs text-brand-sandDim mt-1">
                  Ruben Winkelman &bull; Gevestigd te Drachten &bull; KvK-nummer: 86631020
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    Artikel 1 &mdash; Definities &amp; Bedrijfsgegevens
                  </h3>
                  <p>
                    <strong>1.1. Opdrachtnemer:</strong> Ruben Winkelman, handelend onder de naam <em>rwinkelman.nl</em>, gevestigd te Drachten, ingeschreven in het Handelsregister van de Kamer van Koophandel onder KvK-nummer <strong>86631020</strong>.<br />
                    <strong>1.2. Opdrachtgever:</strong> De natuurlijke of rechtspersoon die een overeenkomst aangaat met rwinkelman.nl voor de ontwikkeling van een website en/of hosting en contentbeheer.<br />
                    <strong>1.3. Overeenkomst:</strong> De afspraak tussen opdrachtgever en rwinkelman.nl op basis van deze algemene voorwaarden.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    Artikel 2 &mdash; Het Unieke Aanbod: Eerst Zien, Dan Pas Beslissen
                  </h3>
                  <p>
                    <strong>2.1.</strong> rwinkelman.nl bouwt vooraf een vrijblijvend, werkend concept van de website voor de opdrachtgever en demonstreert dit persoonlijk op locatie.<br />
                    <strong>2.2.</strong> Aan deze voorbereidende demonstratie zijn voor de opdrachtgever <strong>nul euro (€ 0,-)</strong> kosten verbonden indien de opdrachtgever besluit niet tot afronding en afname over te gaan.<br />
                    <strong>2.3.</strong> Pas wanneer de opdrachtgever tijdens of na de demonstratie uitdrukkelijk enthousiast is en akkoord geeft voor definitieve afwerking, ontstaat een bindende overeenkomst voor de eenmalige bouw.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    Artikel 3 &mdash; Tarieven, Betaling &amp; Oplevering
                  </h3>
                  <p>
                    <strong>3.1.</strong> De eenmalige vergoeding voor de complete websitebouw en livegang bedraagt <strong>€ 699,- exclusief 21% btw</strong>.<br />
                    <strong>3.2.</strong> Facturatie geschiedt na akkoordbevinding en demonstratie. De betalingstermijn bedraagt 14 dagen na factuurdatum.<br />
                    <strong>3.3.</strong> Oplevering vindt plaats in overleg met de opdrachtgever, nadat alle noodzakelijke teksten, afbeeldingen en eventuele domeinnaaminstellingen zijn afgestemd.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    Artikel 4 &mdash; Hosting &amp; Actief Contentbeheer
                  </h3>
                  <p>
                    <strong>4.1.</strong> Voor het beheer, de SSD-cloudhosting, SSL-beveiliging en dagelijkse back-ups geldt een vast tarief van <strong>€ 29,99 per maand exclusief 21% btw</strong>.<br />
                    <strong>4.2.</strong> Dit abonnement omvat <strong>1 tot 10 wijzigingen per kalendermaand</strong> (zoals tekstuele aanpassingen, afbeeldingen plaatsen, openingstijden bijwerken of acties tonen). Niet-gebruikte wijzigingen vervallen aan het einde van de kalendermaand.<br />
                    <strong>4.3.</strong> Het abonnement is <strong>maandelijks opzegbaar</strong> met inachtneming van een opzegtermijn van één kalendermaand.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    Artikel 5 &mdash; Intellectueel Eigendom &amp; Gebruiksrechten
                  </h3>
                  <p>
                    <strong>5.1.</strong> Na volledige betaling van de eenmalige opleveringsfactuur verkrijgt de opdrachtgever het exclusieve, onbeperkte gebruiksrecht op de voor hem ontwikkelde website.<br />
                    <strong>5.2.</strong> De opdrachtgever staat er zelf voor in dat door hem aangeleverde teksten, logo's en beeldmaterialen geen inbreuk maken op intellectuele eigendomsrechten van derden.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    Artikel 6 &mdash; Aansprakelijkheid &amp; Overmacht
                  </h3>
                  <p>
                    <strong>6.1.</strong> rwinkelman.nl spant zich maximaal in om een optimale werking en uptime van de website te realiseren.<br />
                    <strong>6.2.</strong> De totale aansprakelijkheid van rwinkelman.nl wegens een toerekenbare tekortkoming is te allen tijde beperkt tot maximaal het factuurbedrag van de desbetreffende opdracht (met een maximum van € 699,-).<br />
                    <strong>6.3.</strong> rwinkelman.nl is nimmer aansprakelijk voor indirecte schade, gederfde winst of bedrijfsschade.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    Artikel 7 &mdash; Toepasselijk Recht
                  </h3>
                  <p>
                    Op alle rechtsbetrekkingen tussen rwinkelman.nl en de opdrachtgever is uitsluitend het Nederlands recht van toepassing. Eventuele geschillen worden bij uitsluiting voorgelegd aan de bevoegde rechter in het arrondissement Noord-Nederland.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* TAB 2: PRIVACYBELEID */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-accent font-bold mb-1">
                  AVG / GDPR Verklaring &bull; Versie september 2026
                </div>
                <h2 className="text-2xl font-extrabold text-brand-sand tracking-tight">
                  Privacybeleid
                </h2>
                <p className="text-xs text-brand-sandDim mt-1">
                  Verwerking van persoonsgegevens conform de Algemene Verordening Gegevensbescherming
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    1. Wie is verantwoordelijk voor de gegevensverwerking?
                  </h3>
                  <p>
                    Ruben Winkelman, handelend onder <strong>rwinkelman.nl</strong>, gevestigd te Drachten (KvK 86631020), is de verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens via deze website.<br />
                    Contact: <a href="mailto:ruben.winkelman@outlook.com" className="text-brand-accent hover:underline">ruben.winkelman@outlook.com</a> of telefonisch via <strong>+31 6 83589410</strong>.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    2. Welke persoonsgegevens verzamelen wij en waarom?
                  </h3>
                  <p>
                    Wanneer je via het contactformulier een gratis voorbeeldwebsite aanvraagt of contact opneemt via WhatsApp of e-mail, verwerken wij:
                  </p>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-brand-sand">
                    <li>Je naam</li>
                    <li>Je e-mailadres</li>
                    <li>Je telefoonnummer (optioneel, indien ingevuld)</li>
                    <li>Je bedrijfsnaam of locatie (optioneel)</li>
                    <li>De inhoud van jouw toelichting of bericht</li>
                  </ul>
                  <p className="mt-2">
                    <strong>Doel &amp; Grondslag:</strong> Wij verwerken deze gegevens uitsluitend om je aanvraag voor een voorbeeldwebsite te beoordelen, contact op te nemen en de afspraak voor de persoonlijke demonstratie op locatie in te plannen (uitvoering van precontractuele maatregelen).
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    3. Bewaartermijn
                  </h3>
                  <p>
                    Wij bewaren persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor je gegevens worden verzameld. Indien na de demonstratie geen samenwerking tot stand komt, worden jouw contactgegevens binnen 6 maanden verwijderd, tenzij je verzoekt om eerdere verwijdering.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    4. Delen met derden (Verwerkers)
                  </h3>
                  <p>
                    rwinkelman.nl verkoopt jouw gegevens <strong>nooit</strong> aan derden. Wij maken enkel gebruik van betrouwbare partners die noodzakelijk zijn voor de technische werking van de website:
                  </p>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-brand-sand">
                    <li><strong>Web3Forms / Cloudflare:</strong> Voor de beveiligde SSL-verzending van formulierberichten naar onze mailbox.</li>
                    <li><strong>Hostingprovider:</strong> Voor de veilige opslag en caching van de website binnen de Europese Unie.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    5. Geen Tracking Cookies
                  </h3>
                  <p>
                    rwinkelman.nl respecteert jouw privacy en maakt <strong>geen</strong> gebruik van tracking-cookies, advertentienetwerken of data-verzamelende scripts van derden. De website maakt uitsluitend gebruik van zuivere code, waardoor een storende cookiebanner niet vereist is.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    6. Jouw rechten (Inzage, correctie en verwijdering)
                  </h3>
                  <p>
                    Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Stuur hiervoor simpelweg een e-mail naar <a href="mailto:ruben.winkelman@outlook.com" className="text-brand-accent hover:underline">ruben.winkelman@outlook.com</a>. Wij reageren altijd binnen 5 werkdagen.
                  </p>
                </section>

                <section>
                  <h3 className="text-base font-bold text-brand-sand mb-1.5">
                    7. Beveiliging
                  </h3>
                  <p>
                    rwinkelman.nl neemt de bescherming van jouw gegevens serieus en heeft passende technische maatregelen genomen (zoals een modern SSL/TLS-beveiligingscertificaat met HSTS) om misbruik, verlies of onbevoegde toegang tegen te gaan.
                  </p>
                </section>
              </div>
            </div>
          )}

        </div>

        {/* Footer info in Modal */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-brand-surface/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-sandDim">
          <div>
            rwinkelman.nl &bull; KvK: 86631020 &bull; Gevestigd in Drachten
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-brand-elevated hover:bg-white/10 text-brand-sand font-medium rounded-lg transition-colors"
          >
            Sluiten
          </button>
        </div>

      </div>
    </div>
  );
}
