import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-24 right-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h5 className="text-brand-secondary font-semibold mb-4">Expand Your Knowledge</h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn Without <span className="text-brand-primary">Limits</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover thousands of courses taught by expert instructors. Take your skills to the next level with Megamind360's comprehensive learning platform.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent shadow-sm"
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              </div>
              <Button size="lg">
                Search Courses
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold text-brand-primary">15K+</p>
                <p className="text-gray-600">Active Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-secondary">250+</p>
                <p className="text-gray-600">Expert Instructors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-accent">1.2K+</p>
                <p className="text-gray-600">Quality Courses</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students learning online"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary rounded-lg -z-10 opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-secondary rounded-lg -z-10 opacity-20"></div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center">
                  <span className="text-sm font-bold">4.9</span>
                </div>
                <div>
                  <p className="font-semibold">Excellent Rating</p>
                  <p className="text-sm text-gray-500">From 10,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;