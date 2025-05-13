import React from 'react';
import { Award, Users, BookOpen, Monitor, Zap, Clock } from 'lucide-react';

const features = [
  {
    icon: <Award className="text-brand-primary" size={24} />,
    title: 'Expert Instructors',
    description: 'Learn from industry experts who have hands-on experience in their fields',
  },
  {
    icon: <Users className="text-brand-primary" size={24} />,
    title: 'Community Support',
    description: 'Join a community of learners and get support from peers and mentors',
  },
  {
    icon: <BookOpen className="text-brand-primary" size={24} />,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured courses with in-depth material covering all essential topics',
  },
  {
    icon: <Monitor className="text-brand-primary" size={24} />,
    title: 'Hands-on Projects',
    description: 'Apply your knowledge with practical projects and build a professional portfolio',
  },
  {
    icon: <Zap className="text-brand-primary" size={24} />,
    title: 'Interactive Learning',
    description: 'Engage with interactive exercises, quizzes, and assignments',
  },
  {
    icon: <Clock className="text-brand-primary" size={24} />,
    title: 'Learn at Your Pace',
    description: 'Access course materials anytime and progress at your own convenience',
  },
];

const Features: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-3 text-gray-900">Why Choose Megamind360</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers unique advantages to ensure an effective and enjoyable learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;