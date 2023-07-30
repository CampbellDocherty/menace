import { Pages } from '../../Pages';
import { Scenarios } from './types';

const scenarioCopy = {
  [Pages.SCENARIO_ONE]: {
    title:
      'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Ikea together and spending multiple days in a row with them. Who would this person be to you?',
    cta: [
      { text: 'Just a friend', menaceValue: 1 },
      {
        text: 'I just needed a bedside table 😏',
        menaceValue: 0.75,
      },
      { text: 'Hmm, situationship', menaceValue: 0.25 },
      { text: "Ikea!? That's my partner", menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_TWO]: {
    title: 'If you have gone to a booty call, how long do you stay?',

    cta: [
      { text: "I'm out as soon as the deed is done", menaceValue: 1 },
      {
        text: "I'll talk a bit but I'm not staying the night",
        menaceValue: 0.75,
      },
      { text: 'Just for the night, out of decency', menaceValue: 0.25 },
      {
        text: 'All night... how else would I get my cuddles 🥺',
        menaceValue: 0,
      },
    ],
  },
  [Pages.SCENARIO_THREE]: {
    title:
      "Let's say you had been going out with someone for 3 years. How long would you wait to get with someone new after the breakup?",
    cta: [
      { text: 'With someone for 3 years?! Hahahahahahahahaha', menaceValue: 1 },
      {
        text: '3 days, a day for each year',
        menaceValue: 0.75,
      },
      {
        text: 'For the right person, I could be tempted pretty quickly',
        menaceValue: 0.25,
      },
      { text: 'A few months I think', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_FOUR]: {
    title: 'How do you usually break up with people?',
    cta: [
      { text: '👻', menaceValue: 1 },
      {
        text: 'Text of course',
        menaceValue: 0.75,
      },
      { text: 'On the phone. Respectful and quick', menaceValue: 0.25 },
      { text: 'In person, I owe it to them', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_FIVE]: {
    title: 'How many people are on your roster right now?',
    cta: [
      { text: "A lot, and there's room for more", menaceValue: 1 },
      {
        text: 'More than 3',
        menaceValue: 0.75,
      },
      { text: '0-3', menaceValue: 0.25 },
      { text: "What's a roster?", menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_SIX]: {
    title:
      "Imagine you are waiting for your date in a bar. You're talking to the cute bartender and you're really hitting it off. What do you do?",
    cta: [
      {
        text: 'Ask what time they get off and make sure your date ends before then',
        menaceValue: 1,
      },
      {
        text: 'Ask for their number',
        menaceValue: 0.75,
      },
      {
        text: 'Come back to the bar another time to ask them out',
        menaceValue: 0.25,
      },
      {
        text: 'My date is my date! Anything with the bartender is just harmless fun',
        menaceValue: 0,
      },
    ],
  },
  [Pages.SCENARIO_SEVEN]: {
    title:
      "You're on holiday with your friends and after a wild night on the strip you end up cheating on your partner. What is your next move?",
    cta: [
      { text: 'What happens on holiday stays on holiday 🤷‍♂️', menaceValue: 1 },
      {
        text: "Cheating on holiday doesn't count",
        menaceValue: 0.75,
      },
      { text: "I'd tell them, but not straight away", menaceValue: 0.25 },
      {
        text: "I'd come clean immediately 😣",
        menaceValue: 0,
      },
    ],
  },
  [Pages.SCENARIO_EIGHT]: {
    title:
      "Under what conditions would you consider getting with your friend's ex?",
    cta: [
      {
        text: "Name the time and place I'm in, it's not my fault my friends have great taste 🤷‍♂️",
        menaceValue: 1,
      },
      {
        text: 'Anything can happen on a night out 🤫',
        menaceValue: 0.75,
      },
      { text: "I'd only do it for love", menaceValue: 0.25 },
      { text: 'Never ever!', menaceValue: 0 },
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
