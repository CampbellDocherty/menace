import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const ScenarioContainer = styled.div`
  height: 80%;
  width: 85%;
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
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    border: 1px solid black;
  }
`;

export const BackArrow = styled.img`
  height: 50px;
  width: 50px;
`;

export const ScenarioTitle = styled(BodyText)`
  margin-bottom: 40px;
  font-size: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  min-height: 40px;
  height: fit-content;
  margin-bottom: 12px;
  font-size: 20px;
  padding: 4px;
  cursor: pointer;
`;

export const TRANSITION_CLASS_NAME = `fade`;

export const TransitionContainer = styled.section<{
  readonly $isforward: string;
}>`
  height: 60%;
  &.${TRANSITION_CLASS_NAME}-enter {
    opacity: 0;
    transform: ${({ $isforward }) =>
      $isforward === 'true' ? 'translateX(100%)' : 'translateX(-100%)'};
  }
  &.${TRANSITION_CLASS_NAME}-enter-active {
    transition: opacity 500ms, transform 500ms;
    opacity: 1;
    transform: translateX(0%);
  }
  &.${TRANSITION_CLASS_NAME}-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.${TRANSITION_CLASS_NAME}-exit-active {
    transition: opacity 500ms, transform 500ms;
    opacity: 0;
    transform: ${({ $isforward }) =>
      $isforward === 'true' ? 'translateX(-100%)' : 'translateX(100%)'};
  }
`;
