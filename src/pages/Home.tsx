import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ProjectsPreview from '../components/ProjectsPreview';
import GetInvolvedSection from '../components/GetInvolvedSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ProjectsPreview />
      <GetInvolvedSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;