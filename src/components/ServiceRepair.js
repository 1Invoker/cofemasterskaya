import React, { useState } from 'react';
import '../styles/serviceRepair.css';
import Modal from './modal';

const allServices = [
  "Замена или ремонт микровыключателей",
  "Замена или ремонт заварочного блока",
  "Замена или ремонт редуктора",
  "Замена или ремонт уплотнительного кольца",
  "Замена или ремонт кофевода",
  "Замена или ремонт колец штуцера",
  "Чистка кофемолки",
  "Замена или ремонт жерновов (ножей)",
  "Замена счётчика воды",
  "Замена или ремонт насоса",
  "Замена или ремонт электромагнитного клапана",
  "Удаление накипи и чистка гидросистемы",
  "Замена или ремонт термостата",
  "Замена или ремонт предохранителей",
  "Замена или ремонт блока управления",
  "Замена или ремонт тэна (нагревательного элемента)",
  "Замена или ремонт кольца дозатора",
  "Замена или ремонт кофемолки",
  "Смазка всех узлов",
  "Замена или ремонт термоблока",
  "Замена или ремонт пароблока",
  "Замена или ремонт верхнего поршня",
  "Замена или ремонт двигателя",
  "Замена или ремонт штуцера",
  "Замена или ремонт капучинатора",
  "Замена или ремонт дренажного клапана",
  "Чистка диспенсера",
  "Замена или ремонт бойлера",
  "Декальцинация",
  "Замена или ремонт силовой платы",
  "Замена или ремонт платы",
  "Замена или ремонт прокладок",
  "Декофенация",
  "Замена или ремонт дисплея",
  "Замена или ремонт одометра",
  "Замена или ремонт энкодера",
  "Замена или ремонт кнопок",
  "Замена или ремонт сетевого шнура",
  "Замена или ремонт электпроводки",
  "Замена или ремонт светового индикатора",
  "Запуск кофемашины",
  "Замена фильтра кофемашины",
  "Замена или ремонт холдера (рожка)",
  "Замена или ремонт парового крана",
  "Замена или ремонт крана подачи кипятка",
  "Замена или ремонт индикатора уровня воды",
  "Замена или ремонт датчиков",
  "Замена или ремонт датчиков давления пара",
  "Замена или ремонт манометра",
  "Замена или ремонт переключателей",
  "Замена или ремонт помпы",
  "Замена или ремонт прессостата"
];

const ServiceRepair = ({ location }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const displayedServices = isExpanded ? allServices : allServices.slice(0, 6);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="service-repair-wrapper">
      <h2 className="service-repair-title">Услуги по ремонту кофемашин</h2>
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
                  Заказать ремонт в {location}
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
