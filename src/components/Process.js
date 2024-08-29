import React from 'react';
import '../styles/Process.css';

const Process = () => {
  return (
    <section className="process-wrapper" id="process">
      <h2 className="process-title">КАК МЫ РАБОТАЕМ</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <p className="step-description">Диагностика</p>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <p className="step-description">Ремонт и замена деталей</p>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <p className="step-description">Проверка и тестирование</p>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <p className="step-description">Выдача и консультация</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
