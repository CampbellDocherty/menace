import { Pages } from '../../Pages';
import { Scenarios } from './types';

const scenarioCopy = {
  [Pages.SCENARIO_ONE]: {
    title:
      'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Ikea together and spending multiple days in a row with them. Who would this person be to you?',
    cta: [
      { text: 'Just a friend', menaceValue: 1 },
      {
        text: "Sort of together but I'm pretending we're not",
        menaceValue: 0.75,
      },
      { text: 'Hmm, situationship', menaceValue: 0.25 },
      { text: "Ikea!? We're married", menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_TWO]: {
    title: 'Scenario 2',

    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_THREE]: {
    title: 'Scenario 3',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_FOUR]: {
    title: 'Scenario 4',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_FIVE]: {
    title: 'Scenario 5',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_SIX]: {
    title: 'Scenario 6',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_SEVEN]: {
    title: 'Scenario 7',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_EIGHT]: {
    title: 'Scenario 8',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_NINE]: {
    title: 'Scenario 9',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_TEN]: {
    title: 'Scenario 10',
    cta: [
      { text: '100 menace', menaceValue: 1 },
      {
        text: '75 menace',
        menaceValue: 0.75,
      },
      { text: '25 menace', menaceValue: 0.25 },
      { text: '0 menace', menaceValue: 0 },
    ],
  },
};

export type CtaCopy = {
  readonly text: string;
  readonly menaceValue: number;
};

type ScenarioCopy = {
  readonly title: string;
  cta: Array<CtaCopy>;
};

export const useGetScenarioCopy = (scenario: Scenarios): ScenarioCopy =>
  scenarioCopy[scenario];
