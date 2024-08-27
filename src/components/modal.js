import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = ({ showModal, handleClose }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Проконсультируйтесь с мастером и оставьте заявку на бесплатную диагностику</h2>
        <form>
          <input type="text" placeholder="Имя *" className="input-field" />
          <input type="tel" placeholder="+7 (___) ___-__-__" className="input-field" />
          <button type="submit" className="submit-button">Отправить</button>
        </form>
        <p className="privacy-policy">
          Нажимая на кнопку "Отправить", вы соглашаетесь с Политикой конфиденциальности
        </p>
      </div>
    </div>
  );
};

export default Modal;
