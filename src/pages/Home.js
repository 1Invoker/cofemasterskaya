import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import CoffeeMachineIssues from "../components/coffeeMachineIssues";
import CoffeeMachineBrands from "../components/CoffeeMachineBrands";

const Home = () => {
  const { cityName, districtName, brandName } = useParams();
  const [selectedLocation, setSelectedLocation] = useState('Москве');
  const [selectedBrand, setSelectedBrand] = useState(''); 
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (cityName) {
      setSelectedLocation(cityName.charAt(0).toUpperCase() + cityName.slice(1));
    } else if (districtName) {
      setSelectedLocation(districtName.charAt(0).toUpperCase() + districtName.slice(1));
    } else {
      setSelectedLocation('Москве');
    }

    if (brandName) {
      setSelectedBrand(brandName.charAt(0).toUpperCase() + brandName.slice(1));
    }
  }, [cityName, districtName, brandName]);

  const handleLocationClick = (locationName, locationType) => {
    const url = locationType === 'city'
      ? `/city/${locationName.toLowerCase().replace(/\s+/g, '-')}`
      : `/district/${locationName.toLowerCase().replace(/\s+/g, '-')}`;
    window.location.href = url;
  };

  const handleBrandClick = (brandName) => {
    const url = `/brand/${brandName.toLowerCase().replace(/\s+/g, '-')}`;
    window.location.href = url;
  };

  return (
    <>
      <Header ref={headerRef} />
      <div id="hero-section">
        <HeroSection location={selectedLocation} selectedBrand={selectedBrand} />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div>
        <CoffeeMachineIssues location={selectedLocation} />
      </div>
      <div>
        <CoffeeMachineBrands location={selectedLocation} selectedBrand={selectedBrand} onBrandClick={handleBrandClick} />
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
          onCityClick={(cityName) => handleLocationClick(cityName, 'city')}
          onDistrictClick={(districtName) => handleLocationClick(districtName, 'district')}
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
      <Footer ref={footerRef} />
    </>
  );
};

export default Home;
