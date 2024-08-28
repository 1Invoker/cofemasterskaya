import React, { useState, useRef, useEffect } from "react";
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
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('Москве');
  const headerRef = useRef(null);

  const handleLocationClick = (locationName) => {
    setSelectedLocation(locationName);
  };

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [selectedLocation]);

  return (
    <>
      <Header ref={headerRef} />
      <div id="hero-section">
        <HeroSection location={selectedLocation} />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="service-process-section">
        <ServiceProcess />
      </div>
      <div id="service-repair-section">
        <ServiceRepair location={selectedLocation} />
      </div>
      <div id="repair-cost-section">
        <RepairCost location={selectedLocation} />
      </div>
      <div id="service-areas-section">
        <ServiceAreas
          onCityClick={handleLocationClick}
          onDistrictClick={handleLocationClick}
        />
      </div>
      <div id="process-section">
        <Process />
      </div>
      <div id="testimonials-section">
        <Testimonials />
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
