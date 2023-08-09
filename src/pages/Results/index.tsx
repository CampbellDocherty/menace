import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { calculateResult, getPersonalityType } from './calculateResult';
import {
  Description,
  Container,
  ResultTitle,
  Temperature,
  Thermometer,
  Image,
} from './styles';
import { Button } from '../Scenario/styles';

export const Results = ({ onProceed }: { readonly onProceed: () => void }) => {
  const { answers } = useContext(AnswersContext);
  const result = useMemo(() => calculateResult(answers), [answers]);
  const personality = getPersonalityType(result);

  return (
    <>
      <Container>
        <ResultTitle>Menace-o-meter</ResultTitle>
        <Thermometer>
          <Temperature datavalue={`${Math.round(result)}%`} />
        </Thermometer>
        <Description>
          <Image src={personality.image.src} alt={personality.image.alt} />
          {personality.desc}
        </Description>
        <Button onClick={onProceed}>Leaderboard</Button>
      </Container>
    </>
  );
};
