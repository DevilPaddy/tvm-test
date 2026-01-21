
type ExperienceLevel = "All Levels" | "Beginner" | "Intermediate" | "Experienced";

interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements: string[];
  experienceLevel: ExperienceLevel;
  location: string;
  employmentType: string;
  postedDate: string;
}


export const jobListings: Job[] = [
  {
    id: "web-dev-1",
    title: "Web Developer",
    category: "Web Development",
    description: "We're looking for a talented Web Developer to join our development team. You'll be responsible for building and maintaining web applications, collaborating with cross-functional teams, and implementing responsive designs.",
    requirements: [
      "Proficient in HTML, CSS, and JavaScript",
      "Experience with React.js or other modern frontend frameworks",
      "Knowledge of responsive design principles",
      "Basic understanding of backend technologies like Node.js",
      "Familiarity with version control systems (Git)"
    ],
    experienceLevel: "Beginner",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-10"
  },
  {
    id: "web-dev-2",
    title: "Senior Web Developer",
    category: "Web Development",
    description: "We're seeking an experienced Web Developer to lead our frontend projects. You'll architect solutions, mentor junior developers, and ensure best practices are followed throughout the development lifecycle.",
    requirements: [
      "Strong proficiency in JavaScript/TypeScript and modern frameworks (React, Vue, Angular)",
      "Experience with state management solutions and API integration",
      "Understanding of web performance optimization techniques",
      "Knowledge of testing frameworks and CI/CD pipelines",
      "Ability to lead technical discussions and code reviews"
    ],
    experienceLevel: "Experienced",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-08"
  },
  {
    id: "android-dev-1",
    title: "Android Developer",
    category: "Mobile Development",
    description: "Join our mobile team to create innovative Android applications. You'll be involved in developing, testing, and maintaining mobile applications for our clients across various industries.",
    requirements: [
      "Knowledge of Java or Kotlin for Android development",
      "Experience with Android Studio",
      "Understanding of mobile UI/UX principles",
      "Familiarity with RESTful APIs and data parsing",
      "Basic knowledge of version control (Git)"
    ],
    experienceLevel: "Beginner",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-07"
  },
  {
    id: "android-dev-2",
    title: "Android Developer",
    category: "Mobile Development",
    description: "We're looking for an Android Developer with intermediate experience to join our growing mobile team. You'll work on challenging projects and help evolve our mobile application architecture.",
    requirements: [
      "Strong knowledge of Kotlin and Java",
      "Experience with Android architecture components",
      "Understanding of material design principles",
      "Experience with third-party libraries and APIs",
      "Knowledge of offline storage, threading, and performance optimization"
    ],
    experienceLevel: "Intermediate",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-09"
  },
  {
    id: "web-designer-1",
    title: "Web Designer",
    category: "Design",
    description: "We're seeking a creative Web Designer to create stunning visual elements for our web projects. You'll be responsible for designing user interfaces that are both visually appealing and functional.",
    requirements: [
      "Proficiency in design tools like Figma, Adobe XD, or Photoshop",
      "Understanding of UI/UX principles",
      "Knowledge of HTML and CSS",
      "Portfolio demonstrating web design skills",
      "Good eye for detail and aesthetic design"
    ],
    experienceLevel: "Intermediate",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-05"
  },
  {
    id: "uiux-designer-1",
    title: "UI/UX Designer",
    category: "Design",
    description: "Join our creative team as a UI/UX Designer to create intuitive user experiences. You'll conduct user research, create wireframes, and design interactive prototypes for web and mobile applications.",
    requirements: [
      "Experience with UX methodologies and user research",
      "Proficiency in creating wireframes, user flows, and prototypes",
      "Strong portfolio showcasing UI/UX projects",
      "Knowledge of design systems and component libraries",
      "Understanding of accessibility standards"
    ],
    experienceLevel: "Experienced",
    location: "Aurangabad, Maharashtra (Remote)",
    employmentType: "Full-time",
    postedDate: "2024-06-04"
  },
  {
    id: "database-engineer-1",
    title: "Database Engineer",
    category: "Database",
    description: "We're looking for a Database Engineer to design, implement, and maintain our database systems. You'll optimize database performance, ensure data integrity, and implement security measures.",
    requirements: [
      "Experience with SQL and relational databases (MySQL, PostgreSQL)",
      "Knowledge of database design principles",
      "Understanding of database performance tuning",
      "Experience with data migration and ETL processes",
      "Basic knowledge of NoSQL databases is a plus"
    ],
    experienceLevel: "Intermediate",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-03"
  },
  {
    id: "marketing-specialist-1",
    title: "Digital Marketing Specialist",
    category: "Marketing",
    description: "Join our marketing team to develop and implement digital marketing strategies. You'll manage social media campaigns, email marketing, and work on SEO optimization to increase our online presence.",
    requirements: [
      "Experience with social media marketing and management tools",
      "Knowledge of SEO/SEM principles",
      "Experience with email marketing campaigns",
      "Analytical skills and familiarity with marketing analytics tools",
      "Content creation and copywriting abilities"
    ],
    experienceLevel: "Beginner",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-02"
  },
  {
    id: "marketing-manager-1",
    title: "Marketing Manager",
    category: "Marketing",
    description: "We're seeking an experienced Marketing Manager to lead our marketing initiatives. You'll develop marketing strategies, oversee campaign execution, and analyze marketing performance metrics.",
    requirements: [
      "Proven experience in marketing management",
      "Strong understanding of digital marketing channels",
      "Experience with marketing budget management",
      "Leadership skills and ability to manage a team",
      "Analytical mindset with focus on ROI measurement"
    ],
    experienceLevel: "Experienced",
    location: "Aurangabad, Maharashtra (Hybrid)",
    employmentType: "Full-time",
    postedDate: "2024-06-01"
  }
];

export const jobCategories = [
  "All Categories",
  "Web Development",
  "Mobile Development",
  "Design",
  "Database",
  "Marketing"
];

export const experienceLevels:ExperienceLevel[] = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Experienced"
];
