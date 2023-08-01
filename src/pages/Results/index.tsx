import { useContext, useMemo } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';
import { calculateResult, getPersonalityType } from './calculateResult';
import {
  CopyContainer,
  Description,
  Container,
  ResultTitle,
  Temperature,
  Thermometer,
} from './styles';
import { MenaceImage } from '../Home/styles';

export const Results = () => {
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
