import { useCallback, useState } from 'react';
import { AnswersProvider } from './context/Answers/AnswersProvider';
import { MusicPlayer } from './music';
import Router from './router/Router';
import { Container } from './styles';
import { Provider } from './context/Pages/Provider';
import { Restart } from './Restart';

const App = () => {
  const [testStarted, setTestStarted] = useState(false);
  const onTestStart = useCallback((start: boolean) => {
    setTestStarted(start);
  }, []);

  return (
    <>
      <MusicPlayer testStarted={testStarted} />
      <Provider>
        <AnswersProvider>
          <Container>
            <Router onTestStart={onTestStart} />
            <Restart onTestStart={onTestStart} />
          </Container>
        </AnswersProvider>
      </Provider>
    </>
  );
};

export default App;
