import { useContext } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
import { Pages } from '../../Pages';

type Scenarios = Exclude<Pages, Pages.HOME | Pages.CAPTCHA | Pages.RESULTS>;

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

  const scenarioTitles: Record<Scenarios, string> = {
    [Pages.SCENARIO_ONE]: 'Scenario 1',
    [Pages.SCENARIO_TWO]: 'Scenario 2',
    [Pages.SCENARIO_THREE]: 'Scenario 3',
    [Pages.SCENARIO_FOUR]: 'Scenario 4',
    [Pages.SCENARIO_FIVE]: 'Scenario 5',
    [Pages.SCENARIO_SIX]: 'Scenario 6',
    [Pages.SCENARIO_SEVEN]: 'Scenario 7',
    [Pages.SCENARIO_EIGHT]: 'Scenario 8',
    [Pages.SCENARIO_NINE]: 'Scenario 9',
    [Pages.SCENARIO_TEN]: 'Scenario 10',
  };
  return (
    <>
      <p>{scenarioTitles[currentScenario]}</p>
      <button
        onClick={() => {
          answerQuestion(true);
          onProceed();
        }}
      >
        Menace
      </button>
      <button onClick={onProceed}>Not menace</button>
    </>
  );
};
