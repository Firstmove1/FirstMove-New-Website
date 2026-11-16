
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SportsStrip from '../components/SportsStrip';
import Services from '../components/Services';
import StructuredDifference from '../components/StructuredDifference';
import WhyFirstMove from '../components/WhyFirstMove';
import OurClients from '../components/OurClients';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import SportsVenueManagement from '../components/SportsVenueManagement';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SportsStrip />
      <Services />
      <SportsVenueManagement />
      <StructuredDifference />
      <WhyFirstMove />
      <OurClients />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
