import { useContext, useEffect, useMemo, useState } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import {
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
  FadeInButton,
  FadeInImage,
} from './styles';
import { BodyText } from '../../styles';
import QuestionMark from '../../assets/question-mark.png';

export const Personality = ({
  onProceed,
}: {
  readonly onProceed: () => void;
}) => {
  const { answers } = useContext(AnswersContext);
  const result = useMemo(() => {
    const unroundedResult = calculateResult(answers);
    return Math.round(unroundedResult);
  }, [answers]);
  const personality = getPersonalityType(result);

  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsCalculating(false), 2000);
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
      <FadeInButton onClick={() => onProceed()}>Continue</FadeInButton>
    </Container>
  );
};
