import React, { useState } from 'react';
import '../styles/RepairCost.css';
import Modal from './modal';

const allCosts = [
  { 
    service: "Диагностика", 
    price: "400 руб",
    details: "Полный осмотр кофемашины для выявления неисправностей и определения стоимости ремонта."
  },
  { 
    service: "Установка", 
    price: "1200 руб",
    details: "Профессиональная установка кофемашины с проверкой всех функций."
  },
  { 
    service: "Утилизация", 
    price: "500 руб",
    details: "Утилизация старых и неисправных деталей в соответствии с экологическими нормами."
  },
  { 
    service: "Сборка", 
    price: "800 руб",
    details: "Полная сборка кофемашины после ремонта с тестированием работоспособности."
  },
  { 
    service: "Монтаж / демонтаж", 
    price: "1500 руб",
    details: "Профессиональный монтаж или демонтаж кофемашины с проверкой безопасности."
  },
  { 
    service: "Вывоз", 
    price: "600 руб",
    details: "Организация вывоза неисправной кофемашины на ремонт."
  },
  { 
    service: "Очистка", 
    price: "700 руб",
    details: "Глубокая очистка всех внутренних и внешних частей кофемашины."
  },
  { 
    service: "Подключение", 
    price: "1000 руб",
    details: "Подключение кофемашины к водопроводу и электричеству."
  },
  { 
    service: "Восстановление", 
    price: "600 руб",
    details: "Восстановление работоспособности кофемашины после сложных поломок."
  },
  { 
    service: "Промывка", 
    price: "500 руб",
    details: "Промывка всех внутренних трубок и механизмов кофемашины."
  },
  { 
    service: "Обслуживание", 
    price: "600 руб",
    details: "Периодическое техническое обслуживание для предотвращения поломок."
  },
  { 
    service: "Разборка", 
    price: "800 руб",
    details: "Разборка кофемашины для ремонта или замены деталей."
  },
  { 
    service: "Настройка", 
    price: "600 руб",
    details: "Точная настройка всех функций кофемашины для оптимальной работы."
  }
];

const RepairCost = ({ location }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const displayedCosts = isExpanded ? allCosts : allCosts.slice(0, 6);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="repair-cost-wrapper">
      <h2 className="repair-cost-title">Стоимость ремонта кофемашины</h2>
      <div className="repair-cost-table">
        <ul className="repair-cost-list">
          {displayedCosts.map((cost, index) => (
            <li key={index} className="repair-cost-item">
              <button
                className={`repair-cost-button ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleToggle(index)}
              >
                <span className="arrow"></span>
                <div className="repair-cost-service">{cost.service}</div>
                <div className="repair-cost-price">{cost.price}</div>
              </button>
              {activeIndex === index && (
                <div className="repair-cost-details">
                  <p>{cost.details}</p>
                  <button className="order-repair-button" onClick={handleButtonClick}>
                    Заказать ремонт в {location}
                  </button>
                  <Modal showModal={isModalOpen} handleClose={closeModal} />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="show-more-container">
          {!isExpanded && (
            <button className="show-more-button" onClick={() => setIsExpanded(true)}>
              Показать еще
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RepairCost;