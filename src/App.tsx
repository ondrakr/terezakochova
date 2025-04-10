import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Consultation from './components/Consultation';
import WhenToContact from './components/WhenToContact';
import AboutMeExtended from './components/AboutMeExtended';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 6; // Aktualizovaný počet sekcí

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (direction: 'up' | 'down') => {
    const sections = document.querySelectorAll('section');
    if (direction === 'up' && currentSection > 0) {
      sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
    } else if (direction === 'down' && currentSection < totalSections - 1) {
      sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navigation 
        currentSection={currentSection}
        totalSections={totalSections}
        onNavigate={handleNavigation}
      />
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <AboutMe />
      </section> 
      <section id="consultation">
        <Consultation />
      </section>
      <section id="when-to-contact">
        <WhenToContact />
      </section>
      <section id="about-extended">
        <AboutMeExtended />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
