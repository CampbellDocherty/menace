import { styled } from 'styled-components';

export const ScenarioContainer = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const BackButton = styled.button`
  height: 50px;
  width: 50px;
  outline: none;
  background: none;
  background-color: none;
  border: none;
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 1px solid black;
  }
`;

export const BackArrow = styled.img`
  height: 50px;
  width: 50px;
`;

export const ScenarioTitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  height: 32px;
  margin-bottom: 4px;
  font-size: 16px;
`;
