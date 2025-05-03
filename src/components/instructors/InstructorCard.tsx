import React from 'react';
import { Star, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import { Instructor } from '../../types';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <Card className="h-full hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 flex flex-col items-center text-center">
        <img 
          src={instructor.avatar} 
          alt={instructor.name} 
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mb-4"
        />
        
        <Link to={`/instructors/${instructor.id}`}>
          <h3 className="text-xl font-bold mb-1 hover:text-brand-primary transition-colors">
            {instructor.name}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-4">{instructor.title}</p>
        
        <div className="flex justify-center flex-wrap gap-2 mb-4">
          {instructor.expertise.slice(0, 3).map((skill, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="w-full border-t border-gray-100 pt-4 mt-auto">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="font-semibold">{instructor.rating}</span>
              </div>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Users size={14} className="text-brand-secondary" />
                <span className="font-semibold">{instructor.totalStudents.toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-500">Students</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center space-x-1 mb-1">
                <BookOpen size={14} className="text-brand-accent" />
                <span className="font-semibold">{instructor.totalCourses}</span>
              </div>
              <p className="text-xs text-gray-500">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InstructorCard;