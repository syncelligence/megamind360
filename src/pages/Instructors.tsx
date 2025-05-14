import React from 'react';
import { Search } from 'lucide-react';
import { instructors } from '../data/instructors';
import InstructorCard from '../components/instructors/InstructorCard';

const Instructors: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Instructors</h1>
          <p className="text-gray-600 max-w-2xl">
            Learn from our expert instructors with years of industry experience.
            Our team is dedicated to helping you master new skills.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-10">
        <div className="flex justify-between items-center mb-8">
          <div className="text-lg font-medium text-gray-900">
            Showing {instructors.length} instructors
          </div>
          
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search instructors..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {instructors.map(instructor => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;