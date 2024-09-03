import React, { useState } from 'react';
import '../styles/CoffeeTypesDropdown.css';

const CoffeeTypesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
              <li>Автоматические</li>
              <li>Капельные</li>
              <li>Комбинированные</li>
            </ul>
          </div>
          <div className="dropdown-column">
            <ul>
              <li>Рожковые</li>
              <li>Капсульные</li>
              <li>Чалдовые</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeTypesDropdown;