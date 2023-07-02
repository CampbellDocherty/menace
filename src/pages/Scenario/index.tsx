import { useContext } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
import {
  Button,
  ButtonContainer,
  ScenarioContainer,
  ScenarioTitle,
} from './styles';
import { Scenarios } from './types';
import { useGetScenarioCopy } from './useGetScenarioCopy';

export const Scenario = ({
  currentScenario,
  onProceed,
}: {
  readonly currentScenario: Scenarios;
  readonly onProceed: () => void;
}) => {
  const { updateAnswers } = useContext(AnswersContext);
  const answerQuestion = (isMenace: boolean) => {
    const currentQuestionNumber = currentScenario - 1;
    updateAnswers(currentQuestionNumber, isMenace);
  };

  const { title, menaceCta, notMenaceCta } =
    useGetScenarioCopy(currentScenario);

  return (
    <ScenarioContainer data-testid={currentScenario}>
      <ScenarioTitle>{title}</ScenarioTitle>
      <ButtonContainer>
        <Button
          onClick={() => {
            answerQuestion(true);
            onProceed();
          }}
        >
          {menaceCta}
        </Button>
        <Button
          onClick={() => {
            answerQuestion(false);
            onProceed();
          }}
        >
          {notMenaceCta}
        </Button>
      </ButtonContainer>
    </ScenarioContainer>
  );
};
