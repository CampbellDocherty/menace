import { RestartButton, RestartIcon } from './styles';
import RestartSvg from './assets/restart.svg';
import { useContext } from 'react';
import { Context } from './context/Pages/Context';
import { Pages } from './Pages';
import { AnswersContext } from './context/Answers/AnswersContext';

export const Restart = () => {
  const { page, restart } = useContext(Context);
  const { reset } = useContext(AnswersContext);
  const testStarted = page !== Pages.HOME;
  return (
    <RestartButton
      $teststarted={testStarted}
      onClick={() => {
        reset();
        restart();
      }}
    >
      <RestartIcon src={RestartSvg} alt="restart the test" />
    </RestartButton>
  );
};
