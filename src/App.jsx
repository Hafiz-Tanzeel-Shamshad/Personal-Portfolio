// import './App.css'
import { useEffect } from 'react';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import Header from './Header';
import HeroSection from './HeroSection';
import SkillsSlider from './SkillsSection';
import ContactSection from './ContactSection';
import Footer from './Footer'; // ✅ Add this line to import the Footer

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSlider />
      <EducationSection />
      <ContactSection />
      <Footer /> {/* ✅ Now it will render properly */}
    </>
  );
}
