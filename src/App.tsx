import { useCallback, useState } from 'react';
import { AnswersProvider } from './context/AnswersProvider';
import { MusicPlayer } from './music';
import Router from './router/Router';
import { Container } from './styles';

const App = () => {
  const [testStarted, setTestStarted] = useState(false);
  const onTestStart = useCallback(() => {
    setTestStarted(!testStarted);
  }, [testStarted]);

  return (
    <>
      <MusicPlayer testStarted={testStarted} />
      <AnswersProvider>
        <Container>
          <Router onTestStart={onTestStart} />
        </Container>
      </AnswersProvider>
    </>
  );
};

export default App;
