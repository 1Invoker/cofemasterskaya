import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="top-section">
        <div className="logo">SENOR COFFEE</div>
        <div className="location">3-й Нижнелихоборский пр., 3, стр. 2, Москва</div>
        <div className="phone-number-wrapper">
          <img className="phone-icon" src="/icons/phone.png" alt="Phone" />
          <a className="phone-number" href="tel:+74953239009">
            +7 495 323 90 09
          </a>
        </div>
        <button className="call-button">Заказать звонок</button>
      </div>

      <nav className="nav">
        <a className="nav-link" href="#hero-section">
          Частые поломки
        </a>
        <a className="nav-link" href="#repair-cost-section">
          Стоимость
        </a>
        <a className="nav-link" href="#service-repair-section">
          Вызвать мастера
        </a>
        <a className="nav-link" href="#service-process-section">
          Получить скидку
        </a>
        <a className="nav-link" href="#questions-section">
          Вопрос-ответ
        </a>
        <a className="nav-link" href="#hero-section">
          О компании
        </a>
        <a className="nav-link" href="#map-section">
          Контакты
        </a>
        <a className="nav-link" href="/articles"> 
          Статьи
        </a>
      </nav>
    </header>
  );
};

export default Header;
