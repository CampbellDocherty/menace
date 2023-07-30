import { styled } from 'styled-components';

export const Title = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 3.8rem;
  margin: 0;
  color: white;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;
  text-shadow:
    -1px 1px 1px #000,
    1px 1px 1px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
`;

export const ImageCollage = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-evenly;
`;

export const MenaceButton = styled.button`
  width: 30%;
  outline: none;
  background: none;
  background-color: none;
  border: none;
  cursor: pointer;
`;

export const MenaceImage = styled.img`
  width: 100%;
`;

export const Footer = styled.p`
  margin: 0;
  font-size: 14px;
  width: 80%;
  text-align: center;
`;
