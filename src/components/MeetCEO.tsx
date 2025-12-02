const stats = [
  { label: "Years of Service", value: "12", highlight: "Community first" },
  { label: "Global Fellowships", value: "4", highlight: "Youth diplomacy" },
  { label: "Impact Coalitions", value: "18", highlight: "Across Africa" },
];

const leadershipTeam = [
  {
    name: "Geofrey Odhiambo",
    title: "Program Manager",
    focus: "Cross-sector alliances for SRHR",
    avatar:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764054615/Program_manager_rd3vh0.jpg",
  },
  {
    name: "Kevin Otieno",
    title: "Innovation & Product Director",
    focus: "Digital skilling labs + creative economies accelerator",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Saumu Hussein",
    title: "Projects Manager",
    focus: "County by county youth hubs + safety systems",
    avatar:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764055420/Project_Officer_vfyfyh.jpg",
  },
];

const leadershipGroupPhoto = {
  src: "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764054615/board_hyv9pd.jpg",
  alt: "Pwani Youth Network leadership team celebrating a milestone",
  caption: "Pwani Youth Network leadership council 2025 retreat",
};

export default function MeetCEO() {
  return (
    <section id="ceo" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-coast-sand/50 blur-3xl rounded-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-coast-sand shadow-2xl">
              <img
                src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763730881/PYN_xfm1o3.jpg"
                alt="Portrait of the CEO addressing youth"
                className="w-full h-[560px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kenya-black/90 via-transparent to-transparent p-8 text-white">
                <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                  Meet the CEO
                </p>
                <h3 className="text-3xl font-bold">Alfred Sigo</h3>
                <p className="text-white/80">
                  Founder & CEO, Pwani Youth Network
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-kenya-green mb-4">
              Leadership Spotlight
            </p>
            <h2 className="text-4xl font-bold text-kenya-black mb-6">
              Centering young people as builders, peace-makers, and co-owners of
              coastal development.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Aisha is a youth advocate, community mobilizer, and global policy
              voice with over a decade championing SRHR, creative economies, and
              climate-smart livelihoods. She convenes grassroots innovators with
              public institutions to unlock dignified opportunities for every
              young person across the Coast region.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="text-gray-700">
                  “We co-design everything with the youth we serve. Joy, culture,
                  and dignity are always part of the blueprint.”
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm"
                  >
                    <p className="text-3xl font-bold text-kenya-red">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {stat.highlight}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-kenya-green text-white font-semibold hover:bg-kenya-green/90 transition"
                >
                  Book A Conversation
                </a>
                <a
                  href="mailto:hello@pwaniyouth.org"
                  className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-kenya-red hover:text-kenya-red transition"
                >
                  hello@pwaniyouth.org
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-kenya-green" />
            <p className="text-sm uppercase tracking-[0.4em] text-kenya-green">
              Leadership Architecture
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-kenya-green/40 via-transparent to-transparent" />
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/40 bg-gradient-to-br from-white via-coast-sand/30 to-white shadow-2xl">
              <img
                src={leadershipGroupPhoto.src}
                alt={leadershipGroupPhoto.alt}
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kenya-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  Collective Intelligence
                </p>
                <h3 className="text-2xl font-semibold">
                  Strategy Sprints & Governance Labs
                </h3>
                <p className="text-white/80 mt-2">{leadershipGroupPhoto.caption}</p>
              </div>
            </div>

            <div className="space-y-5">
              {leadershipTeam.map((leader, index) => (
                <div
                  key={leader.name}
                  className="group flex items-center gap-5 rounded-[1.75rem] border border-gray-100/70 bg-white/80 backdrop-blur-xl p-5 shadow-lg shadow-kenya-green/5 hover:-translate-y-0.5 hover:border-kenya-green/50 transition-all"
                >
                  <div className="relative">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white shadow-lg"
                      loading="lazy"
                    />
                    <span className="absolute -top-2 -right-2 rounded-full bg-kenya-red px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                      {leader.title}
                    </p>
                    <p className="text-xl font-semibold text-kenya-black">
                      {leader.name}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{leader.focus}</p>
                  </div>
                  <div className="rounded-full border border-gray-200 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gray-500 group-hover:border-kenya-green group-hover:text-kenya-green transition">
                    Lead
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

