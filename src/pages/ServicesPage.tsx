import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const services = [
  {
    title: "Program Design Sprints",
    description:
      "Rapid co-design labs that turn community insights into implementable youth initiatives within four weeks.",
    highlights: [
      "Human-centered research pods",
      "Budget + MEL blueprints",
      "County capacity building",
    ],
  },
  {
    title: "Implementation Partners",
    description:
      "Full-stack delivery teams for SRHR, climate, and enterprise programs with monitoring baked in.",
    highlights: [
      "Trained youth facilitators",
      "Mobile lab toolkits",
      "Realtime dashboards",
    ],
  },
  {
    title: "Creative & Media Studio",
    description:
      "Podcasts, documentaries, and campaigns that translate policy into pop culture for Gen-Z audiences.",
    highlights: [
      "PYN Radio syndication",
      "Multilingual storytelling",
      "Cause-based brand systems",
    ],
  },
  {
    title: "Advisory & Training",
    description:
      "Executive coaching and learning journeys for institutions investing in inclusive coastal futures.",
    highlights: [
      "Governance playbooks",
      "Impact financing clinics",
      "Board + youth council pairing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="bg-gradient-to-b from-kenya-black via-gray-900 to-black text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-white/70">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold">
              End-to-End Youth Infrastructure
            </h1>
            <p className="text-lg text-white/80">
              Engage us to design, deploy, and storytell youth-centered programs
              that uplift coastal Kenya.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all p-8 space-y-4 bg-white"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-kenya-green">
                  Offering
                </p>
                <h2 className="text-2xl font-bold text-kenya-black">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="text-kenya-green mt-1">●</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 bg-gray-50 rounded-[2rem] py-12">
            <h2 className="text-3xl font-semibold text-kenya-black">
              Let’s Co-Design Impact
            </h2>
            <p className="text-gray-600">
              Share your brief and we will convene a rapid assessment, assemble
              youth talent, and deploy pilot teams within 30 days.
            </p>
            <Link
              to="/#contact"
              className="inline-flex justify-center px-8 py-4 rounded-full bg-kenya-black text-white font-semibold hover:bg-kenya-green transition"
            >
              Book A Strategy Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

