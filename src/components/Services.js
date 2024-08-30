import React, { useState } from "react";
import "../styles/Services.css";
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
            src='https://art-vending.ru/upload/iblock/c0e/FRANKE%20A400.jpg'
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
          <img className="service-image" src='https://static.insales-cdn.com/images/products/1/4693/562762325/1.jpg' alt="Не включается" />
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
            src='https://kitfort.ru/upload/resize_cache/webp/upload/iblock/bc1/9l02d1t2bgnmuykmwvtw10p77sacd4tv.webp'
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
            src='https://coffe-mashina.ru/image/cache/catalog/products/Saeco/kofemashina_saeco_granaroma_sm6582-767x767.jpg'
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
            src='https://smgshop.ru/uploads/shop/products/large/49d67e63696650ce354fe78ed1d3bf4e.jpg'
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
            src='https://remontano.ru/assets/images/articles/coffe-machines/Kakie-faktory-vyzyvayut-polomki-kofemashiny.jpg'
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
            src='https://remontano.ru/assets/images/articles/coffe-machines/ne-varit-kofe.jpg'
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
            src='https://masterkoffee.com/assets/img/kofe-slishkom-kholodnyy-goryachiy/1.jpg'
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
            src='https://c3.cofe-pro.ru/html/termosolar/images/slider-3.jpg'
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
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGOSJZmG6ZvBxiXNxfqUeBKmV0s0W_NRTmA&s'
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
            src='https://www.philips.ru/c-dam/b2c/category-pages/Household/coffee/ru/cappuccino-machine.jpg'
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
            src='https://a.d-cd.net/qO2wyDb_PGWZ9_GLFm6fqGMjr3k-960.jpg'
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
          <img className="service-image" src='https://life-kofe.ru/image/catalog/articles-old/35/160.jpg' alt="Не мелет кофе" />
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
            src='https://lh5.googleusercontent.com/2OKYoJaLh1UywvJ5X8Pbw7ZWm0MT3kemh4Y0TNVsWJlHcsTKAz_zye2XJEbijV9_gr4fMxpLWqdb64pMrQBGuPRFy9sNEvkayI8WCqXKJZEj4-iAub5vAgk_aDc3GtgdVKu50ozo'
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
          <img className="service-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeqaN_TIECmd_v4MGeC7-h92x0DbnBw18VtLU4by9CMxPCCqIaU6_DT0OLValQo95h2g&usqp=CAU' alt="Течет" />
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
            src='https://ruscoffee.ru/upload/resize_cache/iblock/06b/300_233_2/06b1bf7670c060c4cbefa267e9657027.jpg'
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
          <img className="service-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRKyK-6Ckso72y0xcmgOG9wdd8FSerfHcIQ&s' alt="Мигает" />
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
          <img className="service-image" src='https://vashmaster27.ru/images/blog/106-2.jpg' alt="Горит красным" />
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
            src='https://onkofe.com/assets/images/steps.jpg'
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
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXBQy87EYJZE9rp11gVMLYEclUPuwJE9kKg&s'
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
            src='https://siemens-remont.ru/img/icons/ne-vzbivaet-moloko.jpg'
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
