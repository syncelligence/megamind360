import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Play, Clock, BarChart2, Users, Star, CheckCircle, ChevronDown, ChevronUp, Share2, BookmarkPlus } from 'lucide-react';
import Button from '../components/common/Button';
import { getCourseBySlug } from '../data/courses';

const CourseDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || '');
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set([course?.curriculum[0]?.id || '']));
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/contact');
  };

  if (!course) {
    return (
      <div className="pt-20 container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Course Not Found</h2>
        <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn-primary">
          Browse All Courses
        </Link>
      </div>
    );
  }

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });
  };

  const totalLessons = course.curriculum.reduce(
    (count, module) => count + module.lessons.length, 
    0
  );

  return (
    <div className="pt-20">
      {/* Hero section */}
      <div className="bg-gray-900 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="mb-4">
                <Link to="/courses" className="text-brand-primary hover:underline text-sm">
                  Courses
                </Link>{' '}
                <span className="text-gray-400 mx-2">/</span>{' '}
                <span className="text-gray-400 text-sm">{course.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{course.title}</h1>
              
              <p className="text-gray-300 mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current mr-1" size={18} />
                  <span className="font-semibold mr-1">{course.rating}</span>
                  <span className="text-gray-400">({course.totalReviews} reviews)</span>
                </div>
                
                <div className="flex items-center">
                  <Users className="text-gray-400 mr-1" size={18} />
                  <span>{course.enrolledStudents.toLocaleString()} students</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-gray-400 mr-1" size={18} />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <BarChart2 className="text-gray-400 mr-1" size={18} />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">Created by</p>
                  <Link to={`/instructors/${course.instructor.id}`} className="text-brand-primary hover:underline">
                    {course.instructor.name}
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={handleEnrollClick}>
                  Enroll Now
                </Button>
                
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Try For Free
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-lg hover:bg-brand-primaryDark transition-colors">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Course overview */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What You'll Learn</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-brand-primary mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {course.topics.map((topic, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Course curriculum */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Course Curriculum</h2>
              <div className="flex items-center text-gray-600 mb-6">
                <span className="mr-4">
                  <Clock size={16} className="inline mr-1" />
                  {course.duration}
                </span>
                <span>
                  <BookmarkPlus size={16} className="inline mr-1" />
                  {totalLessons} lessons
                </span>
              </div>
              
              <div className="space-y-4">
                {course.curriculum.map((module) => (
                  <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="flex items-center justify-between w-full p-4 bg-gray-50 text-left font-medium"
                      onClick={() => toggleModule(module.id)}
                    >
                      <div className="flex items-center">
                        {expandedModules.has(module.id) ? (
                          <ChevronUp size={18} className="mr-2 text-brand-primary" />
                        ) : (
                          <ChevronDown size={18} className="mr-2 text-gray-500" />
                        )}
                        <span>{module.title}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {module.lessons.length} lessons • {module.duration}
                      </div>
                    </button>
                    
                    {expandedModules.has(module.id) && (
                      <div>
                        {module.lessons.map((lesson, index) => (
                          <div
                            key={lesson.id}
                            className={`p-4 flex items-center justify-between ${
                              index < module.lessons.length - 1 ? 'border-b border-gray-100' : ''
                            }`}
                          >
                            <div className="flex items-center">
                              {lesson.type === 'Video' && (
                                <Play size={16} className="mr-2 text-brand-primary" />
                              )}
                              {lesson.type === 'Quiz' && (
                                <BarChart2 size={16} className="mr-2 text-brand-secondary" />
                              )}
                              {lesson.type === 'Assignment' && (
                                <BookmarkPlus size={16} className="mr-2 text-brand-accent" />
                              )}
                              <span>{lesson.title}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="mr-4">{lesson.duration}</span>
                              <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                                {lesson.type}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <Button fullWidth size="lg" className="mb-3" onClick={handleEnrollClick}>
                Enroll Now
              </Button>
              
              <Button variant="outline" fullWidth className="mb-6">
                Try For Free
              </Button>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Lessons</span>
                  <span className="font-medium">{totalLessons} lessons</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Language</span>
                  <span className="font-medium">English</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Mode of Teaching</span>
                  <span className="font-medium">{course.teachingMode || 'Online'}</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-4">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <Share2 size={18} className="mr-1" />
                  Share
                </button>
                
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <BookmarkPlus size={18} className="mr-1" />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;