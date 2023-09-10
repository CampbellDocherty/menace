import { useContext } from 'react';
import { Home } from '../pages/Home';
import { Pages } from '../Pages';
import { Scenario } from '../pages/Scenario';
import { Context } from '../context/Pages/Context';
import { Personality } from '../pages/Personality';

const Router = () => {
  const { page, proceed, back } = useContext(Context);

  switch (page) {
    case Pages.HOME:
      return <Home onProceed={proceed} />;
    case Pages.PERSONALITY:
      return <Personality />;
    default:
      return (
        <Scenario currentScenario={page} onProceed={proceed} goBack={back} />
      );
  }
};

export default Router;
