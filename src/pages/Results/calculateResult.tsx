import { ScenarioAnswers } from '../../context/Answers/AnswersContext';

export const calculateResult = (answers: ScenarioAnswers) => {
  const answerValues = Object.values(answers);
  const sumOfAnswers = answerValues.reduce(
    (partialSum, answer) => partialSum + answer,
    0,
  );
  const resultAsPercentage = (sumOfAnswers / 10) * 100;
  return resultAsPercentage;
};
