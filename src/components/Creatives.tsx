import { ExternalLink } from "lucide-react";

const creativeServices = [
  {
    title: "PYN Podcast",
    subtitle: "Voices of the Coast",
    description:
      "As young people we have pressing issues that we would like to address and here we create our own voice Amplifier.",
    icon: "🎙️",
    link: "https://soundcloud.com/doitordoitpodcast",
    gradient:
      "bg-gradient-to-br from-kenya-red via-coast-coral to-kenya-red",
    accentBg: "bg-kenya-red",
    accentBorder: "border-kenya-red/40",
    accentShadow: "shadow-[0_15px_40px_rgba(187,0,0,0.25)]",
    tags: ["Youth Stories", "Leadership", "Community"],
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050188/Podcast_2_aqmvfg.png",
  },
  {
    title: "PYN Radio",
    subtitle: "Live from the Coast",
    description:
      "A 24/7 youth-powered station serving music, community news, and multilingual talk shows that celebrate coastal culture.",
    icon: "📻",
    link: "https://radio.pwaniyouth.org",
    gradient:
      "bg-gradient-to-br from-coast-ocean via-kenya-green to-coast-ocean",
    accentBg: "bg-coast-ocean",
    accentBorder: "border-coast-ocean/40",
    accentShadow: "shadow-[0_15px_40px_rgba(0,119,190,0.25)]",
    tags: ["Live Stream", "Culture", "Community News"],
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050188/Podcast_1_cxrel2.jpg",
  },
  {
    title: "Plastsafi Shop",
    subtitle: "Waste to Wonder",
    description:
      "Sustainable products upcycled from coastal waste streams. Art, household items, and lifestyle essentials born from circular design.",
    icon: "♻️",
    link: "https://plastsafi-pyn1.odoo.com/",
    gradient:
      "bg-gradient-to-br from-kenya-green via-coast-palm to-kenya-green",
    accentBg: "bg-kenya-green",
    accentBorder: "border-kenya-green/40",
    accentShadow: "shadow-[0_15px_40px_rgba(0,102,0,0.25)]",
    tags: ["Circular Economy", "Upcycled Art", "Household"],
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764071496/Blue_Economy_1_xh3r3k.jpg",
  },
];

export default function Creatives() {
  return (
    <section
      id="creatives"
      className="py-24 bg-gradient-to-b from-white via-coast-sand/15 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-500 mb-4">
            Creatives
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-kenya-black mb-6">
            Amplify. Create. Transform.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podcast, radio, and Plastsafi shop — a triad of youth-owned spaces
            celebrating coastal imagination, culture, and enterprise.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-3 mb-16">
          {creativeServices.map((service, index) => (
            <article
              key={service.title}
              className="group relative rounded-[2.4rem] overflow-hidden border-2 border-white/40 bg-white shadow-xl hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div
                className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kenya-black/80 via-transparent to-transparent" />

                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-4xl shadow-xl border border-white/70">
                    {service.icon}
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-semibold uppercase tracking-[0.3em] text-kenya-black border border-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative p-8 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-kenya-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/cta inline-flex items-center gap-3 w-full justify-center px-6 py-4 rounded-2xl text-white font-semibold ${service.accentBg} border ${service.accentBorder} ${service.accentShadow} transition-transform duration-300 hover:scale-105`}
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-kenya-green/25 bg-gradient-to-br from-kenya-green/5 via-coast-sand/15 to-kenya-green/5 p-10 text-center">
        <div
  className="absolute inset-0 opacity-30 bg-repeat"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006600' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  }}
/>

          <div className="relative space-y-6">
            <h3 className="text-3xl font-bold text-kenya-black">
              Join the Creative Movement
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Tune in, shop sustainably, or drop a brief. Every interaction fuels
              dignified livelihoods and cultural pride across the Coast.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/gallery"
                className="px-8 py-4 rounded-full border-2 border-kenya-green text-kenya-green font-semibold hover:bg-kenya-green hover:text-white transition-all duration-300"
              >
                Explore Visuals
              </a>
              <a
                href="/#contact"
                className="px-8 py-4 rounded-full bg-kenya-black text-white font-semibold hover:bg-kenya-green transition-all duration-300 hover:scale-105"
              >
                Collaborate With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

