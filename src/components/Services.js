import React, { useState } from "react";
import "../styles/Services.css";
import drainIssueImage from "./assets/images/5c6fbbbbbc063.jpg";
import errorImage from "./assets/images/12956913654d3aae651fe0f.jpg";
import noVacuumImage from "./assets/images/Eureka_E-51-2.200x0.jpg";
import noWashImage from "./assets/images/images.jpeg";
import noWaterImage from "./assets/images/polomoechnaya-mashina.jpg";
import noPowerImage from "./assets/images/service-02.jpg";
import brushIssueImage from "./assets/images/simple-gallery-carousel-img-1.jpg";
import noSolutionImage from "./assets/images/simple-gallery-carousel-img-3.jpg";
import noShutoffImage from "./assets/images/WhatsApp_Image_2022-.jpeg";
import noStartImage from "./assets/images/images (1).jpeg";
import batteryIssueImage from "./assets/images/images.jpeg";
import streaksImage from "./assets/images/full_OojnNkZ6.jpg";
import noMovementImage from "./assets/images/obsluzhivanie-polomoechnyh-mashin.png";
import divorces from "./assets/images/52.jpeg";
import Modal from "./modal";

const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="services-wrapper" id="services">
      <h2 className="services-title">Что случилось с вашей кофемашиной?</h2>
      <p className="services-subtitle">
        Выполним ремонт максимально быстро и с гарантией
      </p>
      <div className="services-grid">
        <div className="service-card">
          <img
            className="service-image"
            src={drainIssueImage}
            alt="Не сливает"
          />
          <div className="service-content">
            <h3 className="service-title">Не сливает</h3>
            <ul className="service-description">
              <li className="service-item">Замена сливного шланга</li>
              <li className="service-item">Ремонт или замена насоса</li>
              <li className="service-item">Чистка системы слива</li>
              <li className="service-item">Диагностика электроники</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1500 руб.
            </button>
            <Modal showModal={isModalOpen} handleClose={closeModal} />
          </div>
        </div>

        <div className="service-card">
          <img className="service-image" src={errorImage} alt="Не включается" />
          <div className="service-content">
            <h3 className="service-title">Не включается</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика электропитания</li>
              <li className="service-item">Ремонт выключателя</li>
              <li className="service-item">Замена предохранителя</li>
              <li className="service-item">Проверка цепей</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 800 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noWashImage}
            alt="Не варит кофе"
          />
          <div className="service-content">
            <h3 className="service-title">Не варит кофе</h3>
            <ul className="service-description">
              <li className="service-item">Замена нагревательного элемента</li>
              <li className="service-item">Проверка подачи воды</li>
              <li className="service-item">Чистка кофейного тракта</li>
              <li className="service-item">Диагностика помпы</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1200 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noWaterImage}
            alt="Не взбивает молоко"
          />
          <div className="service-content">
            <h3 className="service-title">Не взбивает молоко</h3>
            <ul className="service-description">
              <li className="service-item">Чистка капучинатора</li>
              <li className="service-item">Замена трубок подачи молока</li>
              <li className="service-item">Диагностика молочной системы</li>
              <li className="service-item">Замена мотора капучинатора</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1400 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noPowerImage}
            alt="Не видит воду"
          />
          <div className="service-content">
            <h3 className="service-title">Не видит воду</h3>
            <ul className="service-description">
              <li className="service-item">Замена датчика воды</li>
              <li className="service-item">Проверка системы подачи воды</li>
              <li className="service-item">Чистка бачка для воды</li>
              <li className="service-item">Диагностика электроники</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 900 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noSolutionImage}
            alt="Не нагревает воду"
          />
          <div className="service-content">
            <h3 className="service-title">Не нагревает воду</h3>
            <ul className="service-description">
              <li className="service-item">Замена нагревательного элемента</li>
              <li className="service-item">Диагностика термостата</li>
              <li className="service-item">Ремонт электроники</li>
              <li className="service-item">Проверка термоблока</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1000 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noShutoffImage}
            alt="Не формирует таблетку"
          />
          <div className="service-content">
            <h3 className="service-title">Не формирует таблетку</h3>
            <ul className="service-description">
              <li className="service-item">Чистка кофейного тракта</li>
              <li className="service-item">Замена группы заваривания</li>
              <li className="service-item">Диагностика дозатора</li>
              <li className="service-item">Замена фильтра воды</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1100 руб.
            </button>
          </div>
        </div>
        <div className="service-card">
          <img
            className="service-image"
            src={noVacuumImage}
            alt="Не работает капучинатор"
          />
          <div className="service-content">
            <h3 className="service-title">Не работает капучинатор</h3>
            <ul className="service-description">
              <li className="service-item">Замена капучинатора</li>
              <li className="service-item">Чистка системы капучинатора</li>
              <li className="service-item">Диагностика помпы капучинатора</li>
              <li className="service-item">Ремонт электроники капучинатора</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1300 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={brushIssueImage}
            alt="Не работает помпа"
          />
          <div className="service-content">
            <h3 className="service-title">Не работает помпа</h3>
            <ul className="service-description">
              <li className="service-item">Замена помпы</li>
              <li className="service-item">Диагностика системы подачи воды</li>
              <li className="service-item">Чистка помпы</li>
              <li className="service-item">Проверка электроники</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 2000 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={batteryIssueImage}
            alt="Не взбивает пену"
          />
          <div className="service-content">
            <h3 className="service-title">Не взбивает пену</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика капучинатора</li>
              <li className="service-item">Замена трубок подачи молока</li>
              <li className="service-item">Чистка системы вспенивания</li>
              <li className="service-item">Ремонт мотора капучинатора</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1400 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={streaksImage}
            alt="Не видит кофе"
          />
          <div className="service-content">
            <h3 className="service-title">Не видит кофе</h3>
            <ul className="service-description">
              <li className="service-item">Замена датчика кофе</li>
              <li className="service-item">Проверка кофемолки</li>
              <li className="service-item">Чистка кофейного тракта</li>
              <li className="service-item">Диагностика электроники</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1000 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noMovementImage}
            alt="Не горячий кофе"
          />
          <div className="service-content">
            <h3 className="service-title">Не горячий кофе</h3>
            <ul className="service-description">
              <li className="service-item">Проверка термостата</li>
              <li className="service-item">Замена нагревательного элемента</li>
              <li className="service-item">Чистка нагревательного блока</li>
              <li className="service-item">Диагностика электроники</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1100 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img className="service-image" src={divorces} alt="Не мелет кофе" />
          <div className="service-content">
            <h3 className="service-title">Не мелет кофе</h3>
            <ul className="service-description">
              <li className="service-item">Замена кофемолки</li>
              <li className="service-item">Диагностика двигателя кофемолки</li>
              <li className="service-item">Чистка кофейного тракта</li>
              <li className="service-item">Проверка электропроводки</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1500 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noStartImage}
            alt="Не набирает давление"
          />
          <div className="service-content">
            <h3 className="service-title">Не набирает давление</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика помпы</li>
              <li className="service-item">Проверка клапанов</li>
              <li className="service-item">Чистка системы давления</li>
              <li className="service-item">Замена манометра</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1700 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img className="service-image" src={drainIssueImage} alt="Течет" />
          <div className="service-content">
            <h3 className="service-title">Течет</h3>
            <ul className="service-description">
              <li className="service-item">Замена уплотнительных колец</li>
              <li className="service-item">Проверка шлангов</li>
              <li className="service-item">Диагностика клапанов</li>
              <li className="service-item">Ремонт гидравлической системы</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1300 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noSolutionImage}
            alt="Не выключается"
          />
          <div className="service-content">
            <h3 className="service-title">Не выключается</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика системы управления</li>
              <li className="service-item">Замена кнопки выключения</li>
              <li className="service-item">Проверка электроники</li>
              <li className="service-item">Ремонт блока питания</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1200 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img className="service-image" src={noShutoffImage} alt="Мигает" />
          <div className="service-content">
            <h3 className="service-title">Мигает</h3>
            <ul className="service-description">
              <li className="service-item">Проверка блока управления</li>
              <li className="service-item">Замена индикаторов</li>
              <li className="service-item">Диагностика электроники</li>
              <li className="service-item">Проверка датчиков</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1100 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img className="service-image" src={errorImage} alt="Горит красным" />
          <div className="service-content">
            <h3 className="service-title">Горит красным</h3>
            <ul className="service-description">
              <li className="service-item">Проверка датчиков</li>
              <li className="service-item">Замена индикатора</li>
              <li className="service-item">Диагностика блока управления</li>
              <li className="service-item">Ремонт электроники</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 900 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noPowerImage}
            alt="Не работает кнопка"
          />
          <div className="service-content">
            <h3 className="service-title">Не работает кнопка</h3>
            <ul className="service-description">
              <li className="service-item">Замена кнопки</li>
              <li className="service-item">Диагностика кнопки</li>
              <li className="service-item">Проверка подключения кнопки</li>
              <li className="service-item">Ремонт блока управления</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1000 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noWashImage}
            alt="Кофемашина не формирует таблетку"
          />
          <div className="service-content">
            <h3 className="service-title">Кофемашина не формирует таблетку</h3>
            <ul className="service-description">
              <li className="service-item">Замена фильтра</li>
              <li className="service-item">Чистка системы</li>
              <li className="service-item">Диагностика кофейной группы</li>
              <li className="service-item">Ремонт дозатора</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1500 руб.
            </button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={batteryIssueImage}
            alt="Заклинило"
          />
          <div className="service-content">
            <h3 className="service-title">Заклинило</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика механики</li>
              <li className="service-item">Замена двигателей</li>
              <li className="service-item">Чистка движущихся частей</li>
              <li className="service-item">Проверка электроники</li>
            </ul>
            <button className="price-button" onClick={handleButtonClick}>
              от 1300 руб.
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Services;
