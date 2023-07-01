import { Pages } from '../../Pages';
import { Scenarios } from './types';

const scenarioCopy = {
  [Pages.SCENARIO_ONE]: {
    title:
      'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Ikea together and spending multiple days in a row with them. Who would this person be to you?',
    menaceCta: 'Just a friend',
    notMenaceCta: "Ikea!? We're married",
  },

  [Pages.SCENARIO_TWO]: {
    title: 'Scenario 2',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_THREE]: {
    title: 'Scenario 3',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_FOUR]: {
    title: 'Scenario 4',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_FIVE]: {
    title: 'Scenario 5',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_SIX]: {
    title: 'Scenario 6',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_SEVEN]: {
    title: 'Scenario 7',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_EIGHT]: {
    title: 'Scenario 8',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_NINE]: {
    title: 'Scenario 9',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
  [Pages.SCENARIO_TEN]: {
    title: 'Scenario 10',
    menaceCta: 'Menace',
    notMenaceCta: 'Not menace',
  },
};

type ScenarioCopy = {
  readonly title: string;
  readonly menaceCta: string;
  readonly notMenaceCta: string;
};

export const useGetScenarioCopy = (scenario: Scenarios): ScenarioCopy => {
  return scenarioCopy[scenario];
};
