import React from "react";
import '../styles/ServiceProcess.css';
import mobImage from './assets/images/mob.jpg';
import repairImage from './assets/images/repair.jpg';

const ServiceProcess = () => {
  return (
    <div className="service-process-container">
      <div className="process-step">
        <div className="process-text">
          <h2>01. Сделаем диагностику</h2>
          <ul>
            <li>Вы оставляете заявку на сайте или по телефону</li>
            <li>Мастер выезжает к вам домой или в офис в течение 60 минут</li>
            <li>Либо согласовывается время приезда мастера</li>
            <li>Мастер проводит бесплатную диагностику</li>
            <li>Оговаривает стоимость и сроки ремонта</li>
            <li>Обычно от 30 минут до двух дней</li>
          </ul>
          <div className="deep-diagnostic">
            В случае сложной поломки, необходима глубокая диагностика, которая
            проводится в мастерской. Результаты вы можете получить, как правило,
            в этот же день.
          </div>
        </div>
        <div className="process-image">
          <img
            src={mobImage}
            alt="Mobile Diagnostic Screen"
            className="mobile-image"
          />
          <button className="process-button">Записаться на диагностику</button>
        </div>
      </div>

      <div className="process-step">
        <div className="process-text">
          <h2>02. Отремонтируем с гарантией</h2>
          <ul>
            <li>Обычно мастер ремонтирует поломоечную машину на месте - у вас дома или в офисе.</li>
            <li>Это занимает в среднем 50 минут</li>
            <li>Если требуется сложная замена или ремонт комплектующих, профессиональная чистка, то надёжнее и безопаснее производить ремонт в мастерской.</li>
          </ul>
          <div className="service-details">
            Мастерская сервиса "SENOR COFFEE"<br />
            Работаем на сертифицированном оригинальном оборудовании
          </div>
        </div>
        <div className="process-image">
          <img
            src={repairImage}
            alt="Repair Process"
            className="repair-image"
          />
        </div>
      </div>

      <div className="call-button">
        <i className="phone-icon"></i>
      </div>
    </div>
  );
};

export default ServiceProcess;
