/* eslint-disable @typescript-eslint/no-empty-function */
import { useCallback, useEffect, useState } from 'react';
import { Captcha } from '../pages/Captcha';
import { Home } from '../pages/Home';
import { Pages } from '../Pages';
import { Scenario } from '../pages/Scenario';
import { Results } from '../pages/Results';

const Router = ({
  initialPage = Pages.HOME,
  onTestStart = () => {},
}: {
  readonly initialPage?: Pages;
  readonly onTestStart?: () => void;
}) => {
  const lastVisitedPage = Number(localStorage.getItem('lastVisitedPage'));
  const [page, setPage] = useState(lastVisitedPage || initialPage);
  localStorage.setItem('lastVisitedPage', `${page}`);

  const onProceed = useCallback(() => {
    if (page === Pages.HOME) {
      onTestStart();
    }
    setPage(page + 1);
  }, [setPage, page]);

  const goBack = useCallback(() => {
    setPage(page - 1);
  }, [setPage, page]);

  const onReset = useCallback(() => {
    onTestStart();
    setPage(Pages.HOME);
  }, [setPage, page]);

  switch (page) {
    case Pages.HOME:
      return <Home onProceed={onProceed} />;
    case Pages.CAPTCHA:
      return <Captcha onProceed={onProceed} />;
    case Pages.RESULTS:
      return <Results onReset={onReset} />;
    default:
      return (
        <Scenario
          currentScenario={page}
          onProceed={onProceed}
          goBack={goBack}
        />
      );
  }
};

export default Router;
