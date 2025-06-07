import React from 'react';
import { Award, Users, BookOpen, Globe, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="text-brand-primary" size={24} />, value: '1000+', label: 'Active Students' },
    { icon: <BookOpen className="text-brand-secondary" size={24} />, value: '12+', label: 'Quality Courses' },
    { icon: <Award className="text-brand-accent" size={24} />, value: '5+', label: 'Expert Instructors' },
    { icon: <Globe className="text-blue-500" size={24} />, value: '30+', label: 'Countries Reached' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Megamind360</h1>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision & Mission</h2>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-brand-primary/10 rounded-lg mr-4 mt-1">
                    <Target className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">
                      At Megamind360, we don't just offer IT training — we build careers through precision-crafted, job-focused learning experiences. Our vision is to bridge the gap between traditional training and real-world readiness, empowering learners to step confidently into the job market with skills that make an immediate impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-brand-secondary/10 rounded-lg mr-4 mt-1">
                    <TrendingUp className="text-brand-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">
                      Every course at Megamind360 is developed with direct input from industry experts and hiring managers to ensure you're learning what truly matters — not yesterday's concepts, but the tools, technologies, and practices used in real enterprise environments right now. We emphasize quality over quantity, relevance over redundancy, and mastery over memorization. Our commitment is to deliver training that transforms — from hands-on labs and real-time project simulations to interview preparation and job placement support, we are with you every step of the way.
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
                <div className="text-3xl font-bold mb-1 text-gray-900">{stat.value}</div>
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
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Story</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Megamind360 was founded in 2019 by three passionate tech professionals who saw a persistent and growing gap between conventional IT training programs and the real-world skills employers expect. With a shared vision to redefine the way IT education is delivered, they set out to create a platform focused not on surface-level awareness, but on deep, hands-on expertise that translates directly into job performance.
              </p>
              
              <p>
                Since then, Megamind360 has trained over 1,500 students, building a vibrant alumni network that continues to thrive across industries and geographies. Our learners consistently stand out—not just for what they know, but for how confidently they apply it in live environments. Every course we design reflects our relentless commitment to relevance, precision, and practical value.
              </p>
              
              <p>
                At the heart of Megamind360 is a culture of excellence. We don't settle for "good enough"—our programs are continuously refined to meet the latest industry standards, ensuring our students are not just learning, but mastering skills that matter. From our expert-led sessions and real-time project work to personalized mentoring and career support, we strive to make every learning experience transformative.
              </p>
              
              <p>
                Today, Megamind360 stands as more than a training institute—it's a launchpad for driven individuals who want to build real careers in tech. And we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* Removed Our Leadership Team section */}
    </div>
  );
};

export default About;