export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  level: string | string[] | 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner-Intermediate' | 'Beginner-Advanced' | 'Beginner-Expert';
  description: string;
  thumbnail: string;
  instructor: Instructor;
  duration: string;
  price: number;
  rating: number;
  featured: boolean;
  topics: string[];
  curriculum: Module[];
  teachingMode?: string;
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'Video' | 'Quiz' | 'Assignment' | 'Project' | 'Hands-on';
  completed?: boolean;
  topics?: string[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  expertise: string[];
  rating: number;
  totalReviews: number;
  totalCourses: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
}

export interface SuccessStory {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  testimonial: string;
  courseCompleted: string;
}