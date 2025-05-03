import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { successStories } from '../../data/success-stories';

const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-primary/5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full"></div>

      <div className="container-custom relative">
        <div className="section-title">
          <h2 className="mb-3">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who transformed their careers through our courses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
            <Quote
              size={80}
              className="absolute top-0 right-0 text-brand-primary/10 transform translate-x-1/4 -translate-y-1/4"
            />

            <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                <img
                  src={successStories[currentIndex].avatar}
                  alt={successStories[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-lg md:text-xl italic text-gray-600 mb-6">
                  "{successStories[currentIndex].testimonial}"
                </p>

                <div>
                  <h4 className="font-bold text-lg">
                    {successStories[currentIndex].name}
                  </h4>
                  <p className="text-brand-secondary font-medium">
                    {successStories[currentIndex].position} at{' '}
                    {successStories[currentIndex].company}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Course: {successStories[currentIndex].courseCompleted}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-brand-primary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-brand-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-brand-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;