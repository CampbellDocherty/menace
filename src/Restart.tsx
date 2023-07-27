/* eslint-disable @typescript-eslint/no-empty-function */
import { RestartButton, RestartIcon } from './styles';
import RestartSvg from './assets/restart.svg';
import { useContext } from 'react';
import { Context } from './context/Pages/Context';

export const Restart = ({
  onTestStart = () => {},
}: {
  readonly onTestStart?: (start: boolean) => void;
}) => {
  const { restart } = useContext(Context);
  return (
    <RestartButton
      onClick={() => {
        onTestStart(false);
        restart();
      }}
    >
      <RestartIcon src={RestartSvg} alt="restart the test" />
    </RestartButton>
  );
};
