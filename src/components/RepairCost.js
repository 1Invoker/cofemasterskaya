import React, { useState } from 'react';
import '../styles/RepairCost.css';
import Modal from './modal';

const allCosts = [
  { 
    service: "Техническое обслуживание", 
    price: "600 руб",
    details: "Замена фильтров, проверка всех узлов и компонентов, смазка движущихся частей."
  },
  { 
    service: "Диагностика", 
    price: "400 руб",
    details: "Полный осмотр поломоечной машины для выявления неисправностей и определения стоимости ремонта."
  },
  { 
    service: "Утилизация", 
    price: "500 руб",
    details: "Утилизация старых и неисправных деталей в соответствии с экологическими нормами."
  },
  { 
    service: "Сборка", 
    price: "800 руб",
    details: "Полная сборка поломоечной машины после ремонта с тестированием работоспособности."
  },
  { 
    service: "Вывоз", 
    price: "600 руб",
    details: "Организация вывоза неисправной поломоечной машины на ремонт."
  },
  { 
    service: "Чистка", 
    price: "700 руб",
    details: "Глубокая чистка всех внутренних и внешних частей поломоечной машины."
  },
  { 
    service: "Восстановление", 
    price: "600 руб",
    details: "Восстановление работоспособности поломоечной машины после сложных поломок."
  },
  { 
    service: "Настройка", 
    price: "600 руб",
    details: "Точная настройка всех функций поломоечной машины для оптимальной работы."
  },
  { 
    service: "Регулировка", 
    price: "500 руб",
    details: "Регулировка давления, температуры и других параметров для лучшего качества поломоечной машины."
  }
];

const RepairCost = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const displayedCosts = isExpanded ? allCosts : allCosts.slice(0, 6);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="repair-cost-wrapper">
      <h2 className="repair-cost-title">Стоимость ремонта поломоечной машины</h2>
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
                    Заказать ремонт в Москве
                  </button>
                  <Modal showModal={isModalOpen} handleClose={closeModal}/>
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
