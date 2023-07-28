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
  border-radius: 4px;
  background: none;
  border: 1px solid black;
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

export const BubbleButton = styled.button`
  border-radius: 8px;
  background: none;
  min-height: 40px;
  height: fit-content;
  margin-bottom: 16px;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-align: center;
  line-height: 1.3em;
  padding: 8px;
  border: 2px solid black;
  box-sizing: border-box;

  /* &::after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;

    height: 4px;
    width: 4px;
    bottom: 10px;
    left: -2px;
    background: #fff;
    box-shadow: -4px -4px #fff, -4px 0 #fff, -8px 0 #fff, 0 -8px #fff,
      -4px 4px #000, -8px 4px #000, -12px 4px #000, -16px 4px #000, -12px 0 #000,
      -8px -4px #000, -4px -8px #000, 0 -4px #fff;
  } */
`;
