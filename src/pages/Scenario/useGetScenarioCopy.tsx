import { Pages } from '../../Pages';
import { Scenarios } from './types';

const scenarioCopy = {
  [Pages.SCENARIO_ONE]: {
    title:
      'Imagine you had been seeing someone for 3 months, only sleeping with them, going to Big Tesco together and spending multiple days in a row with them. Who would this person be to you?',
    cta: [
      { text: 'Just a "friend"', menaceValue: 1 },
      {
        text: 'Why do we need labels? 😏',
        menaceValue: 0.8,
      },
      { text: 'Lool, sneaky link', menaceValue: 0.4 },
      { text: "Big Tesco!? That's my soulmate", menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_TWO]: {
    title:
      'If a sneaky link comes over, how long are you allowing them to stay?',

    cta: [
      {
        text: "I'm kicking them out as soon as the deed is done",
        menaceValue: 1,
      },
      {
        text: 'As long as they like (I want more rounds)',
        menaceValue: 0.75,
      },
      { text: 'If we have a good time, mi casa es tu casa', menaceValue: 0.2 },
      { text: "They've gotta go but I'll pay for the uber", menaceValue: 0.3 },
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
      {
        text: 'With someone for 3 years?! Hahahahahahahahaha 😹',
        menaceValue: 0.9,
      },
      {
        text: 'Who leaves a job without a new one lined up??',
        menaceValue: 1,
      },
      {
        text: "I'm never moving on 😐",
        menaceValue: 0.55,
      },
      { text: 'As long as it takes to heal', menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_FOUR]: {
    title: 'How do you usually break up with people?',
    cta: [
      { text: '👻', menaceValue: 1 },
      {
        text: 'Text of course',
        menaceValue: 0.8,
      },
      { text: 'On the phone. Respectful and quick', menaceValue: 0.45 },
      { text: 'In person, I owe it to them', menaceValue: 0 },
      { text: "I'm always the one broken up with 😪", menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_FIVE]: {
    title: 'How many people are on your roster right now?',
    cta: [
      { text: "I've got a 5 aside team", menaceValue: 1 },
      {
        text: "2 but I'm stil taking applications ",
        menaceValue: 0.8,
      },
      {
        text: '1, my baby 🥰',
        menaceValue: 0,
      },
      { text: '00', menaceValue: 0 },
      { text: "What's a roster?", menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_SIX]: {
    title:
      "Imagine you're waiting for your date at the station. You keep making eye contact with a penggggg stranger, what are you doing?",
    cta: [
      {
        text: 'I have to get their insta',
        menaceValue: 1,
      },
      {
        text: "I would go over but I don't want to get caught",
        menaceValue: 0.65,
      },
      {
        text: "I'm too shy, I wouldn't move to them even if I wanted to 🙈",
        menaceValue: 0.25,
      },
      {
        text: 'I lower my gaze 😇',
        menaceValue: 0,
      },
    ],
  },
  [Pages.BONUS]: {
    title:
      "Oh no! Whilst you're getting their insta your date arrives, what do you tell them?",
    cta: [
      {
        text: "Don't worry! That's just my cousin, we haven't seen each other in ageeesss",
        menaceValue: 0.7,
      },
      {
        text: 'Gaslight, gaslight, gaslight',
        menaceValue: 1,
      },
      {
        text: '🏃‍♂️💨',
        menaceValue: 0.85,
      },
      {
        text: "I'd come clean",
        menaceValue: 0,
      },
    ],
  },
  [Pages.SCENARIO_SEVEN]: {
    title:
      "You're on holiday with your friends and after a wild night on the strip you end up cheating on your partner. What's your next move?",
    cta: [
      { text: 'What happens on holiday stays on holiday 🤐', menaceValue: 1 },
      {
        text: "Oh no I cheated 😣 I'd come clean and try to make ammends",
        menaceValue: 0,
      },
      {
        text: "I'd tell them before one of our friends snitches",
        menaceValue: 0.65,
      },
      {
        text: "I'm taking it to my grave",
        menaceValue: 0.8,
      },
    ],
  },
  [Pages.SCENARIO_EIGHT]: {
    title:
      "Under what conditions would you consider hooking up with your friend's ex?",
    cta: [
      {
        text: "Me and my friends have the same taste, I'll have what they're having 🍽",
        menaceValue: 1,
      },
      {
        text: 'Anything can happen on a night out 🤫',
        menaceValue: 0.8,
      },
      { text: "I'd only do it for love", menaceValue: 0.35 },
      { text: "Never ever! There's lines I won't cross", menaceValue: 0 },
    ],
  },
  [Pages.SCENARIO_NINE]: {
    title: 'What relationship do you have with your ex?',
    cta: [
      { text: "It's like we never left 🤞", menaceValue: 1 },
      {
        text: "I follow them on insta... it's caused a few arguments",
        menaceValue: 0.85,
      },
      { text: "If I see them out, it's all love", menaceValue: 0.25 },
      { text: "We're actually friends, no hanky panky", menaceValue: 0 },
      { text: "We don't get along 🙅‍♂️", menaceValue: 0.6 },
    ],
  },
  [Pages.SCENARIO_TEN]: {
    title:
      'You have a crush on someone but they say they\'re into your friend "AB", what\'s your next move?',
    cta: [
      { text: "Bad mouth AB, they're a menace anyway", menaceValue: 1 },
      {
        text: "I'm not telling AB because I'm bitter!",
        menaceValue: 0.35,
      },
      {
        text: "We'll see how long they are interested in AB after I work my magic 🪄",
        menaceValue: 0.55,
      },
      { text: "Tell AB, I'm sure they'll be good together 😊", menaceValue: 0 },
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
