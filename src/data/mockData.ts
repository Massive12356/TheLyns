import { Project, Event, BlogPost, TeamMember, Partner, NGOInfo, PatientStory, FAQItem, GalleryImage } from '../types';

export const ngoInfo: NGOInfo = {
  name: 'The Lys Foundation',
  shortName: 'Lys Foundation',
  tagline: 'Quality education for every child',
  description: 'The Lys Foundation is a non-political, non-profit organization providing quality Montessori education to underprivileged children and empowering single mothers across Ghana.',
  descriptionLong: 'Founded in 2015 and officially registered as a Company Limited by Guarantee (LBG) and a Non-Governmental Organisation (NGO) in 2021, The Lys Foundation is a non-profit organisation committed to transforming the lives of underprivileged children through quality, accessible education.',
  founded: '2015',
  registrationNumber: 'LBG-NGO-2021',
  location: 'Accra, Ghana',
  mission: 'To transform the lives of children, families and communities across Ghana and, ultimately, Africa by making quality, holistic education accessible to underprivileged children. We are equally committed to empowering mothers, particularly single mothers, with the skills, resources and opportunities to provide for their families, achieve financial independence and build sustainable livelihoods.',
  vision: 'To see a Ghana, and ultimately an Africa, where every child, regardless of their background or circumstances, has access to quality education and the opportunity to reach their full potential, thriving spiritually, intellectually, emotionally and physically.',
  values: [
    {
      title: 'Faith',
      adinkra: 'Gye Nyame',
      adinkraMeaning: 'Except for God',
      description: 'Anchored in faith, we serve every child and family with humility, compassion, and unconditional love.',
      icon: 'Heart'
    },
    {
      title: 'Service',
      adinkra: 'Pempamsie',
      adinkraMeaning: 'Sew in readiness',
      description: 'We dedicate ourselves selflessly to the educational and developmental needs of underprivileged children and their mothers.',
      icon: 'Users'
    },
    {
      title: 'Equity',
      adinkra: 'Mate masie',
      adinkraMeaning: 'What I hear, I keep',
      description: 'We champion fair access to quality education, ensuring that no child is left behind because of financial hardship.',
      icon: 'Scale'
    },
    {
      title: 'Excellence',
      adinkra: 'Nea onnim',
      adinkraMeaning: 'He who does not know can know from learning',
      description: 'We pursue excellence in teaching, character formation, and holistic child development through the Montessori philosophy.',
      icon: 'Globe'
    }
  ],
  address: 'Accra, Ghana',
  phone: '+233 24 345 8689',
  email: 'info@lysfoundation.org',
  businessHours: 'Monday - Friday: 7:30 AM - 4:00 PM',
  bankDetails: {
    accountName: 'Lys Foundation',
    bankName: 'Fidelity Bank',
    accountNumber: '2090406972518',
    branch: 'Dzorwulu'
  },
  momoDetails: {
    number: '+233 59 123 4567',
    name: 'The Lys Foundation'
  },
  socialMedia: {
    instagram: 'https://instagram.com/lysfoundation',
    twitter: 'https://twitter.com/lysfoundation',
    facebook: 'https://facebook.com/lysfoundation',
    tiktok: 'https://tiktok.com/@lysfoundation'
  }
};

export const founders: TeamMember[] = [
  {
    id: 1,
    name: 'Jemima K. Adamah',
    role: 'Pastor · Strategic Educationist · Architect',
    title: 'Director, Lys Foundation School',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792761672/JEMIMA.jpg',
    bio: 'With more than 25 years of experience working with children, Jemima combines her background in architecture, a master’s degree in land management and a Montessori diploma with a passion for equitable education. Her ministry focuses on women and children. In 2022, she left full-time architectural practice to focus on the Foundation and serves as Director of the Lys Foundation School.',
    expertise: ['Pastor', 'Strategic Educationist', 'Architect'],
    education: [
      'Diploma in Montessori Education',
      'Masters in Land Management & Informal Settlement Regularisation, Institute of Housing Studies, Erasmus University',
      'Bachelor of Architecture, Kwame Nkrumah University of Science and Technology (KNUST)'
    ],
    email: 'jemima@lysfoundation.org',
    achievements: [
      'Founded The Lys Foundation School with a full Montessori curriculum',
      'Over 25 years of working with children in ministry and educational programs',
      'Hosted spiritual retreats across Kenya, Tanzania, Rwanda, Zimbabwe and beyond',
      'Created vacation bible and recreational programs serving hundreds of children'
    ],
    honors: [
      'Registered Member, Ghana Institute of Architects',
      'Recognized children\'s ministry leader and AWANA club coordinator',
      'International women\'s retreat speaker (Africa, North America, UK)'
    ],
    publications: [],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jemima-adamah',
      twitter: 'https://twitter.com/jemimaadamah',
      website: 'https://www.thelysfoundation.org'
    }
  },
  {
    id: 2,
    name: 'Ewurama Ocran-Gbekor',
    role: 'Architect · Award Winner (40 under 40) · Business Strategist',
    title: 'Sponsorship & Business Development',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792761672/PATIENCE_EWURAMA_GBEKOR.jpg',
    bio: 'A registered architect and project management professional, Ewurama brings extensive experience in architectural design, urban planning, site supervision and multidisciplinary project delivery. She featured on Metro TV on International Women’s Day and is the President of the Architecture Alliance. She supports the Foundation’s sponsorship and business development efforts.',
    expertise: ['Architect', 'Award Winner (40 under 40)', 'Business Strategist'],
    education: [
      'Masters in Architecture, Kwame Nkrumah University of Science and Technology (KNUST)',
      'Project Management Professional (PMP) Certification',
      'Bachelor in Architecture, KNUST'
    ],
    email: 'ewurama@lysfoundation.org',
    achievements: [
      '15+ years of architectural design and urban planning experience',
      '12 years of site supervision and project reporting',
      '8 years of project management with multidisciplinary teams',
      'Co-founder of Architecture Alliance Ghana'
    ],
    honors: [
      'Profiled on Metro TV — International Women\'s Day feature',
      'Associate, Ghana Institute of Architects',
      'Member, Project Management Institute (PMI)'
    ],
    publications: [],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ewurama-ocran-gbekor',
      twitter: 'https://twitter.com/ewuramaog',
      website: 'https://www.thelysfoundation.org'
    }
  }
];

export const teamMembers: TeamMember[] = [
  ...founders,
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'montessori-education-program',
    title: 'Montessori Education',
    category: 'Education',
    type: 'Core Program',
    description: 'Child-centred Montessori education that nurtures independence, creativity, confidence and a lifelong love for learning.',
    tagline: 'Inspiring Curiosity. Building Confidence. Nurturing Excellence.',
    fullDescription: 'The Lys Foundation School provides quality, child-centred Montessori education that nurtures independence, creativity, confidence and a lifelong love for learning. Our approach encourages children to explore, discover and learn at their own pace while achieving essential developmental and academic milestones.\n\nThrough hands-on activities, practical life experiences and positive reinforcement, we develop strong foundations in literacy, numeracy, critical thinking, character and responsibility. Our long-term vision includes integrating the Cambridge International Curriculum as pupils advance.',
    objectivesTitle: 'Our Core Learning Objectives',
    objectives: [
      'Practical Life: Developing independence, responsibility and everyday skills through gardening, sewing, cleaning and courtesy.',
      'Sensorial: Strengthening observation, classification and problem-solving through sensory exploration.',
      'Mathematics: Building numerical understanding, logical reasoning and problem-solving using Montessori materials.',
      'Language and Literacy: Developing phonics, reading, writing, comprehension and communication skills.',
      'Cultural Studies: Exploring geography, science, nature, history and French through practical experiences and excursions.',
      'STEAM Education: Inspiring creativity, innovation and critical thinking through hands-on projects and experimentation.'
    ],
    closing: 'Our goal is to raise confident, capable and responsible children who are equipped to excel academically, thrive in life and positively impact their communities.',
    status: 'Active',
    startDate: 'N/A',
    location: 'Accra, Ghana',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792762589/IMG_4970.jpg',
    gallery: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762591/IMG_5056.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762589/IMG_4970.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762588/IMG_5117.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762586/IMG_5108.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762582/IMG_5058.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762584/IMG_5073.jpg',
    ],
    featured: true,
    impact: {
      patients: 120,
      partners: 8,
      communities: 6,
      reach: 'Greater Accra & beyond'
    }
  },
  {
    id: 2,
    slug: 'satellite-learning-centres',
    title: 'Community Outreach & Educational Expansion',
    category: 'Community Outreach',
    type: 'Outreach',
    description: 'A pilot learning centre at Mamprobi Camara, Accra, with plans for satellite centres, annual outreach, and a future central campus.',
    fullDescription: 'The Lys Foundation is committed to transforming underserved communities through education, outreach and strategic partnerships. Our first pilot learning centre is currently operating at Mamprobi Camara, Accra, with plans to establish satellite learning centres in other disadvantaged communities through partnerships with churches, corporate organisations and individuals.\n\nWe also organise annual children\'s parties and donation drives in underprivileged communities, distributing clothing, shoes, bags, stationery and essential school supplies to children in need.\n\nOur long-term vision includes a central campus with boarding facilities, education from nursery through Junior High School (JHS), and a vocational training centre.',
    objectivesTitle: 'Our Objectives',
    objectives: [
      'Expand our pilot into a network of satellite learning centres.',
      'Build partnerships to secure learning spaces and educational resources.',
      'Organise annual children\'s outreach events and donation drives.',
      'Establish a central campus with boarding and vocational training facilities.',
      'Create sustainable pathways to education and empowerment for disadvantaged children and families.'
    ],
    status: 'Active',
    startDate: 'N/A',
    endDate: 'N/A',
    location: 'Mamprobi Camara, Accra',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792759772/_MG_0691.jpg',
    gallery: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759775/_MG_6606.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759769/photo_98_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759767/photo_95_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759766/photo_87_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759764/photo_86_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759762/photo_86_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759761/photo_85_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759760/_MG_0898.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759760/photo_82_2026-09-09_11-56-17.jpg',
    ],
    featured: true,
    impact: {
      patients: 240,
      communities: 5,
      reach: 'Regional'
    }
  },
  {
    id: 3,
    slug: 'health-nutrition-program',
    title: 'Health, Hygiene & Nutrition',
    category: 'Child Wellbeing',
    type: 'Wellbeing Program',
    description: 'Daily meals, hygiene, and healthcare partnerships so every child is healthy, nourished and ready to learn.',
    tagline: 'Healthy Children. Better Learning. Brighter Futures.',
    fullDescription: 'At The Lys Foundation, we believe that good health and proper nutrition are essential to every child\'s development and academic success. We provide daily breakfast and lunch, promote personal hygiene through routine grooming checks, and ensure a clean, safe and nurturing learning environment.\n\nThrough partnerships with healthcare professionals, including doctors, paediatricians and pharmacists, we facilitate regular health screenings, preventive care and access to essential nutritional supplements and deworming treatments under professional guidance. We also engage parents in promoting healthy habits at home.',
    objectivesTitle: 'Our Objectives',
    objectives: [
      'Provide nutritious breakfast and lunch every school day.',
      'Facilitate appropriate nutritional supplementation and periodic deworming under medical guidance.',
      'Promote daily personal hygiene, grooming and cleanliness.',
      'Partner with healthcare professionals for routine health screenings.',
      'Educate parents on hygiene, dental care, nutrition and skin health.',
      'Maintain a well-equipped first-aid station for basic emergency care.'
    ],
    closing: 'Our goal is to ensure that every child is healthy, well-nourished and supported to learn, grow and thrive.',
    status: 'Active',
    startDate: 'N/A',
    endDate: 'N/A',
    location: 'Accra, Ghana',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792763050/FB_IMG_1734557826821.jpg',
    gallery: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763122/Joyful_School_Lunch_Gathering.png',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763047/photo_8_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763052/IMG-20241218-WA0008.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763055/IMG_4948.jpg',
    ],
    featured: true,
    impact: {
      patients: 120,
      partners: 6,
      communities: 6,
      reach: 'School-wide'
    }
  },
  {
    id: 4,
    slug: 'mother-empowerment-program',
    title: 'Mother Empowerment Programme',
    category: 'Empowerment',
    type: 'Campaign',
    description: 'Vocational skills, parenting education and mentorship for mothers, particularly single mothers.',
    tagline: 'Empowering Mothers. Strengthening Families. Transforming Communities.',
    fullDescription: 'At The Lys Foundation, we recognise that empowering a mother creates lasting opportunities for her children. Our Mother Empowerment Programme supports mothers, particularly single mothers, through vocational skills training, parenting education, mentorship and spiritual encouragement.\n\nThrough practical workshops and a supportive community network, we equip mothers with the knowledge, confidence and skills to improve their livelihoods, nurture healthy families and work towards financial independence.',
    objectivesTitle: 'Our Objectives',
    objectives: [
      'Equip mothers with practical vocational and income-generating skills.',
      'Provide parenting education on child development, hygiene, nutrition and healthcare.',
      'Build a supportive network that encourages mentorship and collaboration among mothers.',
      'Offer faith-based guidance, emotional support and pastoral care.',
      'Promote financial independence and sustainable livelihoods.'
    ],
    closing: 'Our goal is to empower mothers to provide for their children with dignity, confidence and hope for a better future.',
    status: 'Active',
    startDate: 'N/A',
    endDate: 'N/A',
    location: 'Accra, Ghana',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792762744/Outdoor_Alphabet_Class_on_the_Veranda.png',
    gallery: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762744/Outdoor_Alphabet_Class_on_the_Veranda.png',
    ],
    featured: false,
    impact: {
      patients: 85,
      communities: 4,
      reach: 'Regional'
    }
  },
  {
    id: 5,
    slug: 'steam-education-program',
    title: 'STEAM Education Programme',
    category: 'STEAM',
    type: 'Integrated Curriculum',
    description: 'Science, Technology, Engineering, Arts and Mathematics woven into our Montessori approach.',
    tagline: 'Inspiring Curiosity. Unlocking Creativity. Building Future Innovators.',
    fullDescription: 'Our STEAM Education Programme integrates Science, Technology, Engineering, Arts and Mathematics into our Montessori approach, nurturing creativity, critical thinking and practical problem-solving skills.\n\nThrough hands-on experiments, digital exploration, creative arts and collaborative projects, children are encouraged to ask questions, explore ideas and develop innovative solutions to real-world challenges.',
    objectivesTitle: 'Our Objectives',
    objectives: [
      'Science: Encourage discovery through experiments, nature exploration and observation.',
      'Technology: Develop digital literacy, basic coding skills and familiarity with educational technology.',
      'Engineering: Foster problem-solving, design thinking and creativity through practical building projects.',
      'Arts: Nurture imagination and cultural appreciation through music, visual arts and creative expression.',
      'Mathematics: Strengthen numeracy, logical reasoning and pattern recognition using Montessori materials.',
      'Integrated Learning: Encourage teamwork and innovation through projects combining multiple STEAM disciplines.'
    ],
    closing: 'Our goal is to equip children with the curiosity, confidence and essential skills to thrive in an increasingly technology-driven world.',
    status: 'Active',
    startDate: 'N/A',
    endDate: 'N/A',
    location: 'Accra, Ghana',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792762742/IMG_4907.jpg',
    gallery: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762845/photo_77_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762847/photo_78_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762851/IMG_5081.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762853/photo_26_2026-09-09_12-01-13.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762855/photo_46_2026-09-09_12-00-21.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762857/photo_65_2026-09-09_12-00-21.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762859/photo_70_2026-09-09_12-00-21.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762863/20260826_104059.jpg',
    ],
    featured: true,
    impact: {
      patients: 120,
      partners: 5,
      communities: 6,
      reach: 'School-wide'
    }
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: 'Open Day & School Tour',
    date: '',
    time: '9:00 AM - 1:00 PM',
    location: 'The Lys Foundation School, Accra',
    type: 'Open Day',
    description: 'Tour the campus, meet our Montessori teachers, and learn how your child or sponsored pupil could join our growing learning community.',
    image: 'https://res.cloudinary.com/dsk62cvbs/image/upload/v1782499479/file_00000000e51071f4a3e4e86ccb41641e_rrfpuz.png',
    registrationLink: '/events/open-day-2026/register',
    featured: true
  },
  {
    id: 2,
    title: 'Mother Empowerment Workshop',
    date: '',
    time: '10:00 AM - 2:00 PM',
    location: 'Lys Foundation Community Hall, Accra',
    type: 'Workshop',
    description: 'A practical workshop on child hygiene, nutrition, and basic vocational skills — designed to equip single mothers to care for their families.',
    image: 'https://res.cloudinary.com/dsk62cvbs/image/upload/v1782499480/file_00000000498c71f4818bcbc1c815fddc_aqktan.png',
    registrationLink: '/events/mother-workshop-2026/register',
    featured: true
  },
  {
    id: 3,
    title: 'Annual Speech & Prize Day',
    date: '',
    time: '9:00 AM - 1:00 PM',
    location: 'The Lys Foundation School, Accra',
    type: 'School Event',
    description: 'Celebrating the academic, character, and creative achievements of our pupils across all six Montessori disciplines.',
    image: 'https://res.cloudinary.com/dsk62cvbs/image/upload/v1782499483/file_00000000861872438a811f0d6c3b3948_xidrzq.png',
    registrationLink: '/events/speech-day-2026/register',
    featured: true
  },
  {
    id: 4,
    title: 'Sponsor-A-Child Drive',
    date: '',
    time: '10:00 AM - 4:00 PM',
    location: 'Online & Accra Campus',
    type: 'Fundraiser',
    description: 'A community drive to match every child on our waiting list with a sponsor who will fund their education, meals, and learning materials for the year.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/sponsor-drive-2026/register',
    featured: true
  },
  {
    id: 5,
    title: 'Lys Foundation Annual Gala',
    date: '',
    time: '6:00 PM - 9:00 PM GMT',
    location: 'Online & Accra',
    type: 'Fundraiser',
    description: 'Our annual gala featuring student showcases, parent testimonies, and a live drive to fund our boarding campus and vocational training centre.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/gala-2026/register',
    featured: false
  }
];

export const partners: Partner[] = [
  {
    id: 1,
    name: 'Ghana Education Service',
    type: 'Government Agency',
    logo: 'https://via.placeholder.com/150x80?text=GES',
    description: 'National education authority overseeing curriculum standards and basic education across Ghana.',
    website: 'https://ges.gov.gh'
  },
  {
    id: 2,
    name: 'Cambridge Assessment International Education',
    type: 'Curriculum Partner',
    logo: 'https://via.placeholder.com/150x80?text=Cambridge',
    description: 'International curriculum partner for our planned upgrade beyond the core Montessori programme.',
    website: 'https://www.cambridgeinternational.org'
  },
  {
    id: 3,
    name: 'Ghana Institute of Architects',
    type: 'Professional Body',
    logo: 'https://via.placeholder.com/150x80?text=GIA',
    description: 'Professional home of our co-founders, supporting the design and development of our boarding campus.',
    website: 'https://ghanainstituteofarchitects.org'
  },
  {
    id: 4,
    name: 'Architecture Alliance Ghana',
    type: 'Professional Network',
    logo: 'https://via.placeholder.com/150x80?text=AAG',
    description: 'Co-founded by Ewurama Ocran-Gbekor — a strategic ally for the design of our learning environments.',
    website: 'https://architecturealliance.gh'
  },
  {
    id: 5,
    name: 'AWANA Clubs International',
    type: 'Children\'s Ministry',
    logo: 'https://via.placeholder.com/150x80?text=AWANA',
    description: 'Children\'s ministry network supporting our spiritual formation and recreational programmes.',
    website: 'https://www.awana.org'
  },
  {
    id: 6,
    name: 'Local Religious & Corporate Partners',
    type: 'Community Partners',
    logo: 'https://via.placeholder.com/150x80?text=Partners',
    description: 'Churches, corporate institutions, and individuals who provide space in strategic communities for our satellite learning centres.',
    website: '#'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Montessori? The Power of Child-Led Learning',
    excerpt: 'Montessori education turns the classroom into a place where children lead. Here is why this child-centred philosophy works — especially for underprivileged kids.',
    content: '',
    date: 'April 15, 2026',
    category: 'Education',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Jemima K. Adamah',
    likes: 142,
    dislikes: 0
  },
  {
    id: 2,
    title: 'Beyond Memorization: Teaching Critical Thinking and Creativity',
    excerpt: 'Many Ghanaian schools still rely on rote memorisation. We share how STEAM and inquiry-based learning produce confident, problem-solving children.',
    content: '',
    date: 'April 1, 2026',
    category: 'Pedagogy',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/8473553/pexels-photo-8473553.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Lys Foundation Team',
    likes: 98,
    dislikes: 0
  },
  {
    id: 3,
    title: 'Empowering Single Mothers: A Pathway Out of Poverty',
    excerpt: 'When a mother thrives, her children thrive. A look inside our Mother Empowerment Program and the families it has changed.',
    content: '',
    date: 'March 20, 2026',
    category: 'Empowerment',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Ewurama Ocran-Gbekor',
    likes: 173,
    dislikes: 0
  },
  {
    id: 4,
    title: 'The Daily Routine: Why Grooming and Hygiene Are Non-Negotiable',
    excerpt: 'Every morning begins with a grooming check at the school gate. Here is why daily hygiene is foundational to dignity, learning, and health.',
    content: '',
    date: 'March 5, 2026',
    category: 'Child Wellbeing',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Lys Foundation Team',
    likes: 76,
    dislikes: 0
  },
  {
    id: 5,
    title: 'Why We Serve Breakfast and Lunch to Every Child, Every Day',
    excerpt: 'A hungry child cannot learn. A breakdown of the cost — and the impact — of feeding every pupil at Lys.',
    content: '',
    date: 'February 18, 2026',
    category: 'Donor Impact',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Jemima K. Adamah',
    likes: 211,
    dislikes: 0
  },
  {
    id: 6,
    title: 'Holistic Education: Mind, Body, and Spirit',
    excerpt: 'Education is more than academics. We share how spiritual, mental, and physical development shape a Lys Foundation pupil.',
    content: '',
    date: 'February 1, 2026',
    category: 'Pedagogy',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Lys Foundation Team',
    likes: 134,
    dislikes: 0
  }
];

export const impactStats = {
  surgeriesFunded: 120,
  childrenSupported: 120,
  communitiesReached: 6,
  volunteersMobilized: 50,
  fundsRaised: 320000,
  patientsScreened: 240,
  partners: 12,
  livesSaved: 120
};

export const volunteerOpportunities = [
  {
    id: 1,
    title: 'Montessori Teaching Volunteer',
    description: 'Support our trained Montessori teachers in delivering Practical Life, Sensorial, Math, Language, Cultural, and STEAM activities for our pupils.',
    requirements: ['Background in education or child development', 'Patience and compassion', 'Diploma in Montessori is an advantage'],
    timeCommitment: '2-4 days per week'
  },
  {
    id: 2,
    title: 'Childcare & Grooming Assistant',
    description: 'Help with daily grooming checks, mealtimes, hygiene routines, and pastoral care for our pupils.',
    requirements: ['Genuine love for children', 'Reliable and punctual', 'Comfortable with hands-on routines'],
    timeCommitment: '4-8 hours/week'
  },
  {
    id: 3,
    title: 'Vocational Skills Trainer',
    description: 'Run sessions in sewing, gardening, cooking, art, music, or other practical skills as part of our vocational programme.',
    requirements: ['Demonstrated skill in a vocational area', 'Ability to teach children or mothers', 'Reliable schedule'],
    timeCommitment: 'Flexible'
  },
  {
    id: 4,
    title: 'Health Screening Volunteer',
    description: 'Join our partnerships with paediatricians and pharmacists to deliver routine medical checks, vitamins, and dewormers.',
    requirements: ['Healthcare background (doctor, nurse, pharmacist, paediatrician)', 'Available for termly check-ups'],
    timeCommitment: 'Termly / Flexible'
  },
  {
    id: 5,
    title: 'Fundraising & Communications Volunteer',
    description: 'Help organise sponsor drives, the annual gala, social media content, and donor stewardship for The Lys Foundation.',
    requirements: ['Communication or event experience', 'Networking skills', 'Passion for educational equity'],
    timeCommitment: 'Flexible'
  }
];

export const patientStories: PatientStory[] = [
  {
    id: 1,
    name: 'Gideon Klu',
    slug: 'gideon-klu',
    age: 11,
    condition: 'Grade 4',
    location: '',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792761908/IMG_7208.jpg',
    headline: "Gideon Klu's Story: From Streets to Academic Excellence",
    story: 'At seven, Gideon had never been inside a classroom. At eleven, he is in Grade 4, earning A grades and dreaming of becoming a doctor.',
    paragraphs: [
      'At age seven, Gideon Klu had never stepped into a classroom and was roaming the streets with his siblings. Today, at eleven, he is in Grade 4, scoring A\'s and dreaming of becoming a doctor.',
      'Gideon is one of three children being raised by a hardworking single mother who is doing her best to provide for her family. Despite his intelligence and eagerness to learn, Gideon had never had the opportunity to attend school.',
      'When he enrolled at the Lys Foundation at age seven, we immediately recognised his remarkable potential. He was a bright, curious boy who simply needed someone to give him a chance.',
      'With access to quality education, individual attention, encouragement and a nurturing learning environment, Gideon began to thrive. Four years later, he is now in Grade 4, consistently earning A grades and demonstrating that a child\'s circumstances should never determine their future.',
      'Gideon dreams of becoming a medical doctor one day, and every good grade brings him a step closer to that dream.',
      'Gideon\'s story reminds us that poverty does not mean a lack of potential. Sometimes, all a brilliant child needs is an opportunity.',
      'At the Lys Foundation, we are committed to giving children like Gideon that opportunity. Your support can help us change another child\'s story.',
    ],
    closing: 'One child at a time. One dream at a time. One future transformed.',
    outcome: 'In Grade 4, consistently earning A grades, and working towards his dream of becoming a doctor.',
    treatment: 'Quality education, individual attention, and a nurturing learning environment',
    fundsRaised: 0,
    fundsNeeded: 0,
    status: 'Recovered',
    donorImpact: 'One child at a time. One dream at a time. One future transformed.',
    featured: true,
  },
  {
    id: 2,
    name: 'Beverlyn Asare',
    slug: 'beverlyn-asare',
    age: 9,
    condition: 'Grade 2',
    location: '',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1792759643/BLESSING-9_Years_old.jpg',
    headline: "Beverlyn Asare's Story: From Losing Hope to Leading Her Class",
    story: 'Beverlyn left school at five after her father died. At nine, she is in Grade 2 and topping her class.',
    paragraphs: [
      'At just five years old, Beverlyn Asare lost her father. With his passing came another painful loss — the opportunity to continue her education.',
      'Beverlyn is one of eight children being raised by a single mother. Following her father\'s death, the financial burden of caring for the family became overwhelming, forcing Beverlyn to drop out of school.',
      'For three years, she stayed out of the classroom, while other children her age continued learning. But behind her circumstances was a bright young girl with enormous potential and dreams waiting to be nurtured.',
      'At eight years old, Beverlyn joined the Lys Foundation, where she was given a second chance at education. With dedicated teaching, individual attention, encouragement and a supportive environment, she began making remarkable progress.',
      'Today, at just nine years old, Beverlyn is in Grade 2 and is topping her class!',
      'In barely a year, she has made up significant ground academically, proving that a child\'s circumstances do not define their abilities or future.',
      'Beverlyn dreams of becoming a medical doctor — not only to help others but also to take care of her mother and siblings. Her dream reflects the love and determination of a little girl who has experienced hardship but still looks forward to a brighter future.',
      'Beverlyn\'s story is a powerful reminder that when we give a child access to education, we do more than change one life. We create the possibility of transforming an entire family.',
      'At the Lys Foundation, we believe that every child deserves a chance to learn, dream and succeed, regardless of their background. Your support can give another child like Beverlyn a second chance.',
    ],
    closing: 'One child at a time. One dream at a time. One future transformed.',
    outcome: 'In Grade 2 and topping her class, less than a year after returning to school.',
    treatment: 'A second chance at education, with dedicated teaching and individual attention',
    fundsRaised: 0,
    fundsNeeded: 0,
    status: 'Recovered',
    donorImpact: 'One child at a time. One dream at a time. One future transformed.',
    featured: true,
  },
  {
    id: 3,
    name: 'Mary Kankam',
    slug: 'mary-kankam',
    age: 0,
    condition: 'Mother of three',
    location: '',
    image: '',
    headline: "Mary Kankam: From Homelessness to Hope: A Mother's Journey Towards Independence",
    story: 'A single mother of three, Mary went from having no stable home to a sewing apprenticeship, with graduation expected in January 2027.',
    paragraphs: [
      'For Mary Kankam, a single mother of three, life was once a daily struggle for survival. With no stable place to call home and limited opportunities to earn a living, providing for her children was an overwhelming challenge. Yet, despite her circumstances, Mary held on to one dream: to give her children a better future.',
      'When Mary became part of the Lys Foundation family, we saw more than a struggling mother. We saw a woman with potential, determination, and the courage to rebuild her life.',
      'Understanding that educating a child is only part of breaking the cycle of poverty, the Lys Foundation extended its support beyond Mary\'s children to Mary herself.',
      'First, we helped Mary secure accommodation, giving her family the stability and dignity of having a place to call home. She then enrolled in our adult education programme, where she gained foundational knowledge and skills to prepare her for greater opportunities.',
      'Recognising her need for a sustainable source of income, the Foundation helped place Mary in a sewing apprenticeship, equipping her with a practical skill that could eventually enable her to earn a living and provide independently for her three children.',
      'Today, Mary is on her way to becoming a skilled seamstress, with her graduation expected in January 2027.',
      'Her journey is not yet over, but her transformation is already a powerful testimony to what happens when a woman is given an opportunity to rise above her circumstances.',
      'Mary\'s story reminds us that when we empower a mother, we do more than change one life. We create the possibility of transforming an entire family and the next generation.',
      'At the Lys Foundation, we believe that lasting change begins when families are empowered, children are educated, and poverty is confronted with practical opportunities.',
      'Mary once needed a helping hand to survive. Today, she is learning to use her own hands to build a future for her children.',
    ],
    outcome: 'In a sewing apprenticeship, with graduation expected in January 2027.',
    treatment: 'Accommodation, adult education, and a sewing apprenticeship',
    fundsRaised: 0,
    fundsNeeded: 0,
    status: 'In Treatment',
    donorImpact: 'Graduation expected in January 2027.',
    featured: true,
  },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'How does The Lys Foundation select children for the school?',
    answer: 'We prioritise underprivileged children — particularly orphans and those raised by single mothers — within communities where we run satellite learning centres. Families are interviewed, household income is reviewed, and pupils are placed where the need and learning potential are greatest.',
    category: 'Programs'
  },
  {
    id: 2,
    question: 'How much of my donation goes directly to the children?',
    answer: '85% of every donation goes directly to pupil care — tuition, uniforms, daily breakfast and lunch, learning materials, and health screenings. 10% covers programme operations, and 5% supports our satellite centres and outreach. We publish annual financial reports for full transparency.',
    category: 'Donations'
  },
  {
    id: 3,
    question: 'Can I donate from outside Ghana?',
    answer: 'Yes. We accept international donations via card, bank transfer, and major payment processors. International donations are converted to Ghana Cedis at current exchange rates, and all donors receive receipts where applicable.',
    category: 'Donations'
  },
  {
    id: 4,
    question: 'Do you offer monthly recurring donations or sponsor-a-child plans?',
    answer: 'Yes. Our Sponsor-A-Child plan starts from $100/month and covers a pupil\'s tuition, meals, uniform, and learning materials. Recurring donors receive termly progress updates from the child they sponsor and an annual impact summary.',
    category: 'Donations'
  },
  {
    id: 5,
    question: 'What types of volunteer opportunities are available?',
    answer: 'We welcome Montessori teaching volunteers, childcare and grooming assistants, vocational skills trainers, health screening volunteers (doctors, nurses, paediatricians, pharmacists), and fundraising and communications volunteers. Some roles require professional credentials, others are open to anyone with passion.',
    category: 'Volunteering'
  },
  {
    id: 6,
    question: 'How can my church, business, or organisation partner with Lys?',
    answer: 'We partner with religious bodies, corporate institutions, and individuals — particularly those who can offer space in strategic communities for satellite centres. Corporates can also sponsor classes, programmes, or our boarding campus build. Email partnerships@lysfoundation.org to begin a conversation.',
    category: 'Partnerships'
  },
  {
    id: 7,
    question: 'Why a Montessori curriculum?',
    answer: 'The Montessori philosophy is child-led: the environment inspires the child\'s desire to learn rather than relying on rote memorisation. Pupils learn through games and activities, develop independence by caring for their classroom, and progress at a pace that suits each child — while still mastering all five core subjects by year-end.',
    category: 'Programs'
  },
  {
    id: 8,
    question: 'How will I know my donation made a difference?',
    answer: 'All donors receive termly updates with photos and progress notes from sponsored pupils. Major donors are invited to our Speech & Prize Day, our Annual Gala, and to visit the school in person.',
    category: 'Donations'
  },
  {
    id: 9,
    question: 'Is The Lys Foundation a registered nonprofit organisation?',
    answer: 'Yes. The Lys Foundation was founded in 2015 and officially registered in 2021 as a Company Limited by Guarantee (LBG) and an NGO with the Registrar General\'s Department of Ghana. We are committed to full financial transparency and accountability.',
    category: 'Programs'
  },
  {
    id: 10,
    question: 'Where do you currently operate?',
    answer: 'Our main campus is in Accra, with satellite learning centres in surrounding underprivileged communities. We plan to expand the main campus to include boarding facilities (nursery through Junior Secondary) and a vocational training centre.',
    category: 'Programs'
  }
];

// Legacy exports for compatibility during transition
export const firmInfo = ngoInfo;
export const lawyers = teamMembers;
export const practiceAreas = projects.map(p => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  shortDescription: p.description,
  fullDescription: p.fullDescription,
  whoItsFor: 'Underprivileged children and the mothers who care for them',
  howWeHelp: p.objectives,
  icon: 'Heart',
  image: p.image
}));
export const testimonials: any[] = [];
export const caseStudies = projects.map(p => ({
  id: p.id,
  title: p.title,
  client: p.category,
  practiceArea: p.type,
  outcome: p.description,
  description: p.fullDescription,
  challenges: p.objectives,
  results: p.objectives,
  duration: p.startDate,
  value: p.location,
  featured: p.featured
}));
export const trustIndicators = {
  yearsExperience: 11,
  casesHandled: impactStats.childrenSupported,
  clientSatisfaction: 98,
  lawyers: teamMembers.length,
  certifications: ['Registered NGO - Ghana (LBG, 2021)', 'Montessori Curriculum'],
  barMemberships: [],
  awards: ['Educational Equity Champion 2024', 'Mother Empowerment Recognition 2023']
};

const galleryAlbums: { category: string; urls: string[] }[] = [
  {
    category: 'Child Play',
    urls: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759677/IMG_9990.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759677/IMG_9900.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792759674/IMG_9894.jpg',
    ],
  },
  {
    category: 'Graduations',
    urls: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762166/photo_91_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762165/photo_89_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762164/photo_82_2026-09-09_12-00-22.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762162/photo_79_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762161/photo_77_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762159/photo_70_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762158/photo_68_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762156/photo_67_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762153/photo_64_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762151/photo_63_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762150/photo_62_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762149/photo_51_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762146/photo_47_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762143/photo_46_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762142/photo_45_2026-09-09_11-56-17.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762138/photo_37_2026-09-09_12-00-21.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762050/photo_2_2026-09-09_12-01-13.jpg',
    ],
  },
  {
    category: 'Student Activity',
    urls: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762967/IMG_7176.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762964/IMG_7159.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762962/IMG_7133.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762960/IMG_5014.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762957/IMG_5003.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762955/IMG_4923.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762953/IMG_4917.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762948/IMG_9820.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762941/IMG_9586.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792762939/IMG_7180.jpg',
    ],
  },
];

export const galleryCategories = [
  ...projects.map((project) => project.title),
  ...galleryAlbums.map((album) => album.category),
];

export const donorCompanies: { name: string; slug: string; images: string[] }[] = [
  {
    name: 'Akenkan Shop',
    slug: 'akenkan-shop',
    images: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763265/photo_2_2026-09-09_11-56-17k.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763262/photo_1_2026-09-09_12-00-21k.jpg',
    ],
  },
  {
    name: 'Amadeus',
    slug: 'amadeus',
    images: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763619/IMG_0358.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763617/FB_IMG_1734557744918.jpg',
    ],
  },
  {
    name: 'Ghana Institute of Surveyors',
    slug: 'ghana-institute-of-surveyors',
    images: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763927/img_4_1792523302528.jpg.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763925/img_3_1792523288206.jpg.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763720/FB_IMG_1734557734547.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792763717/FB_IMG_1734557696593.jpg',
    ],
  },
  {
    name: 'IFED Global',
    slug: 'ifed-global',
    images: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792764060/photo_69_2026-09-09_12-00-21.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792764057/photo_35_2026-09-09_11-56-17.jpg',
    ],
  },
  {
    name: 'STEMAID',
    slug: 'stemaid',
    images: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792764092/photo_88_2026-09-09_12-00-22.jpg',
    ],
  },
  {
    name: 'STEMSHECAN',
    slug: 'stemshecan',
    images: [
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792764127/photo_27_2026-09-09_12-01-13.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792764130/photo_28_2026-09-09_12-01-13.jpg',
      'https://res.cloudinary.com/cmpwim01/image/upload/v1792764134/photo_29_2026-09-09_11-56-17.jpg',
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  ...projects.flatMap((project) =>
    project.gallery.map((url, index) => ({
      id: project.id * 100 + index + 1,
      url,
      caption: project.title,
      category: project.title,
      date: '',
    }))
  ),
  ...galleryAlbums.flatMap((album, albumIndex) =>
    album.urls.map((url, index) => ({
      id: 1000 + albumIndex * 100 + index,
      url,
      caption: album.category,
      category: album.category,
      date: '',
    }))
  ),
];

