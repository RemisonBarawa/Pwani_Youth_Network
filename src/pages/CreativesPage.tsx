import Creatives from "../components/Creatives";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CreativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-kenya-black via-gray-900 to-black text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-white/70">
              Creatives
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Where Creativity Meets Impact
            </h1>
            <p className="text-lg text-white/80">
              Podcast, radio, and Plastsafi shop — three platforms amplifying
              youth voices, culture, and circular economies across the Coast.
            </p>
          </div>
        </section>
        <Creatives />
      </main>
      <Footer />
    </div>
  );
}


