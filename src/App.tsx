import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MaterialsPreviewSection from './components/MaterialsPreviewSection';
import PackagesPreviewSection from './components/PackagesPreviewSection';

import Footer from './components/Footer';
import Materials from './pages/Materials';
import Prices from './pages/Prices';

const Home: React.FC = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />

    <div className="sticky top-0 h-[70vh] z-0">
      <Hero />
    </div>

    <main className="relative z-10 bg-white shadow-xl">
      <AboutSection />

      <div id="services">
        <ServicesSection />
      </div>

      <div id="materials">
        <MaterialsPreviewSection />
      </div>

      <div id="pricing">
        <PackagesPreviewSection />
      </div>


      <Footer />
    </main>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materiales" element={<Materials />} />
        <Route path="/precios" element={<Prices />} />
      </Routes>
    </Router>
  );
};

export default App;
