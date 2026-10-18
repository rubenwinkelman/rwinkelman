import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Laptop, ExternalLink, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ShowcaseConcepts() {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} id="showcase" className="py-24 md:py-32 bg-brand-dark relative border-t border-white/5 overflow-hidden isolate">
      {/* Subtle warm ambient breathing glow using pure CSS radial gradient (GPU Compositor, 0% CPU) */}
      <div className="anim-ambient-glow-1 showcase-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(240,101,67,0.22)_0%,_rgba(240,101,67,0.05)_50%,_transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="showcase-header reveal-item max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Portfolio &amp; Projecten
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Gerealiseerd werk &amp; maatwerk concepten.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Bekijk opgeleverde maatwerk websites of ervaar direct wat er mogelijk is voor jouw eigen onderneming.
          </p>
        </div>

        {/* 2-Column Showcase Grid: 1 Gerealiseerd Project + 1 Spotlight Voorbeeld Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Winkelman Engineering & Consultancy (Gerealiseerd) */}
          <a
            href="https://www.winkelmanengineering.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-card reveal-item delay-1 relative rounded-3xl bg-brand-surface/90 border border-white/10 hover:border-brand-accent/50 p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden"
          >
            {/* Background Image Layer with Deep Subtle Gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="/engineering-shot.png"
                alt="Winkelman Engineering & Consultancy website screenshot"
                className="w-full h-full object-cover object-top opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
                width="1200"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/90 to-[#0A0C10]/70 group-hover:via-[#0A0C10]/80 group-hover:to-[#0A0C10]/50 transition-all duration-500" />
            </div>

            {/* Subtle glow on hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/15 blur-2xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Top Bar: Live Status & URL */}
                <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-white/10 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Website
                    </span>
                  </div>

                  <span className="text-xs font-mono text-brand-sandDim group-hover:text-brand-accent transition-colors inline-flex items-center gap-1">
                    <span>winkelmanengineering.nl</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                  Engineering &amp; Installatieadvies
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-sand group-hover:text-white transition-colors tracking-tight">
                  Winkelman Engineering &amp; Consultancy
                </h3>

                <p className="mt-3 text-sm sm:text-base text-brand-sandMuted leading-relaxed">
                  Strakke, technische bedrijfswebsite voor gebouwgebonden installaties, verduurzaming en engineering. Volledig op maat gecodeerd, vliegensvlugge laadtijd en geoptimaliseerd voor zakelijke B2B aanvragen.
                </p>

                <div className="pt-4 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>100% Maatwerk in zuivere code zonder trage plugins</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Maximale Google PageSpeed score &amp; mobiele flow</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-brand-sand">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Professionele B2B uitstraling voor de utiliteit &amp; industrie</span>
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-sand group-hover:text-brand-accent transition-colors inline-flex items-center gap-1.5">
                  <span>Bekijk live website</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[11px] text-brand-sandDim">
                  Drachten, Friesland
                </span>
              </div>
            </div>
          </a>

          {/* Card 2: Jouw Website Hier? (Interactief Voorbeeld Aanbod) */}
          <div className="showcase-card reveal-item delay-2 relative rounded-3xl bg-brand-surface/90 border border-white/10 hover:border-brand-accent/50 p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 group flex flex-col justify-between">
            
            {/* Subtle glow on hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/10 blur-2xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="space-y-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-sand">
                    Gratis voorbeeld op locatie
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                  100% Vrijblijvend
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-sand tracking-tight">
                  Jouw website hier?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-brand-sandMuted leading-relaxed">
                Benieuwd hoe jouw nieuwe website eruit kan zien? Ik ontwerp vooraf een werkend interactief concept om je enthousiast te maken en kom persoonlijk bij je langs op kantoor of locatie om het live te demonstreren.
              </p>

              {/* 3 Key Guarantees */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-brand-sand">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>100% vrijblijvend werkend voorbeeld vooraf gebouwd</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-brand-sand">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Persoonlijke demonstratie op jouw kantoor of locatie</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-brand-sand">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Pas betalen bij enthousiasme (€ 699,-) &amp; flexibel beheer (€ 29,99/mnd)</span>
                </div>
              </div>
            </div>

            {/* Direct CTA Button */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-xs transition-all duration-200 shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 group/btn"
              >
                <span>Vraag een gratis voorbeeld aan</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <span className="text-[11px] text-brand-sandDim">
                100% vrijblijvend &bull; Nul verplichting
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
