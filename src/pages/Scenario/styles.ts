import { styled } from 'styled-components';
import { BodyText } from '../../styles';

export const ScenarioContainer = styled.div`
  height: 80%;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const ScenarioHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  height: 50px;
  width: 50px;
  outline: none;
  background: none;
  background-color: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BackArrow = styled.img`
  height: 50px;
  width: 50px;
`;

export const ScenarioTitle = styled(BodyText)`
  margin: 12px 0px 16px 0px;
  font-size: 1.3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
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
    transition:
      opacity 500ms,
      transform 500ms;
    opacity: 1;
    transform: translateX(0%);
  }
  &.${TRANSITION_CLASS_NAME}-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.${TRANSITION_CLASS_NAME}-exit-active {
    transition:
      opacity 500ms,
      transform 500ms;
    opacity: 0;
    transform: ${({ $isforward }) =>
      $isforward === 'true' ? 'translateX(-100%)' : 'translateX(100%)'};
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  background: none;
  min-height: 30px;
  height: fit-content;
  margin-bottom: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  line-height: 1.3em;
  padding: 8px 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;
