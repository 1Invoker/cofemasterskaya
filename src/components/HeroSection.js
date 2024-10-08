import React, { useState } from "react";
import "../styles/HeroSection.css";
import Modal from "./modal";

const HeroSection = ({
  location,
  selectedBrand,
  selectedType,
  selectedIssue,
  selectedService,
  issueSlug,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const issueTranslations = {
    "ne-vklyuchaetsya": "не включается",
    "ne-kachaet-vodu": "не качает воду",
    "ne-rabotaet-pomol": "не работает помол",
    "ne-nalivet-kofe": "не наливает кофе",
    "ne-podaet-penu": "не подает пену",
    "ne-rabotayut-knopki": "не работают кнопки",
    "protekaet": "протекает",
    "ne-nagrevaet-vodu": "не нагревает воду",
    "ne-vstavlyaetsya-blok": "не вставляется блок",
    "ne-rabotaet-kapuchinator": "не работает капучинатор",
    "ne-rabotaet": "не работает",
    "ne-rabotaet-pompa": "не работает помпа",
    "ne-varit-kofe": "не варит кофе",
    "ne-vzbivaet-moloko": "не взбивает молоко",
    "ne-vidit-vodu": "не видит воду",
    "ne-vidit-kofe": "не видит кофе",
    "ne-goryachiy-kofe": "не горячий кофе",
    "ne-greet": "не греет",
  };

  const getIssuePhraseStart = (issueTitle) => {
    const femaleWords = ["кнопки", "помпа", "кофемолка","помол", "капучинатор", "горячий кофе"];
    const isFemale = femaleWords.some((word) =>
      issueTitle.toLowerCase().includes(word)
    );
    return isFemale ? "У кофемашины" : "Кофемашина";
  };

  const formatMachineType = (type) => {
    switch (type.toLowerCase()) {
      case "автоматические":
        return "Автоматических";
      case "капельные":
        return "Капельных";
      case "комбинированные":
        return "Комбинированных";
      case "рожковые":
        return "Рожковых";
      case "капсульные":
        return "Капсульных";
      case "чалдовые":
        return "Чалдовых";
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  return (
    <section className="hero-wrapper hero-background">
      <div className="features-wrapper">
        <div className="feature-item">
          <div className="svgwrap">
            <svg
              style={{ borderRadius: "50%" }}
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
          <div className="svgwrap">
            <svg
              style={{ borderRadius: "50%" }}
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
                  <path d="M22,0H8.3C5.9,0,4,1.9,4,4.2v25.3c0,0.2,0.1,0.4,0.3,0.5c0.1,0,0.1,0,0.2,0c0.1,0,0.3-0.1,0.4-0.2l7.1-7.6 c2.8,3,6.8,7.2,7,7.5c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.1,0.4,0,0.6-0.2c0.1-0.1,0.1-0.2,0.1-0.3v-7.3c0-0.2-0.1-0.4-0.3-0.5 c-0.2-0.1-0.3-0.2-0.4-0.2c-0.2-0.2-0.5-0.2-0.7,0c-0.4,0.3-0.8,0.5-1.3,0.4c-1.5-0.3-3-1.1-4.1-2.2c-0.3-0.4-0.5-0.9-0.4-1.4 c0.1-0.3-0.1-0.5-0.4-0.6c-0.5-0.1-0.9-0.5-1-1C11.2,15.8,11,14.9,11,14c0-0.7,0.1-1.4,0.3-2.1c0.1-0.4,0.4-0.7,0.7-0.9 c0.1-0.1,0.2-0.1,0.4-0.1c0.1,0,0.2-0.1,0.3-0.2s0.1-0.3,0-0.4c0-0.1-0.1-0.2-0.1-0.4c0-0.4,0.1-0.8,0.4-1.1 c1.1-1.3,2.6-2.1,4.2-2.5c0.4-0.1,0.9,0,1.2,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.2,0.6,0.2,0.7,0c0.1-0.1,0.2-0.2,0.3-0.2 c0,0,0.1,0,0.1-0.1C19.9,6.3,20,6.1,20,6V5V3.7V3c0-0.1,0-0.3,0-0.4c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.2c0-0.1,0-0.1,0.1-0.2 c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.1c0-0.1,0.1-0.1,0.2-0.2c0,0,0.1-0.1,0.1-0.1 c0.1-0.1,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0,0.1,0C21.6,1,21.8,1,22,1c0.3,0,0.5,0.2,0.5,0.5 S22.3,2,22,2c-0.6,0-1,0.4-1,1v2h3.5C24.8,5,25,4.8,25,4.5V3C25,1.3,23.7,0,22,0z"></path>
                  <g>
                    <circle cx="19" cy="14" r="2"></circle>
                    <path d="M25.8,12.2c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.3-0.1-0.4,0c-0.4,0.1-0.9-0.1-1.1-0.5c-0.2-0.4-0.1-1,0.2-1.3 c0.1-0.1,0.2-0.2,0.2-0.3s0-0.3-0.1-0.4c-1-1.1-2.2-1.9-3.7-2.2c-0.1,0-0.3,0-0.4,0.1C20.1,7.3,20,7.5,20,7.6 c-0.1,0.5-0.5,0.9-1,0.9s-0.9-0.4-1-0.9c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.1-0.4-0.1c-1.4,0.3-2.7,1.1-3.7,2.2 c-0.1,0.1-0.1,0.2-0.1,0.4s0.1,0.3,0.2,0.3c0.4,0.3,0.5,0.8,0.2,1.3c-0.2,0.4-0.7,0.6-1.1,0.5c-0.1,0-0.3,0-0.4,0 c-0.1,0.1-0.2,0.2-0.2,0.3C12.1,12.8,12,13.4,12,14c0,0.8,0.1,1.6,0.4,2.3c0.1,0.2,0.3,0.4,0.6,0.3c0.4-0.1,0.8,0.1,1.1,0.5 c0.2,0.3,0.2,0.8-0.1,1.1c-0.1,0.2-0.1,0.5,0,0.7c1,1,2.2,1.7,3.6,2c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.5-0.3c0.3-0.7,1.5-0.7,1.8,0 c0.1,0.2,0.3,0.3,0.6,0.3c1.4-0.3,2.6-1,3.6-2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.3-0.3-0.8-0.1-1.1c0.2-0.4,0.6-0.6,1.1-0.5 c0.3,0,0.5-0.1,0.6-0.3c0.3-0.8,0.4-1.5,0.4-2.3C26,13.4,25.9,12.8,25.8,12.2z M19,17c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S20.7,17,19,17z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="feature-text">
            <p className="feature-title">Гарантия до 24 месяцев</p>
            <p className="feature-subtitle">На все виды работ</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="svgwrap">
            <svg
              style={{ borderRadius: "50%" }}
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
                  <g>
                    <path d="M26.5,13h-2.3l-5.8-5.3c-0.1,0.4-0.2,0.7-0.3,1.1l4.6,4.3h-16l4.2-4.2c-0.2-0.3-0.3-0.7-0.4-1.1l-4.9,4.9 c-0.1,0.1-0.1,0.2-0.1,0.4h-2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h23c1.7,0,3-1.3,3-3v-7C29.5,14.3,28.2,13,26.5,13z M8,16H4.5v3 H7c0.3,0,0.5,0.2,0.5,0.5S7.3,20,7,20H4.5v3.5C4.5,23.8,4.3,24,4,24s-0.5-0.2-0.5-0.5v-8C3.5,15.2,3.7,15,4,15h4 c0.3,0,0.5,0.2,0.5,0.5S8.3,16,8,16z M14.4,23.2c0.2,0.2,0.2,0.5,0,0.7C14.2,24,14.1,24,14,24c-0.1,0-0.3-0.1-0.4-0.2l-3.1-3.6 v3.2c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5v-8c0-0.3,0.2-0.5,0.5-0.5h2c1.3,0,2.5,1.2,2.5,2.5c0,1.5-0.8,2.5-2,2.5h-0.9 L14.4,23.2z M19,19c0.3,0,0.5,0.2,0.5,0.5S19.3,20,19,20h-2.5v3H20c0.3,0,0.5,0.2,0.5,0.5S20.3,24,20,24h-4 c-0.3,0-0.5-0.2-0.5-0.5v-8c0-0.3,0.2-0.5,0.5-0.5h4c0.3,0,0.5,0.2,0.5,0.5S20.3,16,20,16h-3.5v3H19z M25,19 c0.3,0,0.5,0.2,0.5,0.5S25.3,20,25,20h-2.5v3H26c0.3,0,0.5,0.2,0.5,0.5S26.3,24,26,24h-4c-0.3,0-0.5-0.2-0.5-0.5v-8 c0-0.3,0.2-0.5,0.5-0.5h4c0.3,0,0.5,0.2,0.5,0.5S26.3,16,26,16h-3.5v3H25z"></path>
                  </g>
                  <g>
                    <path d="M13.5,17.5c0-0.8-0.7-1.5-1.5-1.5h-1.5v3h2C13.5,19,13.5,17.8,13.5,17.5z"></path>
                  </g>
                  <g>
                    <circle cx="14.5" cy="7" r="3"></circle>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="feature-text">
            <p className="feature-title">Бесплатная диагностика</p>
            <p className="feature-subtitle">+ бесплатный выезд</p>
          </div>
        </div>
      </div>
      <div className="hero">
      <h1 className="hero-title">
          {issueSlug
            ? `${getIssuePhraseStart(issueTranslations[issueSlug])} ${
                issueTranslations[issueSlug]
              }`
            : selectedIssue
            ? `${getIssuePhraseStart(selectedIssue.title)} ${selectedIssue.title.toLowerCase()}`
            : selectedService
            ? `${selectedService} кофемашины`
            : selectedType
            ? `Ремонт ${formatMachineType(selectedType)} кофемашин`
            : `Ремонт кофемашин ${
                selectedBrand ? `бренда ${selectedBrand}` : ""
              } в ${location} за 2 часа`}
        </h1>
        <p className="hero-subtitle">
          {issueSlug
            ? "Исправим поломку кофемашины на дому в день обращения! Бесплатная консультация в Москве"
            : selectedIssue
            ? "Исправим поломку кофемашины на дому в день обращения! Бесплатная консультация в Москве"
            : selectedService
            ? `${selectedService} строго в день обращения с гарантией на выполненные работы. Бесплатная консультация.`
            : selectedBrand
            ? `Предоставляем срочные ремонтные услуги для кофемашин ${selectedBrand} - ремонт строго на дому в день обращения. Гарантия по договору.`
            : selectedType
            ? `Предоставляем срочные ремонтные услуги для ${selectedType.replace(/ые$/, 'ых').replace(/ие$/, 'их')} кофемашин - ремонт строго на дому в день обращения. Гарантия по договору.`
            : "С бесплатной диагностикой и гарантией до 2-х лет"}
        </p>
      </div>

      <div className="offer-box">
        <p className="offer-text">
          Закрепите скидку 20% на обслуживание кофемашины
        </p>
        <form>
          <input
            className="phone-number-input"
            type="tel"
            placeholder="+7 (xxx) xxx-xx-xx"
          />
          <button className="discount-button" onClick={handleButtonClick}>
            Получить скидку
          </button>
        </form>
        <p className="footer-text">
          Нажимая кнопку «Получить скидку», вы соглашаетесь с Политикой
          конфиденциальности
        </p>
        <Modal showModal={isModalOpen} handleClose={closeModal} />
      </div>
    </section>
  );
};

export default HeroSection;