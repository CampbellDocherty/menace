import { Pages } from '../Router';

type Scenarios = Exclude<Pages, Pages.HOME | Pages.CAPTCHA | Pages.RESULTS>;

const Scenario = ({
  currentScenario,
  onProceed,
}: {
  readonly currentScenario: Scenarios;
  readonly onProceed: () => void;
}) => {
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
      <button onClick={onProceed}>Menace</button>
      <button onClick={onProceed}>Not menace</button>
    </>
  );
};

export default Scenario;
