import { useContext, useRef, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import ArrowSvg from '../../assets/arrow-back.svg';
import { Scenarios } from './types';
import { useGetScenarioCopy } from './useGetScenarioCopy';
import {
  BackArrow,
  BackButton,
  Button,
  ButtonContainer,
  ScenarioContainer,
  ScenarioTitle,
} from './styles';
import { AnswersContext } from '../../context/AnswersContext';
import { ProgressBar } from './ProgressBar';
import { styled } from 'styled-components';

const CLASS_NAME = `fade`;

const Container = styled.section<{
  readonly isForward: boolean;
}>`
  &.${CLASS_NAME}-enter {
    opacity: 0;
    transform: ${({ isForward }) =>
      isForward ? 'translateX(100%)' : 'translateX(-100%)'};
  }
  &.${CLASS_NAME}-enter-active {
    transition: opacity 500ms, transform 500ms;
    opacity: 1;
    transform: translateX(0%);
  }
  &.${CLASS_NAME}-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.${CLASS_NAME}-exit-active {
    transition: opacity 500ms, transform 500ms;
    opacity: 0;
    transform: ${({ isForward }) =>
      isForward ? 'translateX(-100%)' : 'translateX(100%)'};
  }
`;

export const Scenario = ({
  currentScenario,
  onProceed,
  goBack,
}: {
  readonly currentScenario: Scenarios;
  readonly onProceed: () => void;
  readonly goBack: () => void;
}) => {
  const [isForward, setIsForward] = useState(true);

  const sceanrioOneRef = useRef<HTMLDivElement>(null);
  const scenarioTwoRef = useRef<HTMLDivElement>(null);
  const scenarioThreeRef = useRef<HTMLDivElement>(null);
  const scenarioFourRef = useRef<HTMLDivElement>(null);
  const scenarioFiveRef = useRef<HTMLDivElement>(null);
  const scenarioSixRef = useRef<HTMLDivElement>(null);
  const scenarioSevenRef = useRef<HTMLDivElement>(null);
  const scenarioEightRef = useRef<HTMLDivElement>(null);
  const scenarioNineRef = useRef<HTMLDivElement>(null);
  const scenarioTenRef = useRef<HTMLDivElement>(null);
  const scenarioRefs = [
    sceanrioOneRef,
    scenarioTwoRef,
    scenarioThreeRef,
    scenarioFourRef,
    scenarioFiveRef,
    scenarioSixRef,
    scenarioSevenRef,
    scenarioEightRef,
    scenarioNineRef,
    scenarioTenRef,
  ];
  const nodeRef = scenarioRefs[currentScenario - 2];

  const { title, menaceCta, notMenaceCta } =
    useGetScenarioCopy(currentScenario);

  const { updateAnswers } = useContext(AnswersContext);
  const answerQuestion = (isMenace: boolean) => {
    const currentQuestionNumber = currentScenario - 1;
    updateAnswers(currentQuestionNumber, isMenace);
  };

  const onAnswer = (answer: boolean) => {
    setIsForward(true);
    answerQuestion(answer);
    onProceed();
  };

  return (
    <ScenarioContainer data-testid={currentScenario}>
      <BackButton
        onClick={() => {
          setIsForward(false);
          goBack();
        }}
      >
        <BackArrow src={ArrowSvg} alt="back arrow" />
      </BackButton>
      <ProgressBar currentScenario={currentScenario} />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentScenario}
          nodeRef={nodeRef}
          addEndListener={(done: () => void) => {
            nodeRef.current!.addEventListener('transitionend', done, false);
          }}
          classNames={CLASS_NAME}
        >
          <Container ref={nodeRef} isForward={isForward}>
            <ScenarioTitle>{title}</ScenarioTitle>
            <ButtonContainer>
              <Button onClick={() => onAnswer(true)}>{menaceCta}</Button>
              <Button onClick={() => onAnswer(false)}>{notMenaceCta}</Button>
            </ButtonContainer>
          </Container>
        </CSSTransition>
      </SwitchTransition>
    </ScenarioContainer>
  );
};
