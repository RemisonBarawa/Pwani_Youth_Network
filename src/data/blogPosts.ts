export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  heroImage: string;
  tags: string[];
  impactStat: {
    value: string;
    label: string;
  };
  sections: BlogSection[];
  pullQuote?: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "equipping-kilifi-youth-social-accountability",
    title: "Equipping Kilifi Youth with Skills for Social Accountability",
    excerpt:
      "Strengthening youth and youth-led organizations in Kilifi County to promote transparency, participation, and accountability in health, education, and livelihoods.",
    author: "Pwani Youth Network",
    date: "Aug 2024",
    readTime: "6 min read",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050507/Youth_and_Education_mqp7bx.jpg",
    heroImage:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050506/Youth_Education2_yvyfxj.jpg",
    tags: ["Youth Empowerment", "Social Accountability", "Governance"],
    impactStat: {
      value: "4-day training",
      label: "refresher program for social accountability champions",
    },
    sections: [
      {
        heading: "Enhancing Social Accountability in Kilifi County",
        body: [
          "In a major step toward fostering active citizenship, our organization, in collaboration with VSO Kenya, hosted a 4-day refresher training for Kilifi County Active Collective members.",
          "These social accountability champions are at the forefront of promoting transparency and strong community participation in public financial management.",
        ],
      },
      {
        heading: "Training of Trainers (TOT) Program",
        body: [
          "The Training of Trainers (TOT) program equipped youth stakeholders with knowledge and practical skills to engage effectively in the Kenyan budget-making process.",
          "By building a strong pool of trainers, the initiative strengthened informed participation and accountability in governance among young people.",
        ],
      },
      {
        heading: "Objectives and Key Outcomes",
        body: [
          "Participants were equipped with tools and methods to train others on public financial management and the national and county budget processes.",
          "Youth participation in governance was strengthened, and mechanisms to hold public officials accountable were reinforced.",
          "By the end of the training, participants developed actionable community dissemination plans designed to create a ripple effect of informed and engaged citizens across Kilifi County.",
        ],
      },
      {
        heading: "Partnerships and Community Collaboration",
        body: [
          "This initiative was supported by committed partners including Jijenge Youth Initiative, Youth for Sustainable Development – Kilifi County @YMCA Kilifi, Youth Voices & Action Initiative, and the Kilifi Youth Advisory Council.",
          "Additional support was received from multiple Kilifi-based youth voices and networks that continue to advance transparency and social justice.",
        ],
      },
      {
        heading: "Looking Ahead",
        body: [
          "We remain dedicated to empowering young people and strengthening active citizenship through collaborative action.",
          "By promoting transparency and accountability, we are contributing to sustainable development and improved livelihoods across Kilifi County and beyond.",
          "This work is supported by partners including Segal Family Foundation, Mandela Washington Fellowship for Young African Leaders, Conrad N. Hilton Foundation, and The Aspen Institute.",
        ],
      },
      {
        heading: "Join the Conversation",
        body: [
          "Stay connected with us and follow our journey as we continue empowering young people and championing active citizenship.",
          "Use the hashtags #Youthnaplanke, #Changemaker4Life, and #EmpoweringYoungPeople to share your stories and be part of the movement.",
        ],
      },
    ],
    pullQuote:
      "“Be the change you want to see, take responsibility.” – Alfred Sigo, CEO",
  },
  
  {
    slug: "radio-and-podcast-srhr",
    title: "How Radio + Podcasts Amplify SRHR Education",
    excerpt:
      "Lessons from PYN Radio on centering local languages, music, and storytelling to shift health outcomes.",
    author: "Creative Coast Studio",
    date: "Sep 2025",
    readTime: "6 min read",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050188/Podcast_1_cxrel2.jpg",
    heroImage:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050188/Podcast_2_aqmvfg.png",
    tags: ["SRHR", "Audio", "Youth Media"],
    impactStat: {
      value: "2.4M listens",
      label: "across 17 coastal frequencies",
    },
    sections: [
      {
        heading: "Programming in Mother Tongues",
        body: [
          "Switching between Kigiriama, Kiswahili, and Sheng keeps episodes intimate and ramps up community call-ins.",
          "Youth producers now script episodes with linguistic anchors that honor proverbs, lullabies, and current slang.",
        ],
      },
      {
        heading: "Interactive Sound Design as Pedagogy",
        body: [
          "Layered percussion, oceanic field recordings, and subtle harmonies help encode key SRHR facts and myth-busting moments.",
          "Sound cues now signal when a fact requires extra attention, nudging listeners to pause, screenshot, or text in.",
        ],
      },
    ],
  },
    {
      slug: "mangrove-restoration-mtongani-kidundu",
      title: "Mangrove Restoration and Climate Action in Mtongani",
      excerpt:
        "Joined hands with the women of Kidundu and the Kilifi ACTIVE Collective in a climate forum and mangrove restoration initiative to advance climate justice.",
      author: "Pwani Youth Network",
      date: "Jul 2024",
      readTime: "5 min read",
      image:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050769/Mangroove_2_ynpieb.jpg",
      heroImage:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764050768/Mangroove_1_n0c5ot.jpg",
      tags: ["Climate Action", "Mangrove Restoration", "Community"],
      impactStat: {
        value: "Community-led",
        label: "mangrove planting and climate forum in Mtongani",
      },
      sections: [
        {
          heading: "Community-Led Climate Forum and Action",
          body: [
            "Joining hands with the women of Kidundu and the Kilifi Active Collective during the climate forum and mangrove restoration exercise was an inspiring and transformative experience.",
            "The activity highlighted the critical role of women and youth in championing climate justice and leading community-based environmental solutions.",
          ],
        },
        {
          heading: "Engaging Women and Youth in Climate Action",
          body: [
            "At Pwani Youth Network, we recognize that women and youth are disproportionately affected by climate change, yet remain powerful agents of change.",
            "Empowering these groups unlocks innovative, practical, and resilient approaches to building climate-smart communities.",
          ],
        },
        {
          heading: "Why Mangrove Planting Matters",
          body: [
            "Mangroves serve as natural coastal defenses, reducing erosion and protecting communities from storm surges and flooding.",
            "They also act as powerful carbon sinks, absorbing and storing carbon dioxide, contributing significantly to climate change mitigation efforts.",
          ],
        },
        {
          heading: "Climate Justice Through Community Action",
          body: [
            "Climate justice centers on fairness, inclusion, and the right of all people to participate in climate-related decision-making processes.",
            "Including women and youth ensures that climate solutions are equitable, locally relevant, and sustainable over time.",
          ],
        },
        {
          heading: "Amplifying Grassroots Voices",
          body: [
            "Discussions with the Kidundu women and the Kilifi Active Collective emphasized the importance of amplifying grassroots voices in climate advocacy.",
            "Their lived experiences and local knowledge are critical to designing context-specific strategies that address climate challenges effectively.",
          ],
        },
        {
          heading: "Pwani Youth Network’s Commitment",
          body: [
            "We champion environmental conservation through initiatives such as mangrove restoration and ecosystem protection activities.",
            "We actively encourage meaningful participation of women and youth to ensure inclusive and community-driven climate solutions.",
            "We advocate for policy change in the climate space to strengthen environmental justice and climate resilience at both local and national levels.",
          ],
        },
      ],
      pullQuote:
        "“Community-driven solutions are the heart of climate justice.”",
    },

    {
      slug: "education-through-sports-edu-sports-play",
      title: "Education Through Sports (Edu-Sports & PLAY)",
      excerpt:
        "A youth-centered initiative using sports to deliver life skills, reduce teenage pregnancy, and promote healthier, empowered communities in Mombasa County.",
      author: "Pwani Youth Network",
      date: "2024",
      readTime: "7 min read",
      image:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764051093/Youth_Education_2_li99rr.jpg",
      heroImage:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764051094/Youth_Education_nt6arw.jpg",
      tags: ["Edu-Sports", "Youth Empowerment", "Life Skills"],
      impactStat: {
        value: "3,000+",
        label: "adolescents reached through sports-based life skills training",
      },
      sections: [
        {
          heading: "Project Purpose",
          body: [
            "The Edu-Sports & PLAY project aims to provide a sustainable intervention that builds a strong foundation of sports among adolescents aged 15–19 years.",
            "The initiative delivers essential life skills in a fun, engaging, and participatory way through structured sporting activities.",
          ],
        },
        {
          heading: "Background and Challenges",
          body: [
            "Pwani Youth Network works with more than 20 youth clubs across 15 fields in Mombasa, Kilifi, and Kwale, focusing on adolescents affected by drug use, HIV, and challenging living conditions in informal settlements and rural areas.",
            "The project primarily addresses high teenage pregnancy rates in Jomvu and Changamwe caused by unprotected sex, limited access to sexual and reproductive health information, high incidences of sexual violence, and early or forced marriages.",
            "The project engages both male and female adolescents as equal partners in preventing teenage pregnancies and reducing new HIV infections among young people aged 13–19.",
          ],
        },
        {
          heading: "Theory of Change",
          body: [
            "Pwani Youth Network believes that when adolescents and youth are mobilized, engaged, and equipped with life skills through sports, they can be mentored into effective change-makers.",
            "This approach contributes to the reduction of teenage pregnancies, drug abuse, and improved health outcomes in Mombasa County.",
          ],
        },
        {
          heading: "Project Outputs and Expected Outcomes",
          body: [
            "Training of 20 youth coaches and teachers to deliver life skills education through sports.",
            "Reaching 3,000 adolescents from Jomvu and Changamwe informal settlements with life skills and decision-making support.",
            "Referral of 200 adolescents to Mikindani and Changamwe youth-friendly centers for counseling and health services.",
            "Establishment of one plastic recycling plant in the Bangladesh slum to promote environmental conservation and youth economic engagement.",
            "Organization of two football bonanzas to raise awareness on teenage pregnancy, reaching at least 500 community members.",
          ],
        },
        {
          heading: "Monitoring and Evaluation Framework",
          body: [
            "A Monitoring and Evaluation (M&E) plan and Activity Implementation Plan will be developed and agreed upon with the Edu-Sports team and the Enda Project at project inception.",
            "The project will apply tools such as meeting minutes, event registers, workshop attendance sheets, payment forms, and activity reports for data collection.",
            "Monthly progress reports and quarterly comprehensive reports will be prepared and shared with the Enda team.",
            "A detailed end-term report will be validated and shared with county government, donors, and key stakeholders.",
            "Close collaboration with the Department of Health and field coaches will support continuous monitoring of behavioral change among targeted adolescents.",
          ],
        },
        {
          heading: "Project Budget",
          body: [
            "Total requested grant amount: USD 10,000 (approximately KES 1,400,000).",
          ],
        },
      ],
      pullQuote:
        "“Using sports as a tool for education and empowerment transforms lives and builds resilient communities.”",
    },

    {
      slug: "painting-for-inclusivity-kibarani-school-of-deaf",
      title: "Painting for Inclusivity: Transforming Kibarani School of the Deaf",
      excerpt:
        "A two-day volunteer initiative to beautify and inspire learning through art while advancing inclusive education for learners with disabilities in Kilifi.",
      author: "Alex Ndeleva & Visual Artist Team",
      date: "September 2023",
      readTime: "6 min read",
      image:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764051416/Painting_1_mcfvdz.jpg",
      heroImage:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764051416/Painting_2_tikrkk.jpg",
      tags: ["Inclusive Education", "Disability Rights", "Community Art"],
      impactStat: {
        value: "2 days",
        label: "of transformative volunteer-led school beautification",
      },
      sections: [
        {
          heading: "A Mission of Inclusion",
          body: [
            "In late September 2023, volunteers undertook a mission to transform Kibarani School of the Deaf in Kilifi by improving infrastructure and creating a more inspiring learning environment.",
            "In partnership with Pwani Youth Network and VSO Kenya, the initiative was guided by the theme “Inclusive Education for People with Disabilities,” emphasizing equal access to quality education for all learners.",
            "Kibarani School of the Deaf is a unique boarding primary school serving children with hearing and speech difficulties from different communities across the region.",
          ],
        },
        {
          heading: "Day 1 – Laying the Foundation",
          body: [
            "The project began on a bright Friday afternoon with wall cleaning and priming to prepare surfaces for artistic work.",
            "Vibrant and welcoming colors were carefully selected to create a stimulating and engaging environment for students and the wider community.",
            "Despite the intense Kilifi heat, the team persevered, taking short breaks to recharge while witnessing the first visible signs of transformation.",
          ],
        },
        {
          heading: "Day 2 – Colors of Hope",
          body: [
            "On Saturday, the team returned with renewed energy to complete the mural work, joined by additional team members including Geofrey, Derick, and James.",
            "The team emphasized respectful language and etiquette when referring to persons with disabilities, reinforcing the values of dignity and inclusion.",
            "As the final strokes were added, students expressed their joy through sign language, and members of the public showed interest in similar community art initiatives.",
          ],
        },
        {
          heading: "Impact Beyond the Walls",
          body: [
            "The completed artwork symbolized more than color; it represented hope, dignity, and the promise of inclusive learning spaces.",
            "The project strengthened relationships between artists, volunteers, students, and the surrounding community, opening doors for future collaborations.",
          ],
        },
        {
          heading: "Acknowledgement",
          body: [
            "This article was prepared by Alex Ndeleva, Visual Artist, together with the volunteer team who made the transformation possible.",
            "Special appreciation goes to Pwani Youth Network and VSO Kenya for their collaboration and support.",
          ],
        },
      ],
      pullQuote:
        "“It wasn’t just about the colours; it was about the hope and promise they symbolized.”",
    },
    
    {
      slug: "plastsafi-circular-economy-initiative",
      title: "PLASTSAFI: Turning Plastic Pollution into Opportunity",
      excerpt:
        "A youth-led initiative transforming plastic waste into eco-friendly products while protecting marine life and strengthening the Blue Economy.",
      author: "Pwani Youth Network",
      date: "7 July 2021",
      readTime: "5 min read",
      image:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764051748/Plastsafi_1_mnzaht.jpg",
      heroImage:
        "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764051748/Plastsafi_2_ifxkwf.jpg",
      tags: ["Circular Economy", "Marine Conservation", "Youth Innovation"],
      impactStat: {
        value: "12 weeks",
        label: "of circular economy incubation training",
      },
      sections: [
        {
          heading: "What is PLASTSAFI?",
          body: [
            "PlastSafi is a brand name derived from the English word ‘Plastic’ and the Swahili word ‘Safi,’ meaning clean.",
            "The initiative focuses on saving marine life and strengthening the Blue Economy by addressing environmental degradation caused by plastic pollution.",
            "It is driven by Bangla Talent Youth Group to promote zero plastic waste dumping in marginalized coastal communities and shorelines of Bangladesh.",
          ],
        },
        {
          heading: "Youth at the Center of Change",
          body: [
            "PlastSafi creates a youth-friendly environment where young people can contribute their diverse talents to environmental action.",
            "The program encourages creative and critical thinkers to explore their skills while engaging in practical sustainability work.",
          ],
        },
        {
          heading: "From Waste to Useful Products",
          body: [
            "Collected plastic waste is processed through a series of recycling stages to produce eco-friendly products.",
            "End products include plastic football gear such as shin guards, cones, and field markers, supporting both sports and environmental sustainability.",
          ],
        },
        {
          heading: "Building Skills Through Circular Economy",
          body: [
            "Some group members participated in a 12-week incubation program at the Circular Economy Hub at Close The Gap, Ratna Square.",
            "The training equipped them with skills to promote circular economy systems and integrate sustainability into daily community activities.",
          ],
        },
        {
          heading: "Impact on the Blue Economy",
          body: [
            "The initiative contributes to protecting marine ecosystems while creating new opportunities for youth employment in the Blue Economy sector.",
            "By embracing circular economy practices, the project demonstrates innovative and practical solutions to environmental challenges.",
          ],
        },
      ],
      pullQuote:
        "“Working within the circular economy is a powerful step towards saving our environment and creating sustainable livelihoods.”",
    },

    {
    slug: "water-our-number-one-priority",
    title: "WATER!! OUR NUMBER ONE PRIORITY",
    excerpt:
      "A community-driven story highlighting the water crisis in Bangladesh informal settlement and the collaborative efforts to restore access to clean water.",
    author: "Pwani Youth Network",
    date: "12 February 2021",
    readTime: "4 min read",
    image:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764052843/water_2_e1c6yu.jpg",
    heroImage:
      "https://res.cloudinary.com/dwhp5xrhn/image/upload/v1764052844/Water_1_taoupg.jpg",
    tags: ["Water Access", "Community Resilience", "Social Impact"],
    impactStat: {
      value: "4+ years",
      label: "of community water challenges",
    },
    sections: [
      {
        heading: "Why Water Matters",
        body: [
          "Water is an essential resource for life, covering nearly 71% of the Earth’s surface.",
          "It supports domestic activities, economic livelihoods, and recreational needs, making it a non-negotiable basic human necessity.",
        ],
      },
      {
        heading: "Water Crisis in Bangladesh Settlement",
        body: [
          "Residents of the Bangladesh informal settlement in Mombasa County have faced prolonged water shortages since 2017.",
          "The problem began after the construction of the Mikindani–Changamwe Road, which caused the breakage of underground water pipelines.",
        ],
      },
      {
        heading: "Attempts to Address the Challenge",
        body: [
          "Several interventions were made, including installing water taps and storage tanks to distribute water.",
          "However, these solutions were inconsistent due to inadequate and unreliable water flow through the system.",
        ],
      },
      {
        heading: "Community Support and Partnerships",
        body: [
          "Pwani Youth Network conducted a study to identify gaps and propose solutions to improve water access.",
          "Mombasa Cement supported the community by supplying water through trucks.",
          "The Red Cross partnered with local administrators to establish a structured water distribution point.",
        ],
      },
      {
        heading: "Raising Voices for Change",
        body: [
          "Residents’ voices, images, and videos were collected to document the scale of the problem.",
          "These materials were shared with relevant authorities responsible for water and sanitation services.",
          "Through continued advocacy, the community remains hopeful for sustainable, long-term solutions.",
        ],
      },
    ],
    pullQuote:
      "“Access to clean water is not a privilege, but a fundamental right that every community deserves.”",
  },

  {
    slug: "youth-friendly-centers-reproductive-health",
    title:
      "Youth Friendly Centers Would Help Solve the Unmet Reproductive Health Needs of Young People",
    excerpt:
      "An advocacy-driven story highlighting the urgent need for youth-friendly reproductive health centers to address rising adolescent health challenges in Kilifi County.",
    author: "Pwani Youth Network",
    date: "2021",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
    tags: [
      "Youth Health",
      "Reproductive Health",
      "Advocacy",
      "Safe Spaces",
      "Kilifi County",
    ],
    impactStat: {
      value: "13,000+",
      label: "teen pregnancy cases reported",
    },
    sections: [
      {
        heading: "The Health Challenges Facing Adolescents",
        body: [
          "Adolescents in Kenya face multiple unmet health and wellbeing needs including reproductive health challenges, HIV, drug and substance abuse, poverty, road accidents, early pregnancy, child marriage, harmful traditional practices and internet safety risks.",
          "These barriers significantly affect the overall health indicators of young people across the country.",
        ],
      },
      {
        heading: "Situation in Kilifi County",
        body: [
          "In Kilifi County, approximately 24% of the population are adolescents aged 10–19 years.",
          "Half of women aged 25–49 were married by age 19, while half of men aged 30–54 were married by age 25.",
          "About 22% of girls aged 15–19 have begun childbearing, which is higher than the national average.",
          "Only 20% of currently married girls aged 15–19 use modern contraceptives.",
        ],
      },
      {
        heading: "Rising Teenage Pregnancy Crisis",
        body: [
          "Reports showed that over 13,000 girls became pregnant in a single year, with the number later rising to more than 17,000 cases.",
          "Some of those affected were KCSE and KCPE candidates, highlighting the impact on education and future opportunities.",
        ],
      },
      {
        heading: "Government and Multi-Sectoral Response",
        body: [
          "A joint intervention was launched involving County Government departments of Gender, Culture and Social Services, Health and Sanitation, and Education.",
          "The national government and non-governmental organizations were also engaged.",
          "Governor Amason Kingi formed a 17-member task force to conduct a fact-finding mission and develop a comprehensive report.",
        ],
      },
      {
        heading: "Advocacy for Youth Friendly Centers",
        body: [
          "Through a Joint Advocacy Campaign, Safe Community, Dream Achiever and Pwani Youth Network, with support from DSW (SLALE Project), advocated for the creation of safe spaces for young people.",
          "The organizations engaged with county departments to push for the fulfillment of the county’s commitment to establish seven Youth Friendly Centers as outlined in the CIDP.",
          "The County Executive Committee members for Health and Youth, Gender and Sports showed strong support for fast-tracking the implementation process.",
        ],
      },
      {
        heading: "Current Progress",
        body: [
          "The campaign is currently working through the Umbrella Consortium of Youth Action for AYSRHR to sustain advocacy efforts.",
          "The initiative continues to mobilize support to ensure that young people in Kilifi County have access to safe, supportive, and youth-centered health services.",
        ],
      },
    ],
    pullQuote:
      "“Creating youth-friendly spaces is not just an option, but a necessity for protecting the health, dignity, and future of our young people.”",
  },

  
  {
    slug: "regreening-the-coast",
    title: "Regreening the Coast With Youth Cooperatives",
    excerpt:
      "Climate entrepreneurship models that merge mangrove restoration with blue carbon enterprises.",
    author: "Blue Economy Lab",
    date: "Aug 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    tags: ["Blue Economy", "Climate Action", "Cooperatives"],
    impactStat: {
      value: "310 ha",
      label: "of mangroves restored in 24 months",
    },
    sections: [
      {
        heading: "Co-op Governance as Climate Tech",
        body: [
          "Each cooperative uses open-source ledgers to track seedlings, stipends, and carbon revenues, demystifying finance for first-time earners.",
          "Mentors pair tech fellows with fisher elders to co-design dashboards that are both mobile-native and low-data.",
        ],
      },
      {
        heading: "Value Chains Beyond Seedlings",
        body: [
          "Restored plots now host seaweed nurseries, eco-tour routes, and artisanal salt pans owned by the same youth teams.",
          "The layered enterprises make restoration more resilient to donor cycles because revenue flows stay diversified.",
        ],
      },
    ],
    pullQuote:
      "“We plant, we code, we sell—we own the whole loop this time around.”",
  },
];

export default blogPosts;

