import { useState } from 'react';
import { Captcha } from './Captcha/Captcha';
import { Home } from './Home/Home';
import Scenario from './Scenario/ScenarioOne';

export enum Pages {
  HOME,
  CAPTCHA,
  SCENARIO_ONE,
  SCENARIO_TWO,
  SCENARIO_THREE,
  SCENARIO_FOUR,
  SCENARIO_FIVE,
  SCENARIO_SIX,
  SCENARIO_SEVEN,
  SCENARIO_EIGHT,
  SCENARIO_NINE,
  SCENARIO_TEN,
  RESULTS,
}

const Router = ({
  initialPage = Pages.HOME,
}: {
  readonly initialPage?: Pages;
}) => {
  const [page, setPage] = useState(initialPage);

  switch (page) {
    case Pages.CAPTCHA:
      return <Captcha onProceed={() => setPage(Pages.SCENARIO_ONE)} />;
    case Pages.SCENARIO_ONE:
    case Pages.SCENARIO_TWO:
    case Pages.SCENARIO_THREE:
    case Pages.SCENARIO_FOUR:
    case Pages.SCENARIO_FIVE:
    case Pages.SCENARIO_SIX:
    case Pages.SCENARIO_SEVEN:
    case Pages.SCENARIO_EIGHT:
    case Pages.SCENARIO_NINE:
    case Pages.SCENARIO_TEN:
      return (
        <Scenario currentScenario={page} onProceed={() => setPage(page + 1)} />
      );
    case Pages.RESULTS:
      return <p>Results</p>;
    default:
      return <Home onProceed={() => setPage(Pages.CAPTCHA)} />;
  }
};

export default Router;
