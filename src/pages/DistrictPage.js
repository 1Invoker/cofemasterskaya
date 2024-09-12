import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { districts } from "../components/Areas/AreasData";  // Импорт данных о районах
import HeroSection from '../components/HeroSection';
import wheelImage from '../components/assets/images/show_all.png';

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
  locationNames[district.toLowerCase().replace(/\s+/g, '-')] = district; 
});

const DistrictPage = () => {
  const { districtName } = useParams();
  const [selectedLocation, setSelectedLocation] = useState('Москве');
  const [selectedType, setSelectedType] = useState(''); 
  const [selectedIssue, setSelectedIssue] = useState(null);  
  const [selectedService, setSelectedService] = useState(null); 
  const [issueSlug, setIssueSlug] = useState(null); 
  const [selectedBrand, setSelectedBrand] = useState('');  
  const { pathname } = useLocation();
  const [showAllDistricts, setShowAllDistricts] = useState(false); // Добавьте состояние для отображения всех районов

  // Обработчик кликов по районам
  const handleLocationClick = (locationName, locationType) => {
    const slugName = convertToSlug(locationName); // Используем convertToSlug для транслитерации
    const url = `/district/${slugName}`;
    window.location.href = url;

    // Обновляем заголовок страницы и selectedLocation при клике
    setTimeout(() => {
      let title =  `Ремонт кофемашин в районе ${locationNames[slugName]}`; 
      document.title = title;
      setSelectedLocation(locationNames[slugName]); 
    }, 0);
  };

  const toggleShowAllDistricts = () => setShowAllDistricts(!showAllDistricts); // Добавьте функцию для переключения состояния

  useEffect(() => {
    if (districtName) {
      setSelectedLocation(locationNames[districtName]);
      let title = `Ремонт кофемашин в районе ${locationNames[districtName]}`; 
      document.title = title;
    }
  }, [districtName]);

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
        <div className="service-areas__cities">
          <h3 className="service-areas__title">Ремонт кофемашин в районах</h3>
          <ul className="service-areas__list">
            {/* Рендерим только районы */}
            {showAllDistricts
              ? districts.map((district, index) => (
                <li
                  className="service-areas__item"
                  key={index}
                  onClick={() => handleLocationClick(district, 'district')} // Используйте handleLocationClick
                >
                  {district}
                </li>
              ))
              : districts.slice(0, 20).map((district, index) => (
                <li
                  className="service-areas__item"
                  key={index}
                  onClick={() => handleLocationClick(district, 'district')} // Используйте handleLocationClick
                >
                  {district}
                </li>
              ))
            }
          </ul>
          <button className="service-areas__button" onClick={toggleShowAllDistricts}>
            <img src={wheelImage} alt="Показать все" />
            {showAllDistricts ? 'Скрыть' : 'Показать все'}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DistrictPage;
