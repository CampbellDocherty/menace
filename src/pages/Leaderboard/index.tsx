import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { format } from 'date-fns';
import {
  calculateMultiplier,
  calculateResult,
} from '../Results/calculateResult';
import Devil from '../../assets/devil.png';
import { Cell, Heading, Multiplier, Table } from './styles';

export const Leaderboard = () => {
  const { answers, name } = useContext(AnswersContext);
  const result = useMemo(() => calculateResult(answers), [answers]);
  const multiplier = useMemo(() => calculateMultiplier(answers), [answers]);

  return (
    <Table>
      <thead>
        <tr>
          <Heading>Rank</Heading>
          <Heading>Name</Heading>
          <Heading>Score</Heading>
          <Heading>Multiplier</Heading>
          <Heading>Submitted</Heading>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Cell>#1</Cell>
          <Cell>{name}</Cell>
          <Cell>{result}%</Cell>
          <Cell>
            <Multiplier>
              <p>x{multiplier}</p>
              <img src={Devil} alt="Abolaji as a devil" />
            </Multiplier>
          </Cell>
          <Cell>{format(Date.now(), 'dd MMM yy')}</Cell>
        </tr>
      </tbody>
    </Table>
  );
};
