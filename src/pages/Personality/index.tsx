import { useContext, useEffect, useMemo, useState } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import {
  calculateMultiplier,
  calculateResult,
  getPersonalityType,
} from '../Results/calculateResult';
import {
  Temperature,
  Thermometer,
  Image,
  Container,
  FadeInText,
  FadeInTitle,
  FadeInImage,
  LeaderboardContainer,
} from './styles';
import { BodyText } from '../../styles';
import QuestionMark from '../../assets/question-mark.png';
import { addUser } from '../../firebase/database';
import { Leaderboard } from '../Leaderboard';

export const Personality = () => {
  const { answers, id, name } = useContext(AnswersContext);
  const result = useMemo(() => {
    const unroundedResult = calculateResult(answers);
    return Math.round(unroundedResult);
  }, [answers]);
  const personality = getPersonalityType(result);
  const multiplier = useMemo(() => calculateMultiplier(answers), [answers]);

  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsCalculating(false), 2000);
  }, []);

  useEffect(() => {
    const details = { name, result, multiplier, completed: Date.now() };
    addUser(id, details);
  }, []);

  if (isCalculating) {
    return (
      <Container>
        <Image src={QuestionMark} alt="question mark" />
        <BodyText>Calculating result...</BodyText>
      </Container>
    );
  }

  return (
    <Container>
      <FadeInText>{personality.intro}</FadeInText>
      <FadeInTitle>{personality.type}</FadeInTitle>
      <FadeInImage src={personality.image.src} alt={personality.image.alt} />
      <Thermometer>
        <Temperature datavalue={`${Math.round(result)}%`} />
      </Thermometer>
      <LeaderboardContainer>
        <Leaderboard />
      </LeaderboardContainer>
    </Container>
  );
};
