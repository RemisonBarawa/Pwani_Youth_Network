import Footer from "../components/Footer";
import Header from "../components/Header";
import { Heart, CreditCard, Banknote, Users } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              Get Involved
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Support Our Mission
            </h1>
            <p className="text-lg text-gray-600">
              Your contribution helps us transform lives and build stronger communities
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-kenya-green to-coast-palm rounded-2xl p-8 text-white text-center shadow-xl">
                <Users className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">15,000+</h3>
                <p className="text-white/90">Youth Reached</p>
              </div>
              <div className="bg-gradient-to-br from-coast-ocean to-blue-600 rounded-2xl p-8 text-white text-center shadow-xl">
                <Heart className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">6 Counties</h3>
                <p className="text-white/90">Active Programs</p>
              </div>
              <div className="bg-gradient-to-br from-kenya-red to-coast-coral rounded-2xl p-8 text-white text-center shadow-xl">
                <Banknote className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">12 Years</h3>
                <p className="text-white/90">Of Impact</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 mb-8">
                <div className="text-center mb-8">
                  <div className="bg-kenya-green rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="text-white" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-kenya-black mb-4">
                    Make a Difference Today
                  </h2>
                  <p className="text-lg text-gray-600">
                    Your donation directly supports programs that empower youth, 
                    strengthen communities, and create lasting positive change.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-800 mb-3">What Your Donation Supports:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-kenya-green mt-1">✓</span>
                        <span>Health and well-being programs for adolescents and young mothers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-kenya-green mt-1">✓</span>
                        <span>Education scholarships and support for students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-kenya-green mt-1">✓</span>
                        <span>Entrepreneurship training and startup grants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-kenya-green mt-1">✓</span>
                        <span>Environmental conservation and climate action</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-kenya-green mt-1">✓</span>
                        <span>Sports development through Bangla Talent Sports Academy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-kenya-green mt-1">✓</span>
                        <span>Creative arts and digital skills training</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-6">
                    Donation functionality will be implemented soon. For now, please contact us directly.
                  </p>
                  <button
                    disabled
                    className="bg-gray-300 text-gray-500 px-12 py-4 rounded-full font-semibold cursor-not-allowed flex items-center gap-3 mx-auto"
                  >
                    <CreditCard size={24} />
                    Donate Now (Coming Soon)
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    For immediate donations, please contact us at{" "}
                    <a
                      href="mailto:pwaniyouthnetwork@gmail.com"
                      className="text-kenya-green hover:underline"
                    >
                      pwaniyouthnetwork@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-kenya-green via-coast-ocean to-kenya-red rounded-3xl p-12 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Other Ways to Support</h2>
                <p className="text-white/90 mb-6">
                  Donations aren't the only way to help. You can also volunteer, 
                  partner with us, or spread the word about our work.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="/get-involved/contact"
                    className="bg-white text-kenya-green px-6 py-3 rounded-full font-semibold hover:bg-coast-sand transition-all"
                  >
                    Volunteer
                  </a>
                  <a
                    href="/get-involved/contact"
                    className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                  >
                    Partner With Us
                  </a>
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

