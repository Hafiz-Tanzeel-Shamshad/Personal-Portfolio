import React from "react";
import HeroSection from "../components/Pages/HeroSection";
import AboutSection from "../components/Pages/AboutSection";
import SkillsSection from "../components/Pages/SkillsSection";
import FeaturedProjects from "../components/Pages/FeaturedProjects";
import EducationSection from "../components/Pages/EducationSection";
import ContactSection from "../components/Pages/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <EducationSection />
      <ContactSection />
    </>
  );
}
