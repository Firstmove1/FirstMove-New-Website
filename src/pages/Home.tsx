
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SportsVenueManagement from '../components/SportsVenueManagement';
import StructuredDifference from '../components/StructuredDifference';
import OurClients from '../components/OurClients';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SportsVenueManagement />
      <StructuredDifference />
      <OurClients />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
