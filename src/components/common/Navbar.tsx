import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Courses', path: '/courses' },
    { title: 'Instructors', path: '/instructors' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-1">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="h-2 w-2 bg-brand-primary"></div>
                  <div className="h-2 w-2 bg-brand-secondary"></div>
                </div>
                <div className="flex">
                  <div className="h-2 w-2 bg-brand-primary"></div>
                  <div className="h-2 w-2 bg-brand-accent"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Megamind<span className="text-brand-primary">360</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-primary'
                    : 'text-gray-700 hover:text-brand-primary'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-brand-primary">
              <Search size={20} />
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-brand-primary"
            >
              Login
            </Link>
            <Link to="/signup" className="btn-primary py-2 px-4 text-sm">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-700">
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  isActive(link.path)
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 pb-2">
              <Link
                to="/login"
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 mt-2 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primaryDark rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;