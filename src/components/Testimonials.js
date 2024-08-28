import React, { useState } from 'react';
import '../styles/testimonials.css';

const testimonialsData = [
  {
    name: 'Ростислав Мишин',
    profession: 'Врач',
    date: '27/03/2024',
    feedback: 'Нашла этот сервис по ремонту бытовой техники в интернете. Вначале сомневалась в компании, но позвонив инженерам на горячей линии, успокоилась. Мне подробно объяснили причину неисправности моей кофемашины и назвали четкую цену. Рекомендую.',
  },
  {
    name: 'Юрий Архипов',
    profession: 'Строитель',
    date: '27/03/2024',
    feedback: 'Ремонт кофемашины - это непростой процесс, требующий понимания устройства духовой. Являюсь сам мастером на час, но из-за переезда инструментов не имел. Заказывал с опаской, но был не прав. Отличный сервис.',
  },
  {
    name: 'Мария Петрова',
    profession: 'Учитель',
    date: '15/04/2024',
    feedback: 'Очень довольна сервисом. Мастера приехали вовремя, заменили все нужные детали и дали полезные рекомендации по уходу за кофемашиной. Буду обращаться ещё.',
  },
  {
    name: 'Александр Смирнов',
    profession: 'Инженер',
    date: '10/05/2024',
    feedback: 'Быстро и качественно заменили фильтр. Понравилось внимание к деталям и вежливость сотрудников. Спасибо!',
  },
  {
    name: 'Екатерина Иванова',
    profession: 'Дизайнер',
    date: '05/06/2024',
    feedback: 'Отличный сервис! Приехали в тот же день, устранили все неполадки и дали гарантию на выполненные работы. Очень рекомендую.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Отзывы наших клиентов</h2>
      <div className="testimonials-container">
        <button className="arrow-button left" onClick={prevSlide}>
          &lt;
        </button>
        <div className="testimonial-cards-wrapper">
          {testimonialsData.map((testimonial, index) => (
            <div
              className={`testimonial-card ${
                index === currentIndex || index === (currentIndex + 1) % testimonialsData.length ? 'active' : ''
              }`}
              key={index}
            >
              <div className="testimonial-header">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.profession}</span>
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <button className="arrow-button right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
