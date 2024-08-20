import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Process from '../components/Process';
import Questions from '../components/Questions';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import ServiceRepair from '../components/ServiceRepair';
import RepairCost from '../components/RepairCost';
import ServiceAreas from '../components/Areas/ServiceAreas';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <ServiceRepair />
      <RepairCost />
      <ServiceAreas />
      <Process />
      <Questions />
      <MapSection />
      <Footer />
    </>
  );
};

export default Home;
