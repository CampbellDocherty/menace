import { useState } from 'react';
import { Captcha } from './Captcha/Captcha';
import { Home } from './Home/Home';
import Scenario from './Scenario/Scenario';

enum Pages {
  HOME,
  CAPTCHA,
  SCENARIO_ONE,
}

const Router = () => {
  const [page, setPage] = useState(Pages.HOME);

  switch (page) {
    case Pages.CAPTCHA:
      return <Captcha onProceed={() => setPage(Pages.SCENARIO_ONE)} />;
    case Pages.SCENARIO_ONE:
      return <Scenario />;
    default:
      return <Home onProceed={() => setPage(Pages.CAPTCHA)} />;
  }
};

export default Router;
