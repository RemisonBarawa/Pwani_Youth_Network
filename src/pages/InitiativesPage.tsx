import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import Programs from "../components/Programs";
import Projects from "../components/Projects";
import { Trophy, Recycle, Shield } from "lucide-react";

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Initiatives"
        description="Explore Pwani Youth Network's programs and projects empowering coastal Kenya youth. From SRHR education to climate action, economic empowerment to digital skills training."
        keywords="youth programs Kenya, coastal development projects, SRHR education, climate action initiatives, economic empowerment, digital skills training"
        url="https://pwaniyouthnetwork.org/initiatives"
      />
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              Initiatives
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Our Programs & Projects
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive initiatives designed to empower youth across health,
              economics, education, arts, environment, governance, and sports.
            </p>
          </div>
        </section>

        {/* Successful Ongoing Programs */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.5em] text-kenya-green mb-4">
                Ongoing Success
              </p>
              <h2 className="text-4xl font-bold text-kenya-black mb-4">
                Flagship Programs Making Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These programs represent our commitment to sustainable, community-driven change
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Bangla Talent Sports Academy */}
              <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764656256/BanglaTalent3_jxhhwn.jpg"
                    alt="Bangla Talent Sports Academy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-kenya-green text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                      Active
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-kenya-green to-coast-palm p-3 rounded-xl text-white">
                      <Trophy size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-kenya-black">
                      Bangla Talent Sports Academy
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Nurturing athletic talent and promoting sports as a vehicle for youth 
                    development, discipline, and community cohesion.
                  </p>
                  <div className="bg-coast-sand/40 rounded-xl p-4 border border-coast-sand/60">
                    <p className="text-sm uppercase text-kenya-green tracking-[0.3em] mb-1">
                      Impact
                    </p>
                    <p className="text-sm font-semibold text-kenya-black">
                      200+ athletes trained, with several representing the region in national competitions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Plastsafi Program */}
              <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764051748/Plastsafi_1_mnzaht.jpg"
                    alt="Plastsafi Waste to Value Initiative"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                      Active
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-green-600 to-teal-500 p-3 rounded-xl text-white">
                      <Recycle size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-kenya-black">
                      Plastsafi Initiative
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Turning plastic pollution into opportunity through waste recovery, 
                    value addition, and green entrepreneurship, creating decent jobs for youth.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm uppercase text-green-700 tracking-[0.3em] mb-1">
                      Impact
                    </p>
                    <p className="text-sm font-semibold text-kenya-black">
                      Youth-led green enterprises creating jobs through waste-to-value initiatives, 
                      supporting waste managers and waste pickers in Mombasa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safe Spaces Program */}
              <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070966/Skills_Innovation_2_sgbdgd.jpg"
                    alt="PYN Safe Spaces"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-coast-ocean text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                      Active
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-coast-ocean to-blue-600 p-3 rounded-xl text-white">
                      <Shield size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-kenya-black">
                      PYN Safe Spaces
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Youth-friendly safe spaces providing secure environments for young people 
                    to learn, create, express themselves, and access essential services.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="text-sm uppercase text-coast-ocean tracking-[0.3em] mb-1">
                      Impact
                    </p>
                    <p className="text-sm font-semibold text-kenya-black">
                      Creating secure environments where youth can access services, engage in 
                      creative activities, and build supportive communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="programs">
          <Programs />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

