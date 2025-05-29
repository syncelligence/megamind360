import { Instructor } from '../types';

export const instructors: Instructor[] = [
  {
    "id": "1",
    "name": "Ashwin",
    "title": "UI / UX Expert",
    "avatar": "https://avatar.iran.liara.run/public/16",
    "bio": "UI/UX expert with extensive experience in creating intuitive and engaging user interfaces. Specializes in user research, wireframing, and prototyping.",
    "expertise": ["User Research", "Wireframing", "Prototyping"],
    "rating": 4.7,
    "totalReviews": 120,
    "totalCourses": 3
  },
  {
    "id": "2",
    "name": "Siddharth",
    "title": "Java Full Stack Developer",
    "avatar": "https://avatar.iran.liara.run/public/37",
    "bio": "Java Full Stack Developer with a strong background in building scalable applications. Proficient in Spring Boot, React, and microservices architecture.",
    "expertise": ["Spring Boot", "React", "Microservices"],
    "rating": 4.9,
    "totalReviews": 200,
    "totalCourses": 4
  },
  {
    "id": "3",
    "name": "Amit",
    "title": "Automation Architect",
    "avatar": "https://avatar.iran.liara.run/public/38",
    "bio": "Automation Architect specializing in streamlining workflows and improving efficiency through innovative automation solutions.",
    "expertise": ["Workflow Automation", "Efficiency Improvement", "Innovation"],
    "rating": 4.6,
    "totalReviews": 90,
    "totalCourses": 2
  },
  {
    "id": "4",
    "name": "Harshal",
    "title": "DevOps Expert",
    "avatar": "https://avatar.iran.liara.run/public/13",
    "bio": "DevOps Expert with a focus on continuous integration and deployment. Proficient in Docker, Kubernetes, and cloud platforms.",
    "expertise": ["Continuous Integration", "Docker", "Kubernetes"],
    "rating": 4.8,
    "totalReviews": 150,
    "totalCourses": 3
  },
  {
    "id": "5",
    "name": "Anurodh",
    "title": "AI/ML Expert",
    "avatar": "https://avatar.iran.liara.run/public/26",
    "bio": "AI/ML Expert with a passion for developing intelligent systems. Specializes in machine learning algorithms and data analysis.",
    "expertise": ["Machine Learning", "Data Analysis", "Intelligent Systems"],
    "rating": 4.7,
    "totalReviews": 130,
    "totalCourses": 2
  },
];

export const getInstructorById = (id: string): Instructor | undefined => {
  return instructors.find(instructor => instructor.id === id);
};