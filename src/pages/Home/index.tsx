import { IntroText } from '../../styles';
import { Button } from '../Scenario/styles';
import {
  Footer,
  ImageCollage,
  MenaceButton,
  MenaceImage,
  Title,
} from './styles';
import AngelOne from '../../assets/angel1.png';
import AngelTwo from '../../assets/angel2.png';
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
        <MenaceButton>
          <MenaceImage
            onClick={onProceed}
            src={AngelOne}
            alt="Take the test #1"
          />
        </MenaceButton>
        <MenaceButton>
          <MenaceImage
            onClick={onProceed}
            src={AngelTwo}
            alt="Take the test #2"
          />
        </MenaceButton>
        <MenaceButton>
          <MenaceImage onClick={onProceed} src={Devil} alt="Take the test #3" />
        </MenaceButton>
      </ImageCollage>
      <Footer>
        This is in no way medical advice. Please don&apos;t make any romantic
        decisions based on the advice given in this test.
      </Footer>
    </>
  );
};
