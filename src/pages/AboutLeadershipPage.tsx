import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

// ─── Data ─────────────────────────────────────────────────────────────────────

// Cloudinary optimisation helper — auto format, auto quality, 400px wide
function cl(path: string) {
  return `https://res.cloudinary.com/dwhp5xrhn/image/upload/w_400,q_auto,f_auto/${path}`;
}

const BOARD_MEMBERS = [
  { name: "Mr George Ojow",  title: "Board Chair",   avatar: cl("v1775720972/Raphael_Kong_ani_cboavx.jpg") },
  { name: "Mr James Nyaga",  title: "Board Member",  avatar: cl("v1775720987/James_Kinyua_vgineh.jpg") },
  { name: "Alice Achieng",   title: "Board Member",  avatar: null },
];

const CEO = {
  name: "Alfred Sigo",
  title: "Board Secretary & CEO",
  // Larger size for the featured CEO photo
  avatar: "https://res.cloudinary.com/dwhp5xrhn/image/upload/w_800,q_auto,f_auto/v1775720965/Alfred_Sigo_jetgxb.jpg",
  bio: "Founder and CEO driving youth empowerment across Kenya's coastal region since 2013. Member of Kenya Red Cross, Global Opportunity Youth Network, Amnesty International Kenya, and UN Changemaker Agenda. He established a youth empowerment hub featuring an art studio, podcast space, ICT lab, and youth-friendly health services reaching 5,000 annually.",
};

const STAFF = [
  { name: "Joseck Mwarizangu", title: "Finance Manager",                       dept: "Finance",     avatar: cl("v1775720963/Joseck_Mwarizangu_imtjlp.jpg") },
  { name: "Benjamin Kalume",   title: "Finance Assistant",                     dept: "Finance",     avatar: cl("v1775720964/Benjamin_kalume_hoymr8.jpg") },
  { name: "Geofrey Odhiambo", title: "Programs Manager",                      dept: "Programs",    avatar: cl("v1775720962/Geofrey_odhiambo_jx3qpm.jpg") },
  { name: "Saumu Hussein",     title: "Project Officer — Health",              dept: "Programs",    avatar: cl("v1775720963/Saumu_hussein_et6ek2.jpg") },
  { name: "Clinton Ndege",     title: "Community Engagement & Field Officer",  dept: "Field",       avatar: null },
  { name: "Loice Khayanje",    title: "Plastsafi Project Officer",             dept: "Environment", avatar: cl("v1775720961/Loice_Khayanje_avj1bq.jpg") },
  { name: "Julius Otieno",     title: "Centre Manager — Bangladesh",           dept: "Operations",  avatar: null },
  { name: "Brian Ochieng",     title: "Monitoring & Evaluation Officer",       dept: "M&E",         avatar: cl("v1775720962/Brian_Ochieng_ocpn0c.jpg") },
  { name: "Sanny Kariuki",     title: "Project Officer — Malindi",             dept: "Field",       avatar: null },
];

const DEPT_STYLES: Record<string, { pill: string; dot: string }> = {
  Finance:     { pill: "bg-amber-50 text-amber-700 border-amber-200",       dot: "bg-amber-400" },
  Programs:    { pill: "bg-green-50 text-kenya-green border-green-200",     dot: "bg-kenya-green" },
  Field:       { pill: "bg-blue-50 text-coast-ocean border-blue-200",       dot: "bg-coast-ocean" },
  Environment: { pill: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  Operations:  { pill: "bg-purple-50 text-purple-700 border-purple-200",    dot: "bg-purple-500" },
  "M&E":       { pill: "bg-rose-50 text-rose-700 border-rose-200",          dot: "bg-rose-500" },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  const parts = name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, "").trim().split(" ");
  return ((parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase();
}

// ─── Connector pieces ─────────────────────────────────────────────────────────

function VLine({ h = "h-10" }: { h?: string }) {
  return (
    <div className="flex justify-center">
      <div className={`w-0.5 ${h} bg-gradient-to-b from-gray-300 to-gray-200`} />
    </div>
  );
}

function TierLabel({ color, text }: { color: "red" | "green" | "ocean"; text: string }) {
  const styles = {
    red:   "border-kenya-red/30   bg-kenya-red/5   text-kenya-red",
    green: "border-kenya-green/30 bg-kenya-green/5 text-kenya-green",
    ocean: "border-coast-ocean/30 bg-coast-ocean/5 text-coast-ocean",
  };
  return (
    <div className="flex justify-center mb-1">
      <span className={`inline-flex items-center gap-2 border rounded-full px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest ${styles[color]}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${color === "red" ? "bg-kenya-red" : color === "green" ? "bg-kenya-green" : "bg-coast-ocean"}`} />
        {text}
        <span className={`w-1.5 h-1.5 rounded-full ${color === "red" ? "bg-kenya-red" : color === "green" ? "bg-kenya-green" : "bg-coast-ocean"}`} />
      </span>
    </div>
  );
}

// ─── Board member card ────────────────────────────────────────────────────────

function BoardCard({ name, title, avatar }: { name: string; title: string; avatar: string | null }) {
  return (
    <div className="group flex flex-col items-center w-48">
      <div className="relative w-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-kenya-red/30 transition-all duration-300 p-5 flex flex-col items-center gap-4">
        {/* avatar */}
        <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 ring-2 ring-gray-100 group-hover:ring-kenya-red/20 transition-all">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-kenya-red/10 to-kenya-green/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-kenya-black/40">{getInitials(name)}</span>
            </div>
          )}
        </div>
        {/* text */}
        <div className="text-center">
          <p className="text-sm font-bold text-kenya-black leading-snug">{name}</p>
          <p className="text-xs text-gray-500 mt-1">{title}</p>
        </div>
        {/* bottom accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-kenya-red opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

// ─── CEO card ─────────────────────────────────────────────────────────────────

function CEOCard() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="grid sm:grid-cols-[280px_1fr]">
          {/* photo */}
          <div className="relative h-72 sm:h-auto overflow-hidden">
            <img
              src={CEO.avatar}
              alt={CEO.name}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kenya-black/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-white/10" />
            <div className="absolute bottom-4 left-4 sm:hidden">
              <span className="text-[10px] uppercase tracking-widest text-white/80 bg-kenya-green/80 px-3 py-1 rounded-full">
                Director / CEO
              </span>
            </div>
          </div>
          {/* content */}
          <div className="p-8 flex flex-col justify-center gap-4">
            <span className="hidden sm:inline-block self-start text-[10px] uppercase tracking-widest text-kenya-green border border-kenya-green/30 bg-kenya-green/5 px-3 py-1 rounded-full">
              Director / CEO
            </span>
            <div>
              <h3 className="text-2xl font-black text-kenya-black">{CEO.name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{CEO.title}</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{CEO.bio}</p>
            <div className="flex gap-3 pt-1">
              <a
                href="mailto:pwaniyouthnetwork@gmail.com"
                className="text-xs font-semibold text-kenya-green border border-kenya-green/30 px-4 py-2 rounded-full hover:bg-kenya-green hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Staff card ───────────────────────────────────────────────────────────────

function StaffCard({ name, title, dept, avatar, index }: {
  name: string; title: string; dept: string; avatar: string | null; index: number;
}) {
  const style = DEPT_STYLES[dept] ?? { pill: "bg-gray-50 text-gray-500 border-gray-200", dot: "bg-gray-400" };
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-kenya-green/20 transition-all duration-300 flex items-center gap-4">
      {/* avatar */}
      <div className="relative shrink-0">
        <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-gray-100 group-hover:ring-kenya-green/20 transition-all">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-400">{getInitials(name)}</span>
            </div>
          )}
        </div>
        <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[9px] font-bold text-gray-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      {/* text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-kenya-black truncate">{name}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{title}</p>
      </div>
      {/* dept badge */}
      <span className={`shrink-0 text-[10px] font-semibold border px-2.5 py-1 rounded-full ${style.pill}`}>
        {dept}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutLeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Leadership — Pwani Youth Network"
        description="Meet the board, CEO, and staff driving youth empowerment across coastal Kenya."
        keywords="Pwani Youth Network leadership, board members, CEO Alfred Sigo, staff team"
        url="https://pwaniyouthnetwork.org/about/leadership"
      />
      <Header />

      <main className="pt-28 sm:pt-32">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-black text-kenya-black">
              Our Leadership
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A dedicated team of visionaries, managers, and field officers united by one mission — empowering coastal Kenya's youth.
            </p>
          </div>
        </section>

        {/* ── Org Tree ── */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">

            {/* ── BOARD ── */}
            <TierLabel color="red" text="Board of Directors" />
            <VLine h="h-6" />

            <div className="flex justify-center gap-5 flex-wrap">
              {BOARD_MEMBERS.map((m) => (
                <BoardCard key={m.name} name={m.name} title={m.title} avatar={m.avatar} />
              ))}
            </div>

            {/* ── connector to CEO ── */}
            <VLine h="h-10" />
            <TierLabel color="green" text="Director / CEO" />
            <VLine h="h-6" />

            {/* ── CEO ── */}
            <CEOCard />

            {/* ── connector to staff ── */}
            <VLine h="h-10" />
            <TierLabel color="ocean" text="Management & Staff" />
            <VLine h="h-6" />

            {/* ── Staff grid ── */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STAFF.map((s, i) => (
                <StaffCard
                  key={s.name}
                  name={s.name}
                  title={s.title}
                  dept={s.dept}
                  avatar={s.avatar}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Group photo ── */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764054615/board_hyv9pd.jpg"
                alt="Pwani Youth Network leadership team"
                className="w-full h-80 sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kenya-black/70 via-kenya-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Collective Leadership</p>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Pwani Youth Network Leadership Council — 2025
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="py-14 px-4 border-t border-gray-100">
          <div className="max-w-2xl mx-auto grid grid-cols-3 divide-x divide-gray-200 text-center">
            {[
              { value: "3", label: "Board Members" },
              { value: "1", label: "CEO / Director" },
              { value: "9", label: "Staff Members" },
            ].map(({ value, label }) => (
              <div key={label} className="px-6">
                <p className="text-4xl font-black text-kenya-green">{value}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
