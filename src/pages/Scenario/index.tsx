import { useContext } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
import {
  BackArrow,
  BackButton,
  Button,
  ButtonContainer,
  ScenarioContainer,
  ScenarioTitle,
} from './styles';
import { Scenarios } from './types';
import { useGetScenarioCopy } from './useGetScenarioCopy';
import ArrowSvg from '../../assets/arrow-back.svg';
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
  const { updateAnswers } = useContext(AnswersContext);
  const answerQuestion = (isMenace: boolean) => {
    const currentQuestionNumber = currentScenario - 1;
    updateAnswers(currentQuestionNumber, isMenace);
  };

  const { title, menaceCta, notMenaceCta } =
    useGetScenarioCopy(currentScenario);

  return (
    <ScenarioContainer data-testid={currentScenario}>
      <BackButton onClick={goBack}>
        <BackArrow src={ArrowSvg} alt="back arrow" />
      </BackButton>
      <ProgressBar currentScenario={currentScenario} />
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
