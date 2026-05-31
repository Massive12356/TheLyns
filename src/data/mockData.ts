import { Project, Event, BlogPost, TeamMember, Partner, NGOInfo, PatientStory, FAQItem } from '../types';

export const ngoInfo: NGOInfo = {
  name: 'The Lys Foundation',
  shortName: 'Lys Foundation',
  tagline: 'Quality education for every child',
  description: 'The Lys Foundation is a non-political, non-profit organization providing quality Montessori education to underprivileged children and empowering single mothers across Ghana.',
  descriptionLong: 'Founded in 2015 and officially registered as a Company Limited by Guarantee (LBG) and an NGO in 2021, The Lys Foundation is dedicated to caring for the underprivileged in our society — specifically through high-quality, child-led Montessori education for children who are mostly orphaned or being raised by single mothers. We believe every child deserves the opportunity to attain a quality education, because, "If you give a man a fish, you feed him for a day. If you teach a man to fish, you feed him for a lifetime."',
  founded: '2015',
  registrationNumber: 'LBG-NGO-2021',
  location: 'Accra, Ghana',
  mission: 'To make a difference in the lives of individuals, families, and the nation of Ghana by making quality education accessible to underprivileged children, and to empower mothers — especially single mothers — with the ability to provide for their children.',
  vision: 'A Ghana where every child, regardless of background, has access to quality education and the opportunity to thrive — spiritually, mentally, and physically.',
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
  phone: '+233 24 123 4567',
  email: 'info@lysfoundation.org',
  businessHours: 'Monday - Friday: 7:30 AM - 4:00 PM',
  bankDetails: {
    accountName: 'The Lys Foundation',
    bankName: 'Ecobank Ghana',
    accountNumber: '0123456789012',
    branch: 'Accra Main Branch'
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
    role: 'Co-Founder & Director',
    title: 'Director, Lys Foundation School',
    image: 'https://res.cloudinary.com/dsk62cvbs/image/upload/v1780181942/jemima_hxaygd.jpg',
    bio: 'Jemima K. Adamah is a Pastor and Strategic Educationist who trained as an Architect at the Kwame Nkrumah University of Science and Technology (KNUST). She holds a Masters in Land Management and Informal Settlement Regularisation from the Institute of Housing Studies at Erasmus University and is a registered member of the Ghana Institute of Architects, specializing in Facilities Management and Interior Design. Passionate about children for over 25 years, she has led children and youth ministries, headed AWANA clubs, and created vacation bible and recreational programs. In 2022, Jemima left her full-time architecture career to pursue her calling — providing equity in education for underprivileged children through The Lys Foundation, while also ministering to women through spiritual retreats across Kenya, Tanzania, Rwanda, Zimbabwe, and expanding to the USA, Canada, and the UK. With a diploma in Montessori education and a hands-on approach, she serves as Director at the Lys Foundation School.',
    expertise: ['Montessori Education', 'Child Development', 'Facilities Management', 'Interior Design', 'Strategic Education', 'Pastoral Ministry'],
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
      website: 'https://lysfoundation.org'
    }
  },
  {
    id: 2,
    name: 'Ewurama Ocran-Gbekor',
    role: 'Co-Founder & Head of Sponsorship',
    title: 'Sponsorship & Business Development',
    image: 'https://res.cloudinary.com/dsk62cvbs/image/upload/v1780181941/ewura_sgl3s8.jpg',
    bio: 'Ewurama Ocran-Gbekor is a Project Management Professional and a member of the PMI. She holds a Masters in Architecture from the Kwame Nkrumah University of Science and Technology (KNUST) in Kumasi, Ghana. With over 15 years of professional experience in the design and development of architectural projects and urban plans, 12 years of site supervision and reporting, and 8 years of project management integrating with diverse multidisciplinary teams, Ewurama is a registered Architect and an Associate of the Ghana Institute of Architects. She is also the co-founder of Architecture Alliance Ghana. Profiled on Metro TV on International Women\'s Day for her impact, Ewurama currently leads sponsorship and business development at The Lys Foundation.',
    expertise: ['Project Management', 'Architecture & Urban Planning', 'Site Supervision', 'Sponsorship & Business Development', 'Multidisciplinary Team Leadership'],
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
      website: 'https://lysfoundation.org'
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
    title: 'Montessori Education Program',
    category: 'Education',
    type: 'Core Program',
    description: 'Our flagship child-led Montessori program covers six core disciplines — Practical Life, Sensorial, Math, Language, Cultural studies, and STEAM — nurturing every child\'s natural desire to learn.',
    fullDescription: 'The Lys Foundation School runs a purely Montessori curriculum, with a planned upgrade to the Cambridge system. The founding principle of Montessori is that the environment should inspire the child\'s desire to learn — so our classrooms are relaxed, respectful, and child-led. Children move at their own pace, but by year-end every child should master all five core subjects, including reading and writing. Through small, manageable tasks and a reward system, we instil a love of learning, independence, confidence, and care for the environment.',
    objectives: [
      'Practical Life — life skills, gardening, sewing, cleaning, courtesy',
      'Sensorial — classification, sorting, organising the environment',
      'Math — number identification, decimal system, geometry with bead stairs and trinomial cubes',
      'Language — phonetics to composition using moveable alphabets and sandpaper letters',
      'Cultural — geography, zoology, science, botany, French, with field trips',
      'STEAM — inquiry-based, hands-on projects building critical thinking and creativity'
    ],
    status: 'Active',
    startDate: 'September 2021',
    location: 'Accra, Ghana',
    image: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    title: 'Satellite Learning Centres',
    category: 'Community Outreach',
    type: 'Outreach',
    description: 'Strategically located satellite education and training centres in impoverished communities, in partnership with religious bodies, corporate institutions, and individuals offering space.',
    fullDescription: 'We collaborate with churches, corporate institutions, and individuals who provide space in strategic, impoverished communities for teaching and learning. Pupils begin their journey at these satellite centres and are gradually migrated to our main campus, which will offer boarding facilities, classes from nursery through Junior Secondary School, and a vocational training centre.',
    objectives: [
      'Set up satellite centres in underprivileged communities',
      'Partner with religious bodies, corporates, and private donors of space',
      'Migrate pupils to the main campus with boarding facilities',
      'Build a vocational training centre as part of the main campus'
    ],
    status: 'Active',
    startDate: 'June 2022',
    endDate: 'Ongoing',
    location: 'Greater Accra & rural Ghana',
    image: 'https://images.pexels.com/photos/8473553/pexels-photo-8473553.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/8473553/pexels-photo-8473553.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    description: 'Daily breakfast and lunch, regular health screenings, multivitamins, and dewormers — delivered in partnership with doctors, paediatricians, and pharmacists.',
    fullDescription: 'A holistic approach is taken for every child\'s spiritual, mental, and physical development. Breakfast and lunch are served daily. Through partnerships with health workers — doctors, paediatricians, and pharmacists — regular health screenings are conducted and medications such as multivitamins and dewormers are made available. Children\'s grooming is inspected daily at the school entrance: clean uniforms, trimmed hair, neat shoes, fresh underwear, good hygiene. Aprons protect their clothes during messy activities, and they leave school groomed and dressed.',
    objectives: [
      'Serve breakfast and lunch to every child every school day',
      'Daily multivitamins and termly dewormers',
      'Daily grooming and hygiene inspection at school entrance',
      'Partner with paediatricians and pharmacists for routine medical checks',
      'Train parents on hygiene, dental care, and skin health',
      'Maintain a fully stocked first-aid station on site'
    ],
    status: 'Active',
    startDate: 'September 2021',
    endDate: 'Ongoing',
    location: 'Accra, Ghana',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    title: 'Mother Empowerment Program',
    category: 'Empowerment',
    type: 'Campaign',
    description: 'A program designed to equip mothers — especially single mothers — with skills, training, and support so they can better cater to their children.',
    fullDescription: 'Our Mother Empowerment Program walks alongside mothers — especially single mothers — equipping them with the skills, vocational training, and spiritual support needed to provide for their children with dignity. We host workshops on parenting, hygiene, dental and skin care, basic vocational skills, and faith-based encouragement, building a strong network of mothers who lift each other up.',
    objectives: [
      'Run vocational training and skills workshops for mothers',
      'Train parents on child hygiene, grooming, and nutrition',
      'Foster a peer-support network of single mothers',
      'Provide spiritual encouragement and pastoral care'
    ],
    status: 'Active',
    startDate: 'January 2022',
    endDate: 'Ongoing',
    location: 'Accra, Ghana',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    featured: false,
    impact: {
      patients: 85,
      communities: 4,
      reach: 'Regional'
    }
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: 'Open Day & School Tour',
    date: 'April 18, 2026',
    time: '9:00 AM - 1:00 PM',
    location: 'The Lys Foundation School, Accra',
    type: 'Open Day',
    description: 'Tour the campus, meet our Montessori teachers, and learn how your child or sponsored pupil could join our growing learning community.',
    image: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/open-day-2026/register',
    featured: true
  },
  {
    id: 2,
    title: 'Mother Empowerment Workshop',
    date: 'May 17, 2026',
    time: '10:00 AM - 2:00 PM',
    location: 'Lys Foundation Community Hall, Accra',
    type: 'Workshop',
    description: 'A practical workshop on child hygiene, nutrition, and basic vocational skills — designed to equip single mothers to care for their families.',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/mother-workshop-2026/register',
    featured: true
  },
  {
    id: 3,
    title: 'Annual Speech & Prize Day',
    date: 'July 11, 2026',
    time: '9:00 AM - 1:00 PM',
    location: 'The Lys Foundation School, Accra',
    type: 'School Event',
    description: 'Celebrating the academic, character, and creative achievements of our pupils across all six Montessori disciplines.',
    image: 'https://images.pexels.com/photos/8473553/pexels-photo-8473553.jpeg?auto=compress&cs=tinysrgb&w=800',
    registrationLink: '/events/speech-day-2026/register',
    featured: true
  },
  {
    id: 4,
    title: 'Sponsor-A-Child Drive',
    date: 'August 22, 2026',
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
    date: 'November 14, 2026',
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
  volunteersMobilized: 85,
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
    name: 'Akosua Mensah',
    age: 7,
    condition: 'Lys Foundation Pupil — Class 2',
    location: 'Nima, Accra',
    image: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Akosua is being raised by her grandmother — a market trader — after losing both parents. When she joined our satellite centre, she could not read or write. Through our Montessori Language area and daily meals, she now reads simple sentences, leads tidy-up time, and dreams of becoming a teacher.',
    outcome: 'Akosua is reading independently, leads classroom routines, and was awarded our 2025 "Joy of Learning" prize.',
    treatment: 'Full Montessori curriculum + daily meals + grooming routine',
    fundsRaised: 1200,
    fundsNeeded: 1200,
    status: 'Recovered',
    beforeImage: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    recoveryTimeline: [
      { date: 'Sep 2024', milestone: 'Joined satellite centre — non-reader' },
      { date: 'Jan 2025', milestone: 'Mastered phonics with Montessori sandpaper letters' },
      { date: 'Apr 2025', milestone: 'Reading simple sentences independently' },
      { date: 'Jul 2025', milestone: 'Awarded "Joy of Learning" prize at Speech Day' }
    ],
    donorImpact: '14 sponsors funded Akosua\'s tuition, uniform, and meals for the year — averaging $86 each.',
    featured: true
  },
  {
    id: 2,
    name: 'Kwabena Owusu',
    age: 9,
    condition: 'Lys Foundation Pupil — Class 4',
    location: 'Madina, Accra',
    image: 'https://images.pexels.com/photos/8473553/pexels-photo-8473553.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Kwabena had dropped out of two schools because his mother — a single parent selling sachet water — could not keep up with fees and uniforms. At Lys, his confidence has bloomed through our STEAM and Cultural disciplines. He now leads science demonstrations for younger pupils.',
    outcome: 'Top of his class in Math, peer mentor in STEAM activities, and a regular reader at our Friday Cultural assembly.',
    treatment: 'Full Montessori curriculum + STEAM mentorship + uniform sponsorship',
    fundsRaised: 1500,
    fundsNeeded: 1500,
    status: 'Recovered',
    recoveryTimeline: [
      { date: 'Sep 2023', milestone: 'Enrolled after dropping out twice' },
      { date: 'Feb 2024', milestone: 'Excelled in Math with Montessori bead stairs' },
      { date: 'Sep 2024', milestone: 'Promoted to STEAM peer-mentor role' },
      { date: 'Mar 2025', milestone: 'Reads at the Friday Cultural assembly' }
    ],
    donorImpact: '11 donors funded Kwabena\'s schooling — including a corporate sponsor covering full uniform and books.',
    featured: true
  },
  {
    id: 3,
    name: 'Ama Tetteh',
    age: 32,
    condition: 'Mother in Empowerment Program',
    location: 'Adenta, Accra',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Ama is a single mother of three whose children attend the Lys Foundation School. Through our Mother Empowerment Program she trained in tailoring and basic financial literacy. Today she runs a small dressmaking business serving our school families and beyond.',
    outcome: 'Ama runs a self-sustaining tailoring business and mentors other single mothers in our peer-support network.',
    treatment: 'Vocational training + peer-support + business mentoring',
    fundsRaised: 800,
    fundsNeeded: 1200,
    status: 'In Treatment',
    donorImpact: '9 donors have backed Ama\'s journey so far. $400 more would buy a second sewing machine to expand her workshop.',
    featured: true
  },
  {
    id: 4,
    name: 'Yaw Asare',
    age: 5,
    condition: 'Lys Foundation Pupil — Nursery',
    location: 'Nima, Accra',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    story: 'Yaw arrived at our nursery underweight and rarely smiling. After a term of daily breakfast, lunch, multivitamins, and the warmth of our Practical Life activities, he is a vibrant, curious learner who runs to school every morning.',
    outcome: 'Healthy weight gain, strong attendance, and visible joy — Yaw is now one of our most engaged Practical Life pupils.',
    treatment: 'Daily meals + multivitamins + Practical Life routine + grooming',
    fundsRaised: 600,
    fundsNeeded: 600,
    status: 'Recovered',
    donorImpact: 'A single corporate sponsor covered Yaw\'s nursery year — meals, uniform, learning materials, and health checks.',
    featured: false
  }
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
    answer: 'Yes. Our Sponsor-A-Child plan starts from $25/month and covers a pupil\'s tuition, meals, uniform, and learning materials. Recurring donors receive termly progress updates from the child they sponsor and an annual impact summary.',
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
