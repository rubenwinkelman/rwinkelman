import React, { useRef } from 'react';
import { ArrowRight, CheckCircle2, Laptop, Sparkles, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseConcepts() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Header entrance
    gsap.fromTo(
      '.showcase-header',
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.showcase-header',
          start: 'top 92%',
          once: true
        },
        clearProps: 'all'
      }
    );

    // Spotlight card entrance
    gsap.fromTo(
      '.showcase-card',
      { opacity: 0, y: 15, scale: 0.99 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.showcase-card',
          start: 'top 90%',
          once: true
        },
        clearProps: 'all'
      }
    );

    // Stagger guarantees
    gsap.fromTo(
      '.showcase-guarantee',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.35,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.showcase-card',
          start: 'top 85%',
          once: true
        },
        clearProps: 'all'
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="showcase" className="py-24 md:py-32 bg-brand-dark relative border-t border-white/5 overflow-hidden">
      {/* Subtle warm ambient glow */}
      <div className="showcase-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-accent/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="showcase-header max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Portfolio &amp; Voorbeelden
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Eerst zien, dan pas beslissen.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Nieuwe projecten worden momenteel afgewerkt en binnenkort gepubliceerd. Wil je alvast zien wat er mogelijk is voor jouw onderneming?
          </p>
        </div>

        {/* Single Prominent Spotlight Card */}
        <div className="showcase-card max-w-4xl mx-auto relative rounded-3xl bg-brand-surface/90 border border-white/10 hover:border-brand-accent/50 p-8 sm:p-12 md:p-16 shadow-2xl transition-all duration-300 backdrop-blur-sm group">
          
          {/* Top Bar: URL & Status */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-sand">
                Gratis Voorbeeld op Locatie
              </span>
            </div>

            <div className="text-xs font-mono text-brand-sandDim group-hover:text-brand-accent transition-colors">
              jouwbedrijf.rwinkelman.nl
            </div>
          </div>

          {/* Main Content Area */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                Bespoke Maatwerk
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
                Jouw website hier?
              </h3>
            </div>

            <p className="text-base sm:text-lg text-brand-sandMuted leading-relaxed max-w-2xl">
              Benieuwd hoe jouw nieuwe website eruit kan zien? Ik ontwerp vooraf een werkend interactief concept om je enthousiast te maken en kom persoonlijk bij je langs op kantoor of locatie om het live te demonstreren.
            </p>

            {/* 3 Key Guarantees */}
            <div className="pt-2 pb-4 space-y-3">
              <div className="showcase-guarantee flex items-start gap-3 text-sm text-brand-sand">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>100% vrijblijvend werkend voorbeeld vooraf gebouwd</span>
              </div>
              <div className="showcase-guarantee flex items-start gap-3 text-sm text-brand-sand">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>Persoonlijke demonstratie op jouw kantoor of locatie</span>
              </div>
              <div className="showcase-guarantee flex items-start gap-3 text-sm text-brand-sand">
                <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>Pas betalen bij enthousiasme (€ 399,-) &amp; flexibel maandelijks beheer (€ 29,99/mnd)</span>
              </div>
            </div>

            {/* Direct CTA Button */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 group/btn"
              >
                <span>Vraag een gratis voorbeeld aan</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-brand-sandDim">
                100% vrijblijvend &bull; Nul verplichtingen
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
