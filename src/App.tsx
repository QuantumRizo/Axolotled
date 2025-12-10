import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';

const Home: React.FC = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />

    <div className="sticky top-0 h-[70vh] z-0">
      <Hero />
    </div>

    <main className="relative z-10 bg-white shadow-xl">
      <AboutSection />
      <ServicesSection />
      <ProjectGrid />
      <Footer />
    </main>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/sobre-mi" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
