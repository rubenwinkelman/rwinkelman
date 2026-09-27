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

const LEGAL_CONFIG = {
  voorwaarden: {
    path: '/algemene-voorwaarden',
    title: 'Algemene Voorwaarden | Ruben Winkelman',
  },
  privacy: {
    path: '/privacybeleid',
    title: 'Privacybeleid | Ruben Winkelman',
  },
};

const DEFAULT_TITLE = 'Website Laten Maken | Websites op Maat | Ruben Winkelman';

function getLegalTabFromLocation() {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/algemene-voorwaarden' ||
    path === '/voorwaarden' ||
    path === '/terms' ||
    hash === '#voorwaarden' ||
    hash === '#algemene-voorwaarden'
  ) {
    return 'voorwaarden';
  }

  if (
    path === '/privacybeleid' ||
    path === '/privacy' ||
    hash === '#privacy' ||
    hash === '#privacybeleid'
  ) {
    return 'privacy';
  }

  return null;
}

export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('voorwaarden');

  const openLegal = (tab = 'voorwaarden', pushHistory = true) => {
    const config = LEGAL_CONFIG[tab] || LEGAL_CONFIG.voorwaarden;
    setLegalTab(tab);
    setIsLegalOpen(true);
    document.title = config.title;

    if (pushHistory && window.location.pathname !== config.path) {
      window.history.pushState({ legalModal: true, tab }, '', config.path);
    }
  };

  const changeLegalTab = (tab) => {
    const config = LEGAL_CONFIG[tab] || LEGAL_CONFIG.voorwaarden;
    setLegalTab(tab);
    document.title = config.title;

    if (window.location.pathname !== config.path) {
      window.history.replaceState({ legalModal: true, tab }, '', config.path);
    }
  };

  const closeLegal = () => {
    setIsLegalOpen(false);
    document.title = DEFAULT_TITLE;

    const currentTab = getLegalTabFromLocation();
    if (currentTab) {
      if (window.history.state && window.history.state.legalModal) {
        window.history.back();
      } else {
        window.history.pushState(null, '', '/');
      }
    }
  };

  useEffect(() => {
    // 1. Initial check on mount (handles direct visits to /algemene-voorwaarden or /privacybeleid)
    const initialTab = getLegalTabFromLocation();
    if (initialTab) {
      openLegal(initialTab, false);
    }

    // 2. Browser back and forward button handler (popstate)
    const handlePopState = () => {
      const tab = getLegalTabFromLocation();
      if (tab) {
        setLegalTab(tab);
        setIsLegalOpen(true);
        document.title = LEGAL_CONFIG[tab]?.title || DEFAULT_TITLE;
      } else {
        setIsLegalOpen(false);
        document.title = DEFAULT_TITLE;
      }
    };

    // 3. Hash change handler (for backward compatibility with #voorwaarden and #privacy)
    const handleHashChange = () => {
      const tab = getLegalTabFromLocation();
      if (tab) {
        openLegal(tab, true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
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

      {/* Legal & Compliance Modal (Mollie & AVG compliant with Intercepting Routes) */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={closeLegal}
        activeTab={legalTab}
        setActiveTab={changeLegalTab}
      />
    </div>
  );
}
