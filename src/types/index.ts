export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  thumbnail: string;
  instructor: Instructor;
  duration: string;
  price: number;
  rating: number;
  totalReviews: number;
  enrolledStudents: number;
  featured: boolean;
  topics: string[];
  curriculum: Module[];
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
  type: 'Video' | 'Quiz' | 'Assignment';
  completed?: boolean;
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
  totalStudents: number;
  totalCourses: number;
  social: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
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