import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Layers, Server, BrainCog } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Automation Testing',
    icon: <Cpu size={28} />,
    color: 'bg-blue-100 text-blue-600',
    count: 3,
  },
  {
    id: 2,
    name: 'Java Full Stack Development',
    icon: <Layers size={28} />,
    color: 'bg-green-100 text-green-600',
    count: 3,
  },
  {
    id: 3,
    name: 'Web and UI Development',
    icon: <Code size={28} />,
    color: 'bg-purple-100 text-purple-600',
    count: 5,
  },
  {
    id: 4,
    name: 'DevOps',
    icon: <Server size={28} />,
    color: 'bg-yellow-100 text-yellow-600',
    count: 1,
  },
  {
    id: 5,
    name: 'Python and AI',
    icon: <BrainCog size={28} />,
    color: 'bg-pink-100 text-pink-600',
    count: 2,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="section bg-white py-16">
      <div className="container-custom">
        <div className="section-title mb-10">
          <h2 className="mb-3 text-gray-900">Browse Top Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of courses across different categories tailored to your interests and career goals
          </p>
        </div>
        <div className="flex justify-center">
          <div
            className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/courses?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-lg hover:scale-105 p-7 text-center flex flex-col items-center justify-center h-full cursor-pointer duration-200">
                  <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-1 text-gray-900 group-hover:text-brand-primary transition-colors text-lg">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count} courses</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;