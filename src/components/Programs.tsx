import {
  Heart,
  Briefcase,
  GraduationCap,
  Palette,
  Leaf,
  Users,
} from "lucide-react";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  initiatives: string[];
  color: string;
}

function ProgramCard({
  icon,
  title,
  description,
  initiatives,
  color,
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className={`${color} p-6 text-white`}>
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-white/90">{description}</p>
      </div>
      <div className="p-6">
        <h4 className="font-semibold text-gray-800 mb-3">Key Initiatives:</h4>
        <ul className="space-y-2">
          {initiatives.map((initiative, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-kenya-green mt-1">✓</span>
              <span className="text-gray-700">{initiative}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Programs() {
  const programs = [
    {
      icon: <Heart size={32} />,
      title: "Health & Well-being",
      description:
        "Comprehensive sexual and reproductive health programs ensuring safe motherhood and healthy choices.",
      initiatives: [
        "Adolescent and Safe Motherhood Initiative (ASMI)",
        "Safe Motherhood Programme",
        "The Capacity Initiative (TCI) Research",
      ],
      color: "bg-gradient-to-br from-kenya-red to-coast-coral",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Economic Empowerment",
      description:
        "Multi-faceted programs offering skills training, mentorship, and financial support for young entrepreneurs.",
      initiatives: [
        "Business & Entrepreneurship Training",
        "Startup Grants & Seed Funding",
        "Digital Literacy Programs",
        "Safe Labour Migration Education",
      ],
      color: "bg-gradient-to-br from-kenya-green to-coast-palm",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Education & Child Development",
      description:
        "Holistic approach to education with community awareness, advocacy, and direct student support.",
      initiatives: [
        "Community Mobilization for CBE",
        "Policy Advocacy & Budget Allocation",
        "Scholarships & Student Support",
        "School Management Board Strengthening",
      ],
      color: "bg-gradient-to-br from-coast-ocean to-blue-600",
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Arts & Talent",
      description:
        "Youth-friendly center incubating creativity through photography, art, design, and digital media.",
      initiatives: [
        "Photography & Art/Design Training",
        "PYN Radio - Podcast & Online Radio",
        "Creative Stop Services",
        "Platform for Youth Expression",
      ],
      color: "bg-gradient-to-br from-purple-600 to-pink-500",
    },
    {
      icon: <Leaf size={32} />,
      title: "Environmental Conservation",
      description:
        "Mobilizing young people for environmental protection and coastal ecosystem preservation.",
      initiatives: [
        "Global Clean-Up Campaigns",
        "Tree Planting Programs",
        "Environmental Awareness",
        "Coastal Ecosystem Protection",
      ],
      color: "bg-gradient-to-br from-green-600 to-teal-500",
    },
    {
      icon: <Users size={32} />,
      title: "Governance & Peace",
      description:
        "Ensuring youth voices are heard in policy decisions while fostering community peace and cohesion.",
      initiatives: [
        "Policy Advocacy Initiative",
        "Government Accountability",
        "Peace & Social Cohesion Programs",
        "Youth Representation",
      ],
      color: "bg-gradient-to-br from-orange-600 to-red-500",
    },
  ];

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-kenya-black mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kenya-red to-kenya-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive initiatives designed to empower youth across health,
            economics, education, arts, environment, and governance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
