import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import { Course } from '../../types';
import CourseCard from '../courses/CourseCard';
import { getFeaturedCourses } from '../../data/courses';

const FeaturedCourses: React.FC = () => {
  const featuredCourses = getFeaturedCourses();

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-3">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular courses with high student satisfaction. Start your learning journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primaryDark transition-colors"
          >
            Browse all courses 
            <ChevronRight className="ml-1" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;