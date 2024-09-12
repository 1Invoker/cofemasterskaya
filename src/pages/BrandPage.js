import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import CoffeeMachineBrands from '../components/CoffeeMachineBrands';
import Footer from '../components/Footer';
import { districts, cities } from "../components/Areas/AreasData";
import brandNameTranslations from "../components/brandNameTranslations";
import HeroSection from '../components/HeroSection'; 

const locationNames = {};

districts.forEach(district => {
  locationNames[district.toLowerCase().replace(/\s+/g, '-')] = district; 
});
cities.forEach(city => {
  locationNames[city.toLowerCase().replace(/\s+/g, '-')] = city; 
});

const BrandPage = () => {
  const { brandName } = useParams();
  const [searchParams] = useSearchParams();
  const selectedServiceSlug = searchParams.get('service');
  const [selectedLocation, setSelectedLocation] = useState('Москве');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState(''); 
  const [selectedIssue, setSelectedIssue] = useState(null);  
  const [selectedService, setSelectedService] = useState(null); 
  const [issueSlug, setIssueSlug] = useState(null); 
  const { pathname } = useLocation();

  useEffect(() => {
    if (brandName) { // Проверяем, что brandName доступен
      setSelectedBrand(brandName.charAt(0).toUpperCase() + brandName.slice(1));
      let title = `Ремонт кофемашин ${formattedBrandName} в Москве | Сервис центр ${russianBrandName}`;
      document.title = title;
    }
  }, [brandName]);

  const handleBrandClick = (brandName) => {
    const slugBrand = brandName.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/brand/${slugBrand}`; 
  };

  const canonicalUrl = `https://remont-kofemashin-servis.ru${pathname}`;
  const formattedBrandName = brandName ? brandName.charAt(0).toUpperCase() + brandName.slice(1) : ''; // Проверяем brandName
  const russianBrandName = brandNameTranslations[formattedBrandName] || formattedBrandName; 

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <div id="hero-section">
        <HeroSection
          location={selectedLocation}
          selectedBrand={selectedBrand}
          selectedService={selectedService} 
          selectedType={selectedType}
          issueSlug={issueSlug}
        />
      </div>
      <div>
        <CoffeeMachineBrands 
          location={selectedLocation} 
          selectedBrand={selectedBrand} 
          onBrandClick={handleBrandClick} 
        />
      </div>
      <Footer />
    </>
  );
};

export default BrandPage;