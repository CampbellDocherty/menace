import { Pages } from '../../Pages';
import { Scenarios } from './types';

const scenarioCopy = {
  [Pages.SCENARIO_ONE]: {
    title:
      'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Ikea together and spending multiple days in a row with them. Who would this person be to you?',
    fullMenaceCta: 'Just a friend',
    mostlyMenaceCta: "Sort of together but I'm pretending we're not",
    mostlyNoMenaceCta: 'Hmm, situationship',
    noMenaceCta: "Ikea!? We're married",
  },

  [Pages.SCENARIO_TWO]: {
    title: 'Scenario 2',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_THREE]: {
    title: 'Scenario 3',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_FOUR]: {
    title: 'Scenario 4',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_FIVE]: {
    title: 'Scenario 5',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_SIX]: {
    title: 'Scenario 6',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_SEVEN]: {
    title: 'Scenario 7',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_EIGHT]: {
    title: 'Scenario 8',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_NINE]: {
    title: 'Scenario 9',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
  [Pages.SCENARIO_TEN]: {
    title: 'Scenario 10',
    fullMenaceCta: '100 menace',
    mostlyMenaceCta: '75 menace',
    mostlyNoMenaceCta: '25 menace',
    noMenaceCta: '0 menace',
  },
};

type ScenarioCopy = {
  readonly title: string;
  readonly fullMenaceCta: string;
  readonly mostlyMenaceCta: string;
  readonly mostlyNoMenaceCta: string;
  readonly noMenaceCta: string;
};

export const useGetScenarioCopy = (scenario: Scenarios): ScenarioCopy => {
  return scenarioCopy[scenario];
};
