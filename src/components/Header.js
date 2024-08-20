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
        <a className="nav-link" href="#">
          Частые поломки
        </a>
        <a className="nav-link" href="#">
          Стоимость
        </a>
        <a className="nav-link" href="#">
          Вызвать мастера
        </a>
        <a className="nav-link" href="#">
          Получить скидку
        </a>
        <a className="nav-link" href="#">
          Вопрос-ответ
        </a>
        <a className="nav-link" href="#">
          О компании
        </a>
        <a className="nav-link" href="#">
          Контакты
        </a>
        <a className="nav-link" href="#">
          Статьи
        </a>
      </nav>
    </header>
  );
};

export default Header;
