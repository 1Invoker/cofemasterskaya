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

import { districts, cities } from "../components/Areas/AreasData";

const cyrillicToLatinMap = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 
  'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
  'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
  'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',
  'ъ': '', 'ь': ''
};

const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .split('')
    .map(char => cyrillicToLatinMap[char] || char)
    .join('')
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};


const locationNames = {};

districts.forEach(district => {
  locationNames[convertToSlug(district)] = district;
});
cities.forEach(city => {
  locationNames[convertToSlug(city)] = city;
});

const Home = () => {
  const { cityName, districtName, brandName } = useParams();
  const [selectedLocation, setSelectedLocation] = useState('Москве');
  const [selectedBrand, setSelectedBrand] = useState('');
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (cityName) {
      setSelectedLocation(locationNames[cityName]);
    } else if (districtName) {
      setSelectedLocation(locationNames[districtName]);
    } else {
      setSelectedLocation('Москве');
    }

    if (brandName) {
      setSelectedBrand(brandName.charAt(0).toUpperCase() + brandName.slice(1));
    }
  }, [cityName, districtName, brandName]);

  const handleLocationClick = (locationName, locationType) => {
    const slugName = convertToSlug(locationName);
    const url = locationType === 'city'
      ? `/city/${slugName}`
      : `/district/${slugName}`;
    window.location.href = url;
  };

  const handleBrandClick = (brandName) => {
    const convertToSlug = (text) => {
      return text
        .toLowerCase()
        .replace(/\s+/g, '-');
    };

    const slugBrand = convertToSlug(brandName);
    const url = `/brand/${slugBrand}`;
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