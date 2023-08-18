/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { Pages } from '../../Pages';

interface AnswersContextType {
  readonly page: Pages;
  readonly proceed: (numberOfPagesToProceed?: number) => void;
  readonly back: () => void;
  readonly restart: () => void;
}

export const Context = createContext<AnswersContextType>({
  page: Pages.HOME,
  proceed: () => {},
  back: () => {},
  restart: () => {},
});
