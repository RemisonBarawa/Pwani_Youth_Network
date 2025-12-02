const projectHighlights = [
  {
      title: "Active Youth Voices - Youthnaplanke Program",
      description:
      "Promoting active citizenship in Kilifi County through volunteerism for development, empowering underprivileged community members—including girls, women, youth, and people with disabilities—to engage with policymakers and other stakeholders.",
      impact: "Strengthened capacities of CSOs and government entities to promote social accountability, resilience, social inclusion, and gender equality",
      image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996070/Active_Youth_Voices_jamsrs.jpg",
      tags: ["Youth Empowerment", "Citizen Participation", "Gender Equality"],
    },
    {
      title: "Mosaic LVCT Service Delivery Initiative",
      description:
      "Global program (2021–2026) to prevent HIV by accelerating introduction and scale-up of new biomedical prevention products through user-centered research, translation, and capacity-building for partners.",
      impact: "Supports adolescent girls and young women and other women in HIV prevention efforts across multiple countries",
      image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996069/Mosaic_LVCT_hkncts.jpg",
      tags: ["HIV Prevention", "Biomedical Innovation", "Global Health"],
    },
    {
      title: "Migration Work - Safe and Orderly Labour Migration",
      description:
      "In partnership with IOM, advocating for gender-related concerns in safe, organized, and humane labor migration; engaging CSOs to protect the well-being of migrant workers in coastal Kenya (Kwale, Mombasa, Kilifi).",
      impact: "Enhanced protections and well-being for migrant workers through civil society engagement and policy advocacy",
      image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996069/Migration_Work_d0n3me.jpg",
      tags: ["Migration", "Gender Equality", "Policy Advocacy"],
    },
    {
      title: "WASTE2WORK Project",
      description:
      "From Waste to Work: strengthening green youth-led start-ups to create decent jobs through waste recovery and value addition, with the Pwani Youth Network Start-up Plastsafi supporting waste managers and waste pickers.",
      impact: "Youth-led green enterprises advancing waste-to-value initiatives in Mombasa",
      image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996069/WASTE2WORK_ysxi3s.jpg",
      tags: ["Green Jobs", "Waste Management", "Entrepreneurship"],
      },
    {
      title: "Skills for Inclusive Digital Participation Project",
      description:
      "Empowering digitally excluded individuals with essential digital skills to participate in the digital economy and society, including basic, intermediate, and professional tools training.",
      impact: "Improved online participation and livelihoods through inclusive digital training",
      image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996070/Skills_for_Inclusive_Digital_uqwlgf.jpg",
      tags: ["Digital Inclusion", "Skills Training", "Economic Opportunity"],
    },
    {
      title: "Youth for Climate Action - Changemakers4Life",
      description:
      "Youth and women-led climate action focusing on mangrove restoration and tackling plastic pollution in Tudor Creek, with a sustainable, community-led response and alternative livelihoods.",
      impact: "Young people and women leading mangrove restoration and climate resilience efforts",
      image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996069/Youth_for_Climate_Action_nvsdfg.jpg",
      tags: ["Climate Action", "Mangrove Restoration", "Plastic Pollution"],
    },
    {
      title: "Strengthening Local Advocacy Leadership in East Africa (SLALE) - SLALE",
      description:
      "Developing organizational strategy and advocacy capacity to advance family planning and SRHR, with a focus on effective advocacy ecosystems and resource optimization for grassroots and youth-led organizations.",
      impact: "Enhanced advocacy capacity and outreach for FP/SRHR among civil society",
      image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996070/SLALE_jjdbqz.jpg",
      tags: ["Advocacy", "SRHR", "Capacity Building"],
    },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-kenya-green mb-3">
            Signature Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-kenya-black mb-4">
            Projects Alive With Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-disciplinary pilots reimagining livelihood, well-being, and
            environmental guardianship with youth at the heart.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {projectHighlights.map((project) => (
            <article
              key={project.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-6 text-white/90 text-sm font-medium tracking-[0.3em]">
                  FIELD NOTES
                </p>
              </div>

              <div className="p-8 space-y-5">
                <div className="flex items-center gap-2 text-sm text-kenya-green font-semibold">
                  <span className="w-8 h-[2px] bg-kenya-green" />
                  Youth-centered co-creation
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="bg-coast-sand/40 rounded-2xl p-4 border border-coast-sand/60">
                  <p className="text-sm uppercase text-kenya-green tracking-[0.4em]">
                    Impact
                  </p>
                  <p className="text-lg font-semibold text-kenya-black">
                    {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

