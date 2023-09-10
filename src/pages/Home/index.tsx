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
  ErrorText,
} from './styles';
import Angel from '../../assets/angel.png';
import Devil from '../../assets/devil.png';
import TitleImage from '../../assets/title.png';
import { v4 as uuidv4 } from 'uuid';
import { useContext, useState } from 'react';
import { AnswersContext } from '../../context/Answers/AnswersContext';

export const Home = ({ onProceed }: { onProceed: () => void }) => {
  const { updateName, updateId } = useContext(AnswersContext);
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  const onTestStart = () => {
    if (nickname) {
      updateName(nickname);
      const id = uuidv4();
      updateId(id);
      onProceed();
    } else {
      setError('Enter a nickname');
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setNickname(event.target.value);
  };

  return (
    <>
      <Title src={TitleImage} alt="Are you a menace?" />
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
            onChange={onChange}
            value={nickname}
            onFocus={() => setError('')}
            type="text"
            name="nickname"
            id="nickname"
            placeholder="e.g. 00ab"
          />
          <ErrorText>{error}</ErrorText>
          <Button onClick={onTestStart}>Take the test</Button>
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
