import React, { useState } from 'react';
import '../styles/serviceRepair.css';
import Modal from './modal';

const allServices = [
  "Замена щеток",
  "Замена аккумулятора (акб)",
  "Замена колес",
  "Замена турбины",
  "Ремонт турбины",
  "Замена пескоуловителя",
  "Ремонт пескоуловителя",
  "Замена мотора (двигателя)",
  "Ремонт мотора (двигателя)",
  "Замена сливного шланга",
  "Замена резинки",
  "Замена фильтра",
  "Замена всасывающей балки",
  "Замена вакуумного насоса (помпы)",
  "Ремонт вакуумного насоса (помпы)",
  "Замена редуктора",
  "Ремонт редуктора",
  "Замена бака",
  "Ремонт бака",
  "Восстановление щеток",
  "Замена сквиджа (стяжки)",
  "Замена ротора",
  "Ремонт ротора",
  "Замена дисковых щеток",
  "Замена падов",
  "Замена скребка",
  "Замена роликовых щеток",
  "Замена выключателей",
  "Замена шнура",
  "Ремонт электронного модуля",
  "Замена электронного модуля"
];

const ServiceRepair = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const displayedServices = isExpanded ? allServices : allServices.slice(0, 6);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="service-repair-wrapper">
      <h2 className="service-repair-title">Услуги по ремонту поломоечных машин</h2>
      <div className="service-repair-table">
        <ul className="service-repair-list">
          {displayedServices.map((service, index) => (
            <li key={index} className="service-repair-item">
              <button
                className={`service-repair-button ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleToggle(index)}
              >
                <span className="arrow"></span>
                {service}
              </button>
              {activeIndex === index && (
                <button className="order-repair-button" onClick={handleButtonClick}>
                  Заказать ремонт в Москве
                </button>
              )}
              <Modal showModal={isModalOpen} handleClose={closeModal}/>
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

export default ServiceRepair;
