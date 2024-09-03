import React, { useState } from 'react';
import '../styles/coffeeMachineIssues.css';
import Modal from './modal';

const coffeeMachineIssues = [
    {
      title: "Не включается",
      price: "500 руб",
      description: "Самой распространенной причиной того, что кофемашина не включается, является неисправный термоблок. Также стоит проверить сетевой кабель и блок питания перед вызовом мастера."
    },
    {
      title: "Не качает воду",
      price: "400 руб",
      description: "Проблема с подачей воды может быть вызвана забитым фильтром или насосом. Проверьте систему подачи воды и замените фильтры."
    },
    {
      title: "Не работает помол",
      price: "600 руб",
      description: "Если помол кофе не происходит, возможно, проблема в блокировке жерновов или неисправности двигателя помола. Требуется диагностика и ремонт или замена компонента."
    },
    {
      title: "Не наливает кофе",
      price: "600 руб",
      description: "Отсутствие налива кофе может указывать на засор в системе подачи или неисправность блока клапанов. Рекомендуется профессиональная очистка системы."
    },
    {
      title: "Не подает пену",
      price: "800 руб",
      description: "Причиной отсутствия пены может быть проблема с капучинатором или засор в трубке подачи молока. Очистите капучинатор и проверьте систему подачи молока."
    },
    {
      title: "Не работают кнопки",
      price: "1000 руб",
      description: "Неисправность кнопок может быть вызвана износом или повреждением сенсорной панели. Требуется замена кнопок или сенсоров."
    },
    {
      title: "Протекает",
      price: "700 руб",
      description: "Протечка может быть вызвана износом уплотнителей или трещинами в резервуаре. Проверьте уплотнители и замените поврежденные детали."
    },
    {
      title: "Не нагревает воду",
      price: "1000 руб",
      description: "Причиной того, что вода не нагревается, может быть неисправный нагревательный элемент или термостат. Необходима проверка и, при необходимости, замена этих компонентов."
    },
    {
      title: "Не вставляется блок",
      price: "900 руб",
      description: "Если блок не вставляется, возможно, проблема в механическом заедании или неисправности направляющих. Рекомендуется осмотр и смазка движущихся частей."
    },
    {
      title: "Не работает капучинатор",
      price: "900 руб",
      description: "Неисправность капучинатора может быть вызвана засором или поломкой механизма подачи пара. Требуется чистка или ремонт капучинатора."
    },
    {
      title: "Не работает",
      price: "700 руб",
      description: "Общая неисправность может быть вызвана различными проблемами, включая проблемы с электропитанием или повреждение внутренних компонентов."
    },
    {
      title: "Не работает помпа",
      price: "800 руб",
      description: "Неисправная помпа может вызвать проблемы с подачей воды. Возможно, потребуется замена помпы или проверка её подключения."
    },
    {
      title: "Не варит кофе",
      price: "800 руб",
      description: "Если кофемашина не варит кофе, проблема может быть связана с заварочным блоком или системами подачи воды и пара. Необходима диагностика."
    },
    {
      title: "Не взбивает молоко",
      price: "800 руб",
      description: "Причиной того, что кофемашина не взбивает молоко, могут быть проблемы с системой подачи пара или загрязнение форсунок. Проведите очистку и проверку оборудования."
    },
    {
      title: "Не видит воду",
      price: "900 руб",
      description: "Если кофемашина не видит воду, возможно, сенсоры уровня воды неисправны или забиты. Проверьте и очистите сенсоры."
    },
    {
      title: "Не видит кофе",
      price: "1000 руб",
      description: "Проблемы с распознаванием кофе могут быть связаны с датчиками уровня или с системой подачи кофе. Требуется осмотр и диагностика."
    },
    {
      title: "Не горячий кофе",
      price: "1000 руб",
      description: "Если кофе не горячий, возможно, неисправен термоблок или датчик температуры. Проверьте систему нагрева и, при необходимости, замените компоненты."
    },
    {
      title: "Не греет",
      price: "800 руб",
      description: "Если кофемашина не греет, возможно, проблема в нагревательных элементах или в системе подачи энергии. Требуется диагностика и ремонт."
    },
  ];
  


  const CoffeeMachineIssues = ({ location }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleButtonClick = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const displayedIssues = isExpanded ? coffeeMachineIssues : coffeeMachineIssues.slice(0, 6);
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section className="coffee-machine-issues-wrapper">
        <h2 className="coffee-machine-issues-title">Неисправности кофемашин</h2>
        <div className="coffee-machine-issues-table">
          <ul className="coffee-machine-issues-list">
            {displayedIssues.map((issue, index) => (
              <li key={index} className="coffee-machine-issues-item">
                <button
                  className={`coffee-machine-issues-button ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <span className="arrow"></span>
                  <div className="coffee-machine-issues-service">{issue.title}</div>
                  <div className="coffee-machine-issues-price">{issue.price}</div> 
                </button>
                {activeIndex === index && (
                  <div className="issue-description">
                    <p>{issue.description || "Описание не предоставлено."}</p>
                    <button className="order-repair-button" onClick={handleButtonClick}>
                      Заказать ремонт в {location}
                    </button>
                  </div>
                )}
                <Modal showModal={isModalOpen} handleClose={closeModal} />
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
  
  export default CoffeeMachineIssues;