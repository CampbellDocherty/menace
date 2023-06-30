import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
import { calculateResult } from './calculateResult';

export const Results = () => {
  const { answers } = useContext(AnswersContext);
  const result = useMemo(() => calculateResult(answers), [answers]);

  return (
    <>
      <p>Results</p>
      <p>{`You are ${result}% menace`}</p>
    </>
  );
};
