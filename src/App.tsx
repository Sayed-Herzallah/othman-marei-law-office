/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Values } from './components/Values';
import { Articles } from './components/Articles';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNavBar } from './components/BottomNavBar';

export default function App() {
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    setSelectedServiceForConsultation(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans-arabic selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero 
          onContactClick={scrollToContact} 
          onAboutClick={scrollToAbout} 
        />
        
        <About />

        <Services 
          onSelectServiceForConsultation={handleServiceInquiry} 
        />
        
        <Values />
        
        <Articles />
        
        <FAQ />
        
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Facebook-style Bottom Navigation Tab Bar */}
      <BottomNavBar />
    </div>
  );
}
