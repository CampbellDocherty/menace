import { useContext } from 'react';
import { Captcha } from '../pages/Captcha';
import { Home } from '../pages/Home';
import { Pages } from '../Pages';
import { Scenario } from '../pages/Scenario';
import { Results } from '../pages/Results';
import { Context } from '../context/Pages/Context';
import { Personality } from '../pages/Personality';

const Router = () => {
  const { page, proceed, back } = useContext(Context);

  switch (page) {
    case Pages.HOME:
      return <Home onProceed={proceed} />;
    case Pages.CAPTCHA:
      return <Captcha onProceed={proceed} />;
    case Pages.PERSONALITY:
      return <Personality onProceed={proceed} />;
    case Pages.RESULTS:
      return <Results />;
    default:
      return (
        <Scenario currentScenario={page} onProceed={proceed} goBack={back} />
      );
  }
};

export default Router;
