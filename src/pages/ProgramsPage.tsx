import Footer from "../components/Footer";
import Header from "../components/Header";
import Programs from "../components/Programs";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              Programs
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Where Youth Flourish
            </h1>
            <p className="text-lg text-gray-600">
              Tailored health, education, economic, creative, environmental, and
              governance programs co-created with coastal youth.
            </p>
          </div>
        </section>
        <Programs />
      </main>
      <Footer />
    </div>
  );
}

