import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Palette, BarChart, Globe, Microscope, BookOpen, Camera } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Web Development',
    icon: <Code size={24} />,
    color: 'bg-blue-100 text-blue-600',
    count: 120,
  },
  {
    id: 2,
    name: 'Data Science',
    icon: <Database size={24} />,
    color: 'bg-purple-100 text-purple-600',
    count: 85,
  },
  {
    id: 3,
    name: 'Design',
    icon: <Palette size={24} />,
    color: 'bg-pink-100 text-pink-600',
    count: 64,
  },
  {
    id: 4,
    name: 'Marketing',
    icon: <BarChart size={24} />,
    color: 'bg-green-100 text-green-600',
    count: 75,
  },
  {
    id: 5,
    name: 'Language',
    icon: <Globe size={24} />,
    color: 'bg-yellow-100 text-yellow-600',
    count: 95,
  },
  {
    id: 6,
    name: 'Science',
    icon: <Microscope size={24} />,
    color: 'bg-indigo-100 text-indigo-600',
    count: 45,
  },
  {
    id: 7,
    name: 'Humanities',
    icon: <BookOpen size={24} />,
    color: 'bg-red-100 text-red-600',
    count: 55,
  },
  {
    id: 8,
    name: 'Photography',
    icon: <Camera size={24} />,
    color: 'bg-teal-100 text-teal-600',
    count: 38,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-3 text-gray-900">Browse Top Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of courses across different categories tailored to your interests and career goals
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/courses?category=${encodeURIComponent(category.name)}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md p-6 text-center">
                <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-1 text-gray-900 group-hover:text-brand-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count} courses</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;