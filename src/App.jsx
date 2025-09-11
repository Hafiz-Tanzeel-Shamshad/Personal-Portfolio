// import './App.css'
import { useEffect } from "react";
import AboutSection from "./components/Pages/AboutSection.jsx";
import EducationSection from "./components/Pages/EducationSection.jsx";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/Pages/HeroSection.jsx";
import SkillsSlider from "./components/Pages/SkillsSection.jsx";
import ContactSection from "./components/Pages/ContactSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FeaturedProjects from "./components/Pages/FeaturedProjects.jsx";

export default function App() {
  return (
    <>
      <Header /> 
      <HeroSection /> 
      <AboutSection /> 
      <SkillsSlider /> 
      <FeaturedProjects /> 
      <EducationSection /> 
      <ContactSection /> 
      <Footer /> 
    </>
  );
}
