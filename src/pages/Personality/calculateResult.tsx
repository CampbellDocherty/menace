import { ScenarioAnswers } from '../../context/Answers/AnswersContext';
import Angel from '../../assets/angel.png';
import Devil from '../../assets/devil.png';
import AngelType from '../../assets/angel-title.png';
import MenaceType from '../../assets/menace.png';
import JustRightType from '../../assets/just-right.png';

export const calculateResult = (answers: ScenarioAnswers) => {
  const answerValues = Object.values(answers);
  const sumOfAnswers = answerValues.reduce(
    (partialSum, answer) => partialSum + answer,
    0,
  );
  const resultAsPercentage = (sumOfAnswers / answerValues.length) * 100;
  return resultAsPercentage;
};

export const calculateMultiplier = (answers: ScenarioAnswers) => {
  const answerValues = Object.values(answers);
  const amountOf1Answers = answerValues.reduce((partialSum, answer) => {
    if (answer === 1) return partialSum + answer;
    return partialSum + 0;
  }, 0);

  return amountOf1Answers;
};

type Image = {
  src: string;
  alt: string;
};

type PersonalityType = {
  intro: string;
  type: Image;
  desc: string;
  image: Image;
};

export const getPersonalityType = (result: number): PersonalityType => {
  if (result > 55) {
    return {
      intro: 'You are a',
      type: {
        src: MenaceType,
        alt: 'Menace',
      },
      desc: "You're definitely a menace. Maybe too much of a menace - but don't worry we're not judging! We think you can bring that number down with some self development. Check out our recommended media below!",
      image: {
        src: Devil,
        alt: 'Abolaji as a menace',
      },
    };
  }
  if (result >= 45 && result <= 55) {
    return {
      intro: 'You are',
      type: {
        src: JustRightType,
        alt: 'Just right',
      },
      desc: "The perfect mix of menace and sweetness. You've got the right approach to your romantic life but no one is perfect. Check out our recommended media, it'll help you stay on your toes!",
      image: {
        src: Angel,
        alt: 'Abolaji as an angel',
      },
    };
  }
  return {
    intro: 'You are an',
    type: {
      src: AngelType,
      alt: 'Angel',
    },
    desc: "By our calculations you're an angel. That may sound like a good thing but we think a balanced diet of menace and sweetness is what's best for anyone. Get that number up with the help of our recommended media!",
    image: {
      src: Angel,
      alt: 'Abolaji as an angel',
    },
  };
};
