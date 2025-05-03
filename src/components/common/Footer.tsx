import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
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
              <span className="text-xl font-bold">
                Megamind<span className="text-brand-primary">360</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering learners worldwide with cutting-edge educational content and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-bold text-lg mb-6">Support</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-brand-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-400 hover:text-brand-primary transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-lg mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Learning Street, Education City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-primary flex-shrink-0" />
                <a href="mailto:info@megamind360.com" className="text-gray-400 hover:text-brand-primary transition-colors">
                  info@megamind360.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-primary flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-brand-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Megamind360. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-500 hover:text-gray-400 text-sm">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;