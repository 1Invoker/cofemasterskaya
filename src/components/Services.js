import React from "react";
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

const Services = () => {
  return (
    <section className="services-wrapper" id="services">
      <h2 className="services-title">
        Что случилось с вашей поломоечной машиной?
      </h2>
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
            <button className="price-button">от 1500 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={errorImage}
            alt="Ошибки"
          />
          <div className="service-content">
            <h3 className="service-title">Ошибки</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика систем</li>
              <li className="service-item">Ремонт электронного модуля</li>
              <li className="service-item">Замена датчиков</li>
              <li className="service-item">Чистка с разбором машины</li>
            </ul>
            <button className="price-button">от 1000 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noVacuumImage}
            alt="Не всасывает (не собирает) воду"
          />
          <div className="service-content">
            <h3 className="service-title">Не всасывает (не собирает) воду</h3>
            <ul className="service-description">
              <li className="service-item">Замена всасывающей балки</li>
              <li className="service-item">Ремонт вакуумного насоса</li>
              <li className="service-item">Чистка системы вакуума</li>
              <li className="service-item">Замена фильтра</li>
            </ul>
            <button className="price-button">от 1200 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noWashImage}
            alt="Не едет"
          />
          <div className="service-content">
            <h3 className="service-title">Не едет</h3>
            <ul className="service-description">
              <li className="service-item">Замена редуктора</li>
              <li className="service-item">Ремонт или замена мотора</li>
              <li className="service-item">Замена колес</li>
              <li className="service-item">Диагностика системы движения</li>
            </ul>
            <button className="price-button">от 1300 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
          src={noWaterImage}
            alt="Не моет"
          />
          <div className="service-content">
            <h3 className="service-title">Не моет</h3>
            <ul className="service-description">
              <li className="service-item">Замена щеток</li>
              <li className="service-item">Ремонт мотора щеток</li>
              <li className="service-item">Замена или ремонт ротора</li>
              <li className="service-item">Диагностика системы подачи воды</li>
            </ul>
            <button className="price-button">от 1400 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noPowerImage}
            alt="не подает воду"
          />
          <div className="service-content">
            <h3 className="service-title">Не подает воду</h3>
            <ul className="service-description">
              <li className="service-item">Замена насосов подачи воды</li>
              <li className="service-item">Ремонт гидросистемы</li>
              <li className="service-item">Чистка системы подачи воды</li>
              <li className="service-item">Диагностика электросистемы</li>
            </ul>
            <button className="price-button">от 750 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={brushIssueImage}
            alt="Не работает"
          />
          <div className="service-content">
            <h3 className="service-title">Не работает</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика электроники</li>
              <li className="service-item">Ремонт управляющей платы</li>
              <li className="service-item">Ремонт двигателя</li>
              <li className="service-item">Замена трансформатора</li>
            </ul>
            <button className="price-button">от 1500 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noSolutionImage}
            alt="Не работаю щетки"
          />
          <div className="service-content">
            <h3 className="service-title">Не работают щетки</h3>
            <ul className="service-description">
              <li className="service-item">Замена щеток</li>
              <li className="service-item">Ремонт щеточного двигателя</li>
              <li className="service-item">Замена редуктора</li>
              <li className="service-item">Диагностика системы щеток</li>
            </ul>
            <button className="price-button">от 1200 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noShutoffImage}
            alt="Не подается моющий раствор"
          />
          <div className="service-content">
            <h3 className="service-title">Не подается моющий раствор</h3>
            <ul className="service-description">
              <li className="service-item">Замена насосов подачи раствора</li>
              <li className="service-item">Ремонт системы подачи раствора</li>
              <li className="service-item">Чистка системы подачи раствора</li>
              <li className="service-item">Диагностика электросистемы</li>
            </ul>
            <button className="price-button">от 1000 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noStartImage}
            alt="Не выключается"
          />
          <div className="service-content">
            <h3 className="service-title">Не выключается</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика электросистемы</li>
              <li className="service-item">Замена выключателя</li>
              <li className="service-item">Ремонт управляющей платы</li>
              <li className="service-item">Ремонт электронного модуля</li>
            </ul>
            <button className="price-button">от 1500 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={batteryIssueImage}
            alt="Не запускается"
          />
          <div className="service-content">
            <h3 className="service-title">Не запускается</h3>
            <ul className="service-description">
              <li className="service-item">Замена аккумулятора</li>
              <li className="service-item">Ремонт системы запуска</li>
              <li className="service-item">Диагностика электросистемы</li>
              <li className="service-item">Ремонт блока управления</li>
            </ul>
            <button className="price-button">от 1600 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={streaksImage}
            alt="Аккумулятор не заряжается"
          />
          <div className="service-content">
            <h3 className="service-title">Аккумулятор не заряжается</h3>
            <ul className="service-description">
              <li className="service-item">Замена аккумулятора</li>
              <li className="service-item">Ремонт зарядного устройства</li>
              <li className="service-item">Ремонт системы зарядки</li>
              <li className="service-item">Диагностика системы питания</li>
            </ul>
            <button className="price-button">от 1400 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={divorces}
            alt="Оставляет разводы"
          />
          <div className="service-content">
            <h3 className="service-title">Оставляет разводы</h3>
            <ul className="service-description">
              <li className="service-item">Замена щеток</li>
              <li className="service-item">Чистка системы подачи воды</li>
              <li className="service-item">Замена фильтра</li>
              <li className="service-item">Регулировка давления воды</li>
            </ul>
            <button className="price-button">от 1200 руб.</button>
          </div>
        </div>

        <div className="service-card">
          <img
            className="service-image"
            src={noMovementImage}
            alt="Не начинает движение"
          />
          <div className="service-content">
            <h3 className="service-title">Не начинает движение</h3>
            <ul className="service-description">
              <li className="service-item">Диагностика системы движения</li>
              <li className="service-item">Замена редуктора</li>
              <li className="service-item">Ремонт или замена мотора</li>
              <li className="service-item">Замена колес</li>
            </ul>
            <button className="price-button">от 1300 руб.</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
