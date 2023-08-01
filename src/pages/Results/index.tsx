import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { calculateResult } from './calculateResult';
import {
  CopyContainer,
  Description,
  Container,
  ResultTitle,
  Temperature,
  Thermometer,
} from './styles';
import { MenaceImage } from '../Home/styles';
import Angel from '../../assets/angel.png';
import Devil from '../../assets/devil.png';

export const Results = () => {
  const { answers } = useContext(AnswersContext);
  const result = useMemo(() => calculateResult(answers), [answers]);
  const personality = useMemo(() => {
    if (result === 100) {
      return {
        title: 'Menace',
        desc: "100% menace! Even when we were developing this test we thought that was only possible in theory. That's too much menace for one person to harness. Our recommended media might just be the thing that can save you!",
        image: {
          src: Devil,
          alt: 'Abolaji as a menace',
        },
      };
    }
    if (result > 55) {
      return {
        title: 'Menace',
        desc: "You're definitely a menace. Maybe too much of a menace - but don't worry we're not judging! We think you can bring that number down with some self development. Check out our recommended media below!",
        image: {
          src: Devil,
          alt: 'Abolaji as a menace',
        },
      };
    }
    if (result >= 45 && result <= 55) {
      return {
        title: 'Just Right',
        desc: "The perfect mix of menace and sweetness. You've got the right approach to your romantic life but no one is perfect. Check out our recommneded media, it'll help you stay on your toes!",
        image: {
          src: Angel,
          alt: 'Abolaji as an angel',
        },
      };
    }
    return {
      title: 'Not a Menace',
      desc: "By our calculations you're not a menace. That may sound like a good thing but we think a balanced diet of menace and sweetness is what's best for anyone. You've got to get that number up for your own sake. Our recommended media could help you do just that!",
      image: {
        src: Angel,
        alt: 'Abolaji as an angel',
      },
    };
  }, [result]);

  return (
    <>
      <Container>
        <ResultTitle>Menace-o-meter</ResultTitle>
        <Thermometer>
          <Temperature datavalue={`${Math.round(result)}%`} />
        </Thermometer>
        <CopyContainer>
          <MenaceImage
            src={personality.image.src}
            alt={personality.image.alt}
          />
          <Description>{personality.desc}</Description>
        </CopyContainer>
      </Container>
    </>
  );
};
