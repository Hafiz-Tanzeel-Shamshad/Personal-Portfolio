import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CertificationsPage from "./pages/CertificationsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import LearningBlogPage from "./pages/LearningBlogPage.jsx";
import ChatBot from "./chatbot/ChatBot";


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

const CANONICAL_BASE = "https://www.hafiztanzeel.me";
const SECTION_ROUTE_PATHS = new Set([
  "/projects",
  "/contact",
  "/about",
  "/skills",
  "/education",
]);

function CanonicalTag() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalPath = SECTION_ROUTE_PATHS.has(normalizedPath) ? "/" : normalizedPath;
  const canonicalUrl = `${CANONICAL_BASE}${canonicalPath}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

function SectionRoute({ sectionId }) {
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 60;

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts <= maxAttempts) {
        window.requestAnimationFrame(scrollToSection);
      }
    };

    scrollToSection();
  }, [sectionId]);

  return <HomePage />;
}

const sectionRoutes = [
  { path: "/projects", sectionId: "projects" },
  { path: "/contact", sectionId: "contact" },
  { path: "/about", sectionId: "about" },
  { path: "/skills", sectionId: "skills" },
  { path: "/education", sectionId: "education" },
];

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CanonicalTag />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {sectionRoutes.map(({ path, sectionId }) => (
          <Route
            key={path}
            path={path}
            element={<SectionRoute sectionId={sectionId} />}
          />
        ))}
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/tech-notes" element={<LearningBlogPage />} />
        <Route path="/learning" element={<Navigate to="/tech-notes" replace />} />
      </Routes>
      <Footer />
      <ChatBot />
    </Router>
  );
}
