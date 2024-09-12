import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ServiceAreas from '../components/Areas/ServiceAreas';
import Footer from '../components/Footer';
import { districts, cities } from "../components/Areas/AreasData";
import HeroSection from '../components/HeroSection'; 

const locationNames = {};

districts.forEach(district => {
  locationNames[district.toLowerCase().replace(/\s+/g, '-')] = district; 
});
cities.forEach(city => {
  locationNames[city.toLowerCase().replace(/\s+/g, '-')] = city; 
});

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

const AreasPage = () => {
  const { cityName, districtName } = useParams();
  const [selectedLocation, setSelectedLocation] = useState('Москве');
  const [selectedType, setSelectedType] = useState(''); 
  const [selectedIssue, setSelectedIssue] = useState(null);  
  const [selectedService, setSelectedService] = useState(null); 
  const [issueSlug, setIssueSlug] = useState(null); 
  const [selectedBrand, setSelectedBrand] = useState('');  
  const { pathname } = useLocation();

  // Обработчик кликов по городам/районам
  const handleLocationClick = (locationName, locationType) => {
    const slugName = convertToSlug(locationName); // Используем convertToSlug для транслитерации
    const url = locationType === 'city'
      ? `/city/${slugName}`
      : `/district/${slugName}`;
    window.location.href = url;

    // Обновляем заголовок страницы и selectedLocation при клике
    setTimeout(() => {
      let title =  `Ремонт кофемашин в ${locationNames[slugName]}`; 
      document.title = title;
      setSelectedLocation(locationNames[slugName]); 
    }, 0);
  };

  const canonicalUrl = `https://remont-kofemashin-servis.ru${pathname}`;

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
      <div id="service-areas-section">
        <ServiceAreas
          onCityClick={(cityName) => handleLocationClick(cityName, 'city')}
          onDistrictClick={(districtName) =>
            handleLocationClick(districtName, 'district')
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default AreasPage;