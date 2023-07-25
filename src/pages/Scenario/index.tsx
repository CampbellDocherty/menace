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
  TRANSITION_CLASS_NAME,
  TransitionContainer,
} from './styles';
import { AnswersContext } from '../../context/AnswersContext';
import { ProgressBar } from './ProgressBar';

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
  const answerQuestion = (isMenace: number) => {
    const currentQuestionNumber = currentScenario - 1;
    updateAnswers(currentQuestionNumber, isMenace);
  };

  const onAnswer = (answer: number) => {
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
          classNames={TRANSITION_CLASS_NAME}
        >
          <TransitionContainer ref={nodeRef} isforward={isForward.toString()}>
            <ScenarioTitle>{title}</ScenarioTitle>
            <ButtonContainer>
              <Button onClick={() => onAnswer(1)}>{menaceCta}</Button>
              <Button onClick={() => onAnswer(0)}>{notMenaceCta}</Button>
            </ButtonContainer>
          </TransitionContainer>
        </CSSTransition>
      </SwitchTransition>
    </ScenarioContainer>
  );
};
