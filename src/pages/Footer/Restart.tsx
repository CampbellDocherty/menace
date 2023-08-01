import RestartSvg from '../../assets/restart.svg';
import { useContext } from 'react';
import { Context } from '../../context/Pages/Context';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { RestartButton, RestartIcon } from './styles';

export const Restart = () => {
  const { restart } = useContext(Context);
  const { reset } = useContext(AnswersContext);
  return (
    <RestartButton
      onClick={() => {
        reset();
        restart();
      }}
    >
      <RestartIcon src={RestartSvg} alt="restart the test" />
    </RestartButton>
  );
};
