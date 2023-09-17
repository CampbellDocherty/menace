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

  const previousName = useMemo(() => {
    const nameFromStorage = localStorage.getItem('nickname');
    if (nameFromStorage) return nameFromStorage;
    return null;
  }, []);

  const previousEmail = useMemo(() => {
    const emailFromStorage = localStorage.getItem('email');
    if (emailFromStorage) return emailFromStorage;
    return null;
  }, []);

  const previousId = useMemo(() => {
    const idFromStorage = localStorage.getItem('id');
    if (idFromStorage) return idFromStorage;
    return null;
  }, []);

  const [answers, setAnswers] = useState<ScenarioAnswers>(
    previousAnswers || defaultAnswers,
  );

  const [name, setName] = useState(previousName || '');
  const [email, setEmail] = useState(previousEmail || '');
  const [id, setId] = useState(previousId || '');

  const updateName = (nickname: string) => {
    localStorage.setItem('nickname', nickname);
    setName(nickname);
  };

  const updateEmail = (email: string) => {
    localStorage.setItem('email', email);
    setEmail(email);
  };

  const updateId = (id: string) => {
    localStorage.setItem('id', id);
    setId(id);
  };

  const updateAnswers = (scenario: number, answer: number) => {
    const updatedAnswers = { ...answers, [scenario]: answer };
    localStorage.setItem('previousAnswers', JSON.stringify(updatedAnswers));
    setAnswers(updatedAnswers);
  };

  const reset = () => {
    localStorage.removeItem('previousAnswers');
    setAnswers(defaultAnswers);
  };

  const providerData = {
    answers,
    name,
    email,
    id,
    updateId,
    updateName,
    updateEmail,
    updateAnswers,
    reset,
  };

  return (
    <AnswersContext.Provider value={providerData}>
      {children}
    </AnswersContext.Provider>
  );
};
