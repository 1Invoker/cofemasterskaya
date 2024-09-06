import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import CoffeeTypesDropdown from "./CoffeeTypesDropdown";
import CoffeeMachineIssuesDropdown from "./CoffeeMachineIssuesDropdown";
import ServicesDropdown from "./ServicesDropdown";

const Header = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="header-wrapper">
      <div className="top-section">
        <a href="/" className="logo">
          SENOR COFFEE
        </a>

        <div className="location">
          3-й Нижнелихоборский пр., 3, стр. 2, Москва
        </div>
        <div className="phone-number-wrapper">
          <a className="phone-number" href="tel:+74953239009">
            +7 (916) 392-59-11
          </a>
        </div>

        <button className="call-button">Заказать звонок</button>
      </div>
      <div className="logo-tagline">Ремонт кофемашин</div>
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
        <ServicesDropdown />
        <CoffeeTypesDropdown />
        <CoffeeMachineIssuesDropdown />
        <a className="nav-link" href="/articles">
          Статьи
        </a>
      </nav>
    </header>
  );
});

export default Header;