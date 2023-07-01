import { ScenarioAnswers } from '../../context/AnswersContext';

export const calculateResult = (answers: ScenarioAnswers) => {
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
