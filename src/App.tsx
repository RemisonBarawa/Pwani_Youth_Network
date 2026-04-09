import { Navigate, Route, Routes } from "react-router-dom";
import BlogCanvas from "./components/BlogCanvas";
import LandingPage from "./components/LandingPage";
import Chatbot from "./components/Chatbot";
import AboutLeadershipPage from "./pages/AboutLeadershipPage";
import AboutOverviewPage from "./pages/AboutOverviewPage";
import AboutStoryPage from "./pages/AboutStoryPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CreativesPage from "./pages/CreativesPage";
import DonatePage from "./pages/DonatePage";
import DonationCallbackPage from "./pages/DonationCallbackPage";
import GalleryPage from "./pages/GalleryPage";
import InitiativesPage from "./pages/InitiativesPage";
import ReportsPage from "./pages/ReportsPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* About Us Routes */}
      <Route path="/about/overview" element={<AboutOverviewPage />} />
      <Route path="/about/leadership" element={<AboutLeadershipPage />} />
      <Route path="/about/story" element={<AboutStoryPage />} />
      
      {/* Initiatives (merged Programs & Projects) */}
      <Route path="/initiatives" element={<InitiativesPage />} />
      
      {/* Media Routes */}
      <Route path="/media/gallery" element={<GalleryPage />} />
      <Route path="/media/reports" element={<ReportsPage />} />
      
      {/* Get Involved Routes */}
      <Route path="/get-involved/donate" element={<DonatePage />} />
      <Route path="/donate/callback" element={<DonationCallbackPage />} />
      <Route path="/get-involved/contact" element={<ContactPage />} />
      
      {/* Blog Routes */}
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogCanvas />} />
      
      {/* Legacy Routes - Redirect to new structure */}
      <Route path="/programs" element={<Navigate to="/initiatives#programs" replace />} />
      <Route path="/projects" element={<Navigate to="/initiatives#projects" replace />} />
      <Route path="/gallery" element={<Navigate to="/media/gallery" replace />} />
      
      {/* Other Routes */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/creatives" element={<CreativesPage />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;
