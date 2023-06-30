import { useContext, useMemo } from 'react';
import { AnswersContext, ScenarioAnswers } from '../../context/AnswersContext';

const calculateResult = (answers: ScenarioAnswers) => {
  const answerValues = Object.values(answers);
  const answersConvertedToBinary = answerValues.filter((answer: boolean) =>
    answer ? 1 : 0
  );
  const sumOfAnswers = answersConvertedToBinary.reduce(
    (partialSum, answer) => partialSum + answer,
    0
  );
  const resultAsPercentage = (sumOfAnswers / 10) * 100;
  return resultAsPercentage;
};

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
