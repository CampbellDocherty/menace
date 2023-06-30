import { ReactNode, useState } from 'react';

import { AnswersContext, ScenarioAnswers } from './AnswersContext';
import { defaultAnswers } from './defaultAnswers';

export const AnswersProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [answers, setAnswers] = useState<ScenarioAnswers>(defaultAnswers);

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
