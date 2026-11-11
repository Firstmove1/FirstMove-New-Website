import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SportsStrip from '../components/SportsStrip';
import SportsPlaybook from '../components/SportsPlaybook';
import CoachingCards from '../components/CoachingCards';
import Services from '../components/Services';
import StructuredDifference from '../components/StructuredDifference';
import SportsBenefits from '../components/SportsBenefits';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SportsStrip />
      <SportsPlaybook />
      <CoachingCards />
      <Services />
      <StructuredDifference />
      <SportsBenefits />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
