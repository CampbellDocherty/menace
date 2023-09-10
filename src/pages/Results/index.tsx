import { useContext, useMemo, useState } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { calculateResult, getPersonalityType } from './calculateResult';
import {
  Description,
  Container,
  ResultTitle,
  Image,
  Header,
  ResultTab,
  Tab,
  Content,
} from './styles';
import { Leaderboard } from '../Leaderboard';

export const Results = () => {
  const [isResultTab, setIsResultTab] = useState(true);
  const { answers } = useContext(AnswersContext);
  const result = useMemo(() => {
    const unroundedResult = calculateResult(answers);
    return Math.round(unroundedResult);
  }, [answers]);
  const personality = getPersonalityType(result);

  const onSubmit = () => {
    setIsResultTab(false);
  };

  return (
    <Container>
      <Header>
        <ResultTitle>{personality.type.alt}</ResultTitle>
        <Image src={personality.image.src} alt={personality.image.alt} />
      </Header>
      <ResultTab $isleftunderline={isResultTab}>
        <Tab onClick={() => setIsResultTab(true)}>Your result</Tab>
        <Tab onClick={onSubmit}>Leaderboard</Tab>
      </ResultTab>
      <Content>
        {isResultTab ? (
          <Description>{personality.desc}</Description>
        ) : (
          <Leaderboard />
        )}
      </Content>
    </Container>
  );
};
