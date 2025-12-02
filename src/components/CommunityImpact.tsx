import { Heart, Users, GraduationCap, Briefcase, Leaf, Award } from "lucide-react";

const impactStories = [
  {
    icon: <Users size={32} />,
    title: "15,000+ Youth Empowered",
    description: "Through our comprehensive programs, we've reached over 15,000 young people across 6 coastal counties, providing them with skills, opportunities, and platforms to thrive.",
    stat: "15K+",
    color: "from-kenya-green to-coast-palm",
  },
  {
    icon: <Heart size={32} />,
    title: "Health & Well-being Transformation",
    description: "Our SRHR programs have supported thousands of adolescents and young mothers, ensuring safe motherhood and healthy choices that transform entire communities.",
    stat: "5K+",
    color: "from-kenya-red to-coast-coral",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Education Access Expanded",
    description: "Through advocacy and direct support, we've helped hundreds of students access quality education, with scholarships and community mobilization for better learning outcomes.",
    stat: "500+",
    color: "from-coast-ocean to-blue-600",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Economic Opportunities Created",
    description: "Our entrepreneurship programs have launched over 200 youth-led businesses, creating sustainable livelihoods and contributing to local economic growth.",
    stat: "200+",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: <Leaf size={32} />,
    title: "Environmental Action",
    description: "Youth-led climate initiatives have restored mangroves, reduced plastic pollution, and mobilized communities for sustainable environmental practices.",
    stat: "10K+",
    color: "from-green-600 to-teal-500",
  },
  {
    icon: <Award size={32} />,
    title: "Community Champions",
    description: "Our programs have trained hundreds of community leaders who now drive positive change in their neighborhoods, creating a ripple effect of transformation.",
    stat: "300+",
    color: "from-orange-600 to-red-500",
  },
];

const testimonials = [
  {
    name: "Amina Hassan",
    role: "Entrepreneur, Mombasa",
    quote: "PYN gave me the skills and confidence to start my own business. Today, I employ 5 other young people and we're making a real difference in our community.",
    image: "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070966/Skills_Innovation_syvn4c.jpg",
  },
  {
    name: "James Mwangi",
    role: "Climate Activist, Kilifi",
    quote: "Through the climate action program, I learned how to restore mangroves and now I'm teaching others. We've planted over 1,000 trees in our area.",
    image: "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1763996069/Youth_for_Climate_Action_nvsdfg.jpg",
  },
  {
    name: "Fatuma Ali",
    role: "Health Peer Educator, Kwale",
    quote: "The SRHR training changed my life. Now I help other young women make informed choices about their health and future. This work is transforming our community.",
    image: "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764070967/Wellbeing_SRHR_mqzssf.jpg",
  },
];

export default function CommunityImpact() {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.5em] text-kenya-green mb-4">
            Our Impact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-kenya-black mb-4">
            Transforming Communities, One Youth at a Time
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kenya-red to-kenya-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every program, every project, every initiative is designed with one goal: 
            to create lasting positive change in the lives of young people and their communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactStories.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${impact.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  {impact.icon}
                  <h3 className="text-xl font-bold">{impact.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-kenya-green mb-2">{impact.stat}</p>
                <p className="text-gray-700">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kenya-black mb-4">
              Voices from the Community
            </h3>
            <p className="text-lg text-gray-600">
              Real stories from real people whose lives have been transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-kenya-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-kenya-green via-coast-ocean to-kenya-red rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a community that's creating real change. Whether you're a young person 
            looking for opportunities, a community member wanting to make a difference, or a 
            partner ready to invest in the future—we need you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-white text-kenya-green px-8 py-4 rounded-full font-semibold hover:bg-coast-sand transition-all transform hover:translate-y-[-2px] shadow-xl"
            >
              Get Involved
            </a>
            <a
              href="/initiatives"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:translate-y-[-2px]"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

