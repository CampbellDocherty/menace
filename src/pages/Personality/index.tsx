import { useContext, useEffect, useMemo, useState } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { calculateResult, getPersonalityType } from './calculateResult';
import {
  Temperature,
  Thermometer,
  Image,
  ResultContainer,
  FadeInText,
  FadeInTitle,
  FadeInButton,
} from './styles';
import { BodyText } from '../../styles';

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
      <ResultContainer>
        <Image src={personality.image.src} alt={personality.image.alt} />
        <BodyText>Calculating result...</BodyText>
      </ResultContainer>
    );
  }

  return (
    <ResultContainer>
      <FadeInText>{personality.intro}</FadeInText>
      <FadeInTitle>{personality.type}</FadeInTitle>
      <Thermometer>
        <Temperature datavalue={`${Math.round(result)}%`} />
      </Thermometer>
      <FadeInButton onClick={onProceed}>Continue</FadeInButton>
    </ResultContainer>
  );
};
