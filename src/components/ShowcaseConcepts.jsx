import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

export default function ShowcaseConcepts() {
  const projects = [
    {
      id: 'winkelman-engineering',
      number: '01',
      title: 'Winkelman Engineering',
      discipline: 'Engineering & Machinebouw',
      description: 'Strakke, technische bedrijfswebsite voor constructieadvies, 3D CAD en machinebouw. 100% zuivere code, razendsnel en geoptimaliseerd voor B2B leads.',
      url: 'https://winkelmanengineering.rwinkelman.nl',
      displayUrl: 'winkelmanengineering.rwinkelman.nl',
      status: 'Live Website',
      isLive: true,
      isExternal: true,
      bgImage: '/engineering-shot.png'
    },
    {
      id: 'klantproject-2',
      number: '02',
      title: 'Klantproject in Bouw',
      discipline: 'Zakelijke Dienstverlening',
      description: 'Op maat gemaakte bedrijfswebsite. Na een enthousiaste demonstratie op locatie wordt dit project momenteel tot in de puntjes geperfectioneerd.',
      url: '#contact',
      displayUrl: 'Binnenkort online',
      status: 'In Ontwikkeling',
      isLive: false,
      isExternal: false,
      bgGradient: 'from-blue-950/20 via-brand-surface to-brand-surface'
    },
    {
      id: 'jouw-bedrijf',
      number: '03',
      title: 'Jouw Bedrijf Hier?',
      discipline: 'Vrijblijvend Voorbeeld',
      description: 'Ik maak vooraf een werkend interactief voorbeeld om je enthousiast te maken en kom persoonlijk langs. Ben je overtuigd? Dan gaan we direct aan de slag.',
      url: '#contact',
      displayUrl: 'Vraag gratis voorbeeld aan',
      status: 'Beschikbaar',
      isLive: false,
      isExternal: false,
      isCta: true,
      bgGradient: 'from-brand-accent/15 via-brand-surface to-brand-surface'
    }
  ];

  return (
    <section id="showcase" className="py-24 md:py-32 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Portfolio &amp; Projecten
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Gerealiseerde websites.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Klik op een kaart om de live website direct in je browser te openen.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => {
            const TargetIcon = project.isExternal ? ArrowUpRight : ArrowRight;

            return (
              <a
                key={project.id}
                href={project.url}
                target={project.isExternal ? '_blank' : '_self'}
                rel={project.isExternal ? 'noopener noreferrer' : undefined}
                className="group relative rounded-2xl bg-brand-surface border border-white/10 hover:border-brand-accent/60 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-brand-accent/15 flex flex-col justify-between overflow-hidden min-h-[380px] block"
              >
                {/* Background Image or Gradient Layer */}
                {project.bgImage ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={project.bgImage}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    {/* Deep tonal gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/85 to-[#0A0C10]/60 group-hover:via-[#0A0C10]/75 group-hover:to-[#0A0C10]/40 transition-all duration-500" />
                  </div>
                ) : (
                  <div className={`absolute inset-0 z-0 bg-gradient-to-br ${project.bgGradient} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
                )}

                {/* Subtle card glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/10 blur-2xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Foreground Content */}
                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Status Bar */}
                    <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                      <span className="font-mono text-xs text-brand-sandDim font-bold tracking-wider">
                        {project.number}
                      </span>
                      
                      {project.isLive ? (
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Website
                        </span>
                      ) : (
                        <span className="text-xs text-brand-sandDim font-medium bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Discipline & Title */}
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                      {project.discipline}
                    </div>

                    <h3 className="text-2xl font-bold text-brand-sand group-hover:text-white transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-brand-sandMuted leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer: Domain + Arrow Action */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-brand-sandDim group-hover:text-brand-sand transition-colors truncate">
                      {project.displayUrl}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-brand-dark/80 backdrop-blur-md border border-white/10 group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white flex items-center justify-center text-brand-sand transition-all duration-200 flex-shrink-0 shadow-lg">
                      <TargetIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Simple Bottom Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-surface border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-brand-sand">
              Wil je ook een op maat gemaakte website voor jouw bedrijf?
            </h4>
            <p className="text-xs text-brand-sandMuted mt-0.5">
              Ik bouw vooraf gratis een werkend concept om je enthousiast te maken en kom persoonlijk bij je langs op locatie.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white text-xs font-semibold transition-colors shadow-lg shadow-brand-accent/20"
          >
            Vraag jouw voorbeeld aan
          </a>
        </div>

      </div>
    </section>
  );
}
