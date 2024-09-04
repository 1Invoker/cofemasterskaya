import React, { useState } from 'react';
import '../styles/CoffeeTypesDropdown.css';

const CoffeeTypesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const typeTranslations = {
    'Автоматические': 'automatic',
    'Капельные': 'drip',
    'Комбинированные': 'combined',
    'Рожковые': 'carob',
    'Капсульные': 'capsule',
    'Чалдовые': 'pod',
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeClick = (type) => {
    const translatedType = typeTranslations[type];
    if (translatedType) {
      const url = `/type/${translatedType}`;
      window.location.href = url;
    }
  };

  return (
    <div className="coffee-types-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="dropdown-button">
        Типы кофемашин
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-column">
            <ul>
              <li onClick={() => handleTypeClick('Автоматические')}>Автоматические</li>
              <li onClick={() => handleTypeClick('Капельные')}>Капельные</li>
              <li onClick={() => handleTypeClick('Комбинированные')}>Комбинированные</li>
            </ul>
          </div>
          <div className="dropdown-column">
            <ul>
              <li onClick={() => handleTypeClick('Рожковые')}>Рожковые</li>
              <li onClick={() => handleTypeClick('Капсульные')}>Капсульные</li>
              <li onClick={() => handleTypeClick('Чалдовые')}>Чалдовые</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeTypesDropdown;
