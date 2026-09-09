import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import PricingSection from './components/PricingSection';
import Philosophy from './components/Philosophy';
import ShowcaseConcepts from './components/ShowcaseConcepts';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
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
      <Footer />
    </div>
  );
}
