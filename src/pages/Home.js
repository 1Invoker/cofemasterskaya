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
import ServiceProcess from '../components/ServiceProcess';

const Home = () => {
  return (
    <>
      <Header />
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="service-process-section">
        <ServiceProcess />
      </div>
      <div id="service-repair-section">
        <ServiceRepair />
      </div>
      <div id="repair-cost-section">
        <RepairCost />
      </div>
      <div id="service-areas-section">
        <ServiceAreas />
      </div>
      <div id="process-section">
        <Process />
      </div>
      <div id="questions-section">
        <Questions />
      </div>
      <div id="map-section">
        <MapSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
