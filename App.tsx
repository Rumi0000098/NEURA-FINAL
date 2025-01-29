import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesPage from './components/ServicesPage';
import About from './components/About';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import AppointmentBooking from './components/ServiceDetail/AppointmentBooking';
import StandardVoiceCallAssistant from './components/ServiceDetail/StandardVoiceCallAssistant';
import ComplexVoiceCallAssistant from './components/ServiceDetail/ComplexVoiceCallAssistant';
import StandardChatbot from './components/ServiceDetail/StandardChatbot';
import ComplexChatbot from './components/ServiceDetail/ComplexChatbot';
import AutomatedReplies from './components/ServiceDetail/AutomatedReplies';
import VideoAutoPost from './components/ServiceDetail/VideoAutoPost';
import ImageAutoPost from './components/ServiceDetail/ImageAutoPost';
import SilverGenLeads from './components/ServiceDetail/SilverGenLeads';
import GoldGenLeads from './components/ServiceDetail/GoldGenLeads';
import PlatinumGenLeads from './components/ServiceDetail/PlatinumGenLeads';
import ProGenLeads from './components/ServiceDetail/ProGenLeads';
import WebsiteCreation from './components/ServiceDetail/WebsiteCreation';
import ViralContentGeneration from './components/ServiceDetail/ViralContentGeneration';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/services/appointment-booking" element={<AppointmentBooking />} />
            <Route path="/services/standard-voice-call-assistant" element={<StandardVoiceCallAssistant />} />
            <Route path="/services/complex-voice-call-assistant" element={<ComplexVoiceCallAssistant />} />
            <Route path="/services/standard-ai-chatbot" element={<StandardChatbot />} />
            <Route path="/services/complex-ai-chatbot" element={<ComplexChatbot />} />
            <Route path="/services/automated-replies" element={<AutomatedReplies />} />
            <Route path="/services/ai-video-auto-post" element={<VideoAutoPost />} />
            <Route path="/services/ai-image-auto-post" element={<ImageAutoPost />} />
            <Route path="/services/silver-gen-leads" element={<SilverGenLeads />} />
            <Route path="/services/gold-gen-leads" element={<GoldGenLeads />} />
            <Route path="/services/platinum-gen-leads" element={<PlatinumGenLeads />} />
            <Route path="/services/pro-gen-leads" element={<ProGenLeads />} />
            <Route path="/services/website-creation" element={<WebsiteCreation />} />
            <Route path="/services/ai-viral-content-generation" element={<ViralContentGeneration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
