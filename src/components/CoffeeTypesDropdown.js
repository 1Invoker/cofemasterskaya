import React, { useState } from 'react';
import '../styles/CoffeeTypesDropdown.css';

const CoffeeTypesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeClick = (type) => {
    const url = `/type/${type.toLowerCase().replace(/\s+/g, '-')}`;
    window.location.href = url;
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
