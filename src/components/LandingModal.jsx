import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle, ShieldCheck, MapPin, Zap, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';

export default function LandingModal({ isOpen, onClose, pageData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Lock body scroll, handle Escape key and update meta description
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    let prevDescription = '';
    const metaDescEl = document.querySelector('meta[name="description"]');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      if (metaDescEl && pageData?.metaDescription) {
        prevDescription = metaDescEl.getAttribute('content') || '';
        metaDescEl.setAttribute('content', pageData.metaDescription);
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);

      if (metaDescEl && prevDescription) {
        metaDescEl.setAttribute('content', prevDescription);
      }
    };
  }, [isOpen, onClose, pageData]);

  // Set default location when pageData changes
  useEffect(() => {
    if (pageData?.defaultLocation) {
      setFormData((prev) => ({
        ...prev,
        location: prev.location || pageData.defaultLocation
      }));
    }
  }, [pageData]);

  if (!isOpen || !pageData) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '2d5b6f3c-8c5e-4c7a-9f1e-3b2a1d0c9b8a';
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
          location: formData.location || pageData.defaultLocation,
          message: formData.message,
          subject: `Aanvraag via landingspagina [${pageData.slug}]: ${formData.name}`,
          from_name: 'rwinkelman.nl',
          botcheck: ''
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Er ging iets mis bij het versturen.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Verbinding mislukt. Stuur gerust een appje of e-mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hallo Ruben, ik kom via de ${pageData.title} pagina en wil graag een vrijblijvend voorbeeld bekijken.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={pageData.title}
        className="relative w-full max-w-4xl bg-[#0E1117] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-surface/90 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-sand">
              {pageData.badge}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Sluit landingspagina venster"
            className="p-2 rounded-xl text-brand-sandMuted hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
          
          {/* Hero Header in Modal */}
          <div>
            <div className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider mb-2">
              Maatwerk Webdesign &bull; Persoonlijke Demo
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-sand tracking-tight leading-tight">
              {pageData.headline}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-sandMuted leading-relaxed max-w-2xl">
              {pageData.subheadline}
            </p>
          </div>

          {/* 3 Key Pillars / Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pageData.highlights.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-brand-surface/60 border border-white/10 hover:border-brand-accent/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-brand-sand mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-sandMuted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Offer & Form Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-accent/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Offer Summary */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Vrijblijvend &bull; € 0,- vooraf</span>
                </div>

                <h3 className="text-xl font-bold text-brand-sand">
                  Vraag jouw gratis voorbeeldwebsite aan
                </h3>

                <p className="text-xs sm:text-sm text-brand-sandMuted leading-relaxed">
                  Ik ontwerp vooraf een interactief werkend concept. Bevalt het ontwerp tijdens de demo? Dan bouwen we het volledig af voor <strong className="text-brand-sand font-bold">€ 699,-</strong>. Zo niet? Geen enkel probleem en nul kosten.
                </p>

                {/* Direct WhatsApp Option */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/31683589410?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-colors w-full justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Direct een appje sturen naar Ruben</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Embedded Form */}
              <div className="lg:col-span-7 bg-brand-dark/70 border border-white/10 rounded-2xl p-5 sm:p-6">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-brand-sand">
                      Aanvraag ontvangen!
                    </h4>
                    <p className="text-xs text-brand-sandMuted max-w-sm mx-auto">
                      Ik ga direct aan de slag met een passend concept en neem contact op om de persoonlijke demonstratie in te plannen.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', location: pageData.defaultLocation, message: '' });
                      }}
                      className="text-xs text-brand-accent hover:underline mt-2 inline-block"
                    >
                      Nieuwe aanvraag doen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/30 text-xs text-red-300 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="landing-name" className="block text-[11px] font-bold text-brand-sand mb-1">
                          Naam *
                        </label>
                        <input
                          id="landing-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Bijv. Jan de Vries"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-brand-sand text-xs focus:outline-none focus:border-brand-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="landing-email" className="block text-[11px] font-bold text-brand-sand mb-1">
                          E-mailadres *
                        </label>
                        <input
                          id="landing-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jan@bedrijf.nl"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-brand-sand text-xs focus:outline-none focus:border-brand-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="landing-phone" className="block text-[11px] font-bold text-brand-sand mb-1">
                          Telefoonnummer
                        </label>
                        <input
                          id="landing-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="06 12345678"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-brand-sand text-xs focus:outline-none focus:border-brand-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="landing-location" className="block text-[11px] font-bold text-brand-sand mb-1">
                          Plaats / Locatie
                        </label>
                        <input
                          id="landing-location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-brand-sand text-xs focus:outline-none focus:border-brand-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="landing-message" className="block text-[11px] font-bold text-brand-sand mb-1">
                        Vertel kort over je bedrijf &amp; wensen *
                      </label>
                      <textarea
                        id="landing-message"
                        required
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Wat is je bedrijfsnaam en wat voor website zoek je?"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-brand-sand text-xs focus:outline-none focus:border-brand-accent transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-xs transition-all shadow-lg shadow-brand-accent/25 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Bezig met versturen...' : pageData.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

          {/* Footer note in modal */}
          <div className="pt-2 text-center text-xs text-brand-sandDim flex flex-wrap items-center justify-center gap-4 border-t border-white/5">
            <span>KvK: 86631020</span>
            <span>&bull;</span>
            <span>Gevestigd in Drachten &bull; Actief in heel Friesland</span>
            <span>&bull;</span>
            <button
              type="button"
              onClick={onClose}
              className="text-brand-accent hover:underline font-medium"
            >
              Bekijk de complete homepage &rarr;
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
