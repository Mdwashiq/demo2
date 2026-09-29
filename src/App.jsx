import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProjectConsultationModal from './components/ProjectConsultationModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#181816] selection:bg-[#181816] selection:text-white">
        {/* Navigation */}
        <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home onOpenConsultation={() => setConsultationOpen(true)} />}
            />
            <Route
              path="/about"
              element={<About onOpenConsultation={() => setConsultationOpen(true)} />}
            />
            <Route
              path="/services"
              element={<Services onOpenConsultation={() => setConsultationOpen(true)} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/:id"
              element={
                <ProjectDetail onOpenConsultation={() => setConsultationOpen(true)} />
              }
            />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all fallback */}
            <Route
              path="*"
              element={<Home onOpenConsultation={() => setConsultationOpen(true)} />}
            />
          </Routes>
        </main>

        {/* Universal Footer */}
        <Footer onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Floating WhatsApp CTA */}
        <WhatsAppButton />

        {/* Universal Project Inquiry Modal */}
        <ProjectConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
        />
      </div>
    </Router>
  );
}
