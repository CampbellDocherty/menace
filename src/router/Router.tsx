import { useContext } from 'react';
import { Home } from '../pages/Home';
import { Pages } from '../Pages';
import { Scenario } from '../pages/Scenario';
import { Context } from '../context/Pages/Context';
import { Personality } from '../pages/Personality';

const SCENARIOS = [
  Pages.SCENARIO_ONE,
  Pages.SCENARIO_TWO,
  Pages.SCENARIO_THREE,
  Pages.SCENARIO_FOUR,
  Pages.SCENARIO_FIVE,
  Pages.SCENARIO_SIX,
  Pages.BONUS,
  Pages.SCENARIO_SEVEN,
  Pages.SCENARIO_EIGHT,
  Pages.SCENARIO_NINE,
  Pages.SCENARIO_TEN,
];

const Router = () => {
  const { page, proceed, back } = useContext(Context);

  switch (page) {
    case Pages.PERSONALITY:
      return <Personality />;
    case Pages.SCENARIO_ONE:
    case Pages.SCENARIO_TWO:
    case Pages.SCENARIO_THREE:
    case Pages.SCENARIO_FOUR:
    case Pages.SCENARIO_FIVE:
    case Pages.SCENARIO_SIX:
    case Pages.BONUS:
    case Pages.SCENARIO_SEVEN:
    case Pages.SCENARIO_EIGHT:
    case Pages.SCENARIO_NINE:
    case Pages.SCENARIO_TEN:
      return (
        <Scenario currentScenario={page} onProceed={proceed} goBack={back} />
      );
    default:
      return <Home onProceed={proceed} />;
  }
};

export default Router;
