import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import {
  calculateMultiplier,
  calculateResult,
  getPersonalityType,
} from './calculateResult';
import {
  Description,
  Container,
  ResultTitle,
  Temperature,
  Thermometer,
  Image,
} from './styles';
import { Button } from '../Scenario/styles';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../../firebase/database';

export const Results = ({ onProceed }: { readonly onProceed: () => void }) => {
  const { answers, name, updateId } = useContext(AnswersContext);
  const result = useMemo(() => {
    const unroundedResult = calculateResult(answers);
    return Math.round(unroundedResult);
  }, [answers]);
  const personality = getPersonalityType(result);
  const multiplier = useMemo(() => calculateMultiplier(answers), [answers]);

  const onSubmit = () => {
    const id = uuidv4();
    const details = { name, result, multiplier, completed: Date.now() };
    addUser(id, details);
    updateId(id);
    onProceed();
  };

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
        <Button onClick={onSubmit}>Leaderboard</Button>
      </Container>
    </>
  );
};
