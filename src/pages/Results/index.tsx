import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
import { calculateResult } from './calculateResult';
import { ResultImage } from './styles';
import { Title } from '../Home/styles';
import { ResultBoxPlot } from './ResultBoxPlot';

export const Results = () => {
  const { answers } = useContext(AnswersContext);
  const result = useMemo(() => calculateResult(answers), [answers]);
  const personality = useMemo(() => {
    if (result >= 60) {
      return 'Menace';
    }
  }, [result]);

  return (
    <>
      <ResultImage />
      <Title size={60}>{personality}</Title>
      <ResultBoxPlot result={result} />
    </>
  );
};
