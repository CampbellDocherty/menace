import { ScenarioAnswers } from '../../context/Answers/AnswersContext';
import Angel from '../../assets/angel.png';
import Devil from '../../assets/devil.png';

export const calculateResult = (answers: ScenarioAnswers) => {
  const answerValues = Object.values(answers);
  const sumOfAnswers = answerValues.reduce(
    (partialSum, answer) => partialSum + answer,
    0,
  );
  const resultAsPercentage = (sumOfAnswers / 10) * 100;
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

export const getPersonalityType = (result: number) => {
  if (result === 100) {
    return {
      intro: 'You are a',
      type: 'Menace',
      desc: `${result}% menace! That's too much menace for one person to harness. Honestly, we can't help you. Get therapy or something. Who knows, maybe out recommended media might save you!`,
      image: {
        src: Devil,
        alt: 'Abolaji as a menace',
      },
    };
  }
  if (result > 55) {
    return {
      intro: 'You are a',
      type: 'Menace',
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
      type: 'Just right',
      desc: "The perfect mix of menace and sweetness. You've got the right approach to your romantic life but no one is perfect. Check out our recommended media, it'll help you stay on your toes!",
      image: {
        src: Angel,
        alt: 'Abolaji as an angel',
      },
    };
  }
  return {
    intro: 'You are an',
    type: 'Angel',
    desc: "By our calculations you're an angel. That may sound like a good thing but we think a balanced diet of menace and sweetness is what's best for anyone. Get that number up with the help of our recommended media!",
    image: {
      src: Angel,
      alt: 'Abolaji as an angel',
    },
  };
};
