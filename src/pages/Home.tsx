
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SportsStrip from '../components/SportsStrip';
import Services from '../components/Services';
import StructuredDifference from '../components/StructuredDifference';
import OurClients from '../components/OurClients';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SportsStrip />
      <Services />
      <StructuredDifference />
      <OurClients />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Home;
