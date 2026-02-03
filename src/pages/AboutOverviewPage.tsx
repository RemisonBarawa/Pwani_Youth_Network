import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { Target, Heart, Users, Globe2 } from "lucide-react";

export default function AboutOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Us - Overview"
        description="Learn about Pwani Youth Network's mission to empower coastal Kenya youth. Founded in 2013, we've impacted 15,000+ youth across Mombasa, Kilifi & Kwale through innovative programs."
        keywords="about Pwani Youth Network, youth organization Kenya, coastal development, community empowerment, grassroots organization"
        url="https://pwaniyouthnetwork.org/about/overview"
      />
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Overview
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-kenya-black mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Established in 2013, the Pwani Youth Network (PYN) is a registered
                  community-based organization driven by the vision of a future
                  where "Kenyan Youth Progress and Prosper."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We operate as a dynamic hub for holistic development, focusing on
                  youth, children, women, and people living with disabilities. Our
                  work is grounded in the belief that empowering the younger
                  generation with the right skills, knowledge, and opportunities is
                  the key to unlocking sustainable development in the Coastal region
                  and beyond.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are not just an organization; we are a movement fostering
                  resilience, creativity, and leadership in Mombasa, Kilifi, and
                  Kwale counties.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-kenya-green to-coast-palm p-8 rounded-2xl shadow-xl transform hover:scale-105 transition">
                  <Target className="text-white mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-white/90">Kenyan Youth Progress and Prosper</p>
                </div>

                <div className="bg-gradient-to-br from-kenya-red to-coast-coral p-8 rounded-2xl shadow-xl transform hover:scale-105 transition">
                  <Heart className="text-white mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Our Mission
                  </h3>
                  <p className="text-white/90">
                    Inspire the dreams of Kenyan youth through all positive change
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                <div className="bg-kenya-green rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-kenya-black mb-2">15,000+</h3>
                <p className="text-gray-600">Youth Reached</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                <div className="bg-coast-ocean rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe2 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-kenya-black mb-2">6 Counties</h3>
                <p className="text-gray-600">Active Footprint</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                <div className="bg-kenya-red rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-kenya-black mb-2">12 Years</h3>
                <p className="text-gray-600">Of Service</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-kenya-black mb-6 text-center">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-kenya-green text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Community-Centered</h4>
                    <p className="text-gray-600">
                      Every initiative is co-designed with the communities we serve, ensuring relevance and sustainability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-kenya-green text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Youth-Led</h4>
                    <p className="text-gray-600">
                      Young people are not just beneficiaries but active leaders and co-creators of change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-kenya-green text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Inclusive</h4>
                    <p className="text-gray-600">
                      We ensure that all voices are heard, especially those of marginalized groups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-kenya-green text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact-Driven</h4>
                    <p className="text-gray-600">
                      We measure success by the real, lasting change we create in people's lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

