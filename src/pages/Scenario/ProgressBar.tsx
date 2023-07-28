import { Scenarios } from './types';
import { styled } from 'styled-components';

const Bar = styled.div`
  width: 60%;
  height: 20px;
  border-radius: 8px;
  background-color: #eeeeee;
  margin-bottom: 32px;
  margin-top: 40px;
`;

const ProgressAmount = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 100%;
  border-radius: 8px;
  background-color: lightblue;
  transition: width 0.2s ease-in;
`;

const NUMBER_OF_SCENARIOS = 10;

export const ProgressBar = ({
  currentScenario,
}: {
  readonly currentScenario: Scenarios;
}) => {
  const currentScenarioNumber = currentScenario - 1;
  const percentageOfScenariosComplete =
    (currentScenarioNumber / NUMBER_OF_SCENARIOS) * 100;
  return (
    <Bar>
      <ProgressAmount width={percentageOfScenariosComplete} />
    </Bar>
  );
};