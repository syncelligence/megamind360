import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-brand-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our comprehensive courses.
          </p>
          
          <div className="flex justify-center">
            <Link to="/courses">
              <Button variant="accent" size="lg">
                Explore Courses
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-blue-100 text-sm">
            Browse our courses and start learning today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;