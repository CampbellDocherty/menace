import { AnswersProvider } from './context/AnswersProvider';
import { MusicPlayer } from './music';
import Router from './router/Router';
import { Container } from './styles';

const App = () => {
  return (
    <>
      <MusicPlayer />
      <AnswersProvider>
        <Container>
          <Router />
        </Container>
      </AnswersProvider>
    </>
  );
};

export default App;
