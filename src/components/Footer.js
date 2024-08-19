import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 40px 20px;
  background: #333;
  color: #fff;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: #e74c3c;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>&copy; 2024 Senor Coffee. Все права защищены.</FooterText>
      <FooterText>
        Телефон: <FooterLink href="tel:+79001234567">+7 (900) 123-45-67</FooterLink> | Email: <FooterLink href="mailto:info@senorcoffee.ru">info@senorcoffee.ru</FooterLink>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
