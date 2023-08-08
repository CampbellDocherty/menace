import { styled } from 'styled-components';

export const Title = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 3.8rem;
  margin: 0;
  color: aliceblue;
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
  display: flex;
  margin: 12px 0px;
  align-items: center;
  justify-content: space-evenly;
`;

export const MenaceImage = styled.img`
  width: 28%;

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }
`;

export const Disclaimer = styled.p`
  flex: 1;
  display: flex;
  align-items: flex-end;
  margin: 0;
  font-size: 14px;
  width: 80%;
  text-align: center;
`;
