import { createContext } from 'react';
import { defaultAnswers } from './defaultAnswers';

export interface ScenarioAnswers {
  readonly 1: boolean | null;
  readonly 2: boolean | null;
  readonly 3: boolean | null;
  readonly 4: boolean | null;
  readonly 5: boolean | null;
  readonly 6: boolean | null;
  readonly 7: boolean | null;
  readonly 8: boolean | null;
  readonly 9: boolean | null;
  readonly 10: boolean | null;
}

interface AnswersContextType {
  readonly answers: ScenarioAnswers;
  readonly updateAnswers: (scenario: number, answer: boolean) => void;
}

export const AnswersContext = createContext<AnswersContextType>({
  answers: defaultAnswers,
  updateAnswers: () => {
    return;
  },
});
