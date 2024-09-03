import React, { forwardRef } from "react";
import styled from "styled-components";
import mir from "./assets/images/мир.png";
import yandexCass from "./assets/images/яндекс_касса.png";
import maestro from "./assets/images/maestro.png";
import maestroCard from "./assets/images/master_card.png";
import PayPal from "./assets/images/paypal.png";
import visaQiwi from "./assets/images/visa_qiwi_wallet.png";
import visa from "./assets/images/visa.png";

const sberbank =
  "https://kofemasterskaya.ru/bitrix/templates/books/img/footer/banks/%D1%81%D0%B1%D0%B5%D1%80%D0%B1%D0%B0%D0%BD%D0%BA.png";
const alfaBank =
  "https://kofemasterskaya.ru/bitrix/templates/books/img/footer/banks/%D0%B0%D0%BB%D1%8C%D1%84%D0%B0_%D0%B1%D0%B0%D0%BD%D0%BA.png";
const raifizen =
  "https://kofemasterskaya.ru/bitrix/templates/books/img/footer/banks/%D1%80%D0%B0%D0%B9%D1%84%D1%84%D0%B0%D0%B9%D0%B7%D0%B5%D0%BD_%D0%B1%D0%B0%D0%BD%D0%BA.png";
const vtb24 =
  "https://kofemasterskaya.ru/bitrix/templates/books/img/footer/banks/%D0%B2%D1%82%D0%B124.png";

const FooterWrapper = styled.div`
  background: #150000;
  color: #fff;
  padding: 40px 20px;
`;

const FooterNavWrapper = styled.div`
  background: #150000;
  padding-bottom: 20px;
  text-align: center;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const FooterNavLink = styled.a`
  color: #ffffff;
  text-decoration: underline dashed;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterContentWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`;

const FooterSection = styled.div`
  flex: 1;
  max-width: 444px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const FooterTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: #e74c3c;
  text-decoration: none;
  font-weight: bold;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
`;

const FooterListItem = styled.li`
  font-size: 14px;
  margin: 10px;
`;

const PaymentImage = styled.img`
  width: 48px;
  height: auto;
  background-color: white; /* Добавление белого фона */
  padding: 8px; /* Добавление отступов вокруг изображения */
  border-radius: 5px; /* Радиус для закругленных углов */
`;

const BankImage = styled.img`
  width: 100px;
  height: auto;
  margin: 10px;
  background-color: white; /* Добавление белого фона */
  padding: 10px; /* Добавление отступов вокруг изображения */
  border-radius: 5px; /* Радиус для закругленных углов */
`;

const Footer = forwardRef((props, ref) => {
  return (
    <FooterWrapper ref={ref}>
      <FooterNavWrapper>
        <FooterNav>
          <FooterNavLink href="#hero-section">Частые поломки</FooterNavLink>
          <FooterNavLink href="#repair-cost-section">Стоимость</FooterNavLink>
          <FooterNavLink href="#service-repair-section">Вызвать мастера</FooterNavLink>
          <FooterNavLink href="#service-process-section">Получить скидку</FooterNavLink>
          <FooterNavLink href="#questions-section">Вопрос-ответ</FooterNavLink>
          <FooterNavLink href="#hero-section">О компании</FooterNavLink>
          <FooterNavLink href="#map-section">Контакты</FooterNavLink>
          <FooterNavLink href="/articles">Статьи</FooterNavLink>
        </FooterNav>
      </FooterNavWrapper>

      <FooterContentWrapper>
        <FooterSection>
          <FooterText>
            <strong>SENOR COFFEE</strong>
            <br />
            сервис по ремонту кофемашин
          </FooterText>
          <FooterText>
            Официальный сервис в Москве по ремонту кофемашин с опытом работы более 20 лет.
          </FooterText>
          <FooterText>Все права защищены. Информация, размещённая на сайте, не является договором публичной оферты.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Принимаем платежные системы:</FooterTitle>
          <FooterList>
            <FooterListItem><PaymentImage src={maestroCard} alt="MasterCard" /></FooterListItem>
            <FooterListItem><PaymentImage src={maestro} alt="Maestro" /></FooterListItem>
            <FooterListItem><PaymentImage src={PayPal} alt="PayPal" /></FooterListItem>
            <FooterListItem><PaymentImage src={visa} alt="Visa" /></FooterListItem>
            <FooterListItem><PaymentImage src={visaQiwi} alt="Visa Qiwi Wallet" /></FooterListItem>
            <FooterListItem><PaymentImage src={mir} alt="Мир" /></FooterListItem>
            <FooterListItem><PaymentImage src={yandexCass} alt="Яндекс Касса" /></FooterListItem>
          </FooterList>
          <FooterTitle>Банки:</FooterTitle>
          <FooterList>
            <FooterListItem><BankImage src={sberbank} alt="Сбербанк" /></FooterListItem>
            <FooterListItem><BankImage src={alfaBank} alt="Альфа банк" /></FooterListItem>
            <FooterListItem><BankImage src={raifizen} alt="Райффайзен" /></FooterListItem>
            <FooterListItem><BankImage src={vtb24} alt="ВТБ24" /></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Контакты:</FooterTitle>
          <FooterText><FooterLink href="tel:+79163925911">+7 (916) 392-59-11</FooterLink></FooterText>
          <FooterText>3-й Нижнелихоборский пр., 3, стр. 2, Москва</FooterText>
          <FooterText>Пн-Пт с 07:00...23:00</FooterText>
          <FooterText>Сб-Вс с 07:00...23:00</FooterText>
          <FooterText><FooterLink href="#">Карта сайта</FooterLink></FooterText>
        </FooterSection>
      </FooterContentWrapper>
    </FooterWrapper>
  );
});

export default Footer;
