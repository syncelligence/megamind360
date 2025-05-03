import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCourses from '../components/home/FeaturedCourses';
import CategorySection from '../components/home/CategorySection';
import Features from '../components/home/Features';
import SuccessStories from '../components/home/SuccessStories';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <CategorySection />
      <Features />
      <SuccessStories />
      <CallToAction />
    </>
  );
};

export default Home;