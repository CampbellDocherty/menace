import { useCallback, useState } from 'react';
import { Captcha } from './pages/Captcha/Captcha';
import { Home } from './pages/Home/Home';
import { Pages } from './Pages';
import { Scenario } from './pages/Scenario/Scenario';
import { Results } from './pages/Results/Results';

const Router = ({
  initialPage = Pages.HOME,
}: {
  readonly initialPage?: Pages;
}) => {
  const [page, setPage] = useState(initialPage);
  const onProceed = useCallback(() => {
    setPage(page + 1);
  }, [setPage, page]);

  switch (page) {
    case Pages.CAPTCHA:
      return <Captcha onProceed={onProceed} />;
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
      return <Scenario currentScenario={page} onProceed={onProceed} />;
    case Pages.RESULTS:
      return <Results />;
    default:
      return <Home onProceed={onProceed} />;
  }
};

export default Router;
