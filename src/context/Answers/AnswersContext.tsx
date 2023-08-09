/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { defaultAnswers } from './defaultAnswers';

export interface ScenarioAnswers {
  readonly 1: number | null;
  readonly 2: number | null;
  readonly 3: number | null;
  readonly 4: number | null;
  readonly 5: number | null;
  readonly 6: number | null;
  readonly 7: number | null;
  readonly 8: number | null;
  readonly 9: number | null;
  readonly 10: number | null;
}

interface AnswersContextType {
  readonly answers: ScenarioAnswers;
  readonly name: string;
  readonly id: string;
  readonly updateName: (name: string) => void;
  readonly updateAnswers: (scenario: number, answer: number) => void;
  readonly updateId: (id: string) => void;
  readonly reset: () => void;
}

export const AnswersContext = createContext<AnswersContextType>({
  answers: defaultAnswers,
  id: '',
  name: '',
  updateId: () => {},
  updateName: () => {},
  updateAnswers: () => {},
  reset: () => {},
});
