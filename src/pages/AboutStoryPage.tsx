import Footer from "../components/Footer";
import Header from "../components/Header";
import { Calendar, MapPin, Users, Target } from "lucide-react";

const milestones = [
  {
    year: "2013",
    title: "The Beginning",
    description: "Pwani Youth Network was founded with a vision to empower coastal youth and create opportunities for positive change.",
    icon: <Calendar size={24} />,
  },
  {
    year: "2015",
    title: "Expanding Reach",
    description: "Expanded operations to cover multiple counties, establishing community hubs and building partnerships.",
    icon: <MapPin size={24} />,
  },
  {
    year: "2018",
    title: "Program Growth",
    description: "Launched comprehensive programs in health, education, economic empowerment, and environmental conservation.",
    icon: <Users size={24} />,
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Adapted to new challenges, launching digital literacy programs and online platforms to continue serving youth during difficult times.",
    icon: <Target size={24} />,
  },
  {
    year: "2023",
    title: "15,000+ Impact",
    description: "Reached a milestone of over 15,000 youth directly impacted through our various programs and initiatives.",
    icon: <Users size={24} />,
  },
  {
    year: "2025",
    title: "Looking Forward",
    description: "Continuing to innovate and expand, with new programs like Bangla Talent Sports Academy and strengthened community partnerships.",
    icon: <Target size={24} />,
  },
];

export default function AboutStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-kenya-black">
              Our Story
            </h1>
            <p className="text-lg text-gray-600">
              A journey of transformation, resilience, and unwavering commitment to youth empowerment
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-kenya-black mb-6 text-center">
                The Journey Begins
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In 2013, a group of passionate young leaders came together with a shared vision: 
                  to create a future where every young person in Coastal Kenya has the opportunity 
                  to thrive. What started as a small community-based organization has grown into 
                  a movement that touches thousands of lives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our story is not just about programs and projects—it's about the countless young 
                  people who have transformed their lives and communities through our work. It's 
                  about the mothers who received health support, the entrepreneurs who started 
                  businesses, the students who accessed education, and the activists who found 
                  their voice.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, Pwani Youth Network stands as a testament to what's possible when 
                  communities come together, when young people are given the tools and opportunities 
                  to lead, and when we believe in the power of positive change.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-kenya-black mb-12 text-center">
                Key Milestones
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-kenya-green via-coast-ocean to-kenya-red"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div className="flex-1">
                        <div
                          className={`bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 ${
                            index % 2 === 0 ? "text-right" : "text-left"
                          }`}
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-gradient-to-br from-kenya-green to-coast-palm p-3 rounded-xl text-white">
                              {milestone.icon}
                            </div>
                            <div>
                              <span className="text-2xl font-bold text-kenya-green">
                                {milestone.year}
                              </span>
                              <h3 className="text-xl font-bold text-kenya-black">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-700">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="relative z-10 w-6 h-6 bg-kenya-green rounded-full border-4 border-white shadow-lg"></div>
                      <div className="flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-kenya-green via-coast-ocean to-kenya-red rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">The Story Continues</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our journey is far from over. Every day, we're writing new chapters of impact, 
                transformation, and hope. Join us as we continue to build a future where every 
                young person can progress and prosper.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-white text-kenya-green px-8 py-4 rounded-full font-semibold hover:bg-coast-sand transition-all transform hover:translate-y-[-2px] shadow-xl"
              >
                Be Part of Our Story
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

