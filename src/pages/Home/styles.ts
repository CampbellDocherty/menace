import { styled } from 'styled-components';

export const Title = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 64px;
  margin: 0;
  margin-bottom: 4px;
  color: white;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: -1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

export const Footer = styled.p`
  position: fixed;
  left: 50%;
  bottom: 5px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  font-size: 14px;
  width: 80%;
  text-align: center;
`;
