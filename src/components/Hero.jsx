import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Check } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('rwinkelman');
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtiele verfijnde 3D tilt gecapt op max 3.5°
    const rotateX = Math.max(-3.5, Math.min(3.5, ((centerY - y) / centerY) * 3.5));
    const rotateY = Math.max(-3.5, Math.min(3.5, ((x - centerX) / centerX) * 3.5));
    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleCardMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-36 pb-16 sm:pt-40 sm:pb-24 md:pt-44 md:pb-32 overflow-hidden isolate">
      {/* Warm Breathing Ambient Radial Glows (GPU Compositor, 0% CPU overhead) */}
      <div className="anim-ambient-glow-1 absolute top-12 sm:top-20 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[450px] sm:h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(240,101,67,0.30)_0%,_rgba(240,101,67,0.08)_45%,_transparent_70%)] pointer-events-none z-0" />
      <div className="anim-ambient-glow-2 absolute top-1/3 -right-20 sm:right-0 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(240,101,67,0.08)_0%,_rgba(244,236,225,0.06)_45%,_transparent_70%)] pointer-events-none z-0" />
      <div className="anim-ambient-glow-1 absolute bottom-0 -left-20 sm:left-4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(240,101,67,0.18)_0%,_transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* =========================================================================
            DESKTOP HERO (md: and above)
           ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Column: Headlines & Actions */}
          <div className="md:col-span-7 text-left">
            <h1 className="anim-hero-1 text-5xl md:text-6xl xl:text-[4.2rem] font-black tracking-tight text-brand-sand leading-[1.08] mb-6">
              <span className="block">
                Eerst zien. Dan beslissen.
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-[#FA8B60] to-brand-sand">
                Jouw website op maat.
              </span>
            </h1>

            <p className="anim-hero-2 text-base md:text-lg text-brand-sandMuted leading-relaxed max-w-xl mb-5 font-normal">
              Ik bouw eerst een vrijblijvende <span className="text-brand-sand font-semibold">voorbeeldwebsite</span> voor jouw bedrijf, zodat je precies ziet wat je krijgt vóór je ergens aan vastzit.
            </p>

            {/* 3 Checkmark Trust Bullets on Desktop */}
            <div className="anim-hero-2 space-y-2.5 mb-8">
              <div className="flex items-center gap-2.5 text-sm md:text-[15px] text-brand-sand">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                <span>Vrijblijvende voorbeeldwebsite op maat</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm md:text-[15px] text-brand-sand">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                <span>Complete website voor <strong className="font-semibold text-brand-sand">€&nbsp;699,-</strong> <span className="text-xs text-brand-sandDim">(excl.&nbsp;btw)</span></span>
              </div>
              <div className="flex items-center gap-2.5 text-sm md:text-[15px] text-brand-sand">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                <span>No cure, no pay</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="anim-hero-3 flex items-center gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95 group whitespace-nowrap"
              >
                <span>
                  Vraag voorbeeldwebsite aan
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
              <a
                href="#werkwijze"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-surface/40 hover:bg-brand-elevated border border-white/10 text-brand-sandMuted hover:text-brand-sand font-medium text-base transition-all duration-200 hover:border-white/20 whitespace-nowrap"
              >
                <span>Bekijk werkwijze</span>
              </a>
            </div>
          </div>

          {/* Right Column: Ruben's Portrait Card with Apple Glass Frame & 3D Tilt */}
          <div className="md:col-span-5 flex justify-end anim-hero-4">
            <div
              className="relative w-full max-w-[380px] xl:max-w-[420px]"
              onMouseMove={handleCardMouseMove}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
              style={{ perspective: '1000px' }}
            >
              {/* Neutrale, zachte studio-diepte */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.035)_0%,_transparent_70%)] blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Apple UI Dark Glass Card met 3D tilt & strakke randreflectie */}
              <div
                className={`relative rounded-[36px] bg-gradient-to-b from-white/[0.05] via-[#12151D]/70 to-[#0A0C10] border transition-all duration-300 ring-1 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden group will-change-transform ${
                  isCardHovered
                    ? 'border-white/25 ring-brand-accent/20 shadow-[0_28px_60px_-12px_rgba(0,0,0,0.92)]'
                    : 'border-white/10 ring-white/5'
                }`}
                style={{
                  transform: isCardHovered
                    ? `rotateX(${cardTilt.x.toFixed(2)}deg) rotateY(${cardTilt.y.toFixed(2)}deg) translateY(-4px)`
                    : 'rotateX(0deg) rotateY(0deg) translateY(0px)',
                  transition: isCardHovered
                    ? 'transform 0.15s ease-out, border-color 0.2s ease-out, ring-color 0.2s ease-out, box-shadow 0.2s ease-out'
                    : 'transform 0.4s ease-out, border-color 0.3s ease-out, ring-color 0.3s ease-out, box-shadow 0.3s ease-out',
                }}
              >
                {/* Flinterdunne Apple specular highlightlijn aan de bovenzijde */}
                <div
                  className={`absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none transition-opacity duration-300 ${
                    isCardHovered ? 'opacity-100' : 'opacity-40'
                  }`}
                />

                {/* Ruben's Cutout Photo */}
                <div className="relative z-10 pt-8 flex justify-center">
                  <img
                    src="/ruben-winkelman.png"
                    alt="Ruben Winkelman - Webdesigner & Developer"
                    width={447}
                    height={559}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto object-contain select-none pointer-events-none"
                  />
                </div>

                {/* Seamless bottom fade into card and page background */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/80 via-[#0A0C10]/30 to-transparent pointer-events-none z-20" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE HERO (< md) - 100% Statisch voor soepele scroll en rustig beeld
           ========================================================================= */}
        <div className="md:hidden flex flex-col items-center text-center mb-8">
          {/* Main Headline */}
          <h1 className="anim-hero-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-sand leading-[1.12] mb-3.5">
            <span className="block">Eerst zien. Dan beslissen.</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-[#FA8B60] to-brand-sand">
              Jouw website op maat.
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="anim-hero-2 text-sm sm:text-base text-brand-sandMuted leading-relaxed max-w-sm sm:max-w-md mx-auto mb-5 font-normal">
            Ik bouw eerst een vrijblijvende <span className="text-brand-sand font-semibold">voorbeeldwebsite</span> voor jouw bedrijf, zodat je precies ziet wat je krijgt vóór je ergens aan vastzit.
          </p>

          {/* 3 Checkmark Trust Bullets (Links-uitgelijnd binnen gecentreerd blok) */}
          <div className="anim-hero-2 w-full flex justify-center mb-6">
            <div className="inline-flex flex-col items-start gap-2.5 text-xs sm:text-sm text-brand-sand text-left">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                <span>Vrijblijvende voorbeeldwebsite op maat</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                <span>Complete website voor <strong className="font-semibold text-brand-sand">€&nbsp;699,-</strong> <span className="text-[11px] sm:text-xs text-brand-sandDim">(excl.&nbsp;btw)</span></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2.5} />
                <span>No cure, no pay</span>
              </div>
            </div>
          </div>

          {/* Pill CTA Button & Subtle Werkwijze Link */}
          <div className="anim-hero-3 flex flex-col items-center gap-2.5 w-full max-w-xs mb-6">
            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-brand-accent/30 active:scale-95 group ring-1 ring-white/10"
            >
              <span>Vraag vrijblijvend voorbeeld aan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
            <a
              href="#werkwijze"
              className="inline-flex items-center gap-1.5 text-xs text-brand-sandMuted hover:text-brand-sand font-medium transition-colors py-1 px-3 group"
            >
              <span>Bekijk werkwijze</span>
              <span className="group-hover:translate-x-0.5 transition-transform">›</span>
            </a>
          </div>

          {/* Ruben's Portrait Seamless Blend on Mobile (100% statisch voor rust en scroll-flow) */}
          <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[310px] flex justify-center anim-hero-4 -mb-3">
            {/* Statische zachte studio rim glow */}
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[290px] h-[250px] sm:h-[290px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(240,101,67,0.35)_0%,_rgba(240,101,67,0.08)_50%,_transparent_75%)] blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Statische foto met vloeiende fade aan de onderzijde */}
            <div className="relative z-10 w-full flex justify-center hero-portrait-fade">
              <img
                src="/ruben-winkelman.png"
                alt="Ruben Winkelman - Webdesigner & Developer"
                width={447}
                height={559}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>

        {/* Interactive Comparison Component */}
        <div className="relative anim-hero-5 max-w-4xl mx-auto">
          <div className="bg-brand-surface/90 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          {/* Segmented Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-brand-sand">
                  Vergelijk het risico:
                </h2>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-2 py-0.5 rounded-full">
                  Kies een optie
                </span>
              </div>
              <p className="text-xs text-brand-sandDim mt-0.5">
                Klik op een van de 3 werkwijzen om het verschil te zien:
              </p>
            </div>

            {/* Interactive Custom Tab Selector - Strakke, minimalistische segment control zonder vertraging */}
            <div role="tablist" aria-label="Vergelijkingsopties" className="grid grid-cols-3 p-1 sm:p-1.5 rounded-xl bg-black/60 border border-white/10 ring-1 ring-white/5 w-full sm:w-auto text-center shadow-inner sm:min-w-[420px] md:min-w-[440px] touch-manipulation">
              <button
                type="button"
                role="tab"
                id="tab-traditioneel"
                aria-controls="panel-traditioneel"
                aria-selected={activeTab === 'traditioneel'}
                onClick={() => setActiveTab('traditioneel')}
                className={`flex items-center justify-center px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-[13px] font-medium transition-colors duration-100 cursor-pointer select-none touch-manipulation whitespace-nowrap active:opacity-75 ${
                  activeTab === 'traditioneel'
                    ? 'bg-white/15 text-white shadow-md ring-1 ring-white/20'
                    : 'text-brand-sandMuted hover:text-white active:text-white'
                }`}
              >
                <span><span className="hidden sm:inline">Traditioneel </span>Bureau</span>
              </button>
              <button
                type="button"
                role="tab"
                id="tab-zelf"
                aria-controls="panel-zelf"
                aria-selected={activeTab === 'zelf'}
                onClick={() => setActiveTab('zelf')}
                className={`flex items-center justify-center px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-[13px] font-medium transition-colors duration-100 cursor-pointer select-none touch-manipulation whitespace-nowrap active:opacity-75 ${
                  activeTab === 'zelf'
                    ? 'bg-white/15 text-white shadow-md ring-1 ring-white/20'
                    : 'text-brand-sandMuted hover:text-white active:text-white'
                }`}
              >
                <span><span className="hidden sm:inline">Zelf </span>Bouwen</span>
              </button>
              <button
                type="button"
                role="tab"
                id="tab-rwinkelman"
                aria-controls="panel-rwinkelman"
                aria-selected={activeTab === 'rwinkelman'}
                onClick={() => setActiveTab('rwinkelman')}
                className={`flex items-center justify-center px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-[13px] font-semibold transition-colors duration-100 cursor-pointer select-none touch-manipulation whitespace-nowrap active:opacity-75 ${
                  activeTab === 'rwinkelman'
                    ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25'
                    : 'text-brand-sandMuted hover:text-white active:text-white'
                }`}
              >
                <span>rwinkelman.nl</span>
              </button>
            </div>
          </div>

          {/* Tab Content Panels - Snelle GPU fade & stabiele hoogte tegen verspringen */}
          <div className="pt-6 min-h-[380px] sm:min-h-[300px]" role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
            <div key={activeTab} className="anim-tab-enter">
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
                    <div>✗ Trage laadtijden door zware sjablonen en plugins</div>
                    <div>✗ Ziet er vaak uit als een standaard template</div>
                    <div>✗ Zelf verantwoordelijk voor beveiliging &amp; updates</div>
                  </div>
                </div>
              )}

              {activeTab === 'rwinkelman' && (
                <div className="space-y-6">
                  <div>
                    <div className="text-brand-accent text-sm font-semibold mb-2">
                      Waarom eerst betalen als je hem eerst kunt zien?
                    </div>
                    <h3 className="text-xl font-bold text-brand-sand">
                      Eerst zien. Dan beslissen &bull; No cure, no pay
                    </h3>
                    <p className="text-sm text-brand-sandMuted leading-relaxed">
                      Geen vage offertes, geen statische PDF-ontwerpen en nul risico. Ik kom persoonlijk bij je langs met een interactief concept dat al direct klikt en werkt op smartphone en laptop. Bevalt het niet? Dan kost het je helemaal niets.
                    </p>
                  </div>
                  <div className="bg-brand-elevated/90 rounded-xl p-5 border border-brand-accentBorder space-y-3">
                    <div className="text-xs text-brand-accent uppercase tracking-wider font-semibold">Jouw voordelen:</div>
                    <div className="flex items-center gap-3 text-sm text-brand-sand">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span>Voorbeeldwebsite volledig afgestemd op jouw bedrijf</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brand-sand">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span>Persoonlijke demo op jouw kantoor of locatie</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brand-sand">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span>Bevalt het ontwerp? Afbouwen voor <span className="whitespace-nowrap font-semibold">€&nbsp;699,-</span> (excl. btw)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brand-sand">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span>Niet overtuigd? No cure, no pay (€ 0,-)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brand-sand">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                      <span>Onderhoud en aanpassingen (1 tot 10/mnd) volledig uit handen</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 max-w-5xl mx-auto text-center">
          <div className="hero-stat group p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-brand-surface/90 to-brand-surface/50 border border-brand-accent/20 backdrop-blur-sm hover:border-brand-accent/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-center items-center shadow-lg shadow-black/20">
            <div className="text-lg sm:text-xl lg:text-[1.65rem] font-extrabold text-brand-accent tracking-tight whitespace-nowrap">€ 0,- Vooraf</div>
            <div className="text-xs sm:text-[13px] text-brand-sandMuted mt-1.5 font-medium leading-tight">Gratis voorbeeld op locatie</div>
          </div>
          <div className="hero-stat group p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-brand-surface/90 to-brand-surface/50 border border-white/10 backdrop-blur-sm hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-center items-center shadow-lg shadow-black/20">
            <div className="text-lg sm:text-xl lg:text-[1.65rem] font-extrabold text-brand-sand tracking-tight whitespace-nowrap">€ 699,-</div>
            <div className="text-xs sm:text-[13px] text-brand-sandMuted mt-1.5 font-medium leading-tight">Bij enthousiaste demo &bull; excl. btw</div>
          </div>
          <div className="hero-stat group p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-brand-surface/90 to-brand-surface/50 border border-white/10 backdrop-blur-sm hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-center items-center shadow-lg shadow-black/20">
            <div className="text-lg sm:text-xl lg:text-[1.65rem] font-extrabold text-brand-sand tracking-tight whitespace-nowrap">100% Maatwerk</div>
            <div className="text-xs sm:text-[13px] text-brand-sandMuted mt-1.5 font-medium leading-tight">Compleet met jou afgestemd</div>
          </div>
          <div className="hero-stat group p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-brand-surface/90 to-brand-surface/50 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-center items-center shadow-lg shadow-black/20">
            <div className="text-lg sm:text-xl lg:text-[1.65rem] font-extrabold text-emerald-400 tracking-tight whitespace-nowrap">€ 29,99 /m</div>
            <div className="text-xs sm:text-[13px] text-brand-sandMuted mt-1.5 font-medium leading-tight">1 - 10 updates &bull; excl. btw</div>
          </div>
        </div>

      </div>
    </section>
  );
}
