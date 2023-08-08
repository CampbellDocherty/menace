import { styled } from 'styled-components';

export const Title = styled.h1`
  font-family: 'RoyalAcidOutline';
  font-size: 3.8rem;
  margin: 0;
  color: aliceblue;
  width: 100%;
  letter-spacing: 2px;
  text-align: center;
  text-shadow:
    -1px 1px 1px #000,
    1px 1px 1px #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 4px;
  text-align: left;
  width: 90%;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  height: 30px;
  font-size: 1rem;
  width: 90%;
  text-transform: capitalize;

  &::placeholder {
    text-transform: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorText = styled.p`
  color: #ef4a3f;
  width: 90%;
  font-size: 0.9rem;
  margin: 0;
  margin-top: 4px;
  margin-bottom: 16px;
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
