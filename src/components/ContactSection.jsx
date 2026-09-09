import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, Clock, ArrowRight, ShieldCheck, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactSection() {
  const containerRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS || '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Niet opgegeven',
          location: formData.location || 'Niet opgegeven',
          message: formData.message,
          subject: `Nieuwe aanvraag voorbeeldwebsite van ${formData.name}`,
          from_name: 'rwinkelman.nl',
          botcheck: ''
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Er is iets misgegaan bij het versturen. Controleer de velden of stuur gerust een WhatsApp bericht.');
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      setErrorMessage('Er kon geen verbinding worden gemaakt. Stuur gerust direct een WhatsApp of e-mail naar Ruben.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hallo Ruben, ik wil graag een vrijblijvende voorbeeldwebsite aanvragen en kennismaken op locatie. Wanneer kunnen we afspreken?"
  );

  return (
    <section ref={containerRef} id="contact" className="py-24 md:py-32 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="contact-header reveal-item max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Persoonlijk Bezoek &bull; 100% Vrijblijvend
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-sand tracking-tight leading-tight">
            Vraag jouw voorbeeldwebsite aan.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-sandMuted leading-relaxed">
            Ik ga direct aan de slag met een interactief concept om je enthousiast te maken en kom persoonlijk bij je langs op locatie. Ben je enthousiast? Dan betaal je € 399,- en maken we de website tot in de puntjes compleet af.
          </p>
        </div>

        <div className="contact-grid grid lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Options (5 cols) */}
          <div className="contact-left reveal-item delay-1 lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action */}
            <a
              href={`https://wa.me/31683589410?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-brand-surface border border-white/10 hover:border-emerald-500/40 flex items-start gap-4 transition-all duration-300 group block shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-brand-sand">Snel contact via WhatsApp</h3>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-brand-sandMuted mt-1 leading-relaxed">
                  Stuur direct een appje om een afspraak of demo op locatie in te plannen.
                </p>
                <span className="text-xs font-semibold text-emerald-400 mt-3 inline-flex items-center gap-1.5">
                  <span>Chat via +31 6 83589410 &rarr;</span>
                </span>
              </div>
            </a>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-white/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-brand-sand">Direct per e-mail</h3>
                <p className="text-xs text-brand-sandMuted mt-1">
                  Stuur je briefing of bedrijfsinformatie rechtstreeks naar Ruben.
                </p>
                <a
                  href="mailto:ruben.winkelman@outlook.com"
                  className="text-sm font-semibold text-brand-accent hover:underline mt-2 inline-block"
                >
                  ruben.winkelman@outlook.com
                </a>
              </div>
            </div>

            {/* Assurance Card */}
            <div className="p-6 rounded-2xl bg-brand-elevated/70 border border-white/5 space-y-3">
              <div className="text-xs uppercase tracking-wider text-brand-sandDim font-semibold">
                Onze 3 beloftes:
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-sandMuted">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Eerst een werkend voorbeeld zien, nul risico</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-sandMuted">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Ruben komt persoonlijk bij je langs op locatie</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-sandMuted">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Pas betalen bij enthousiasme tijdens de demo</span>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-brand-sandDim flex items-center justify-between">
                <span>KvK: 86631020</span>
                <span>Gevestigd in Nederland</span>
              </div>
            </div>

          </div>

          {/* Right: Interactive Form (7 cols) with Web3Forms */}
          <div className="lg:col-span-7">
            <div className="contact-form-box reveal-item delay-2 bg-brand-surface border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accentLight border border-brand-accentBorder flex items-center justify-center mx-auto text-brand-accent">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-sand">
                    Bedankt voor je aanvraag!
                  </h3>
                  <p className="text-sm text-brand-sandMuted max-w-md mx-auto leading-relaxed">
                    Ik ga aan de slag met een interactieve voorbeeldwebsite voor jouw bedrijf en neem zo snel mogelijk contact met je op om het persoonlijke bezoek in te plannen.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', location: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-brand-elevated text-brand-sand text-xs font-semibold hover:bg-brand-card transition-colors"
                  >
                    Nieuwe aanvraag doen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-brand-sand mb-4">
                    Vrijblijvende Aanvraag &bull; Persoonlijke Demo
                  </h3>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Anti-spam honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-sand mb-1.5">
                        Jouw Naam *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Bijv. Lucas Jansen"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-brand-sand text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-sand mb-1.5">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jouw@bedrijf.nl"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-brand-sand text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-sand mb-1.5">
                        Telefoonnummer (voor WhatsApp/afspraak)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 12345678"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-brand-sand text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-sand mb-1.5">
                        Woonplaats / Vestiging
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Bijv. Utrecht, Amsterdam..."
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-brand-sand text-sm focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-sand mb-1.5">
                      Vertel kort over je bedrijf &amp; huidige website *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Wat is je bedrijfsnaam? Heb je al een huidige website? Wat wil je graag bereiken?"
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-brand-sand text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accentHover disabled:opacity-60 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-brand-accent/25 flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Aanvraag versturen...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Vraag gratis voorbeeldwebsite &amp; bezoek aan</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-brand-sandDim pt-2">
                    100% vrijblijvend &bull; Geen verplichtingen &bull; Eerst zien, dan pas beslissen
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
