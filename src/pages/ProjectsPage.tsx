import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              Projects
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Signature Pilots
            </h1>
            <p className="text-lg text-gray-600">
            Pwani Youth Network leads and coordinates a diverse portfolio of community-driven initiatives in Kilifi, Mombasa, Kwale, and surrounding coastal regions. Our programs center on active citizenship, youth empowerment, health and HIV prevention, safe labor migration, climate action, digital inclusion, advocacy, education reform, and sport-based development. We collaborate with local CSOs, government entities, and international partners to strengthen capacity, promote social accountability, and foster inclusive, sustainable development.
            </p>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

