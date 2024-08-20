import React, { useState } from 'react';
import { districts, cities } from '../Areas/AreasData';
import "../../styles/ServiceAreas.css";
import wheelImage from '../assets/images/show_all.png';

const ServiceAreas = () => {
  const [showAllDistricts, setShowAllDistricts] = useState(false);
  const [showAllCities, setShowAllCities] = useState(false);

  const toggleShowAllDistricts = () => setShowAllDistricts(!showAllDistricts);
  const toggleShowAllCities = () => setShowAllCities(!showAllCities);

  return (
    <div className="service-areas">
      
      <div className="service-areas__districts">
        <h3 className="service-areas__title">Ремонт поломоечных машин в районах Москвы</h3>
        <ul className="service-areas__list">
          {showAllDistricts ? (
            districts.map((district, index) => (
              <li className="service-areas__item" key={index}>{district}</li>
            ))
          ) : (
            districts.slice(0, 20).map((district, index) => (
              <li className="service-areas__item" key={index}>{district}</li>
            ))
          )}
        </ul>
        <button className="service-areas__button" onClick={toggleShowAllDistricts}>
          <img src={wheelImage} alt="Показать все" />
          {showAllDistricts ? 'Скрыть' : 'Показать все'}
        </button>
      </div>

      <div className="service-areas__cities">
        <h3 className="service-areas__title">Ремонт поломоечных машин в городах</h3>
        <ul className="service-areas__list">
          {showAllCities ? (
            cities.map((city, index) => (
              <li className="service-areas__item" key={index}>{city}</li>
            ))
          ) : (
            cities.slice(0, 20).map((city, index) => (
              <li className="service-areas__item" key={index}>{city}</li>
            ))
          )}
        </ul>
        <button className="service-areas__button" onClick={toggleShowAllCities}>
          <img src={wheelImage} alt="Показать все" />
          {showAllCities ? 'Скрыть' : 'Показать все'}
        </button>
      </div>
    </div>
  );
};

export default ServiceAreas;
