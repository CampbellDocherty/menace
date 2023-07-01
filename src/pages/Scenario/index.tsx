import { useContext } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
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
    <>
      <p data-testid={currentScenario}>{title}</p>
      <button
        onClick={() => {
          answerQuestion(true);
          onProceed();
        }}
      >
        {menaceCta}
      </button>
      <button
        onClick={() => {
          answerQuestion(false);
          onProceed();
        }}
      >
        {notMenaceCta}
      </button>
    </>
  );
};
