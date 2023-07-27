/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext } from 'react';
import { Captcha } from '../pages/Captcha';
import { Home } from '../pages/Home';
import { Pages } from '../Pages';
import { Scenario } from '../pages/Scenario';
import { Results } from '../pages/Results';
import { Context } from '../context/Pages/Context';

const Router = ({
  initialPage = Pages.HOME,
  onTestStart = () => {},
}: {
  readonly initialPage?: Pages;
  readonly onTestStart?: (start: boolean) => void;
}) => {
  const { page, proceed, back, restart } = useContext(Context);

  switch (page) {
    case Pages.HOME:
      return (
        <Home
          onProceed={() => {
            proceed();
            onTestStart(true);
          }}
        />
      );
    case Pages.CAPTCHA:
      return <Captcha onProceed={proceed} />;
    case Pages.RESULTS:
      return (
        <Results
          onRestart={() => {
            restart();
            onTestStart(false);
          }}
        />
      );
    default:
      return (
        <Scenario currentScenario={page} onProceed={proceed} goBack={back} />
      );
  }
};

export default Router;
