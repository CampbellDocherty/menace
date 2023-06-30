import { styled } from 'styled-components';

export const Title = styled.h1`
  font-size: 75px;
  margin: 0;
  margin-bottom: 4px;
  color: white;
  width: 100%;
  text-align: justify;
  letter-spacing: 2px;
  text-shadow: -1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;

  & > span {
    font-size: 20px;
  }
`;

export const Footer = styled.p`
  align-self: flex-end;
  font-size: 16px;
`;
