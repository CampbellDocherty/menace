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
    previousAnswers || defaultAnswers
  );

  const updateAnswers = (scenario: number, answer: boolean) => {
    const updatedAnswers = { ...answers, [scenario]: answer };
    setAnswers(updatedAnswers);
  };
  const providerData = { answers, updateAnswers };

  return (
    <AnswersContext.Provider value={providerData}>
      {children}
    </AnswersContext.Provider>
  );
};
