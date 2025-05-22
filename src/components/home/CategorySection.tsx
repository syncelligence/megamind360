import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Layers, Server, BrainCog } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Automation Testing',
    icon: <Cpu size={28} />,
    color: 'bg-blue-100 text-blue-600',
    count: 40,
  },
  {
    id: 2,
    name: 'Java Full Stack Development',
    icon: <Layers size={28} />,
    color: 'bg-green-100 text-green-600',
    count: 35,
  },
  {
    id: 3,
    name: 'Web and UI Development',
    icon: <Code size={28} />,
    color: 'bg-purple-100 text-purple-600',
    count: 50,
  },
  {
    id: 4,
    name: 'DevOPS',
    icon: <Server size={28} />,
    color: 'bg-yellow-100 text-yellow-600',
    count: 28,
  },
  {
    id: 5,
    name: 'Python and AI',
    icon: <BrainCog size={28} />,
    color: 'bg-pink-100 text-pink-600',
    count: 45,
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

        <div className="flex flex-col items-center gap-6 mt-10">
          <div className="flex flex-row gap-6 w-full justify-center">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.id}
                to={`/courses?category=${encodeURIComponent(category.name)}`}
                className="group flex-1 max-w-xs"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md p-6 text-center flex flex-col items-center justify-center min-h-[180px] min-w-[180px] h-[180px] w-full">
                  <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110`} style={{ minWidth: '56px', minHeight: '56px' }}>
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
          <div className="flex flex-row gap-6 w-full justify-center">
            {categories.slice(3, 5).map((category) => (
              <Link
                key={category.id}
                to={`/courses?category=${encodeURIComponent(category.name)}`}
                className="group flex-1 max-w-xs"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md p-6 text-center flex flex-col items-center justify-center min-h-[180px] min-w-[180px] h-[180px] w-full">
                  <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110`} style={{ minWidth: '56px', minHeight: '56px' }}>
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
      </div>
    </section>
  );
};

export default CategorySection;