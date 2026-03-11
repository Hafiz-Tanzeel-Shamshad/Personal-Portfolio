import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CertificationsPage from "./pages/CertificationsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import LearningBlogPage from "./pages/LearningBlogPage.jsx";

export default function App() {
  return (
    <Router>
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
