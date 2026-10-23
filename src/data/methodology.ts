export interface MethodologyItem {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  summary: string;
  paragraphs: string[];
  closing?: string;
}

export const methodology: MethodologyItem[] = [
  {
    slug: 'collaborative-partnerships',
    number: '01',
    title: 'Collaborative Partnerships',
    summary: 'We partner with faith-based organisations, companies, and communities to create safe learning spaces where children need them most.',
    paragraphs: [
      'We collaborate with faith-based organisations, corporate institutions, community stakeholders and private individuals to identify and establish safe, accessible and conducive learning spaces within underserved communities.',
      'Through these strategic partnerships, we mobilise resources, expand educational opportunities and create sustainable solutions that positively impact children, families and the communities we serve.',
    ],
  },
  {
    slug: 'satellite-learning-model',
    number: '02',
    title: 'Our Satellite Learning Model',
    subtitle: 'Starting in one community. Building a model for many.',
    summary: 'A first pilot at Mamprobi Camara in Accra is shaping how we will take child-centred education into more communities.',
    paragraphs: [
      'Our vision is to bring quality, holistic education closer to children in underserved communities through a network of satellite learning and training centres across Ghana and, ultimately, Africa.',
      'We are currently piloting this model at Mamprobi Camara in Accra, where we are developing and refining a community-based approach to education that responds to the unique needs of underprivileged children and their families.',
      'Building on the lessons and successes of this first pilot, we aim to establish additional satellite centres in disadvantaged communities, providing accessible, child-centred Montessori education, character development and essential life skills.',
      'Our long-term vision includes the establishment of a central campus with boarding facilities, offering continuous education from nursery through Junior High School (JHS), alongside a vocational training centre that equips young people and mothers with practical, income-generating skills.',
      'With the support of strategic partners and donors, we believe our pilot in Mamprobi Camara can become the foundation for a scalable and sustainable educational model, reaching thousands of children and empowering families across Ghana and beyond.',
    ],
    closing: 'One community at a time. One child at a time. Transforming generations.',
  },
  {
    slug: 'montessori-based-education',
    number: '03',
    title: 'Montessori-Based Education',
    subtitle: 'Nurturing curious minds. Inspiring independent thinkers.',
    summary: 'Children learn by discovering, questioning, and doing, at their own pace, inside a Montessori classroom.',
    paragraphs: [
      'Our educational approach is grounded in the Montessori philosophy, placing each child at the centre of the learning experience. Through hands-on activities, purposeful play, exploration and practical life experiences, we create an engaging environment where children learn by discovering, questioning and doing.',
      'Rather than relying solely on rote memorisation, we focus on developing a deeper understanding of concepts while nurturing creativity, critical thinking, problem-solving skills, independence and a lifelong love for learning.',
      'Our approach recognises that every child is unique, with individual strengths, abilities and learning needs. By providing a supportive, stimulating and child-centred environment, we empower children to learn at their own pace, build confidence and develop the skills and character needed to thrive both inside and beyond the classroom.',
    ],
  },
  {
    slug: 'holistic-child-development',
    number: '04',
    title: 'Holistic Child Development',
    subtitle: 'Educating the mind. Nurturing the heart. Equipping for life.',
    summary: 'We care for the whole child: spirit, mind, emotions, relationships, and body, not only exam results.',
    paragraphs: [
      'At The Lys Foundation, we believe true education goes beyond academic achievement. Our Christ-centred approach nurtures the spiritual, intellectual, emotional, social and physical development of every child, laying a strong foundation for a purposeful and fulfilling life.',
      'Alongside academic learning, we intentionally cultivate godly character, leadership, responsibility, stewardship, emotional intelligence and strong moral values. Through practical, age-appropriate experiences, children are also introduced to creative arts, technical and vocational skills, entrepreneurship and essential life skills that foster independence, confidence and resourcefulness.',
      'Our goal is not simply to raise academically capable children, but to nurture well-rounded, compassionate and responsible individuals who are equipped to thrive, contribute meaningfully to society and positively influence their communities.',
    ],
  },
  {
    slug: 'nutrition-healthcare-support',
    number: '05',
    title: 'Nutrition & Healthcare Support',
    subtitle: 'Healthy children. Stronger minds. Brighter futures.',
    summary: 'Daily meals and regular health care so hunger and illness do not stand between a child and their learning.',
    paragraphs: [
      'At The Lys Foundation, we recognise that a child\'s ability to learn, grow and thrive is closely linked to their health and nutritional wellbeing. We therefore provide daily breakfast and lunch to our pupils, helping to ensure that hunger does not become a barrier to learning.',
      'Through partnerships with healthcare professionals, including doctors, paediatricians and pharmacists, we facilitate regular health screenings, monitor children\'s wellbeing and provide access to essential preventive healthcare services. These include nutritional supplementation, deworming treatments and other medical interventions administered under appropriate professional guidance.',
      'By integrating nutrition and healthcare into our educational programme, we seek to create a supportive environment where every child is healthy, nourished and better equipped to reach their full potential.',
    ],
    closing: 'Because a healthy child is better positioned to learn, and a well-nourished mind has a greater opportunity to flourish.',
  },
];

export function getMethodology(slug: string) {
  return methodology.find((item) => item.slug === slug);
}
