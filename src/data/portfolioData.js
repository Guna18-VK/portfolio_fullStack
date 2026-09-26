// ============================================================
// PORTFOLIO DATA FILE
// Update your personal information, projects, and links here
// ============================================================

export const personalInfo = {
  name: 'Gunaseelan G',
  email: 'gunaseelan9322006@gmail.com',
  phone: '+91 9585723611',
  location: 'Nagapattinam, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/gunaseelan-g-7354b2335',
  github: 'https://github.com/Guna18-VK',
  // Replace this with the path to your actual resume PDF inside /public folder
  // e.g., place your resume as /public/Gunaseelan_Resume.pdf and set: '/Gunaseelan_Resume.pdf'
  resumeLink: '/Gunaseelan_Resume.pdf',
  title: 'Entry-Level Software Developer',
  degree: 'B.Tech – Artificial Intelligence and Data Science',
  heroTagline:
    'Motivated engineering student with a strong interest in software development, cloud technologies, and DevOps. Passionate about learning new technologies and building practical solutions.',
  objective:
    'Motivated engineering student pursuing a B.Tech degree in Artificial Intelligence and Data Science, seeking an entry-level Software Developer role to contribute to real-world projects. Eager to apply foundational knowledge in software development while learning new technologies and improving problem-solving skills in a professional environment.',
}

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology – Artificial Intelligence and Data Science',
    institution: 'Rathinam Technical Campus',
    location: 'Coimbatore',
    duration: '2023 – Present',
    score: 'CGPA: 8.3',
    current: true,
  },
  {
    id: 2,
    degree: 'National Higher Secondary School',
    institution: 'Nagapattinam',
    location: 'Nagapattinam',
    duration: '2021 – 2023',
    score: 'Percentage: 80%',
    current: false,
  },
]

export const skills = [
  {
    category: 'Programming & Query',
    icon: '💻',
    items: ['Java', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MySQL'],
  },
  {
    category: 'Cloud',
    icon: '☁️',
    items: ['AWS'],
  },
  {
    category: 'DevOps',
    icon: '🔧',
    items: ['CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Vercel', 'Render'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Software Intern',
    company: 'Xortican Technologies',
    duration: 'January 2025 – February 2025',
    description:
      'Contributed to real-time projects and gained hands-on experience in AWS, while developing technical, problem-solving, and teamwork skills in a professional environment.',
    tags: ['AWS', 'Cloud', 'Teamwork', 'Problem Solving'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Scholarship Awareness and Recommendation System',
    description:
      'Developed a full-stack Scholarship Awareness and Recommendation System using React, Node.js, Express.js and MySQL. Implemented personalized scholarship recommendation and eligibility checking based on student profiles. Built search, filtering, and deadline notification features, improving scholarship discovery efficiency for students. Deployed the frontend and backend using Vercel and Render with cloud database integration through MongoDB Atlas.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'MongoDB Atlas', 'Vercel', 'Render'],
    // Replace these with your actual links
    github: 'https://github.com/Guna18-VK',
    demo: '#',
    highlights: [
      'Personalized scholarship recommendation engine',
      'Eligibility checking based on student profiles',
      'Search, filtering & deadline notifications',
      'Deployed on Vercel (frontend) & Render (backend)',
    ],
  },
  {
    id: 2,
    title: 'Blue-Green Deployment DevOps Project',
    description:
      'Engineered CI/CD pipelines using Jenkins, Docker, and Terraform. Reduced deployment time by 35% using Jenkins and Docker. Architected a blue-green deployment strategy enabling zero-downtime releases. Automated build, testing, and deployment workflows, improving operational efficiency by 40%. Deployed containerized applications in a scalable cloud environment.',
    technologies: ['Jenkins', 'Docker', 'Terraform', 'CI/CD', 'Cloud'],
    // Replace these with your actual links
    github: 'https://github.com/Guna18-VK',
    demo: '#',
    highlights: [
      'CI/CD pipelines with Jenkins & Docker',
      '35% reduction in deployment time',
      'Zero-downtime blue-green deployments',
      '40% improvement in operational efficiency',
    ],
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Introduction to SQL',
    icon: '🗄️',
  },
  {
    id: 2,
    title: 'Namaste JavaScript',
    icon: '📜',
  },
  {
    id: 3,
    title: 'AWS Cloud Practitioner Essentials',
    icon: '☁️',
  },
]
