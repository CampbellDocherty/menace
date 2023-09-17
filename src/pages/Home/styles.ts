import { styled } from 'styled-components';

export const Title = styled.img`
  width: 90%;
  max-width: 400px;
  margin-top: 16px;
  margin-bottom: 16px;
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

export const Input = styled.input<{ $isError?: boolean }>`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  height: 30px;
  font-size: 1rem;
  width: 90%;
  margin-bottom: ${({ $isError }) => ($isError ? '4px' : '16px')};
  border-radius: 0;

  &:first-child {
    text-transform: capitalize;
  }

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
  margin-bottom: 8px;
`;

export const ImageCollage = styled.div`
  width: 100%;
  display: flex;
  margin: 12px 0px;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImageColumn = styled.div`
  width: 20%;
  max-width: 120px;
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-right: 8px;
  }
  &:last-child {
    margin-left: 8px;
  }
`;

export const MenaceImage = styled.img`
  width: 100%;
  max-width: 140px;
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
