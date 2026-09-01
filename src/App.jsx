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

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0f172a] text-white px-4">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-4 text-xl text-gray-300">Page not found</p>
      <a href="/" className="mt-6 text-blue-400 underline">Back to home</a>
    </div>
  );
}


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

const CANONICAL_BASE = "https://www.hafiztanzeel.tech";
const SECTION_ROUTE_PATHS = new Set([
  "/projects",
  "/contact",
  "/about",
  "/skills",
  "/education",
]);

const PAGE_META = {
  "/": {
    title: "Hafiz Tanzeel | Portfolio",
    description:
      "Portfolio of Hafiz Tanzeel Shamshad, MERN Stack Developer, Computer Vision Engineer, and AI/ML Engineer specializing in LLMs, Generative AI, and Agentic AI systems.",
  },
  "/certifications": {
    title: "Certifications | Hafiz Tanzeel",
    description:
      "Certifications earned by Hafiz Tanzeel Shamshad in programming, web development, machine learning, IoT, and more.",
  },
  "/experience": {
    title: "Experience | Hafiz Tanzeel",
    description:
      "Work experience of Hafiz Tanzeel Shamshad as a MERN Stack Developer, freelance web developer, and AI/ML contributor.",
  },
  "/tech-notes": {
    title: "Tech Notes | Hafiz Tanzeel",
    description:
      "Learning notes and technical write-ups on React, Node.js, FastAPI, and machine learning by Hafiz Tanzeel Shamshad.",
  },
};

function PageMeta() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalPath = SECTION_ROUTE_PATHS.has(normalizedPath) ? "/" : normalizedPath;
  const canonicalUrl = `${CANONICAL_BASE}${canonicalPath}`;
  const meta = PAGE_META[canonicalPath] || PAGE_META["/"];

  return (
    <Helmet>
      <html lang="en" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
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
      <PageMeta />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatBot />
    </Router>
  );
}
