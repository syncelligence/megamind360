import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Button from '../common/Button';

interface CourseFiltersProps {
  onFilterChange: (filters: any) => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = [
    'All Categories',
    'Web Development',
    'Data Science',
    'Design',
    'Marketing',
    'Language',
    'Science',
    'Humanities',
    'Photography',
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    onFilterChange({
      searchTerm,
      category: selectedCategory === 'All Categories' ? '' : selectedCategory,
      level: selectedLevel === 'All Levels' ? '' : selectedLevel,
      priceRange,
    });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedLevel('All Levels');
    setPriceRange([0, 200]);
    onFilterChange({
      searchTerm: '',
      category: '',
      level: '',
      priceRange: [0, 200],
    });
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
        <form onSubmit={handleSearch} className="relative w-full lg:w-96">
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <button
            type="submit"
            className="absolute right-3 top-2 text-brand-primary hover:text-brand-primaryDark"
          >
            <Search size={20} />
          </button>
        </form>

        <div className="flex gap-2 w-full lg:w-auto">
          <button
            onClick={toggleMobileFilters}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-700 transition-colors lg:hidden"
          >
            <Filter size={18} />
            Filters
          </button>

          <div className="hidden lg:flex items-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-4 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="pl-4 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            <Button onClick={applyFilters}>Apply Filters</Button>
            <button 
              onClick={resetFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-opacity lg:hidden ${
          showMobileFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileFilters}
      ></div>

      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-xl transition-transform transform lg:hidden ${
          showMobileFilters ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Filters</h3>
            <button
              onClick={toggleMobileFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-4 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full pl-4 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>

            <div className="pt-4 flex gap-3">
              <Button onClick={() => { applyFilters(); toggleMobileFilters(); }} fullWidth>
                Apply Filters
              </Button>
              
              <button 
                onClick={resetFilters}
                className="text-gray-500 hover:text-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;