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
  ScenarioHeader,
  ScenarioTitle,
  TRANSITION_CLASS_NAME,
  TransitionContainer,
} from './styles';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { ProgressBar } from './ProgressBar';
import { useCreateScenarioRefs } from './useCreateScenarioRefs';
import { Pages } from '../../Pages';

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
  readonly onProceed: (numberOfPagesToProceed?: number) => void;
  readonly goBack: (numberOfPagesToGoBack?: number) => void;
}) => {
  const { answers } = useContext(AnswersContext);
  const [isForward, setIsForward] = useState(true);

  const scenarioRefs = useCreateScenarioRefs();
  const nodeRef = scenarioRefs[currentScenario - 2];

  const copy = useGetScenarioCopy(currentScenario);

  const { updateAnswers } = useContext(AnswersContext);
  const answerQuestion = (answer: number) => {
    const currentQuestionNumber = currentScenario - 1;
    updateAnswers(currentQuestionNumber, answer);
  };

  const onAnswer = (answer: number) => {
    setIsForward(true);
    answerQuestion(answer);

    if (currentScenario === Pages.SCENARIO_SIX && answer !== 1) {
      return onProceed(2);
    }
    return onProceed(1);
  };

  return (
    <ScenarioContainer data-testid={currentScenario}>
      <ScenarioHeader>
        <BackButton
          onClick={() => {
            setIsForward(false);
            if (
              currentScenario === Pages.SCENARIO_SEVEN &&
              answers[Pages.SCENARIO_SIX] !== 1
            ) {
              return goBack(2);
            }
            return goBack(1);
          }}
        >
          <BackArrow src={ArrowSvg} alt="back arrow" />
        </BackButton>
        <ProgressBar currentScenario={currentScenario} />
      </ScenarioHeader>
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
