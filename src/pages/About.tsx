import React from 'react';
import { Award, Users, BookOpen, Globe, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="text-brand-primary" size={24} />, value: '15,000+', label: 'Active Students' },
    { icon: <BookOpen className="text-brand-secondary" size={24} />, value: '1,200+', label: 'Quality Courses' },
    { icon: <Award className="text-brand-accent" size={24} />, value: '250+', label: 'Expert Instructors' },
    { icon: <Globe className="text-blue-500" size={24} />, value: '120+', label: 'Countries Reached' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Megamind360</h1>
            <p className="text-lg text-gray-300 mb-8">
              We're on a mission to transform education and make quality learning accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-brand-primary/10 rounded-lg mr-4 mt-1">
                    <Target className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To create a world where anyone, anywhere has access to high-quality education that empowers them to transform their lives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-brand-secondary/10 rounded-lg mr-4 mt-1">
                    <TrendingUp className="text-brand-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide accessible, affordable, and engaging educational content created by industry experts, that helps learners develop skills for both personal and professional growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Founded in 2020, Megamind360 began with a simple idea: education should be accessible, engaging, and effective. Our founders, a group of educators and technologists, were frustrated with the limitations of traditional education and the inconsistent quality of online learning.
              </p>
              
              <p>
                We started with just a handful of courses in web development and gradually expanded our offerings across multiple disciplines. What set us apart was our focus on quality content and ensuring practical, applicable knowledge transfer.
              </p>
              
              <p>
                Today, Megamind360 hosts over 1,200 courses across dozens of categories, serving students from more than 120 countries. We've built partnerships with leading industry experts and companies to provide cutting-edge curriculum that meets the demands of today's job market.
              </p>
              
              <p>
                Despite our growth, our mission remains unchanged: to democratize education and empower learners worldwide to achieve their personal and professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Jennifer Liu',
                position: 'CEO & Co-Founder',
                image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Marcus Johnson',
                position: 'CTO',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Sophia Patel',
                position: 'Chief Content Officer',
                image: 'https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'David Rodriguez',
                position: 'Head of Growth',
                image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-secondary">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;