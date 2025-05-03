import React from 'react';
import { Star, Clock, Users, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="group h-full flex flex-col">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded">
          {course.category}
        </div>
        <div className="absolute top-3 right-3 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded shadow-sm">
          {course.level}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center space-x-1 mb-3">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="text-sm font-semibold">{course.rating}</span>
          <span className="text-xs text-gray-500">({course.totalReviews})</span>
        </div>
        
        <Link to={`/courses/${course.slug}`}>
          <h3 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4">
          {course.description.length > 120 
            ? `${course.description.substring(0, 120)}...` 
            : course.description}
        </p>
        
        <div className="flex items-center space-x-2 mt-auto mb-4">
          <img 
            src={course.instructor.avatar} 
            alt={course.instructor.name} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">{course.instructor.name}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={14} className="mr-1" />
            {course.duration}
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <Users size={14} className="mr-1" />
            {course.enrolledStudents}
          </div>
          
          <div className="font-bold text-brand-secondary">
            ${course.price}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;