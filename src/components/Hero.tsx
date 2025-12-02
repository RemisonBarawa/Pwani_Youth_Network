import { ArrowRight, Users, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const slideshowImages = [
  "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763730881/PYN_xfm1o3.jpg",
  "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996070/Active_Youth_Voices_jamsrs.jpg",
  "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764071496/Blue_Economy_1_xh3r3k.jpg",
  "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070966/Skills_Innovation_syvn4c.jpg",
  "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070967/Wellbeing_SRHR_mqzssf.jpg",
  "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996069/Youth_for_Climate_Action_nvsdfg.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background Slideshow with Modern Transitions */}
      <div className="absolute inset-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentImageIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "opacity, transform",
            }}
          />
        ))}
        {/* Reduced overlay - subtle glassmorphism effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-kenya-green/30 via-coast-ocean/25 to-kenya-red/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1),_transparent_70%)]" />
      </div>

      {/* Modern floating orbs with reduced opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="uppercase tracking-[0.5rem] text-white/70 mb-4">
              Since 2013
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Coastal Youth
              <span className="block text-coast-sand">Leading the Future</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              Transforming lives across Kenya's coast through community-driven initiatives. 
              From health and education to economic empowerment and environmental action, 
              we're building a future where every young person thrives and contributes to 
              sustainable coastal development.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/initiatives"
                className="bg-white text-kenya-green px-8 py-4 rounded-full font-semibold hover:bg-coast-sand transition-all transform hover:translate-y-[-2px] shadow-xl flex items-center justify-center gap-2"
              >
                Our Impact
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/#contact"
                className="bg-transparent border border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:translate-y-[-2px]"
              >
                Partner With Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/30 shadow-xl hover:bg-white/15 transition-all duration-300 flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white">
                  <Users size={28} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">15K+</p>
                  <p className="text-sm text-white/80">Youth Reached</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/30 shadow-xl hover:bg-white/15 transition-all duration-300 flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white">
                  <Globe2 size={28} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">6 Counties</p>
                  <p className="text-sm text-white/80">Active Footprint</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full animate-pulse" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/50 shadow-2xl backdrop-blur-sm bg-white/5">
              <img
                src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763731315/PYN_Logo_fozuu7.png"
                alt="Pwani Youth leaders collaborating outdoors"
                className="w-full h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/50">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
                  Live From Kilifi Hub
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Youth co-designing sustainable businesses, climate action, and
                  storytelling for coastal resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
