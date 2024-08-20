import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div className="features-wrapper">
        <div className="feature-item">
          <div className="svgwrap">
            <svg
            style={{borderRadius: '50%'}}
              className="svgicon"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <rect
                x="0"
                y="0"
                width="30"
                height="30"
                style={{ fill: "none" }}
                rx="15"
                ry="15"
              ></rect>
              <g
                transform="scale(0.6) translate(10, 10)"
                transform-origin="0 0"
              >
                <g>
                  <path d="M8,17c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S10.2,17,8,17z"></path>
                  <path d="M22,17c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S24.2,17,22,17z"></path>
                  <path d="M28.5,10.3l-5.3-4.4C22.5,5.3,21.6,5,20.6,5H8.1C7.1,5,6.2,5.4,5.6,6h3.9C9.8,6,10,6.2,10,6.5S9.8,7,9.5,7H4.9H0.5 C0.2,7,0,7.2,0,7.5S0.2,8,0.5,8h3.9l-1,2h3.2C6.8,10,7,10.2,7,10.5S6.8,11,6.5,11H2.8H0.5C0.2,11,0,11.2,0,11.5S0.2,12,0.5,12h1.8 l-1,2h3.2C4.8,14,5,14.2,5,14.5S4.8,15,4.5,15H0.8H0.5C0.2,15,0,15.2,0,15.5c0,0.2,0.1,0.4,0.3,0.5c-0.2,0.5-0.3,1-0.3,1.5 c0,1.5,1,2.8,2.4,3.3c0.1,0.1,0.3,0,0.4,0C2.9,20.7,3,20.5,3,20.4C3.4,17.9,5.5,16,8,16c2.6,0,4.7,2,5,4.5c0,0.3,0.2,0.5,0.5,0.5 h3.1c0.3,0,0.5-0.2,0.5-0.5c0.2-2.5,2.4-4.5,5-4.5c2.3,0,4.3,1.6,4.9,3.9c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.1,0.5-0.3l1.2-2.4 c0.7-1.3,1-2.7,1-4.2C30,12.2,29.5,11.1,28.5,10.3z M26.5,13.5l-7,0.5c0,0,0,0,0,0c-0.1,0-0.3-0.1-0.4-0.2C19,13.7,19,13.6,19,13.4 l1-5c0-0.2,0.2-0.3,0.3-0.4c0.2-0.1,0.3,0,0.5,0.1l6,4.5c0.2,0.1,0.2,0.3,0.2,0.5C26.9,13.3,26.7,13.5,26.5,13.5z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="feature-text">
            <p className="feature-title">Выезд за 30 минут</p>
            <p className="feature-subtitle">Мастер в вашем районе</p>
          </div>
        </div>

        <div className="feature-item">
          <img
            className="feature-icon"
            src="/icons/guarantee.png"
            alt="Гарантия"
          />
          <div className="feature-text">
            <p className="feature-title">Гарантия до 24 месяцев</p>
            <p className="feature-subtitle">На все виды работ</p>
          </div>
        </div>
        <div className="feature-item">
          <img
            className="feature-icon"
            src="/icons/free-diagnostics.png"
            alt="Бесплатная диагностика"
          />
          <div className="feature-text">
            <p className="feature-title">Бесплатная диагностика</p>
            <p className="feature-subtitle">+ бесплатный выезд</p>
          </div>
        </div>
      </div>

      <h1 className="hero-title">
        Ремонт поломоечных машин в Москве за 2 часа
      </h1>
      <p className="hero-subtitle">
        с бесплатной диагностикой и гарантией до 2-х лет
      </p>

      <div className="offer-box">
        <p className="offer-text">
          Закрепите скидку 20% на обслуживание поломоечной машины
        </p>
        <form>
          <input
            className="phone-number-input"
            type="tel"
            placeholder="+7 (xxx) xxx-xx-xx"
          />
          <button className="discount-button">Получить скидку</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
