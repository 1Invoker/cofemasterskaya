import React from 'react';
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div className="features-wrapper">
        <div className="feature-item">
          <img className="feature-icon" src="/icons/diagnostics.png" alt="Диагностика" />
          <div className="feature-text">
            <p className="feature-title">Выезд за 30 минут</p>
            <p className="feature-subtitle">Мастер в вашем районе</p>
          </div>
        </div>
        <div className="feature-item">
          <img className="feature-icon" src="/icons/guarantee.png" alt="Гарантия" />
          <div className="feature-text">
            <p className="feature-title">Гарантия до 24 месяцев</p>
            <p className="feature-subtitle">На все виды работ</p>
          </div>
        </div>
        <div className="feature-item">
          <img className="feature-icon" src="/icons/free-diagnostics.png" alt="Бесплатная диагностика" />
          <div className="feature-text">
            <p className="feature-title">Бесплатная диагностика</p>
            <p className="feature-subtitle">+ бесплатный выезд</p>
          </div>
        </div>
      </div>

      <h1 className="hero-title">Ремонт поломоечных машин в Москве за 2 часа</h1>
      <p className="hero-subtitle">с бесплатной диагностикой и гарантией до 2-х лет</p>

      <div className="offer-box">
        <p className="offer-text">Закрепите скидку 20% на обслуживание автоматической кофемашины</p>
        <form>
          <input className="phone-number-input" type="tel" placeholder="+7 (xxx) xxx-xx-xx" />
          <button className="discount-button">Получить скидку</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
