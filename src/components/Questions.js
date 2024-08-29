import React, { useState } from 'react';
import '../styles/Questions.css';

const questionsData = [
  {
    question: "Когда приедет мастер?",
    answer: "80% заказов мы обрабатываем день-в-день."
  },
  {
    question: "Какой у вас график работы?",
    answer: "Инженеры сервисного центра работают с 8 до 20 ежедневно без выходных. Оставьте заявку в нерабочее время и мы перезвоним вам в первую очередь."
  },
  {
    question: "Расскажите подробнее про гарантию?",
    answer: "Мы предоставляем гарантию на все виды работ и оригинальные комплектующие, которые используем в ремонте. Срок гарантии зависит от вида неисправности: так, например, на замену дисплея гарантия до 24 месяцев, на ремонт силовой платы - до 6 месяцев, на ремонт гидросистемы - до 6 месяцев. В гарантийном талоне укажем всё подробно, или уточните у менеджера срок гарантии на неисправность, выявленную у вашей кофемашины."
  },
  {
    question: "Могу ли я купить запчасть и принести ее для ремонта?",
    answer: "Да, безусловно такое возможно, но мы не предоставим гарантию на такого вида работу, так как не будем уверены в качестве предоставленной запчасти. Мы заказываем либо оригинальные комплектующие через дружественные страны, либо используем проверенные контрактные фабрики. В любом случае, вы сами выбираете тип запчастей, и соответственно, срок гарантии."
  },
  {
    question: "Когда происходит оплата?",
    answer: "После первичной диагностики мы зафиксируем стоимость и приступим к работе. Оплата производится после завершения работы и приёмки."
  }
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="questions-wrapper" id="questions">
      <h2 className="questions-title">Частые вопросы</h2>
      <ul className="questions-list">
        {questionsData.map((item, index) => (
          <li key={index} className="question-item">
            <button className="question-button" onClick={() => handleToggle(index)}>
              <span className="question-icon">
                {openIndex === index ? '–' : '+'}
              </span>
              {item.question}
            </button>
            {openIndex === index && (
              <p className="question-answer">
                {item.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Questions;
