import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CourseFilters from '../components/courses/CourseFilters';
import CourseCard from '../components/courses/CourseCard';
import { courses } from '../data/courses';
import { Course } from '../types';

const Courses: React.FC = () => {
  const location = useLocation();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
    level: '',
    priceRange: [0, 200] as [number, number],
  });

  useEffect(() => {
    // Parse URL query parameters
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setFilters(prev => ({
        ...prev,
        category: categoryParam
      }));
    }
  }, [location]);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let result = [...courses];
    
    // Filter by search term
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(term) || 
          course.description.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (filters.category) {
      result = result.filter(course => course.category === filters.category);
    }
    
    // Filter by level
    if (filters.level) {
      result = result.filter(course => course.level === filters.level);
    }
    
    // Filter by price range
    result = result.filter(
      course => 
        course.price >= filters.priceRange[0] && 
        course.price <= filters.priceRange[1]
    );
    
    setFilteredCourses(result);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Courses</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore our wide range of courses designed to help you achieve your goals. From beginners to advanced, we have something for everyone.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-10">
        <CourseFilters onFilterChange={handleFilterChange} />
        
        {filteredCourses.length > 0 ? (
          <>
            <p className="text-gray-600 mb-6">Showing {filteredCourses.length} courses</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-bold mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;