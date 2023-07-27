import { useContext, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import ArrowSvg from '../../assets/arrow-back.svg';
import { Scenarios } from './types';
import { CtaCopy, useGetScenarioCopy } from './useGetScenarioCopy';
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
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { ProgressBar } from './ProgressBar';
import { useCreateScenarioRefs } from './useCreateScenarioRefs';

const shuffle = (array: Array<CtaCopy>) => {
  const n = array.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

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

  const scenarioRefs = useCreateScenarioRefs();
  const nodeRef = scenarioRefs[currentScenario - 2];

  const copy = useGetScenarioCopy(currentScenario);

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
            nodeRef.current?.addEventListener('transitionend', done, false);
          }}
          classNames={TRANSITION_CLASS_NAME}
        >
          <TransitionContainer ref={nodeRef} $isforward={isForward.toString()}>
            <ScenarioTitle>{copy.title}</ScenarioTitle>
            <ButtonContainer>
              {shuffle(copy.cta).map(({ text, menaceValue }) => (
                <Button key={text} onClick={() => onAnswer(menaceValue)}>
                  {text}
                </Button>
              ))}
            </ButtonContainer>
          </TransitionContainer>
        </CSSTransition>
      </SwitchTransition>
    </ScenarioContainer>
  );
};
