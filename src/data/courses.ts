import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    slug: 'web-development-bootcamp',
    category: 'Web Development',
    level: 'Beginner',
    description: 'Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js and more to help you become a full-stack web developer.',
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Senior Web Developer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: '10+ years of experience in web development and teaching. Passionate about helping students master coding skills.',
      expertise: ['JavaScript', 'React', 'Node.js'],
      rating: 4.8,
      totalReviews: 425,
      totalStudents: 12800,
      totalCourses: 5,
      social: {
        twitter: 'https://twitter.com/sarahjohnson',
        linkedin: 'https://linkedin.com/in/sarahjohnson',
      },
    },
    duration: '12 weeks',
    price: 99.99,
    rating: 4.7,
    totalReviews: 1245,
    enrolledStudents: 5280,
    featured: true,
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    curriculum: [
      {
        id: 'm1',
        title: 'Introduction to Web Development',
        duration: '2 weeks',
        lessons: [
          { id: 'l1', title: 'How the Web Works', duration: '30 mins', type: 'Video' },
          { id: 'l2', title: 'Setting Up Your Development Environment', duration: '45 mins', type: 'Video' },
          { id: 'l3', title: 'Introduction to HTML', duration: '1 hour', type: 'Video' },
          { id: 'l4', title: 'HTML Basics Quiz', duration: '20 mins', type: 'Quiz' },
        ],
      },
      {
        id: 'm2',
        title: 'CSS Fundamentals',
        duration: '2 weeks',
        lessons: [
          { id: 'l5', title: 'Introduction to CSS', duration: '40 mins', type: 'Video' },
          { id: 'l6', title: 'CSS Box Model', duration: '35 mins', type: 'Video' },
          { id: 'l7', title: 'Flexbox & Grid', duration: '55 mins', type: 'Video' },
          { id: 'l8', title: 'Build Your First Webpage', duration: '1 hour', type: 'Assignment' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Data Science and Machine Learning Fundamentals',
    slug: 'data-science-fundamentals',
    category: 'Data Science',
    level: 'Intermediate',
    description: 'Master the essentials of data science, statistics, and machine learning. Learn Python, pandas, NumPy, and scikit-learn to analyze data and build ML models.',
    thumbnail: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: {
      id: '2',
      name: 'Michael Chen',
      title: 'Data Scientist',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Former senior data scientist at Google with expertise in machine learning and AI. PhD in Computer Science from Stanford.',
      expertise: ['Python', 'Machine Learning', 'Data Analysis'],
      rating: 4.9,
      totalReviews: 318,
      totalStudents: 8750,
      totalCourses: 3,
      social: {
        twitter: 'https://twitter.com/michaelchen',
        linkedin: 'https://linkedin.com/in/michaelchen',
        website: 'https://michaelchen.com',
      },
    },
    duration: '10 weeks',
    price: 129.99,
    rating: 4.8,
    totalReviews: 982,
    enrolledStudents: 3540,
    featured: true,
    topics: ['Python', 'Data Analysis', 'Machine Learning', 'Statistics', 'Visualization'],
    curriculum: [
      {
        id: 'm1',
        title: 'Introduction to Data Science',
        duration: '2 weeks',
        lessons: [
          { id: 'l1', title: 'What is Data Science?', duration: '45 mins', type: 'Video' },
          { id: 'l2', title: 'Python for Data Science', duration: '1.5 hours', type: 'Video' },
          { id: 'l3', title: 'NumPy and Pandas Basics', duration: '1 hour', type: 'Video' },
          { id: 'l4', title: 'Data Manipulation Exercise', duration: '45 mins', type: 'Assignment' },
        ],
      },
      {
        id: 'm2',
        title: 'Statistical Analysis',
        duration: '2 weeks',
        lessons: [
          { id: 'l5', title: 'Descriptive Statistics', duration: '50 mins', type: 'Video' },
          { id: 'l6', title: 'Probability Distributions', duration: '60 mins', type: 'Video' },
          { id: 'l7', title: 'Hypothesis Testing', duration: '55 mins', type: 'Video' },
          { id: 'l8', title: 'Statistics Quiz', duration: '30 mins', type: 'Quiz' },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'UX/UI Design Masterclass',
    slug: 'ux-ui-design-masterclass',
    category: 'Design',
    level: 'Beginner',
    description: 'Learn to design beautiful and functional user interfaces. Master user experience principles, wireframing, prototyping, and design tools like Figma.',
    thumbnail: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: {
      id: '3',
      name: 'Emma Rodriguez',
      title: 'UX Design Lead',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Award-winning designer with experience at top tech companies. Passionate about creating intuitive and accessible digital experiences.',
      expertise: ['UI Design', 'User Research', 'Figma', 'Adobe XD'],
      rating: 4.7,
      totalReviews: 275,
      totalStudents: 6200,
      totalCourses: 4,
      social: {
        twitter: 'https://twitter.com/emmarodriguez',
        linkedin: 'https://linkedin.com/in/emmarodriguez',
      },
    },
    duration: '8 weeks',
    price: 89.99,
    rating: 4.6,
    totalReviews: 820,
    enrolledStudents: 2945,
    featured: true,
    topics: ['UX Principles', 'UI Design', 'Wireframing', 'Prototyping', 'Figma', 'User Testing'],
    curriculum: [
      {
        id: 'm1',
        title: 'Design Fundamentals',
        duration: '2 weeks',
        lessons: [
          { id: 'l1', title: 'Introduction to UX/UI', duration: '40 mins', type: 'Video' },
          { id: 'l2', title: 'Design Principles', duration: '55 mins', type: 'Video' },
          { id: 'l3', title: 'Color Theory', duration: '50 mins', type: 'Video' },
          { id: 'l4', title: 'Typography Basics', duration: '45 mins', type: 'Video' },
        ],
      },
      {
        id: 'm2',
        title: 'UX Process',
        duration: '2 weeks',
        lessons: [
          { id: 'l5', title: 'User Research Methods', duration: '60 mins', type: 'Video' },
          { id: 'l6', title: 'Creating User Personas', duration: '45 mins', type: 'Video' },
          { id: 'l7', title: 'Journey Mapping', duration: '50 mins', type: 'Video' },
          { id: 'l8', title: 'Your First User Research Project', duration: '1.5 hours', type: 'Assignment' },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Digital Marketing Fundamentals',
    slug: 'digital-marketing-fundamentals',
    category: 'Marketing',
    level: 'Beginner',
    description: 'Master the fundamentals of digital marketing, including SEO, social media, content marketing, email campaigns, and analytics to grow your online presence.',
    thumbnail: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    instructor: {
      id: '4',
      name: 'David Wilson',
      title: 'Marketing Director',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Marketing specialist with over 15 years of experience working with Fortune 500 companies and startups alike.',
      expertise: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
      rating: 4.6,
      totalReviews: 390,
      totalStudents: 9500,
      totalCourses: 6,
      social: {
        linkedin: 'https://linkedin.com/in/davidwilson',
        website: 'https://davidwilson.com',
      },
    },
    duration: '6 weeks',
    price: 79.99,
    rating: 4.5,
    totalReviews: 760,
    enrolledStudents: 4120,
    featured: false,
    topics: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics'],
    curriculum: [
      {
        id: 'm1',
        title: 'Marketing Foundations',
        duration: '1 week',
        lessons: [
          { id: 'l1', title: 'Introduction to Digital Marketing', duration: '50 mins', type: 'Video' },
          { id: 'l2', title: 'Building a Marketing Strategy', duration: '60 mins', type: 'Video' },
          { id: 'l3', title: 'Understanding Your Audience', duration: '45 mins', type: 'Video' },
          { id: 'l4', title: 'Marketing Fundamentals Quiz', duration: '20 mins', type: 'Quiz' },
        ],
      },
      {
        id: 'm2',
        title: 'SEO Basics',
        duration: '1 week',
        lessons: [
          { id: 'l5', title: 'How Search Engines Work', duration: '40 mins', type: 'Video' },
          { id: 'l6', title: 'On-Page SEO Techniques', duration: '55 mins', type: 'Video' },
          { id: 'l7', title: 'Off-Page SEO Strategies', duration: '50 mins', type: 'Video' },
          { id: 'l8', title: 'SEO Audit Exercise', duration: '1 hour', type: 'Assignment' },
        ],
      },
    ],
  },
];

export const getFeaturedCourses = (): Course[] => {
  return courses.filter(course => course.featured);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => course.category === category);
};

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};