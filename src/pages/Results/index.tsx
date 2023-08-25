import { useContext, useMemo, useState } from 'react';
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
  Image,
  Header,
  ResultTab,
  Tab,
} from './styles';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../../firebase/database';
import { Leaderboard } from '../Leaderboard';

export const Results = () => {
  const [isResultTab, setIsResultTab] = useState(true);
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
    setIsResultTab(false);
  };

  return (
    <Container>
      <Header>
        <ResultTitle>{personality.type}</ResultTitle>
        <Image src={personality.image.src} alt={personality.image.alt} />
      </Header>
      <ResultTab $isleftunderline={isResultTab}>
        <Tab onClick={() => setIsResultTab(true)}>Your result</Tab>
        <Tab onClick={onSubmit}>Leaderboard</Tab>
      </ResultTab>
      {isResultTab ? (
        <Description>{personality.desc}</Description>
      ) : (
        <Leaderboard />
      )}
    </Container>
  );
};
