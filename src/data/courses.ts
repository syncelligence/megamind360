import { Course } from "../types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    slug: "web-development-bootcamp",
    category: "Web Development",
    level: "Beginner",
    description:
      "Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js and more to help you become a full-stack web developer.",
    thumbnail:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      id: "7",
      name: "Ashwin Jiwane",
      title: "Data Scientist",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Data scientist with expertise in machine learning, data analytics, and predictive modeling. Passionate about transforming raw data into actionable insights.",
      expertise: ["Machine Learning", "Data Analytics", "Python"],
      rating: 4.7,
      totalReviews: 120,
      totalStudents: 3500,
      totalCourses: 3,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "12 weeks",
    price: 99.99,
    rating: 4.7,
    totalReviews: 1245,
    enrolledStudents: 5280,
    featured: true,
    topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Web Development",
        duration: "2 weeks",
        lessons: [
          {
            id: "l1",
            title: "How the Web Works",
            duration: "30 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Setting Up Your Development Environment",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Introduction to HTML",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l4",
            title: "HTML Basics Quiz",
            duration: "20 mins",
            type: "Quiz",
          },
        ],
      },
      {
        id: "m2",
        title: "CSS Fundamentals",
        duration: "2 weeks",
        lessons: [
          {
            id: "l5",
            title: "Introduction to CSS",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l6",
            title: "CSS Box Model",
            duration: "35 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Flexbox & Grid",
            duration: "55 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Build Your First Webpage",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Data Science and Machine Learning Fundamentals",
    slug: "data-science-fundamentals",
    category: "Data Science",
    level: "Intermediate",
    description:
      "Master the essentials of data science, statistics, and machine learning. Learn Python, pandas, NumPy, and scikit-learn to analyze data and build ML models.",
    thumbnail:
      "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      id: "11",
      name: "Anurodh",
      title: "Cloud Architect",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Cloud architect specializing in designing scalable and secure cloud infrastructures. Proficient in AWS, Azure, and Google Cloud.",
      expertise: ["Cloud Architecture", "AWS", "Azure"],
      rating: 4.7,
      totalReviews: 130,
      totalStudents: 3200,
      totalCourses: 2,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "10 weeks",
    price: 129.99,
    rating: 4.8,
    totalReviews: 982,
    enrolledStudents: 3540,
    featured: true,
    topics: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Statistics",
      "Visualization",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Data Science",
        duration: "2 weeks",
        lessons: [
          {
            id: "l1",
            title: "What is Data Science?",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Python for Data Science",
            duration: "1.5 hours",
            type: "Video",
          },
          {
            id: "l3",
            title: "NumPy and Pandas Basics",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l4",
            title: "Data Manipulation Exercise",
            duration: "45 mins",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m2",
        title: "Statistical Analysis",
        duration: "2 weeks",
        lessons: [
          {
            id: "l5",
            title: "Descriptive Statistics",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l6",
            title: "Probability Distributions",
            duration: "60 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Hypothesis Testing",
            duration: "55 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Statistics Quiz",
            duration: "30 mins",
            type: "Quiz",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "UX/UI Design Masterclass",
    slug: "ux-ui-design-masterclass",
    category: "Design",
    level: "Beginner",
    description:
      "Learn to design beautiful and functional user interfaces. Master user experience principles, wireframing, prototyping, and design tools like Figma.",
    thumbnail:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      id: "3",
      name: "Emma Rodriguez",
      title: "UX Design Lead",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Award-winning designer with experience at top tech companies. Passionate about creating intuitive and accessible digital experiences.",
      expertise: ["UI Design", "User Research", "Figma", "Adobe XD"],
      rating: 4.7,
      totalReviews: 275,
      totalStudents: 6200,
      totalCourses: 4,
      social: {
        twitter: "https://twitter.com/emmarodriguez",
        linkedin: "https://linkedin.com/in/emmarodriguez",
      },
    },
    duration: "8 weeks",
    price: 89.99,
    rating: 4.6,
    totalReviews: 820,
    enrolledStudents: 2945,
    featured: true,
    topics: [
      "UX Principles",
      "UI Design",
      "Wireframing",
      "Prototyping",
      "Figma",
      "User Testing",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Design Fundamentals",
        duration: "2 weeks",
        lessons: [
          {
            id: "l1",
            title: "Introduction to UX/UI",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Design Principles",
            duration: "55 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Color Theory",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l4",
            title: "Typography Basics",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m2",
        title: "UX Process",
        duration: "2 weeks",
        lessons: [
          {
            id: "l5",
            title: "User Research Methods",
            duration: "60 mins",
            type: "Video",
          },
          {
            id: "l6",
            title: "Creating User Personas",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Journey Mapping",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Your First User Research Project",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Digital Marketing Fundamentals",
    slug: "digital-marketing-fundamentals",
    category: "Marketing",
    level: "Beginner",
    description:
      "Master the fundamentals of digital marketing, including SEO, social media, content marketing, email campaigns, and analytics to grow your online presence.",
    thumbnail:
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      id: "4",
      name: "David Wilson",
      title: "Marketing Director",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Marketing specialist with over 15 years of experience working with Fortune 500 companies and startups alike.",
      expertise: ["SEO", "Content Marketing", "Social Media", "Analytics"],
      rating: 4.6,
      totalReviews: 390,
      totalStudents: 9500,
      totalCourses: 6,
      social: {
        linkedin: "https://linkedin.com/in/davidwilson",
        website: "https://davidwilson.com",
      },
    },
    duration: "6 weeks",
    price: 79.99,
    rating: 4.5,
    totalReviews: 760,
    enrolledStudents: 4120,
    featured: false,
    topics: [
      "SEO",
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Analytics",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Marketing Foundations",
        duration: "1 week",
        lessons: [
          {
            id: "l1",
            title: "Introduction to Digital Marketing",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Building a Marketing Strategy",
            duration: "60 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Understanding Your Audience",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l4",
            title: "Marketing Fundamentals Quiz",
            duration: "20 mins",
            type: "Quiz",
          },
        ],
      },
      {
        id: "m2",
        title: "SEO Basics",
        duration: "1 week",
        lessons: [
          {
            id: "l5",
            title: "How Search Engines Work",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l6",
            title: "On-Page SEO Techniques",
            duration: "55 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Off-Page SEO Strategies",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "SEO Audit Exercise",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  // React Course
  {
    id: "5",
    title: "React Mastery with AI Integration",
    slug: "react-mastery-with-ai-integration",
    category: "Web Development",
    level: "Intermediate",
    description:
      "A complete React course from basics to advanced, including real-world AI applications. Build modern web apps and integrate AI APIs to solve real problems.",
    thumbnail:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      id: "7",
      name: "Ashwin Jiwane",
      title: "Data Scientist",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Data scientist with expertise in machine learning, data analytics, and predictive modeling. Passionate about transforming raw data into actionable insights.",
      expertise: ["Machine Learning", "Data Analytics", "Python"],
      rating: 4.7,
      totalReviews: 120,
      totalStudents: 3500,
      totalCourses: 3,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "8 weeks",
    price: 129.99,
    rating: 4.9,
    totalReviews: 1420,
    enrolledStudents: 3800,
    featured: true,
    topics: [
      "React Basics",
      "Hooks & Redux",
      "AI API Integration",
      "Project Deployment",
      "Performance Optimization",
      "Real-world Projects",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to React",
        duration: "10 hours",
        lessons: [
          { id: "l1", title: "Why React?", duration: "30 mins", type: "Video" },
          {
            id: "l2",
            title: "Setup: Node.js, npm, CRA",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l3",
            title: "JSX & Components",
            duration: "1.5 hours",
            type: "Video",
          },
          {
            id: "l4",
            title: "Props & State",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l5",
            title: "Hooks: useState & useEffect",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l6",
            title: "Custom Hooks",
            duration: "3 hours",
            type: "Project",
          },
        ],
      },
      {
        id: "m2",
        title: "Core Concepts & Techniques",
        duration: "12 hours",
        lessons: [
          {
            id: "l7",
            title: "Advanced Component Patterns",
            duration: "4 hours",
            type: "Video",
          },
          {
            id: "l8",
            title: "React Router & Navigation",
            duration: "3 hours",
            type: "Video",
          },
          {
            id: "l9",
            title: "Redux Fundamentals",
            duration: "3 hours",
            type: "Video",
          },
          {
            id: "l10",
            title: "Forms & Validation",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m3",
        title: "Advanced Applications",
        duration: "12 hours",
        lessons: [
          {
            id: "l11",
            title: "Project: To-Do App with API",
            duration: "8 hours",
            type: "Project",
          },
          {
            id: "l12",
            title: "Debugging & Performance",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l13",
            title: "Deployment with Vercel/Netlify",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m4",
        title: "AI Integration & Real-World Examples",
        duration: "14 hours",
        lessons: [
          {
            id: "l14",
            title: "Intro to AI & APIs",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l15",
            title: "AI Resume Generator App",
            duration: "8 hours",
            type: "Project",
          },
          {
            id: "l16",
            title: "AI in Existing React Apps",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l17",
            title: "Case Studies & Final Project",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  //Web Development Bootcamp
  {
    id: "6",
    title: "Crash Course in Web Development Basics",
    slug: "web-dev-basics-2-weekends",
    category: "Web Development",
    level: "Beginner",
    description:
      "A 2-weekend intensive course covering foundational web technologies including HTML, CSS, JavaScript, and responsive design, ending with a hands-on mini project.",
    thumbnail:
      "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      id: "7",
      name: "Ashwin Jiwane",
      title: "Data Scientist",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Data scientist with expertise in machine learning, data analytics, and predictive modeling. Passionate about transforming raw data into actionable insights.",
      expertise: ["Machine Learning", "Data Analytics", "Python"],
      rating: 4.7,
      totalReviews: 120,
      totalStudents: 3500,
      totalCourses: 3,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "2 Weekends (15 hours)",
    price: 39.99,
    rating: 4.8,
    totalReviews: 410,
    enrolledStudents: 1950,
    featured: true,
    topics: [
      "Internet Basics",
      "HTML Fundamentals",
      "Semantic HTML",
      "CSS Basics",
      "CSS Box Model",
      "Flexbox",
      "Responsive Design",
      "JavaScript Essentials",
      "DOM Manipulation",
      "Mini Project",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "w1",
        title: "Web & HTML Foundations",
        duration: "Weekend 1",
        lessons: [
          {
            id: "d1",
            title: "Day 1: Web & Internet 101 + HTML Basics",
            topics: [
              "Internet basics (post office analogy)",
              "Client-server & HTTP",
              "URLs & domains",
              "HTML document structure",
              "Text tags, links, images",
            ],
          },
          {
            id: "d2",
            title: "Day 2: Semantic HTML + Intro to CSS",
            topics: [
              "Tables & forms",
              "<header>, <nav>, <section>, <footer>",
              "CSS inline, internal, and external styles",
              "CSS selectors, properties, and values",
            ],
          },
        ],
      },
      {
        id: "w2",
        title: "Styling, Interactivity & Project",
        duration: "Weekend 2",
        lessons: [
          {
            id: "d3",
            title: "Day 3: CSS Box Model + Flexbox & Responsive Design",
            topics: [
              "Box model: padding, border, margin",
              "Display types: block, inline, inline-block",
              "Flex containers and items",
              "Media queries for mobile responsiveness",
            ],
          },
          {
            id: "d4",
            title: "Day 4: JavaScript Essentials + DOM + Project",
            topics: [
              "JavaScript variables, data types, functions, events",
              "Selecting & updating elements (DOM)",
              "Event handling",
              "Mini Project: Interactive multi-section website",
            ],
          },
        ],
      },
    ],
  },
  //Angular
  {
    id: "7",
    title: "Mastering Angular for Modern Web Development",
    slug: "mastering-angular",
    category: "Web Development",
    level: "Intermediate",
    description:
      "This Angular course includes prerequisites, comprehensive content, and real-world AI applications, preparing students for modern development challenges.",
    thumbnail:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      id: "7",
      name: "Ashwin Jiwane",
      title: "Data Scientist",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Data scientist with expertise in machine learning, data analytics, and predictive modeling. Passionate about transforming raw data into actionable insights.",
      expertise: ["Machine Learning", "Data Analytics", "Python"],
      rating: 4.7,
      totalReviews: 120,
      totalStudents: 3500,
      totalCourses: 3,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "10 weeks",
    price: 119.99,
    rating: 4.7,
    totalReviews: 940,
    enrolledStudents: 3780,
    featured: true,
    topics: [
      "Angular",
      "TypeScript",
      "Forms",
      "Routing",
      "State Management",
      "API Integration",
      "Unit Testing",
      "Deployment",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Angular",
        duration: "4 hours",
        lessons: [
          {
            id: "l1",
            title: "Overview of Angular",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l2",
            title: "Setting up Angular CLI",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l3",
            title: "Your First Angular App",
            duration: "2 hours",
            type: "Hands-on",
          },
        ],
      },
      {
        id: "m2",
        title: "TypeScript Basics",
        duration: "4 hours",
        lessons: [
          {
            id: "l4",
            title: "Intro to TypeScript",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l5",
            title: "Data Types and Interfaces",
            duration: "1.5 hours",
            type: "Video",
          },
          {
            id: "l6",
            title: "Functions and Classes",
            duration: "1.5 hours",
            type: "Video",
          },
        ],
      },
      {
        id: "m3",
        title: "Components and Templates",
        duration: "8 hours",
        lessons: [
          {
            id: "l7",
            title: "Component Basics",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l8",
            title: "Input/Output Bindings",
            duration: "2 hours",
            type: "Hands-on",
          },
          {
            id: "l9",
            title: "Lifecycle Hooks",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l10",
            title: "Advanced Templates",
            duration: "2 hours",
            type: "Hands-on",
          },
        ],
      },
      {
        id: "m4",
        title: "Modules and Services",
        duration: "5 hours",
        lessons: [
          {
            id: "l11",
            title: "Angular Modules",
            duration: "1.5 hours",
            type: "Video",
          },
          {
            id: "l12",
            title: "Creating Services",
            duration: "2 hours",
            type: "Hands-on",
          },
          {
            id: "l13",
            title: "Dependency Injection",
            duration: "1.5 hours",
            type: "Video",
          },
        ],
      },
      {
        id: "m5",
        title: "Routing and Navigation",
        duration: "4 hours",
        lessons: [
          {
            id: "l14",
            title: "Basic Routing",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l15",
            title: "Route Parameters & Guards",
            duration: "2 hours",
            type: "Hands-on",
          },
          {
            id: "l16",
            title: "Lazy Loading",
            duration: "1 hour",
            type: "Video",
          },
        ],
      },
      {
        id: "m6",
        title: "Forms in Angular",
        duration: "6 hours",
        lessons: [
          {
            id: "l17",
            title: "Reactive vs Template-Driven Forms",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l18",
            title: "Form Validation",
            duration: "2 hours",
            type: "Hands-on",
          },
          {
            id: "l19",
            title: "Complex Forms",
            duration: "2 hours",
            type: "Hands-on",
          },
        ],
      },
      {
        id: "m7",
        title: "Interacting with APIs",
        duration: "5 hours",
        lessons: [
          {
            id: "l20",
            title: "Using HttpClient",
            duration: "1.5 hours",
            type: "Video",
          },
          {
            id: "l21",
            title: "Handling Errors",
            duration: "1.5 hours",
            type: "Hands-on",
          },
          {
            id: "l22",
            title: "CRUD with Backend",
            duration: "2 hours",
            type: "Project",
          },
        ],
      },
      {
        id: "m8",
        title: "Directives and Pipes",
        duration: "4 hours",
        lessons: [
          {
            id: "l23",
            title: "Built-in Directives",
            duration: "1.5 hours",
            type: "Video",
          },
          {
            id: "l24",
            title: "Custom Directives",
            duration: "1 hour",
            type: "Hands-on",
          },
          {
            id: "l25",
            title: "Using Pipes",
            duration: "1.5 hours",
            type: "Video",
          },
        ],
      },
      {
        id: "m9",
        title: "State Management",
        duration: "5 hours",
        lessons: [
          {
            id: "l26",
            title: "Intro to State Management",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l27",
            title: "Using Services & BehaviorSubject",
            duration: "1.5 hours",
            type: "Hands-on",
          },
          {
            id: "l28",
            title: "NgRx for Complex State",
            duration: "1.5 hours",
            type: "Project",
          },
        ],
      },
      {
        id: "m10",
        title: "Testing Angular Applications",
        duration: "4 hours",
        lessons: [
          {
            id: "l29",
            title: "Unit Testing with Jasmine/Karma",
            duration: "2 hours",
            type: "Video",
          },
          {
            id: "l30",
            title: "E2E Testing with Protractor/Cypress",
            duration: "2 hours",
            type: "Hands-on",
          },
        ],
      },
      {
        id: "m11",
        title: "Deployment and Best Practices",
        duration: "3 hours",
        lessons: [
          {
            id: "l31",
            title: "Deployment Techniques",
            duration: "1.5 hours",
            type: "Video",
          },
          {
            id: "l32",
            title: "Performance Optimization",
            duration: "1.5 hours",
            type: "Video",
          },
        ],
      },
    ],
  },
  //DevOps
  {
    id: "7",
    title: "Data DevOps Masterclass",
    slug: "data-devops-masterclass",
    category: "Cloud & DevOps",
    level: "Beginner",
    description:
      "Master Data DevOps with containerization, orchestration using Docker and Kubernetes, and integrate AI tools for enhanced data management and analytics.",
    thumbnail:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      id: "10",
      name: "Harshal",
      title: "Blockchain Developer",
      avatar:
        "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Blockchain developer with a focus on smart contracts, decentralized applications, and cryptocurrency solutions. Expert in Solidity and Ethereum.",
      expertise: ["Blockchain", "Smart Contracts", "Solidity"],
      rating: 4.8,
      totalReviews: 150,
      totalStudents: 4000,
      totalCourses: 3,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "12 weeks",
    price: 149.99,
    rating: 4.7,
    totalReviews: 510,
    enrolledStudents: 3200,
    featured: true,
    topics: [
      "Data DevOps Principles",
      "Containerization with Docker",
      "Orchestration with Kubernetes",
      "CI/CD Pipeline Implementation",
      "Integrating AI in Data Workflows",
      "Cloud Deployment (AWS, Azure, GCP)",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Data DevOps",
        duration: "2 weeks",
        lessons: [
          {
            id: "l1",
            title: "Understanding DevOps Principles",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Introduction to Data Engineering",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Role of DevOps in Data Management",
            duration: "60 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m2",
        title: "Getting Started with Docker",
        duration: "3 weeks",
        lessons: [
          {
            id: "l4",
            title: "What is Docker and Containerization?",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l5",
            title: "Building Docker Containers and Images",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l6",
            title: "Hands-on: Building Your First Docker Application",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m3",
        title: "Kubernetes Fundamentals",
        duration: "3 weeks",
        lessons: [
          {
            id: "l7",
            title: "Kubernetes Architecture and Components",
            duration: "55 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Deploying Applications on Kubernetes",
            duration: "1 hour",
            type: "Video",
          },
          {
            id: "l9",
            title: "Hands-on: Deploying Your First App on Kubernetes",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m4",
        title: "Integrating AI Tools in Data Workflows",
        duration: "2 weeks",
        lessons: [
          {
            id: "l10",
            title: "Overview of AI Tools for Data Processing",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l11",
            title: "Incorporating AI for Predictive Analytics",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l12",
            title: "Hands-on: Adding AI to Your DevOps Pipeline",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m5",
        title: "Advanced Data DevOps Topics",
        duration: "2 weeks",
        lessons: [
          {
            id: "l13",
            title: "Security Best Practices in Docker and Kubernetes",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l14",
            title: "Managing Data Persistence and Storage",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l15",
            title: "Building Scalable Data Pipelines",
            duration: "1 hour",
            type: "Video",
          },
        ],
      },
    ],
  },
  //AI_ML_Foundations_With_Python
  {
    id: "8",
    title: "AI and ML Foundations with Python",
    slug: "ai-ml-foundations-python",
    category: "Programming",
    level: ["All Levels"],
    description:
      "Master Python programming and gain a solid foundation in Artificial Intelligence and Machine Learning. Learn to develop applications, analyze data, and build intelligent systems using Python, NumPy, Pandas, Scikit-learn, TensorFlow, and more.",
    thumbnail:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      id: "11",
      name: "Anurodh",
      title: "Cloud Architect",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Cloud architect specializing in designing scalable and secure cloud infrastructures. Proficient in AWS, Azure, and Google Cloud.",
      expertise: ["Cloud Architecture", "AWS", "Azure"],
      rating: 4.7,
      totalReviews: 130,
      totalStudents: 3200,
      totalCourses: 2,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "36-44 weeks",
    price: 149.99,
    rating: 4.7,
    totalReviews: 1200,
    enrolledStudents: 4500,
    featured: true,
    topics: [
      "Python Programming",
      "Data Structures",
      "Object-Oriented Programming",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Visualization",
      "Model Deployment",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Getting Started with Python",
        duration: "2 weeks",
        lessons: [
          {
            id: "l1",
            title: "Introduction to Python and Its Applications",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Setting Up Python Environment",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Basic Syntax and Variables",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l4",
            title: "Write Your First Python Program",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m2",
        title: "Core Python Fundamentals",
        duration: "2 weeks",
        lessons: [
          {
            id: "l5",
            title: "Operators and Control Flow",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l6",
            title: "Lists, Tuples, and Strings",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Manipulating Data Structures",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m3",
        title: "Functions and Modules",
        duration: "2 weeks",
        lessons: [
          {
            id: "l8",
            title: "Defining and Using Functions",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l9",
            title: "Modules and Packages",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l10",
            title: "Create a Custom Module",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m4",
        title: "Dictionaries and Sets",
        duration: "1 week",
        lessons: [
          {
            id: "l11",
            title: "Working with Dictionaries",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l12",
            title: "Set Operations",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l13",
            title: "Dictionary and Set Manipulation",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m5",
        title: "File Handling and Input/Output",
        duration: "1 week",
        lessons: [
          {
            id: "l14",
            title: "Reading and Writing Files",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l15",
            title: "Handling CSV Files",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l16",
            title: "File Operations Practice",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m6",
        title: "Object-Oriented Programming",
        duration: "2 weeks",
        lessons: [
          {
            id: "l17",
            title: "Classes and Objects",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l18",
            title: "Inheritance and Polymorphism",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l19",
            title: "Build a Class Hierarchy",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m7",
        title: "Error Handling and Exceptions",
        duration: "1 week",
        lessons: [
          {
            id: "l20",
            title: "Handling Exceptions",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l21",
            title: "Custom Exceptions",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l22",
            title: "Error Handling Practice",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m8",
        title: "Regular Expressions",
        duration: "1 week",
        lessons: [
          {
            id: "l23",
            title: "Regex Syntax and Pattern Matching",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l24",
            title: "Text Manipulation with Regex",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l25",
            title: "Regex Practice",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m9",
        title: "Foundations of AI and ML",
        duration: "2 weeks",
        lessons: [
          {
            id: "l26",
            title: "Introduction to AI and ML",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l27",
            title: "NumPy and Pandas Basics",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l28",
            title: "Data Visualization with Matplotlib",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l29",
            title: "Data Manipulation Practice",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m10",
        title: "Supervised Learning - Regression",
        duration: "3 weeks",
        lessons: [
          {
            id: "l30",
            title: "Linear and Polynomial Regression",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l31",
            title: "Feature Scaling and Model Evaluation",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l32",
            title: "Regression Model Implementation",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m11",
        title: "Supervised Learning - Classification",
        duration: "3 weeks",
        lessons: [
          {
            id: "l33",
            title: "Logistic Regression and KNN",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l34",
            title: "SVM and Decision Trees",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l35",
            title: "Classification Model Evaluation",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m12",
        title: "Unsupervised Learning",
        duration: "2 weeks",
        lessons: [
          {
            id: "l36",
            title: "K-Means and Hierarchical Clustering",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l37",
            title: "PCA and Dimensionality Reduction",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l38",
            title: "Clustering Practice",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m13",
        title: "Model Selection and Evaluation",
        duration: "1 week",
        lessons: [
          {
            id: "l39",
            title: "Hyperparameter Tuning and Cross-Validation",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l40",
            title: "Model Comparison",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l41",
            title: "Model Tuning Practice",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m14",
        title: "Introduction to Deep Learning",
        duration: "3 weeks",
        lessons: [
          {
            id: "l42",
            title: "Neural Networks and Keras",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l43",
            title: "CNNs and RNNs",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l44",
            title: "Deep Learning Model Building",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m15",
        title: "Natural Language Processing",
        duration: "2 weeks",
        lessons: [
          {
            id: "l45",
            title: "Text Preprocessing and Representation",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l46",
            title: "Text Classification Models",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l47",
            title: "NLP Model Implementation",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m16",
        title: "Advanced Topics and Deployment",
        duration: "4 weeks",
        lessons: [
          {
            id: "l48",
            title: "Ethics and Reinforcement Learning",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l49",
            title: "Model Deployment with Flask",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l50",
            title: "Deploy a Model",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m17",
        title: "Capstone Project",
        duration: "4 weeks",
        lessons: [
          {
            id: "l51",
            title: "Project Planning and Data Acquisition",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l52",
            title: "Model Development and Evaluation",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l53",
            title: "Capstone Project Submission",
            duration: "4 hours",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  //Java_Full_Stack_With_Spring_Boot
  {
    id: "9",
    title: "Java Full Stack Development with Spring Boot",
    slug: "java-full-stack-spring-boot",
    category: "Programming",
    level: "Beginner-Intermediate",
    description:
      "Gain a solid foundation in the Java ecosystem and build full-stack applications using Spring Boot. Develop real-world projects like an Employee Management Dashboard and ECommerce Application, with hands-on training, interview preparation, and personalized doubt-clearing sessions. Ideal for small batches (10-12 learners) with lifetime access to materials.",
    thumbnail:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      id: "8",
      name: "Siddharth Mishra",
      title: "Full Stack Developer",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Experienced full stack developer specializing in web development, cloud computing, and DevOps. Proficient in JavaScript, Node.js, and AWS.",
      expertise: ["Web Development", "DevOps", "Cloud Computing"],
      rating: 4.9,
      totalReviews: 200,
      totalStudents: 5000,
      totalCourses: 4,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "2 months (72 hours)",
    price: 180.0,
    rating: 4.5,
    totalReviews: 500,
    enrolledStudents: 1500,
    featured: true,
    topics: [
      "Spring Core",
      "Spring MVC",
      "Thymeleaf",
      "REST APIs",
      "Java Full Stack",
      "API Security",
      "Form Handling",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Spring Core Concepts",
        duration: "3 weeks",
        lessons: [
          {
            id: "l1",
            title: "Overview of Spring Framework and Ecosystem",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Inversion of Control and Dependency Injection",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Spring Beans and Lifecycle",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l4",
            title: "Spring Configuration (XML-Based)",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l5",
            title: "Q&A Session on Spring Core",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m2",
        title: "Spring MVC, Thymeleaf, and Templating",
        duration: "3 weeks",
        lessons: [
          {
            id: "l6",
            title: "Introduction to Spring MVC and MVC Architecture",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Request Mapping and Controller Methods",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Thymeleaf Templating and Dynamic Content",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l9",
            title: "Form Handling and Validation in Spring MVC",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l10",
            title: "Error Handling and Internationalization",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l11",
            title: "Milestone Project: Employee Management Dashboard",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m3",
        title: "API Development with Spring Boot",
        duration: "2 weeks",
        lessons: [
          {
            id: "l12",
            title: "Building RESTful APIs with Spring Boot",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l13",
            title: "Handling HTTP Requests and JSON Data",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l14",
            title: "Authentication, Authorization, and Error Handling",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l15",
            title: "API Documentation and Testing",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l16",
            title: "Milestone Project: ECommerce Application",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  // Automation Testing using Java and Selenium
  {
    id: "10",
    title: "Automation Testing using Java and Selenium",
    slug: "automation-testing-java-selenium",
    category: "Testing",
    level: "Beginner-Expert",
    description:
      "Master automation testing with Java and Selenium, from beginner to expert level. Learn to build robust test frameworks using Selenium WebDriver, Cucumber, TestNG, and CI/CD tools like Jenkins. Ideal for QA engineers, developers, freshers, and IT professionals looking to upskill, with hands-on projects and interview preparation.",
    thumbnail:
      "https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    instructor: {
      id: "9",
      name: "Amit Pradhan",
      title: "AI Researcher",
      avatar:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "AI researcher focused on natural language processing, deep learning, and generative AI. Published multiple papers in top-tier AI conferences.",
      expertise: [
        "Natural Language Processing",
        "Deep Learning",
        "Generative AI",
      ],
      rating: 4.6,
      totalReviews: 90,
      totalStudents: 2800,
      totalCourses: 2,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "12 weeks",
    price: 199.99,
    rating: 4.6,
    totalReviews: 600,
    enrolledStudents: 2000,
    featured: true,
    topics: [
      "Automation Testing",
      "Selenium WebDriver",
      "Java for Testing",
      "Page Object Model",
      "Cucumber BDD",
      "TestNG",
      "CI/CD Pipeline",
      "Framework Development",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Automation Testing",
        duration: "1 week",
        lessons: [
          {
            id: "l1",
            title: "What is Automation Testing?",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Benefits and Limitations of Automation",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Selenium vs Other Tools",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l4",
            title: "Test Automation Lifecycle",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m2",
        title: "Core Java for Automation",
        duration: "1 week",
        lessons: [
          {
            id: "l5",
            title: "Java Basics and OOPs Concepts",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l6",
            title: "Exception and File Handling",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Collection Framework",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Multithreading and Lambda Expressions",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m3",
        title: "Selenium WebDriver (Basic & Advanced)",
        duration: "1 week",
        lessons: [
          {
            id: "l9",
            title: "WebDriver Setup and Browser Drivers",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l10",
            title: "WebElement Locators and Dynamic Elements",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l11",
            title: "Handling Pop-ups, Frames, and Windows",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l12",
            title: "JavaScript Executor and Screenshots",
            duration: "40 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m4",
        title: "Page Object Model (POM) Design Pattern",
        duration: "1 week",
        lessons: [
          {
            id: "l13",
            title: "Implementing POM with Selenium",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l14",
            title: "Page Factory and Annotations",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l15",
            title: "Best Practices in POM",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m5",
        title: "Test Automation Framework Development",
        duration: "1 week",
        lessons: [
          {
            id: "l16",
            title: "Types of Frameworks (Data-Driven, Keyword-Driven, Hybrid)",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l17",
            title: "Creating a Selenium Hybrid Framework",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l18",
            title: "Implementing Logging and Reporting",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m6",
        title: "Database Testing (JDBC)",
        duration: "1 week",
        lessons: [
          {
            id: "l19",
            title: "Connecting Java with MySQL and PostgreSQL",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l20",
            title: "Executing SQL Queries using JDBC",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l21",
            title: "Validating Database Records in Automation",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m7",
        title: "Logging with Log4j",
        duration: "1 week",
        lessons: [
          {
            id: "l22",
            title: "Introduction to Log4j and Log Levels",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l23",
            title: "Configuring Log4j in Maven",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l24",
            title: "Generating Logs for Selenium Tests",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m8",
        title: "Cucumber for BDD",
        duration: "1 week",
        lessons: [
          {
            id: "l25",
            title: "Gherkin Syntax and Feature Files",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l26",
            title: "Cucumber with Selenium",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l27",
            title: "Hooks in Cucumber",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l28",
            title: "Generating Reports in Cucumber",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m9",
        title: "Test Execution & Reporting",
        duration: "1 week",
        lessons: [
          {
            id: "l29",
            title: "Running Tests Using TestNG",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l30",
            title: "Generating Reports with Allure",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l31",
            title: "Emailing Test Reports",
            duration: "40 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m10",
        title: "CI/CD & QA Pipeline Configuration",
        duration: "1 week",
        lessons: [
          {
            id: "l32",
            title: "Setting Up Git and GitHub",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l33",
            title: "Configuring Jenkins for Automated Testing",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l34",
            title: "Running Tests in Docker and Selenium Grid",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l35",
            title: "Cloud Execution with BrowserStack and Sauce Labs",
            duration: "40 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m11",
        title: "Real-World Project Implementation",
        duration: "1 week",
        lessons: [
          {
            id: "l36",
            title: "Developing an Automation Framework from Scratch",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l37",
            title: "Automating an E-commerce Web Application",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l38",
            title: "Debugging Common Issues in Automation",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l39",
            title: "Project: E-commerce Automation",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m12",
        title: "Interview Preparation & Best Practices",
        duration: "1 week",
        lessons: [
          {
            id: "l40",
            title: "Automation Testing Best Practices",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l41",
            title: "Commonly Asked Interview Questions",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l42",
            title: "Mock Interviews and Hands-On Assignments",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  //Test Automation with Cypress
  {
    id: "11",
    title: "Test Automation with Cypress",
    slug: "test-automation-cypress",
    category: "Testing",
    level: "Beginner-Advanced",
    description:
      "Dive deep into automated testing with Cypress.io in this comprehensive course, available in Online, In-person, or Hybrid formats. Learn to write, run, debug, and integrate tests into CI/CD pipelines, covering APIs, UI, and components. Build scalable test suites and apply best practices through hands-on practice and a capstone project.",
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5612AQGcORBlx5ZU1w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698219590639?e=2147483647&v=beta&t=zl6a12g6ZZLeD6-zDQ8XtufNZXoFJCOaNWSYeg5ALTQ",
    instructor: {
      id: "9",
      name: "Amit Pradhan",
      title: "AI Researcher",
      avatar:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "AI researcher focused on natural language processing, deep learning, and generative AI. Published multiple papers in top-tier AI conferences.",
      expertise: [
        "Natural Language Processing",
        "Deep Learning",
        "Generative AI",
      ],
      rating: 4.6,
      totalReviews: 90,
      totalStudents: 2800,
      totalCourses: 2,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "8-12 weeks",
    price: 149.99,
    rating: 4.5,
    totalReviews: 450,
    enrolledStudents: 1800,
    featured: true,
    topics: [
      "Cypress Fundamentals",
      "Test Automation",
      "Page Object Model",
      "CI/CD Integration",
      "Cross-Browser Testing",
      "Data-Driven Testing",
      "Visual Testing",
      "Performance Optimization",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Test Automation & Cypress",
        duration: "1 week",
        lessons: [
          {
            id: "l1",
            title: "What is Test Automation? Benefits and Types",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Overview of Cypress.io",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Cypress vs Selenium/WebDriver",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l4",
            title: "Installing and Exploring Cypress GUI",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l5",
            title: "Hands-on: Set Up and Run Your First Cypress Test",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m2",
        title: "Cypress Fundamentals",
        duration: "1 week",
        lessons: [
          {
            id: "l6",
            title: "Folder Structure and Configuration",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Writing Your First Test",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Cypress Commands and Selectors",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l9",
            title: "Assertions in Cypress",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l10",
            title: "Hands-on: Test Cases for a Static Website",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m3",
        title: "Test Interactions and Custom Commands",
        duration: "1 week",
        lessons: [
          {
            id: "l11",
            title: "Interacting with Elements",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l12",
            title: "Working with Forms, Modals, and Tables",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l13",
            title: "Handling Asynchronous Behavior",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l14",
            title: "Creating Custom Commands",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l15",
            title: "Hands-on: Custom Commands for Login",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m4",
        title: "Fixtures, Data-Driven Testing, and Aliases",
        duration: "1 week",
        lessons: [
          {
            id: "l16",
            title: "Using Fixtures for Test Data",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l17",
            title: "Using Aliases for Elements and Routes",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l18",
            title: "Data-Driven Testing with Multiple Data Sets",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l19",
            title: "Hands-on: Test Login with Multiple Users",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m5",
        title: "Network Requests & Stubbing",
        duration: "1 week",
        lessons: [
          {
            id: "l20",
            title: "Understanding XHR and API Monitoring",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l21",
            title: "Intercepting Requests with cy.intercept()",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l22",
            title: "Stubbing Responses",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l23",
            title: "Testing Loading States and Errors",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l24",
            title: "Hands-on: Stub API Responses",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m6",
        title: "Advanced Techniques and Utilities",
        duration: "1 week",
        lessons: [
          {
            id: "l25",
            title: "Page Object Model in Cypress",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l26",
            title: "Environment Variables and Configuration",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l27",
            title: "Using Cypress Plugins",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l28",
            title: "Debugging Tools and Best Practices",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l29",
            title: "Hands-on: Refactor Tests with Page Objects",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m7",
        title: "Cross-Browser Testing & Component Testing",
        duration: "1 week",
        lessons: [
          {
            id: "l30",
            title: "Cross-Browser Testing with Chrome, Firefox, Edge",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l31",
            title: "Limitations and Workarounds",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l32",
            title: "Introduction to Cypress Component Testing",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l33",
            title: "Setting Up Component Tests",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l34",
            title: "Hands-on: Test Components in Isolation",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m8",
        title: "Continuous Integration with Cypress",
        duration: "1 week",
        lessons: [
          {
            id: "l35",
            title: "Introduction to CI/CD",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l36",
            title: "Running Tests Headlessly",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l37",
            title: "Integrating Cypress with CI Tools",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l38",
            title: "Test Reports and Dashboards",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l39",
            title: "Hands-on: GitHub Actions Workflow for Cypress",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m9",
        title: "Testing Real-World Applications",
        duration: "1 week",
        lessons: [
          {
            id: "l40",
            title: "Strategy for Testing Large Applications",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l41",
            title: "Managing Flaky Tests",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l42",
            title: "Organizing Large Test Suites",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l43",
            title: "Visual Testing Integrations",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l44",
            title: "Hands-on: Test an Open-Source Web App",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m10",
        title: "Performance Optimization & Best Practices",
        duration: "1 week",
        lessons: [
          {
            id: "l45",
            title: "Speeding Up Tests",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l46",
            title: "Retryability and Timeouts",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l47",
            title: "Best Practices for Scalable Test Automation",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l48",
            title: "Test Coverage Tools",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l49",
            title: "Hands-on: Optimize Test Suites",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m11",
        title: "Final Project & Review",
        duration: "2 weeks",
        lessons: [
          {
            id: "l50",
            title: "Design a Test Suite for a Complex Web App",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l51",
            title: "Implement Login, Stubbing, and CI Integration",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l52",
            title: "Peer Review and Feedback",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l53",
            title: "Final Recap and Q&A",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l54",
            title: "Capstone Project: Test Suite Submission and Demo",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
    ],
  },
  //Test Automation with Playwright Using Java
  {
    id: "12",
    title: "Test Automation with Playwright Using Java",
    slug: "test-automation-playwright-java",
    category: "Testing",
    level: "Beginner-Advanced",
    description:
      "Learn test automation with Playwright using Java, from beginner to advanced levels. Build scalable automation frameworks, integrate with CI/CD pipelines, and test real-world applications like an e-commerce site. Requires basic programming knowledge; no prior automation experience needed. Includes certification and a project portfolio upon completion.",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:880/1*J99_bZjpDwZyEKFYXlTeUQ.png",
    instructor: {
      id: "9",
      name: "Amit Pradhan",
      title: "AI Researcher",
      avatar:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "AI researcher focused on natural language processing, deep learning, and generative AI. Published multiple papers in top-tier AI conferences.",
      expertise: [
        "Natural Language Processing",
        "Deep Learning",
        "Generative AI",
      ],
      rating: 4.6,
      totalReviews: 90,
      totalStudents: 2800,
      totalCourses: 2,
      social: {
        linkedin: "https://linkedin.com",
        website: "https:google.com",
      },
    },
    duration: "8 weeks (3-5 hours/week)",
    price: 129.99,
    rating: 4.4,
    totalReviews: 400,
    enrolledStudents: 1600,
    featured: true,
    topics: [
      "Test Automation",
      "Playwright Java",
      "Java Fundamentals",
      "Page Object Model",
      "CI/CD Integration",
      "Cross-Browser Testing",
      "Test Reporting",
      "Framework Development",
    ],
    teachingMode: "Online/In-Person/Hybrid",
    curriculum: [
      {
        id: "m1",
        title: "Introduction to Test Automation & Java Fundamentals",
        duration: "1 week",
        lessons: [
          {
            id: "l1",
            title: "What is Test Automation?",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l2",
            title: "Types of Testing (Unit, Integration, UI, E2E)",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l3",
            title: "Java for Testers: Syntax and OOP Concepts",
            duration: "50 mins",
            type: "Video",
          },
          {
            id: "l4",
            title: "Setting Up Java Development Environment",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l5",
            title: "Mini Project: Basic Java Calculator (CLI)",
            duration: "1.5 hours",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m2",
        title: "Getting Started with Playwright",
        duration: "1 week",
        lessons: [
          {
            id: "l6",
            title: "What is Playwright? Overview and Benefits",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l7",
            title: "Playwright vs Selenium vs Cypress",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l8",
            title: "Setting Up Playwright with Java",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l9",
            title: "Understanding Playwright Java API",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l10",
            title: "Writing Your First Playwright Test",
            duration: "1 hour",
            type: "Assignment",
          },
        ],
      },
      {
        id: "m3",
        title: "Core Playwright Concepts",
        duration: "1 week",
        lessons: [
          {
            id: "l11",
            title: "Locators and Selectors",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l12",
            title: "Working with Different Browsers",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l13",
            title: "Element Interactions",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l14",
            title: "Handling Wait Conditions",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l15",
            title: "Assertions with Playwright",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m4",
        title: "Advanced Interactions and Test Design",
        duration: "1 week",
        lessons: [
          {
            id: "l16",
            title: "Handling Multiple Pages, Tabs, and Iframes",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l17",
            title: "Keyboard and Mouse Simulation",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l18",
            title: "File Uploads and Downloads",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l19",
            title: "Screenshots and Video Recordings",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l20",
            title: "Test Structure Using Page Object Model",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l21",
            title: "Managing Test Data and Configurations",
            duration: "40 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m5",
        title: "Playwright Test Runner & Reporting",
        duration: "1 week",
        lessons: [
          {
            id: "l22",
            title: "Using Playwright's Test Runner",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l23",
            title: "Writing Test Suites and Managing Hooks",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l24",
            title: "Parallel Test Execution",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l25",
            title: "Advanced Assertions and Test Retries",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l26",
            title: "Generating Reports with Allure",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m6",
        title: "Handling Real-World Scenarios",
        duration: "1 week",
        lessons: [
          {
            id: "l27",
            title: "Handling Authentication Flows",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l28",
            title: "Interacting with APIs Using Playwright",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l29",
            title: "Cross-Browser and Cross-Platform Testing",
            duration: "45 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m7",
        title: "Framework Development and Best Practices",
        duration: "1 week",
        lessons: [
          {
            id: "l30",
            title: "Designing a Scalable Playwright Framework",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l31",
            title: "Test Data Management (JSON, Excel, DBs)",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l32",
            title: "Integrating Logging with Log4j/SLF4J",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l33",
            title: "Using TestNG/JUnit with Playwright",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l34",
            title: "Organizing Tests with Tags and Groups",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l35",
            title: "Version Control with Git/GitHub",
            duration: "40 mins",
            type: "Video",
          },
        ],
      },
      {
        id: "m8",
        title: "CI/CD Integration & Final Project",
        duration: "1 week",
        lessons: [
          {
            id: "l36",
            title: "Integrating Playwright with Jenkins/GitHub Actions",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l37",
            title: "Running Tests in Docker",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l38",
            title: "Headless Browser Execution in Pipelines",
            duration: "45 mins",
            type: "Video",
          },
          {
            id: "l39",
            title: "Environment-Based Testing",
            duration: "40 mins",
            type: "Video",
          },
          {
            id: "l40",
            title: "Final Project: Automation Suite for E-commerce App",
            duration: "2 hours",
            type: "Assignment",
          },
        ],
      },
    ],
  },
];

export const getFeaturedCourses = (): Course[] => {
  return courses.filter((course) => course.featured);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter((course) => course.category === category);
};

export const getCourseBySlug = (slug: string): Course | undefined => {
  const course = courses.find((course) => course.slug === slug);
  
  // Set default teaching mode if not specified
  if (course && !course.teachingMode) {
    // Randomly assign a teaching mode to provide variety
    const modes = ['Online', 'In-Person', 'Hybrid'];
    const randomIndex = Math.floor(Math.random() * modes.length);
    course.teachingMode = modes[randomIndex] as 'Online' | 'In-Person' | 'Hybrid';
  }
  
  return course;
};
