import { useMemo, useState } from "react";

const galleryCategories = [
  { value: "All", label: "All Stories", tone: "Everywhere, every day" },
  {
    value: "SRHR & Wellbeing",
    label: "SRHR + Wellbeing",
    tone: "Care systems and adolescent health",
  },
  {
    value: "Blue Economy & Climate",
    label: "Blue Economy + Climate",
    tone: "Coastal resilience, mangroves, and clean energy",
  },
  {
    value: "Creative Economy",
    label: "Creative Economy",
    tone: "Studios, festivals, and storytelling labs",
  },
  {
    value: "Civic Justice",
    label: "Civic Justice",
    tone: "Legal empowerment and governance hubs",
  },
  {
    value: "Skills & Innovation",
    label: "Skills + Innovation",
    tone: "Tech labs, maker days, and product sprints",
  },
];

const galleryItems = [
  {
    title: "Turning Waste to Gold",
    location: "Mombasa",
    category: "Blue Economy & Climate",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764071496/Blue_Economy_1_xh3r3k.jpg",
    tags: ["Plastsafi", "Environmental science"],
  },
  {
    title: "Creative Coast Live",
    location: "Mombasa Hub",
    category: "Creative Economy",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050768/Mangroove_1_n0c5ot.jpg",
    tags: ["Live art", "Youth stage"],
  },
  {
    title: "Girls In Tech Clinics",
    location: "Kilifi Hub",
    category: "Skills & Innovation",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070966/Skills_Innovation_syvn4c.jpg",
    tags: ["STEM", "Sisterhood"],
  },
  {
    title: "Adolescents and Early Motherhood Initiative",
    location: "Mombasa Hub",
    category: "SRHR & Wellbeing",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070967/Wellbeing_SRHR_mqzssf.jpg",
    tags: ["Care packs", "Peer mentors"],
  },
  {
    title: "Street Law Dialogues",
    location: "Mombasa Island",
    category: "Civic Justice",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070966/Civic_Justice_2_nfkx4o.jpg",
    tags: ["Know your rights", "Town hall"],
  },
  {
    title: "Art For Peace Studio",
    location: "Mombasa Hub - Safe Space",
    category: "Creative Economy",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070966/Skills_Innovation_2_sgbdgd.jpg",
    tags: ["Murals", "Conflict healing"],
  },
  {
    title: "Blue Justice Fellowship",
    location: "Tudor Creek",
    category: "Blue Economy & Climate",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996069/Youth_for_Climate_Action_nvsdfg.jpg",
    tags: ["Fisherfolk rights", "Data dives"],
  },
  {
    title: "Mobile Skills Lab",
    location: "Mombasa Hub",
    category: "Skills & Innovation",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763730880/Engagement_PYN_bri6ov.jpg",
    tags: ["XR demos", "Pop-up campus"],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-500">
            Gallery
          </p>
          <h2 className="text-4xl font-bold text-kenya-black mt-4 mb-4">
            Stories in Motion
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Members, projects, and community moments that animate Pwani Youth
            Network’s heartbeat across the coast.
          </p>
        </div>

        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {galleryCategories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`relative overflow-hidden rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all ${
                  activeCategory === category.value
                    ? "border-kenya-green bg-kenya-green text-white shadow-[0_10px_40px_rgba(0,128,128,0.25)]"
                    : "border-gray-200 bg-white/60 text-gray-600 hover:text-kenya-green hover:border-kenya-green/50"
                }`}
              >
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            {
              galleryCategories.find((category) => category.value === activeCategory)
                ?.tone
            }
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <figure
              key={item.title}
              className="group relative rounded-[2.2rem] overflow-hidden border border-white/30 bg-white shadow-xl shadow-kenya-green/10"
            >
              <img
                src={item.image}
                alt={`${item.title} in ${item.location}`}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kenya-black/90 via-kenya-black/0 to-kenya-black/0 opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-white/80">
                    {item.category}
                  </span>
                  <span className="text-white/70 text-sm">{item.location}</span>
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

