import { IntroText } from '../../styles';
import { Button } from '../Scenario/styles';
import {
  Disclaimer,
  Form,
  ImageCollage,
  Input,
  Label,
  MenaceImage,
  Title,
} from './styles';
import Angel from '../../assets/angel.png';
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
        <MenaceImage src={Angel} alt="Abolaji as an angel" />
        <Form>
          <Label htmlFor="nickname">Nickname</Label>
          <Input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="e.g. 00ab"
          />
          <Button onClick={onProceed}>Take the test</Button>
        </Form>
        <MenaceImage src={Devil} alt="Abolaji as a menace" />
      </ImageCollage>
      <Disclaimer>
        This is in no way medical advice. Please don&apos;t make any romantic
        decisions based on the advice given in this test.
      </Disclaimer>
    </>
  );
};
