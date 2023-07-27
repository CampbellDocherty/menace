import { ReactNode, useMemo, useState } from 'react';

import { AnswersContext, ScenarioAnswers } from './AnswersContext';
import { defaultAnswers } from './defaultAnswers';

export const AnswersProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const previousAnswers = useMemo(() => {
    const answersFromStorage = localStorage.getItem('previousAnswers');
    if (answersFromStorage) return JSON.parse(answersFromStorage);
    return null;
  }, []);

  const [answers, setAnswers] = useState<ScenarioAnswers>(
    previousAnswers || defaultAnswers,
  );

  const updateAnswers = (scenario: number, answer: number) => {
    const updatedAnswers = { ...answers, [scenario]: answer };
    localStorage.setItem('previousAnswers', JSON.stringify(updatedAnswers));
    setAnswers(updatedAnswers);
  };

  const reset = () => {
    localStorage.removeItem('previousAnswers');
    setAnswers(defaultAnswers);
  };

  const providerData = { answers, updateAnswers, reset };

  return (
    <AnswersContext.Provider value={providerData}>
      {children}
    </AnswersContext.Provider>
  );
};
