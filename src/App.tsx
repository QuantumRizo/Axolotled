import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MaterialsPreviewSection from './components/MaterialsPreviewSection';
import PackagesPreviewSection from './components/PackagesPreviewSection';

import Footer from './components/Footer';
import Prices from './pages/Prices';

import Resinas from './pages/Resinas';
import Filamentos from './pages/Filamentos';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import MediosAcuosos from './pages/MediosAcuosos';
import PinturasOpacas from './pages/PinturasOpacas';
import Bisuteria from './pages/Bisuteria';

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
        <Route path="/resinas" element={<Resinas />} />
        <Route path="/filamentos" element={<Filamentos />} />
        <Route path="/precios" element={<Prices />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/medios-acuosos" element={<MediosAcuosos />} />
        <Route path="/pinturas-opacas" element={<PinturasOpacas />} />
        <Route path="/bisuteria" element={<Bisuteria />} />
      </Routes>
    </Router>
  );
};

export default App;
