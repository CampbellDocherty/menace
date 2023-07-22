import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/AnswersContext';
import { calculateResult } from './calculateResult';
import { ResultImage } from './styles';
import { Title } from '../Home/styles';
import { ResultBoxPlot } from './ResultBoxPlot';
import { BodyText } from '../../styles';

export const Results = () => {
  const { answers } = useContext(AnswersContext);
  const result = useMemo(() => calculateResult(answers), [answers]);
  const personality = useMemo(() => {
    if (result === 100) {
      return {
        title: 'Menace',
        desc: "100% menace! Even when we were developing this test we thought that was only possible in theory. That's too much menace for one person to harness. You've got to reduce your menace, no one can hold 100% for long! Our recommended media might just be the thing that can save you!",
      };
    }
    if (result > 60) {
      return {
        title: 'Menace',
        desc: "You're definitely a menace. Maybe too much of a menace - but don't worry we're not judging! We think you can bring that number down with some self development. Check out our recommended media below!",
      };
    }
    if (result >= 40 && result <= 60) {
      return {
        title: 'Just Right',
        desc: "You've got the perfect mix of menace and sweetness. You've got the right approach to your romantic life but no one is perfect. Check out our recommneded media, it'll help you stay on your toes!",
      };
    }
    return {
      title: 'Not a Menace',
      desc: "By our calculations you're not a menace. That may sound like a good thing but we think a balanced diet of menace and sweetness is what's best for anyone. You've got to get that number up for your own sake. Our recommended media could help you do just that!",
    };
  }, [result]);

  return (
    <>
      <ResultImage />
      <Title size={54}>{personality.title}</Title>
      <ResultBoxPlot result={result} />
      <BodyText>{personality.desc}</BodyText>
    </>
  );
};
