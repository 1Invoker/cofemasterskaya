import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/TypePage.css";

const typeTranslations = {
  'Автоматические': 'automatic',
  'Капельные': 'drip',
  'Комбинированные': 'combined',
  'Рожковые': 'carob',
  'Капсульные': 'capsule',
  'Чалдовые': 'pod',
};

const TypePage = () => {
  const navigate = useNavigate();

  const handleTypeClick = (type) => {
    const translatedType = typeTranslations[type];
    if (translatedType) {
      const url = `/type/${translatedType}`;
      navigate(url);
    }
  };

  return (
    <>
      <Header />
      <div className="types-page">
        <h1>Типы кофемашин</h1>
        <div className="types-page__content">
          <div className="types-page__column">
            <ul>
              <li onClick={() => handleTypeClick('Автоматические')}>Автоматические</li>
              <li onClick={() => handleTypeClick('Капельные')}>Капельные</li>
              <li onClick={() => handleTypeClick('Комбинированные')}>Комбинированные</li>
            </ul>
          </div>
          <div className="types-page__column">
            <ul>
              <li onClick={() => handleTypeClick('Рожковые')}>Рожковые</li>
              <li onClick={() => handleTypeClick('Капсульные')}>Капсульные</li>
              <li onClick={() => handleTypeClick('Чалдовые')}>Чалдовые</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TypePage;
