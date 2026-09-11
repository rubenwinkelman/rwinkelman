import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import PricingSection from './components/PricingSection';
import Philosophy from './components/Philosophy';
import ShowcaseConcepts from './components/ShowcaseConcepts';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('voorwaarden');

  const openLegal = (tab = 'voorwaarden') => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#voorwaarden' || hash === '#algemene-voorwaarden') {
        openLegal('voorwaarden');
      } else if (hash === '#privacy' || hash === '#privacybeleid') {
        openLegal('privacy');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-sand selection:bg-brand-accent selection:text-white flex flex-col font-sans">
      {/* Pinned Scroll Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Workflow />
        <PricingSection />
        <Philosophy />
        <ShowcaseConcepts />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer strictly adhering to master rules */}
      <Footer onOpenLegal={openLegal} />

      {/* Legal & Compliance Modal (Mollie & AVG compliant) */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        activeTab={legalTab}
        setActiveTab={setLegalTab}
      />
    </div>
  );
}
