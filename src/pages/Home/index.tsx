import { IntroText } from '../../styles';
import { Button } from '../Scenario/styles';
import { Disclaimer, ImageCollage, MenaceImage, Title } from './styles';
import AngelOne from '../../assets/angel1.png';
import Devil from '../../assets/devil.png';

export const Home = ({ onProceed }: { onProceed: () => void }) => {
  return (
    <>
      <Title>Are you a menace?</Title>
      <IntroText>
        Is that a bad thing? In a few short minutes you will know the answer to
        these questions. Take the certified &apos;Menace&apos; personality test
        and find out just how much of a menace you really are. With questions
        devised by leading thinkers in the field and music provided by the one
        and only 00ab.
      </IntroText>
      <ImageCollage>
        <MenaceImage src={AngelOne} alt="Take the test #1" />
        <Button onClick={onProceed}>Take the test</Button>
        <MenaceImage src={Devil} alt="Take the test #3" />
      </ImageCollage>
      <Disclaimer>
        This is in no way medical advice. Please don&apos;t make any romantic
        decisions based on the advice given in this test.
      </Disclaimer>
    </>
  );
};
