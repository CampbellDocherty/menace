import { createContext } from 'react';
import { defaultAnswers } from './defaultAnswers';

interface AnswersContextType {
  readonly scenarioOne: boolean | null;
  readonly scenarioTwo: boolean | null;
  readonly scenarioThree: boolean | null;
  readonly scenarioFour: boolean | null;
  readonly scenarioFive: boolean | null;
  readonly scenarioSix: boolean | null;
  readonly scenarioSeven: boolean | null;
  readonly scenarioEight: boolean | null;
  readonly scenarioNine: boolean | null;
  readonly scenarioTen: boolean | null;
}

export const AnswersContext = createContext<AnswersContextType>(defaultAnswers);
