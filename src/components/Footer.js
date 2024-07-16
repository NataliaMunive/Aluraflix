// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #2222;
`;

const Logo = styled.img`
  height: 50px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/aluraflix_logo2.png" alt="Aluraflix Logo" />
    </FooterContainer>
  );
};

export default Footer;
