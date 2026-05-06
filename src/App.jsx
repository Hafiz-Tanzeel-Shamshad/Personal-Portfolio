import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CertificationsPage from "./pages/CertificationsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import LearningBlogPage from "./pages/LearningBlogPage.jsx";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/tech-notes" element={<LearningBlogPage />} />
        <Route path="/learning" element={<Navigate to="/tech-notes" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}
