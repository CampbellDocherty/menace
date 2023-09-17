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
  ImageColumn,
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
  const [email, setEmail] = useState('');
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

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setNickname(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
        <ImageColumn>
          <MenaceImage src={Angel} alt="Abolaji as an angel" />
          <MenaceImage src={Devil} alt="Abolaji as a devil" />
        </ImageColumn>
        <Form>
          <Label htmlFor="nickname">Nickname</Label>
          <Input
            $isError={!!error}
            onChange={onChangeNickname}
            value={nickname}
            onFocus={() => setError('')}
            type="text"
            name="nickname"
            id="nickname"
            placeholder="e.g. 00ab"
          />
          <ErrorText>{error}</ErrorText>
          <Label htmlFor="email">Email (optional)</Label>
          <Input
            onChange={onChangeEmail}
            value={email}
            onFocus={() => setError('')}
            type="email"
            name="email"
            id="email"
            placeholder="e.g. ab@gmail.com"
          />
          <Button onClick={onTestStart}>Take the test</Button>
        </Form>
        <ImageColumn>
          <MenaceImage src={Devil} alt="Abolaji as a devil" />
          <MenaceImage src={Angel} alt="Abolaji as an angel" />
        </ImageColumn>
      </ImageCollage>
      <Disclaimer>
        This is in no way medical advice. Please don&apos;t make any romantic
        decisions based on the advice given in this test.
      </Disclaimer>
    </>
  );
};
