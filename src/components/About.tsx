import { Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-kenya-black mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kenya-red to-kenya-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
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
      </div>
    </section>
  );
}
