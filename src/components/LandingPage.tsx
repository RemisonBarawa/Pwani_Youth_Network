import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import CommunityImpact from "./CommunityImpact";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(target);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 120);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <CommunityImpact />
      <Contact />
      <Footer />
    </div>
  );
}

