
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Services from './components/Services';
import LeadMagnet from './components/LeadMagnet';
import Cases from './components/Cases';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-100 selection:text-[#d97706]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Expertise />
        <Services />
        <LeadMagnet />
        <Cases />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
