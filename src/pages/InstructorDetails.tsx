import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, BookOpen, Twitter, Linkedin, Globe, ChevronRight } from 'lucide-react';
import { getInstructorById } from '../data/instructors';
import { courses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';

const InstructorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const instructor = getInstructorById(id || '');
  
  if (!instructor) {
    return (
      <div className="pt-20 container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Instructor Not Found</h2>
        <p className="mb-6">The instructor you're looking for doesn't exist or has been removed.</p>
        <Link to="/instructors" className="btn-primary">
          View All Instructors
        </Link>
      </div>
    );
  }
  
  // Find courses by this instructor
  const instructorCourses = courses.filter(course => course.instructor.id === instructor.id);
  
  return (
    <div className="pt-20">
      {/* Hero section */}
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={instructor.avatar} 
              alt={instructor.name} 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
            
            <div>
              <div className="mb-2">
                <Link to="/instructors" className="text-brand-primary hover:underline text-sm">
                  Instructors
                </Link>{' '}
                <span className="text-gray-400 mx-2">/</span>{' '}
                <span className="text-gray-600 text-sm">{instructor.name}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{instructor.name}</h1>
              <p className="text-xl text-brand-secondary mb-4">{instructor.title}</p>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current mr-1" size={18} />
                  <span className="font-semibold mr-1">{instructor.rating}</span>
                  <span className="text-gray-500">({instructor.totalReviews} reviews)</span>
                </div>
                
                <div className="flex items-center">
                  <Users className="text-gray-500 mr-1" size={18} />
                  <span>{instructor.totalStudents.toLocaleString()} students</span>
                </div>
                
                <div className="flex items-center">
                  <BookOpen className="text-gray-500 mr-1" size={18} />
                  <span>{instructor.totalCourses} courses</span>
                </div>
              </div>
              
              <div className="flex mt-4 space-x-3">
                {instructor.social.twitter && (
                  <a
                    href={instructor.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-sm hover:shadow-md text-blue-400 transition-all"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                
                {instructor.social.linkedin && (
                  <a
                    href={instructor.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-sm hover:shadow-md text-blue-700 transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                
                {instructor.social.website && (
                  <a
                    href={instructor.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-700 transition-all"
                  >
                    <Globe size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 mb-6">{instructor.bio}</p>
              
              <h3 className="font-semibold mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {instructor.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Courses ({instructorCourses.length})</h2>
                
                <div className="flex space-x-1 text-sm">
                  <button className="px-3 py-1 bg-brand-primary text-white rounded-l-lg">All</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200">Popular</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-r-lg">New</button>
                </div>
              </div>
              
              <div className="space-y-6">
                {instructorCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;